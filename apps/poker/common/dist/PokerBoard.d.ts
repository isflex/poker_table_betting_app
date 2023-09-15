import { immerable } from 'immer';
import { PokerPlayer, PokerAction } from 'flexiness';
export declare class PokerBoard {
    [action: string]: any;
    [immerable]: boolean;
    currentlyVoting: string;
    forceShowVotes: boolean;
    players: PokerPlayer[];
    constructor();
    get _tables(): any;
    get pointOptions(): (string | number)[];
    get snapshot(): {
        source: string;
        action: string;
        currentlyVoting: string;
        players: {
            readonly id: string;
            readonly joining: boolean;
            readonly name: string | null;
            readonly vote: number | null;
            readonly observer: boolean;
            readonly tables?: readonly {
                readonly id?: string | undefined;
                readonly name?: string | undefined;
                readonly desc?: string | null | undefined;
                readonly tableId: number;
                readonly order: number;
                readonly active: boolean;
                readonly createdAt?: string | undefined;
                readonly updatedAt?: string | undefined;
                readonly __typename?: string | undefined;
            }[] | undefined;
            readonly timers?: import("./PokerTimer").PokerTimer | undefined;
            readonly joinedTables: readonly number[];
            readonly joinedTableTimers?: readonly {
                readonly id: number;
                readonly time: Date;
            }[] | undefined;
            readonly joinedTablesMap: ReadonlyMap<number, {
                readonly id: string;
                readonly tableId: number;
                readonly nextPlayerAction: Date;
            }>;
        }[];
    };
    static get ACTION_SNAPSHOT(): string;
    static get ACTION_JOIN(): string;
    static get ACTION_COMPLETE_JOIN(): string;
    static get ACTION_DEPART(): string;
    static get ACTION_VOTE(): string;
    static get ACTION_CURRENTLY_VOTING(): string;
    static get ACTION_SHOW_VOTES(): string;
    static get ACTION_CLEAR_VOTES(): string;
    get activePlayers(): {
        readonly id: string;
        readonly joining: boolean;
        readonly name: string | null;
        readonly vote: number | null;
        readonly observer: boolean;
        readonly tables?: readonly {
            readonly id?: string | undefined;
            readonly name?: string | undefined;
            readonly desc?: string | null | undefined;
            readonly tableId: number;
            readonly order: number;
            readonly active: boolean;
            readonly createdAt?: string | undefined;
            readonly updatedAt?: string | undefined;
            readonly __typename?: string | undefined;
        }[] | undefined;
        readonly timers?: import("./PokerTimer").PokerTimer | undefined;
        readonly joinedTables: readonly number[];
        readonly joinedTableTimers?: readonly {
            readonly id: number;
            readonly time: Date;
        }[] | undefined;
        readonly joinedTablesMap: ReadonlyMap<number, {
            readonly id: string;
            readonly tableId: number;
            readonly nextPlayerAction: Date;
        }>;
    }[];
    get observers(): {
        readonly id: string;
        readonly joining: boolean;
        readonly name: string | null;
        readonly vote: number | null;
        readonly observer: boolean;
        readonly tables?: readonly {
            readonly id?: string | undefined;
            readonly name?: string | undefined;
            readonly desc?: string | null | undefined;
            readonly tableId: number;
            readonly order: number;
            readonly active: boolean;
            readonly createdAt?: string | undefined;
            readonly updatedAt?: string | undefined;
            readonly __typename?: string | undefined;
        }[] | undefined;
        readonly timers?: import("./PokerTimer").PokerTimer | undefined;
        readonly joinedTables: readonly number[];
        readonly joinedTableTimers?: readonly {
            readonly id: number;
            readonly time: Date;
        }[] | undefined;
        readonly joinedTablesMap: ReadonlyMap<number, {
            readonly id: string;
            readonly tableId: number;
            readonly nextPlayerAction: Date;
        }>;
    }[];
    getPlayer(playerId: PokerPlayer['id']): {
        readonly id: string;
        readonly joining: boolean;
        readonly name: string | null;
        readonly vote: number | null;
        readonly observer: boolean;
        readonly tables?: readonly {
            readonly id?: string | undefined;
            readonly name?: string | undefined;
            readonly desc?: string | null | undefined;
            readonly tableId: number;
            readonly order: number;
            readonly active: boolean;
            readonly createdAt?: string | undefined;
            readonly updatedAt?: string | undefined;
            readonly __typename?: string | undefined;
        }[] | undefined;
        readonly timers?: import("./PokerTimer").PokerTimer | undefined;
        readonly joinedTables: readonly number[];
        readonly joinedTableTimers?: readonly {
            readonly id: number;
            readonly time: Date;
        }[] | undefined;
        readonly joinedTablesMap: ReadonlyMap<number, {
            readonly id: string;
            readonly tableId: number;
            readonly nextPlayerAction: Date;
        }>;
    } | undefined;
    isTableJoined(player: PokerPlayer, activeTableId: number): boolean;
    /**
       * Returns true if we should be showing the votes.
       *
       * @returns {boolean}
       */
    get showVotes(): boolean;
    /**
       * Returns an array of valid votes, or empty array if none.
       *
       * @returns {number[]}
       */
    get validVotes(): (number | null)[];
    /**
       * Returns the average vote value, or 0 if there are no votes.
       *
       * @returns {number}
       */
    get averageVote(): number;
    /**
       * Returns an array of objects {vote, count} sorted by vote.
       *
       * @returns {{vote: number, count: number}[]}
       */
    get voteCounts(): {
        vote: any;
        count: any;
    }[];
    processAction(action: PokerAction): unknown;
}
