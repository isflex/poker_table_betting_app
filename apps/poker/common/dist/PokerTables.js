var _a;
import { immerable, produce } from 'immer';
import { uniqueNamesGenerator, starWars, adjectives, animals, colors } from 'unique-names-generator';
import { onListIssue, onCreateIssue, onDeleteIssue, } from 'pointingpoker-api/dist/index.js';
export const generateTableName = () => {
    const i = Math.floor(Math.random() * Math.floor(2));
    const nouns = [animals, starWars];
    const name = uniqueNamesGenerator({
        dictionaries: [adjectives, colors, nouns[i],],
        length: Math.floor(Math.random() * Math.floor(4)),
        separator: ' ',
        style: 'capital'
    });
    return `${name} Table`;
};
export const defaultDesc = "Some quick example text to build on the card title and make up the bulk of the card's content.";
let baseTableState = [
    {
        id: '',
        tableId: 1,
        name: generateTableName(),
        desc: defaultDesc,
        order: 9999,
        active: false,
        createdAt: '',
        updatedAt: '',
        __typename: 'ISSUE'
    },
    {
        id: '',
        tableId: 2,
        name: generateTableName(),
        desc: defaultDesc,
        order: 9999,
        active: false,
        createdAt: '',
        updatedAt: '',
        __typename: 'ISSUE'
    },
    {
        id: '',
        tableId: 3,
        name: generateTableName(),
        desc: defaultDesc,
        order: 9999,
        active: false,
        createdAt: '',
        updatedAt: '',
        __typename: 'ISSUE'
    },
    {
        id: '',
        tableId: 4,
        name: generateTableName(),
        desc: defaultDesc,
        order: 9999,
        active: false,
        createdAt: '',
        updatedAt: '',
        __typename: "ISSUE"
    },
];
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// https://stackoverflow.com/questions/43431550/async-await-class-constructor
// https://dev.to/somedood/the-proper-way-to-write-async-constructors-in-javascript-1o8c
export const getBaseTableState = async (limit) => {
    try {
        const _items = await onListIssue({ limit: limit }) || [];
        if (_items !== null) {
            const items = _items.map((item, index) => {
                return { ...item, tableId: index, order: 9999, active: false };
            });
            return items;
        }
        // await sleep(500)
        // return baseTableState
    }
    catch (e) {
        console.log(e);
    }
};
export const createTable = async (tableName, tableDesc) => {
    try {
        const newIssue = { name: tableName, desc: tableDesc };
        const res = await onCreateIssue(newIssue);
        if (res !== null) {
            console.log(res);
            return res;
        }
    }
    catch (e) {
        console.log(e);
    }
};
export const deleteTable = async (id) => {
    try {
        const _id = { id };
        await onDeleteIssue(_id);
    }
    catch (e) {
        console.log(e);
    }
};
const actions = {
    initSnapshotTables: produce((draft, action) => {
        console.log('initSnapshotTables', action.tables);
        draft.tables = action.tables;
        draft.tables.map(table => {
            table.active = false;
        });
    }),
    snapshotTables: produce((draft, action) => {
        draft.tables = action.tables;
    }),
    initTables: produce((draft) => {
        getBaseTableState(20)
            .then((tables) => {
            if (tables !== null && tables !== undefined)
                draft.tables = tables;
        });
    }),
    createTable: produce((draft, action) => {
        // const newIssue: CreateISSUEInput = { name: action.tableName, desc: action.tableDesc}
        // onCreateIssue(newIssue)
        draft.tables.push({
            id: action.tableData.id,
            tableId: draft.tables.length !== 0 ? (draft.tables[(draft === null || draft === void 0 ? void 0 : draft.tables.length) - 1].tableId + 1) : 0,
            name: action.tableData.tableName,
            desc: action.tableData.tableDesc,
            order: 0,
            active: false,
            createdAt: action.tableData.createdAt,
            updatedAt: action.tableData.updatedAt,
            __typename: "ISSUE"
        });
    }),
    deleteTable: produce((draft, action) => {
        // if (action.id !== '') onDeleteIssue({id: action.tableData.id})
        const index = draft.tables.findIndex(table => table.tableId === (action.tableData.tableId));
        if (index !== -1)
            draft.tables.splice(index, 1);
    }),
    activateTable: produce((draft, action) => {
        draft.tables.map(table => {
            var _b;
            table.active = (_b = (table.tableId === action.tableData.tableId)) !== null && _b !== void 0 ? _b : false;
        });
    }),
};
export class PokerTables {
    constructor(tables) {
        this[_a] = true;
        this.tables = [];
        if (tables)
            this.tables = tables;
        // console.log('class PokerTables constructor',this.tables)
    }
    get allTables() {
        return this.tables;
    }
    get initSnapshotTables() {
        // console.log('initSnapshotTables',this.tables)
        return {
            source: 'PokerTables',
            action: PokerTables.ACTION_INIT_SNAPSHOT,
            tables: this.tables
        };
    }
    get snapshotTables() {
        // console.log('snapshotTables',this.tables)
        return {
            source: 'PokerTables',
            action: PokerTables.ACTION_SNAPSHOT,
            tables: this.tables
        };
    }
    get newTableName() {
        return generateTableName();
    }
    static get ACTION_INIT_SNAPSHOT() {
        return 'initSnapshotTables';
    }
    static get ACTION_SNAPSHOT() {
        return 'snapshotTables';
    }
    static get ACTION_INIT_TABLES() {
        return 'initTables';
    }
    static get ACTION_CREATE_TABLE() {
        return 'createTable';
    }
    static get ACTION_DELETE_TABLE() {
        return 'deleteTable';
    }
    static get ACTION_ACTIVATE_TABLE() {
        return 'activateTable';
    }
    getActiveTable() {
        return this.tables.find(it => it.active === true);
    }
    getTableByID(TableId) {
        return this.tables.find(it => it.id === TableId);
    }
    processAction(action) {
        if (!action || !action.action)
            throw new Error('action is undefined');
        // @ts-expect-error
        const producer = actions[action.action];
        if (!producer)
            throw new Error(`unknown action ${action.action}`);
        // @ts-expect-error
        return producer(this, action);
    }
}
_a = immerable;
//# sourceMappingURL=PokerTables.js.map