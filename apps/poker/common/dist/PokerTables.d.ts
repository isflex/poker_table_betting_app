import { immerable } from 'immer';
import { Table, PokerAction } from 'flexiness';
export declare const generateTableName: () => string;
export declare const defaultDesc = "Some quick example text to build on the card title and make up the bulk of the card's content.";
export declare const getBaseTableState: (limit: number) => Promise<Table[] | undefined>;
export declare const createTable: (tableName: string, tableDesc: string) => Promise<{
    __typename: "ISSUE";
    id: string;
    name: string;
    desc?: string | null | undefined;
} | undefined>;
export declare const deleteTable: (id: string) => Promise<void>;
export declare class PokerTables {
    [action: string]: any;
    [immerable]: boolean;
    tables: Table[];
    constructor(tables: Table[]);
    get allTables(): Table[];
    get initSnapshotTables(): {
        source: string;
        action: string;
        tables: Table[];
    };
    get snapshotTables(): {
        source: string;
        action: string;
        tables: Table[];
    };
    get newTableName(): string;
    static get ACTION_INIT_SNAPSHOT(): string;
    static get ACTION_SNAPSHOT(): string;
    static get ACTION_INIT_TABLES(): string;
    static get ACTION_CREATE_TABLE(): string;
    static get ACTION_DELETE_TABLE(): string;
    static get ACTION_ACTIVATE_TABLE(): string;
    getActiveTable(): Table | undefined;
    getTableByID(TableId: PokerTables['id']): Table | undefined;
    processAction(action: PokerAction): unknown;
}
