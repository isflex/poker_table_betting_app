import React from 'react';
const { Button, 
// ButtonMarkup,
// Link,
View, 
// Text,
Title, 
// Rows,
// RowItem,
// Columns,
// ColumnsItem,
TitleLevel, 
// TitleMarkup,
VariantState, styles } = await import('flex_design_system_react_ts_styled');
const PokerBoardComponent = (props) => {
    const { pointOptions, currentlyVoting, activePlayers, observers, showVotes } = props.board;
    function changeCurrentlyVoting(e) {
        props.changeCurrentlyVoting(e.target.value);
    }
    const results = showVotes && {
        average: props.board.averageVote,
        voteCounts: props.board.voteCounts
    };
    return (React.createElement("div", null,
        React.createElement(Title, { level: TitleLevel.LEVEL6, style: { lineHeight: 'inherit' } }, "Currently Voting"),
        React.createElement("form", { action: '#', className: 'mb-2' },
            React.createElement("div", { className: 'form-group' },
                React.createElement("textarea", { className: 'form-control', value: currentlyVoting, onChange: changeCurrentlyVoting })),
            React.createElement("div", { className: 'grid gap-4 grid-rows-1 grid-cols-2', style: { maxWidth: '30vw' } },
                React.createElement(Button, { variant: VariantState.SECONDARY, onClick: props.clearVotes }, "Clear Votes"),
                React.createElement(Button, { variant: VariantState.SECONDARY, onClick: props.showVotes }, "Show Votes"))),
        props.vote &&
            React.createElement(React.Fragment, null,
                React.createElement(Title, { level: TitleLevel.LEVEL6, style: { lineHeight: 'inherit' } }, "Vote:"),
                React.createElement("div", { className: 'voteOptions mb-3' }, pointOptions.map(it => (React.createElement("button", { className: `btn btn-primary mr-2${it === props.myPlayer.vote ? ' active' : ''}`, key: it, 
                    // @ts-expect-error
                    onClick: () => props.vote(it) }, it))))),
        React.createElement("div", { className: 'row' },
            React.createElement("div", { className: 'col' },
                React.createElement(Title, { level: TitleLevel.LEVEL6, style: { lineHeight: 'inherit' } }, "Players"),
                React.createElement("table", { className: 'table table-responsive' },
                    React.createElement("thead", null,
                        React.createElement("tr", null,
                            React.createElement("th", null, "Name"),
                            React.createElement("th", null, "Vote"))),
                    React.createElement("tbody", null,
                        React.createElement(React.Fragment, null, activePlayers.filter(player => { var _a; return props.board.isTableJoined(player, (_a = props.activeTable) === null || _a === void 0 ? void 0 : _a.tableId); }).map(player => React.createElement("tr", { key: player.id },
                            React.createElement("td", null, player.joining ? 'Incoming player...' : player.name),
                            React.createElement("td", null, showVotes || player === props.myPlayer
                                ? player.vote
                                : (player.vote !== null ? '...' : ''))))))),
                !!observers.length &&
                    React.createElement(React.Fragment, null,
                        React.createElement("h3", null, "Observers"),
                        React.createElement("p", null, observers.map(it => it.name).join(', ')))),
            React.createElement("div", { className: 'col' }, results &&
                React.createElement(React.Fragment, null,
                    React.createElement("h3", null, "Results"),
                    React.createElement("p", null,
                        "Average: ",
                        results.average.toFixed(2)),
                    React.createElement("table", { className: 'table table-responsive' },
                        React.createElement("thead", null,
                            React.createElement("tr", null,
                                React.createElement("th", null, "Vote"),
                                React.createElement("th", null, "Count"))),
                        React.createElement("tbody", null, results.voteCounts.map(it => (React.createElement("tr", { key: it.vote },
                            React.createElement("td", null, it.vote),
                            React.createElement("td", null, it.count)))))))))));
};
export default PokerBoardComponent;
//# sourceMappingURL=PokerBoardComponent.js.map