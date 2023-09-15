/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
import path from 'path';
// __dirname is not defined in ES module scope
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// require.resolve for ES modules
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import * as http from 'http';
import * as https from 'https';
import express from 'express';
// const WebSocket = require('ws')
import WebSocket from 'ws';
const { optionsHTTPS } = require('@flexiness/certs');
const cors = require('cors');
const regexEscape = require('regex-escape');
const { PokerBoard, PokerTables, getBaseTableState, PokerTimer } = await import('pointingpoker-common/dist/index.js');
const port = 8080;
const app = express();
const server = `${process.env.FLEX_PROTOCOL}` === 'http://'
    ? http.createServer(app)
    : https.createServer(optionsHTTPS(), app);
const wss = new WebSocket.Server({ server, path: '/ws' });
const delay = 0;
const corsOptions = {
    ...(process.env.FLEX_MODE === 'development'
        ? { origin: '*' }
        : { origin: [
                new RegExp(`${regexEscape(process.env.FLEX_DOMAIN_NAME)}`),
                new RegExp(`${regexEscape(`.${process.env.FLEX_BASE_DOMAIN}`)}$`),
                new RegExp(`${regexEscape(process.env.FLEX_HOST_IP)}$`)
            ] }),
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'X-Requested-With', 'Authorization'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
const servePath = path.join(__dirname, '../..', 'client', 'build', 'web');
app.use(cors(corsOptions));
app.use(express.static(servePath));
app.get('/', function (req, res) {
    res.sendFile(path.join(servePath, 'index.html'));
});
let nextClientId = 1;
let board = new PokerBoard();
const _tables = await getBaseTableState(20) || [];
let tables = new PokerTables(_tables);
let timers = new PokerTimer(new Date());
function sendToAll(obj) {
    const actionSerialized = JSON.stringify(obj);
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            setTimeout(() => client.send(actionSerialized), delay);
        }
    });
}
async function processAction(action) {
    console.log(action);
    if (action.source === 'PokerBoard') {
        // @ts-expect-error
        board = board.processAction(action);
    }
    else if (action.source === 'PokerTables') {
        // @ts-expect-error
        tables = tables.processAction(action);
    }
    else if (action.source === 'PokerTimer') {
        // @ts-expect-error
        timers = timers.processAction(action);
    }
    sendToAll(action);
}
wss.on('connection', ws => {
    function send(obj) {
        setTimeout(() => ws.send(JSON.stringify(obj)), delay);
    }
    const myClientId = nextClientId++;
    console.log(`ws connected: client ${myClientId}`);
    send({
        clientId: myClientId,
        snapshot: board.snapshot,
        initSnapshotTables: tables.initSnapshotTables
    });
    processAction({ id: myClientId, source: 'PokerBoard', action: PokerBoard.ACTION_JOIN });
    // processAction({ id: myClientId, source: 'PokerTables', action: PokerTables.ACTION_INIT_TABLES })
    ws.on('message', (m) => {
        console.log(`received: ${m}`);
        const parsed = JSON.parse(m);
        if (typeof parsed === 'object') {
            send({
                ack: parsed.seq
            });
            parsed.id = myClientId; // not strictly needed but this is a "security" measure
            delete parsed.seq;
            processAction(parsed);
        }
    });
    ws.on('ping', () => {
        console.log('received a ping!');
    });
    ws.on('pong', () => {
        console.log('received a pong!');
    });
    ws.on('close', () => {
        console.log(`ws closed; client ${myClientId} departing`);
        processAction({
            id: myClientId,
            source: 'PokerBoard',
            action: PokerBoard.ACTION_DEPART
        });
    });
});
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
//# sourceMappingURL=_index.js.map