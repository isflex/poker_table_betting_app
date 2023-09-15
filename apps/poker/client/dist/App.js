import React from 'react';
import PokerBoardComponent from './PokerBoardComponent.tsx';
import { PokerTablesComponent } from './pokerTables/index.ts';
const { PokerBoard, PokerTables, PokerTimer } = await import('pointingpoker-common/dist/index.js');
import JoinComponent from './JoinComponent.js';
import DebuggingComponent from './DebuggingComponent.js';
import PokerClient from './PokerClient.ts';
import { autorun } from 'mobx';
import classNames from 'classnames';
const { Button, 
// ButtonMarkup,
// Link,
View, Text, Title, 
// Rows,
// RowItem,
// Columns,
// ColumnsItem,
Stepper, StepperStep, StepperStepMarkup, TitleLevel, 
// TitleMarkup,
VariantState, styles } = await import('flex_design_system_react_ts_styled');
import './styles/poker-app.css';
import 'flex-tailwind/styles/globals.css';
export default class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.vote = (points) => {
            this.client.setPokerClass('PokerBoard');
            this.client.sendAction({
                source: 'PokerBoard',
                action: PokerBoard.ACTION_VOTE,
                // vote: typeof points === 'number' ? points : 0
                vote: points
            });
        };
        this.changeCurrentlyVoting = (currentlyVoting) => {
            this.client.setPokerClass('PokerBoard');
            this.client.sendAction({
                source: 'PokerBoard',
                action: PokerBoard.ACTION_CURRENTLY_VOTING,
                currentlyVoting
            });
        };
        this.clearVotes = () => {
            this.client.setPokerClass('PokerBoard');
            this.client.sendAction({
                source: 'PokerBoard',
                action: PokerBoard.ACTION_CLEAR_VOTES,
            });
        };
        this.showVotes = () => {
            this.client.setPokerClass('PokerBoard');
            this.client.sendAction({
                source: 'PokerBoard',
                action: PokerBoard.ACTION_SHOW_VOTES,
            });
        };
        this.completeJoin = (name, observer, activeTable) => {
            this.client.setPokerClass('PokerBoard');
            this.client.sendAction({
                source: 'PokerBoard',
                action: PokerBoard.ACTION_COMPLETE_JOIN,
                name,
                observer,
                tableData: {
                    id: activeTable.id,
                    tableId: activeTable.tableId
                },
                nextPlayerAction: this.state.timers.timeUTC
            });
            window.sessionStorage.setItem('name', name);
        };
        this.createTable = (tableName, tableDesc) => {
            this.client.setPokerClass('PokerTables');
            this.client.sendAction({
                source: 'PokerTables',
                action: PokerTables.ACTION_CREATE_TABLE,
                tableData: {
                    tableName,
                    tableDesc
                }
            });
        };
        this.deleteTable = (id, tableId) => {
            console.log(id);
            this.client.setPokerClass('PokerTables');
            this.client.sendAction({
                source: 'PokerTables',
                action: PokerTables.ACTION_DELETE_TABLE,
                tableData: {
                    id,
                    tableId
                }
            });
        };
        this.activateTable = (id, tableId) => {
            this.client.setPokerClass('PokerTables');
            this.client.sendAction({
                source: 'PokerTables',
                action: PokerTables.ACTION_ACTIVATE_TABLE,
                tableData: {
                    id,
                    tableId
                }
            });
        };
        this.scrollJoinComp = () => {
            this.joinCompRef.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
        };
        this.scrollBoardComp = () => {
            this.boardCompRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        };
        this.state = {
            messages: [],
            pendingActions: [],
            board: new PokerBoard(),
            serverBoard: new PokerBoard(),
            tables: new PokerTables([]),
            serverTables: new PokerTables([]),
            timers: new PokerTimer(),
            serverTimers: new PokerTimer(),
            clientId: null,
            disconnected: false,
        };
        this.joinCompRef = React.createRef();
        this.boardCompRef = React.createRef();
    }
    componentDidMount() {
        this.client = new PokerClient();
        autorun(() => {
            this.setState({
                messages: this.client.messages,
                pendingActions: this.client.pendingActions,
                board: this.client.board,
                serverBoard: this.client.serverBoard,
                tables: this.client.tables,
                serverTables: this.client.serverTables,
                timers: this.client.timers,
                serverTables: this.client.serverTables,
                clientId: this.client.clientId,
                disconnected: this.client.disconnected
            });
        });
    }
    componentWillUnmount() {
        this.client && this.client.close();
    }
    render() {
        const myself = this.state.board.getPlayer(this.state.clientId);
        const activeTable = this.state.tables.getActiveTable();
        const joinedTables = (myself === null || myself === void 0 ? void 0 : myself.joinedTables) || [];
        const isTableJoined = this.state.board.isTableJoined(myself, activeTable === null || activeTable === void 0 ? void 0 : activeTable.tableId);
        // console.log(this.state.timers.timeReadable)
        return (React.createElement(View, null,
            React.createElement("div", { className: 'container' },
                React.createElement("div", { className: classNames(styles.isFullwidth, styles.isFlex, styles.isJustifiedCenter, styles.isFlexDirectionColumn), style: { minHeight: '4rem', padding: '2rem 0', verticalAlign: 'center' } },
                    React.createElement(Title, { level: TitleLevel.LEVEL2, className: classNames(styles.isCentered), style: { lineHeight: 'inherit' } }, "A multiplayer websocket pointing poker app"),
                    React.createElement(Stepper, { centered: true, className: classNames(styles.isFullwidth, styles.isFlex, styles.isJustifiedCenter, styles.isHiddenMobile, styles.isPaddingless), style: { marginTop: '1.5rem' } },
                        React.createElement(StepperStep, { markup: StepperStepMarkup.DIV, done: true, label: "Jira Service Management", step: 1 }),
                        React.createElement(StepperStep, { markup: StepperStepMarkup.DIV, done: true, label: 'AWS AppSync GraphQL', step: 2 }),
                        React.createElement(StepperStep, { active: true, current: true, label: 'Multiplayer websocket', step: 3 }))),
                !this.state.disconnected && (React.createElement("div", { onClick: (e) => this.scrollJoinComp(e) },
                    React.createElement(PokerTablesComponent, { allTables: this.state.tables.allTables, 
                        // allTables={myself?.tables?.allTables || this.state.tables.allTables}
                        // allTables={myself.tables.allTables}
                        createTable: this.createTable, deleteTable: this.deleteTable, activateTable: this.activateTable }))),
                React.createElement("div", { ref: this.joinCompRef, onClick: (e) => this.scrollBoardComp(e) }, !this.state.disconnected && myself && (myself.joining || (!myself.joining && !isTableJoined)) && (React.createElement(JoinComponent, { onSubmit: this.completeJoin, defaultValue: window.sessionStorage.getItem('name') || 'New Player', activeTable: activeTable, joinedTables: joinedTables, isTableJoined: isTableJoined }))),
                React.createElement("div", { ref: this.boardCompRef }, !this.state.disconnected && myself && !myself.joining && isTableJoined && (React.createElement("div", { style: { marginTop: '2rem' } },
                    React.createElement(Title, { level: TitleLevel.LEVEL3, className: classNames(styles.isInline, styles.isMarginless), style: { lineHeight: 'inherit' } }, myself.name),
                    React.createElement(PokerBoardComponent, { board: this.state.board, myPlayer: myself, activeTable: activeTable, joinedTables: joinedTables, vote: myself.observer ? null : this.vote, changeCurrentlyVoting: this.changeCurrentlyVoting, clearVotes: this.clearVotes, showVotes: this.showVotes })))),
                this.state.disconnected && (React.createElement("div", { className: classNames(styles.isFlex, styles.isAlignContentCenter, styles.isFullwidth), style: { minHeight: '4rem', padding: '2rem 0', verticalAlign: 'center' } },
                    React.createElement(Title, { level: TitleLevel.LEVEL3, className: classNames(styles.isInline, styles.isMarginless), style: { lineHeight: 'inherit' } }, "Disconnected from Server. Please Reload the page."))),
                React.createElement(DebuggingComponent, { pendingActions: this.state.pendingActions, messages: this.state.messages })),
            React.createElement("footer", { className: 'footer' },
                React.createElement("span", null,
                    "Powered by Flexiness",
                    ' ',
                    React.createElement("div", { className: 'logoBadge' })))));
    }
}
//# sourceMappingURL=App.js.map