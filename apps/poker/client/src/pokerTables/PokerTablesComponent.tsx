import React from 'react'
// import { observer } from 'mobx-react-lite'
import { PokerTablesModalCreate } from './PokerTablesModalCreate'
import {
  Table,
  PokerTablesComponentProps,
  PokerClickEvent
} from 'flexiness'

import classNames from 'classnames'
const {
  Button,
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
  VariantState,
  styles
} = await import('flex_design_system_react_ts_styled')

// import { onCreateIssue } from 'pointingpoker-api/components/index.js'

const PokerTablesComponent: React.FC<PokerTablesComponentProps> = (props) => {
  const [modalShow, setModalShow] = React.useState<boolean>(false)

  const activateTable = (e: PokerClickEvent) => {
    props.activateTable(e.id, e.tableId)
  }
  
  const deleteTable = (id: Table['id'], tableId: Table['tableId']) => {
    console.log(id)
    props.deleteTable(id || '', tableId)
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
        <div className={classNames('mb-2', styles.isInline)}
          style={{ padding: '0 2rem' }}>
          <Button variant={VariantState.PRIMARY} onClick={() => setModalShow(true)}>
            Create a new table
          </Button>
        </div>
      </div>

      <div className='grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3'>
        {allTables.length > 0 && (
          <>
            {
              allTables.map(table => (
                <div className={classNames(
                    'card',
                    table.active && 'border-info',
                    // table.active && 'bg-warning'
                  )}
                  style={{width: '100%' }} key={table.tableId}
                  onClick={() => activateTable({ id: table.id!, tableId: table.tableId })}>
                  <div className='card-body'>
                    <Title level={TitleLevel.LEVEL7} className={classNames('card-title' )}
                      style={{ lineHeight: 'inherit', marginBottom: '1rem' }}>
                       {table.name}
                    </Title>
                    <p className={classNames('card-text', table.active && 'text-info')}>{table.desc}</p>
                    <br/>
                    <Button variant={table.active ? VariantState.SECONDARY : VariantState.TERTIARY} className={classNames(styles.isSmall)}
                      onClick={() => deleteTable(table.id!, table.tableId)}>
                        Delete this table
                    </Button>
                  </div>
                </div>
              ))
            }
          </>
        )}
      </div>
      <PokerTablesModalCreate active={modalShow} setModalShow={setModalShow} createTable={props.createTable} />
    </>
  )
}

export { PokerTablesComponent }