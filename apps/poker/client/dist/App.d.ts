export default class App extends React.Component<any, any, any> {
    constructor(props: any, context: any);
    state: {
        messages: never[];
        pendingActions: never[];
        board: import("pointingpoker-common").PokerBoard;
        serverBoard: import("pointingpoker-common").PokerBoard;
        tables: import("pointingpoker-common").PokerTables;
        serverTables: import("pointingpoker-common").PokerTables;
        timers: import("pointingpoker-common").PokerTimer;
        serverTimers: import("pointingpoker-common").PokerTimer;
        clientId: null;
        disconnected: boolean;
    };
    joinCompRef: React.RefObject<any>;
    boardCompRef: React.RefObject<any>;
    componentDidMount(): void;
    client: any;
    vote: (points: any) => void;
    changeCurrentlyVoting: (currentlyVoting: any) => void;
    clearVotes: () => void;
    showVotes: () => void;
    componentWillUnmount(): void;
    completeJoin: (name: any, observer: any, activeTable: any) => void;
    createTable: (tableName: any, tableDesc: any) => void;
    deleteTable: (id: any, tableId: any) => void;
    activateTable: (id: any, tableId: any) => void;
    scrollJoinComp: () => void;
    scrollBoardComp: () => void;
    render(): React.JSX.Element;
}
import React from "react";
