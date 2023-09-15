import React from 'react';
// import { observer } from 'mobx-react-lite'
import { PokerTablesModalCreate } from './PokerTablesModalCreate';
import classNames from 'classnames';
const { Button, 
// ButtonMarkup,
// Link,
// Input,
// InputType,
// Modal,
// ModalMarkup,
// View,
// Text,
Title, 
// Rows,
// RowItem,
// Columns,
// ColumnsItem,
TitleLevel, 
// TitleMarkup,
VariantState, styles } = await import('flex_design_system_react_ts_styled');
const PokerTablesComponent = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    const activateTable = (e) => {
        props.activateTable(e.id, e.tableId);
    };
    const deleteTable = (id, tableId) => {
        console.log(id);
        props.deleteTable(id || '', tableId);
    };
    const { allTables } = props;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: classNames(styles.isFlex, styles.isAlignContentCenter, styles.isFullwidth), style: { minHeight: '4rem', padding: '2rem 0', verticalAlign: 'center' } },
            React.createElement(Title, { level: TitleLevel.LEVEL3, className: classNames(styles.isInline, styles.isMarginless), style: { lineHeight: 'inherit' } }, "Select a table or create a new one"),
            React.createElement("div", { className: classNames('mb-2', styles.isInline), style: { padding: '0 2rem' } },
                React.createElement(Button, { variant: VariantState.PRIMARY, onClick: () => setModalShow(true) }, "Create a new table"))),
        React.createElement("div", { className: 'grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3' }, allTables.length > 0 && (React.createElement(React.Fragment, null, allTables.map(table => (React.createElement("div", { className: classNames('card', table.active && 'border-info'), style: { width: '100%' }, key: table.tableId, onClick: () => activateTable({ id: table.id, tableId: table.tableId }) },
            React.createElement("div", { className: 'card-body' },
                React.createElement(Title, { level: TitleLevel.LEVEL7, className: classNames('card-title'), style: { lineHeight: 'inherit', marginBottom: '1rem' } }, table.name),
                React.createElement("p", { className: classNames('card-text', table.active && 'text-info') }, table.desc),
                React.createElement("br", null),
                React.createElement(Button, { variant: table.active ? VariantState.SECONDARY : VariantState.TERTIARY, className: classNames(styles.isSmall), onClick: () => deleteTable(table.id, table.tableId) }, "Delete this table")))))))),
        React.createElement(PokerTablesModalCreate, { active: modalShow, setModalShow: setModalShow, createTable: props.createTable })));
};
export { PokerTablesComponent };
//# sourceMappingURL=PokerTablesComponent.js.map