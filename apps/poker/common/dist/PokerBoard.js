var _a;
import { produce, immerable, castDraft, enableMapSet } from 'immer';
enableMapSet();
const pointOptions = [
    0, 0.5, 1, 2, 3, 5, 8, 13, 20, '?'
];
const actions = {
    snapshot: produce((draft, action) => {
        draft.currentlyVoting = action.currentlyVoting;
        draft.players = castDraft(action.players);
    }),
    join: produce((draft, action) => {
        draft.players.push({
            id: action.id,
            joining: true,
            name: null,
            vote: null,
            observer: false,
            joinedTables: [],
            joinedTableTimers: [],
            joinedTablesMap: new Map()
        });
        // const newTable = {...new PokerTables()}.tables
        // draft.players.push({
        //   id: action.id,
        //   joining: true,
        //   name: null,
        //   vote: null,
        //   observer: false,
        //   tables: {...newTable},
        //   timers: new PokerTimer(new Date()),
        //   joinedTables: [],
        //   joinedTableTimers: [],
        //   joinedTablesMap: new Map()
        // })
    }),
    completeJoin: produce((draft, action) => {
        const player = draft.players.find(it => it.id === action.id);
        if (player) {
            player.name = action.name;
            player.observer = action.observer;
            player.joining = false;
            player.joinedTables = [...player.joinedTables, action.tableData.tableId];
            player.joinedTablesMap = new Map([
                ...player.joinedTablesMap,
                ...player.joinedTablesMap.set(action.tableData.tableId, {
                    id: action.tableData.id,
                    tableId: action.tableData.tableId,
                    nextPlayerAction: action.nextPlayerAction
                })
            ]);
        }
    }),
    depart: produce((draft, action) => {
        const playerIdx = draft.players.findIndex(it => it.id === action.id);
        if (playerIdx >= 0) {
            draft.players.splice(playerIdx, 1);
        }
    }),
    vote: produce((draft, action) => {
        const player = draft.players
            .filter((it) => it !== null)
            .find(it => it.id === action.id);
        if (player)
            player.vote = action.vote;
    }),
    currentlyVoting: produce((draft, action) => {
        draft.currentlyVoting = action.currentlyVoting;
    }),
    showVotes: produce((draft) => {
        draft.forceShowVotes = true;
    }),
    clearVotes: produce((draft) => {
        draft.currentlyVoting = '';
        draft.forceShowVotes = false;
        draft.players.forEach(it => it.vote = null);
    })
};
export class PokerBoard {
    // tables: Table[] = []
    constructor() {
        this[_a] = true;
        this.currentlyVoting = '';
        this.forceShowVotes = false;
        this.players = [];
        // super()
        // this[immerable] = true
        // this.tables = new PokerTables().tables
    }
    get _tables() {
        return this.tables;
    }
    get pointOptions() {
        return pointOptions;
    }
    get snapshot() {
        return {
            source: 'PokerBoard',
            action: PokerBoard.ACTION_SNAPSHOT,
            currentlyVoting: this.currentlyVoting,
            players: this.players,
        };
    }
    static get ACTION_SNAPSHOT() {
        return 'snapshot';
    }
    static get ACTION_JOIN() {
        return 'join';
    }
    static get ACTION_COMPLETE_JOIN() {
        return 'completeJoin';
    }
    static get ACTION_DEPART() {
        return 'depart';
    }
    static get ACTION_VOTE() {
        return 'vote';
    }
    static get ACTION_CURRENTLY_VOTING() {
        return 'currentlyVoting';
    }
    static get ACTION_SHOW_VOTES() {
        return 'showVotes';
    }
    static get ACTION_CLEAR_VOTES() {
        return 'clearVotes';
    }
    // static get ACTION_HAS_JOINED_TABLE_MAP() {
    //   return 'verifyIsTableMapJoined'
    // }
    get activePlayers() {
        return this.players.filter(it => !it.joining && !it.observer);
    }
    get observers() {
        return this.players.filter(it => it.observer);
    }
    getPlayer(playerId) {
        return this.players.find(it => it.id === playerId);
    }
    // isTableJoined(joinedTables: number[], activeTableId: number) {
    //   return joinedTables.includes(activeTableId)
    // }
    isTableJoined(player, activeTableId) {
        const joinedTables = castDraft(player === null || player === void 0 ? void 0 : player.joinedTables) || [];
        return joinedTables.includes(activeTableId);
    }
    // isTableJoined(player: PokerPlayer, activeTableId: number) {
    //   const joinedTablesMap = player?.joinedTablesMap
    //   if (joinedTablesMap instanceof Map) return joinedTablesMap.has(activeTableId)
    //   return false
    // }
    /**
       * Returns true if we should be showing the votes.
       *
       * @returns {boolean}
       */
    get showVotes() {
        return this.forceShowVotes ||
            this.players.every(it => it.joining || it.observer || (it.vote !== undefined && it.vote !== null));
    }
    /**
       * Returns an array of valid votes, or empty array if none.
       *
       * @returns {number[]}
       */
    get validVotes() {
        return this.players
            .filter(it => typeof it.vote === 'number' && !it.observer)
            .map(it => it.vote);
    }
    /**
       * Returns the average vote value, or 0 if there are no votes.
       *
       * @returns {number}
       */
    get averageVote() {
        const allVotes = this.validVotes.filter((vote) => vote !== null);
        if (allVotes.length === 0)
            return 0;
        const sumVotes = allVotes.reduce((a, b) => a + b);
        return sumVotes / allVotes.length;
    }
    /**
       * Returns an array of objects {vote, count} sorted by vote.
       *
       * @returns {{vote: number, count: number}[]}
       */
    get voteCounts() {
        const allVotes = this.validVotes;
        const map = new Map();
        for (const vote of allVotes) {
            map.set(vote, (map.get(vote) || 0) + 1);
        }
        const ret = [];
        for (const entry of map) {
            ret.push({ vote: entry[0], count: entry[1] });
        }
        ret.sort((a, b) => b.count - a.count);
        return ret;
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
//# sourceMappingURL=PokerBoard.js.map