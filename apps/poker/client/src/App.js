import React from 'react'
import PokerBoardComponent from './PokerBoardComponent.tsx'
import { PokerTablesComponent } from './pokerTables/index.ts'
const { PokerBoard, PokerTables, PokerTimer } = await import('pointingpoker-common/dist/index.js')
import JoinComponent from './JoinComponent.js'
import DebuggingComponent from './DebuggingComponent.js'
import PokerClient from './PokerClient.ts'
import { autorun } from 'mobx'

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

import 'flex-tailwind/styles/globals.css'

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context)

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
    }
  }

  componentDidMount() {
    this.client = new PokerClient()

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
      })
    })

  }

  vote = (points) => {
    this.client.setPokerClass('PokerBoard')
    this.client.sendAction({
      source: 'PokerBoard',
      action: PokerBoard.ACTION_VOTE,
      // vote: typeof points === 'number' ? points : 0
      vote: points
    })
  }

  changeCurrentlyVoting = (currentlyVoting) => {
    this.client.setPokerClass('PokerBoard')
    this.client.sendAction({
      source: 'PokerBoard',
      action: PokerBoard.ACTION_CURRENTLY_VOTING,
      currentlyVoting
    })
  }

  clearVotes = () => {
    this.client.setPokerClass('PokerBoard')
    this.client.sendAction({
      source: 'PokerBoard',
      action: PokerBoard.ACTION_CLEAR_VOTES,
    })
  }

  showVotes = () => {
    this.client.setPokerClass('PokerBoard')
    this.client.sendAction({
      source: 'PokerBoard',
      action: PokerBoard.ACTION_SHOW_VOTES,
    })
  }

  componentWillUnmount() {
    this.client && this.client.close()
  }

  completeJoin = (name, observer, activeTable) => {
    this.client.setPokerClass('PokerBoard')
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
    })
    window.sessionStorage.setItem('name', name)
  }

  createTable = (tableName, tableDesc) => {
    this.client.setPokerClass('PokerTables')
    this.client.sendAction({
      source: 'PokerTables',
      action: PokerTables.ACTION_CREATE_TABLE,
      tableData: {
        tableName,
        tableDesc
      }
    })
  }
    
  deleteTable = (id, tableId) => {
    console.log(id)
    this.client.setPokerClass('PokerTables')
    this.client.sendAction({
      source: 'PokerTables',
      action: PokerTables.ACTION_DELETE_TABLE,
      tableData: {
        id,
        tableId
      }
    })
  }
  
  activateTable = (id, tableId) => {
    this.client.setPokerClass('PokerTables')
    this.client.sendAction({
      source: 'PokerTables',
      action: PokerTables.ACTION_ACTIVATE_TABLE,
      tableData: {
        id,
        tableId
      }
    })
  }

  render() {
    const myself = this.state.board.getPlayer(this.state.clientId)
    const activeTable = this.state.tables.getActiveTable()
    const joinedTables = myself?.joinedTables || []
    const isTableJoined = this.state.board.isTableJoined(myself, activeTable?.tableId)

    // console.log(this.state.timers.timeReadable)

    return (
      <View>
        <div className='container'>
          {
            !this.state.disconnected && (
            <div>
              <PokerTablesComponent
                allTables={this.state.tables.allTables}
                // allTables={myself?.tables?.allTables || this.state.tables.allTables}
                // allTables={myself.tables.allTables}
                createTable={this.createTable}
                deleteTable={this.deleteTable}
                activateTable={this.activateTable}
              />
            </div>
          )}
          {
            !this.state.disconnected && myself && (myself.joining || (!myself.joining && !isTableJoined)) && (
              <JoinComponent 
                onSubmit={this.completeJoin}
                defaultValue={window.sessionStorage.getItem('name') || 'New Player'}
                activeTable={activeTable}
                joinedTables={joinedTables}
                isTableJoined={isTableJoined} />
          )}
          {
            !this.state.disconnected && myself && !myself.joining && isTableJoined && (
              <div style={{ marginTop: '2rem' }}>
                <Title level={TitleLevel.LEVEL3} className={classNames(styles.isInline, styles.isMarginless )}
                  style={{ lineHeight: 'inherit' }}>
                  {myself.name}
                </Title>
                <PokerBoardComponent board={this.state.board}
                  myPlayer={myself}
                  activeTable={activeTable}
                  joinedTables={joinedTables}
                  vote={myself.observer ? null : this.vote}
                  changeCurrentlyVoting={this.changeCurrentlyVoting}
                  clearVotes={this.clearVotes}
                  showVotes={this.showVotes}
                />
              </div>
          )}
          {
            this.state.disconnected && (
              <div>
                <div className={classNames(styles.isFlex, styles.isAlignContentCenter, styles.isFullwidth)}
                  style={{ minHeight: '4rem', padding: '2rem 0', verticalAlign: 'center' }}>
                  <Title level={TitleLevel.LEVEL3} className={classNames(styles.isInline, styles.isMarginless )}
                    style={{ lineHeight: 'inherit' }}>
                    Disconnected from Server. Please Reload the page.
                  </Title>
                </div>
              </div>
          )}
          <DebuggingComponent pendingActions={this.state.pendingActions}
            messages={this.state.messages}/>
        </div>
      </View>
    )
  }
}
