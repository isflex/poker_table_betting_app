import React from 'react'
// import { observer } from 'mobx-react-lite'
const { generateTableName, defaultDesc } = await import('pointingpoker-common/dist/index.js')
import {
  PokerTablesModalCreateProps
} from 'flexiness'

import classNames from 'classnames'
const {
  Button,
  // ButtonMarkup,
  // Link,
  Input,
  InputType,
  Modal,
  // View,
  // Text,
  Textarea,
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

const PokerTablesModalCreate: React.FC<PokerTablesModalCreateProps> = (props) => {
  const [tableName, setTableName] = React.useState<string>(generateTableName())
  const [tableDesc, setTableDesc] = React.useState<string>(defaultDesc)

  // function changeTableDesc(e: React.ChangeEvent<HTMLTextAreaElement>) {
  //   setTableDesc(e.target.value)
  // }

  const ModalMarkUp = ()  => {
    return (
      <div className={classNames(styles.isFlex, styles.isFlexDirectionColumn, styles.isAlignContentCenter, styles.isFullwidth)}
        style={{ minHeight: '4rem', padding: '2rem 0', verticalAlign: 'center' }}>
        <Title level={TitleLevel.LEVEL3} className={classNames(styles.isInline )}
          style={{ lineHeight: 'inherit' }}>
          Create a new table
        </Title>
        <div className={classNames('mb-2', styles.isInline)}
          style={{ padding: '0 2rem' }}>
          <Input
              type={InputType.TEXT}
              name='tableName'
              value={tableName}
              onChange={(e) => {
                setTableName(e.inputValue)
              }}
              placeholder='Enter Table Name'
              className='col-span-2'
            />
          {/* <textarea className='form-control' value={tableDesc} onChange={changeTableDesc} style={{ minHeight: '10rem' }}/> */}
          <Textarea
            defaultValue={defaultDesc}
            placeholder='Description'
            onChange={(e) => {
              setTableDesc(e.textareaValue)
            }} />
          <Button variant={VariantState.PRIMARY} onClick={() => {
            props.createTable(tableName, tableDesc)
            props.setModalShow(false)
          }}>
            Validate
          </Button>
        </div>
      </div>
    )
  }

  return (
    <Modal
      // triggerMarkup={ModalMarkup.A}
      // triggerContent='Open modal'
      // triggerClassNames='button is-primary'
      active={props.active}
      title='title modal'
      content='Modal content description 1'
      ctaContent='Action'
      // eslint-disable-next-line no-alert
      // ctaOnClick={() => alert('Click on cta')}
      // onOpen={() => alert('open modal')}
      onClose={() => props.setModalShow(false)}
    >
      {ModalMarkUp()}
    </Modal>
  )
}

export { PokerTablesModalCreate }