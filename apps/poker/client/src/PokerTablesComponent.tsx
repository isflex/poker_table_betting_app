import React from 'react'
// import { observer } from 'mobx-react-lite'
import {
  PokerTablesComponentProps,
  PokerClickEvent
} from 'flexiness'

import classNames from 'classnames'
const {
  Button,
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
  VariantState,
  styles
} = await import('flex_design_system_react_ts_styled')

// import { onCreateIssue } from 'pointingpoker-api/components/index.js'

const PokerTablesComponent: React.FC<PokerTablesComponentProps> = (props) => {

  const activateTable = (e: PokerClickEvent) => {
    props.activateTable(e)
  }
  
  const deleteTable = (e: PokerClickEvent) => {
    props.deleteTable(e)
  }

  const { allTables } = props
  return (
    <>
      <div className={classNames(styles.isFlex, styles.isAlignContentCenter, styles.isFullwidth)}
        style={{ minHeight: '4rem', padding: '2rem 0', verticalAlign: 'center' }}>
        <Title level={TitleLevel.LEVEL3} className={classNames(styles.isInline, styles.isMarginless )}
          style={{ lineHeight: 'inherit' }}>
          Select a table or create a new one
        </Title>
        <form action='#' className={classNames('mb-2', styles.isInline)}
          style={{ padding: '0 2rem' }}>
          <Button variant={VariantState.PRIMARY} onClick={props.createTable}>
            Create a new table
          </Button>
        </form>
      </div>

      <div className='grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3'>
        {allTables.length > 0 && (
          <>
            {
              allTables.map(table => (
                <div className='card' style={{width: '100%' }} key={table.tableId}
                  onClick={() => activateTable({tableId: table.tableId })}>
                  <div className='card-body'>
                    <Title level={TitleLevel.LEVEL7} className={classNames('card-title' )}
                      style={{ lineHeight: 'inherit', marginBottom: '1rem' }}>
                       {table.name}
                    </Title>
                    <p className='card-text'>{table.desc}</p>
                    <br/>
                    <Button variant={table.active ? VariantState.SECONDARY : VariantState.TERTIARY} className={classNames(styles.isSmall)}
                      onClick={() => deleteTable({ tableId: table.tableId })}>
                        Delete this table
                    </Button>
                  </div>
                </div>
              ))
            }
          </>
        )}
      </div>

      {/* <onCreateIssue onCreateTodo={onCreateIssue} /> */}
    </>
  )
}

export { PokerTablesComponent }