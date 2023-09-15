import { IPokerMsg, PokerAction } from 'flexiness';
/**
 * Provides a client to the poker backend.
 */
export default class PokerClient {
    nextSeq: number;
    clientId: number | null;
    pokerClass: null | string;
    board: any;
    serverBoard: any;
    messages: (IPokerMsg | string)[];
    disconnected: boolean;
    pendingActions: PokerAction[];
    tables: any;
    serverTables: any;
    timers: any;
    serverTimers: any;
    ws: WebSocket;
    /**
       * Constructs a new poker board client.
       *
       * @param {string=} url
       *   if provided, the websocket URL to connect with. If not provided, forms a URL based on window.location
       *   assuming the websocket is hosted at relative URL "ws", but with ws (if http) and wss (if https) protocol.
       *   In the development environment we assume port 8080, else we use port from window.location (if any)
       */
    constructor(url: string);
    close(): void;
    /**
       * Sets the pokerClass to route processAction to correct class endpoint.
       */
    setPokerClass(newPokerClass: string): void;
    /**
       * Sends an action to the server, tagging the client ID and sequence to the message.
       */
    sendAction(msg: IPokerMsg): void;
    updateBoardFromServer(action: PokerAction): void;
    updateTableFromServer: (action: PokerAction) => Promise<void>;
    updateTimerFromServer(action: PokerAction): void;
}
