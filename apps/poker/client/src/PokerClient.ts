import { decorate, observable } from 'mobx'
// import { PokerBoard } from 'pointingpoker-common'
const { PokerBoard, PokerTables, PokerTimer } = await import('pointingpoker-common/dist/index.js')
// import * as WebSocket from 'ws'
import {
  Window,
  Table,
  IPokerMsg,
  PokerAction
} from 'flexiness'

declare let window: Window

/**
 * Provides a client to the poker backend.
 */
export default class PokerClient {
  nextSeq = 1

  clientId: number | null = null

  pokerClass: null | string = null

  board: any = new PokerBoard()
  // board: any = new PokerTables().board

  serverBoard = this.board

  messages: (IPokerMsg | string)[] = []

  disconnected: boolean = false

  pendingActions: PokerAction[] = []

  // tables: Table[] = []
  tables: any = new PokerTables()

  serverTables = this.tables

  timers: any = new PokerTimer(new Date())

  serverTimers = this.timers

  ws

  /**
	 * Constructs a new poker board client.
	 *
	 * @param {string=} url
	 *   if provided, the websocket URL to connect with. If not provided, forms a URL based on window.location
	 *   assuming the websocket is hosted at relative URL "ws", but with ws (if http) and wss (if https) protocol.
	 *   In the development environment we assume port 8080, else we use port from window.location (if any)
	 */
  constructor(url: string) {
    if (!url) {
      const parsedUrl = new URL(window.location)
      parsedUrl.protocol = parsedUrl.protocol === 'http:' ? 'ws' : 'wss'
      if (process.env.NODE_ENV === 'development')
        parsedUrl.port = '8080'
      url = new URL('./ws', parsedUrl).href
    }
    this.ws = new WebSocket(url)

    this.ws.addEventListener('open', () => {
      this.messages.push('Connection opened')
    })

    this.ws.addEventListener('message', m => {
      console.log(m.data)
      this.messages.push(m.data)
      const message = JSON.parse(m.data)

      if (message.ack !== undefined) {
        // Remove all acknowledged actions
        this.pendingActions = this.pendingActions.filter(it => it.seq > message.ack)

      } else if (!this.clientId && message.clientId) { // initial message
          this.clientId = message.clientId
          this.updateBoardFromServer(message.snapshot)
          this.updateTableFromServer(message.snapshotTables)
      } else {
        if (this.pokerClass === 'PokerBoard' || !this.pokerClass) {
          this.updateBoardFromServer(message)
        } else if (this.pokerClass === 'PokerTables') {
          this.updateTableFromServer(message)
        } else if (this.pokerClass === 'PokerTimer') {
          this.updateTableFromServer(message)
        }
      }
    })

    this.ws.addEventListener('close', () => {
      this.messages.push('Connection closed')
      this.disconnected = true
    })
  }

  close() {
    this.ws.close()
  }

  /**
	 * Sets the pokerClass to route processAction to the correct endpoint.
	 */
  setPokerClass(newPokerClass: string) {
    this.pokerClass = newPokerClass
  }

  /**
	 * Sends an action to the server, tagging the client ID and sequence to the message.
	 */
  sendAction(msg: IPokerMsg) {
    // We should improve this experience at some point...
    if (this.clientId === null)
      throw new Error('Not yet connected')

    const action: PokerAction = {
      ...msg,
      id: this.clientId,
      seq: this.nextSeq++,
    }
    this.pokerClass = action.source
    this.pendingActions.push(action)
    if (this.pokerClass === 'PokerBoard') {
      this.board = this.board.processAction(action)
    } else if (this.pokerClass === 'PokerTables') {
      this.tables = this.tables.processAction(action)
    } else if (this.pokerClass === 'PokerTimer') {
      this.timers = this.timers.processAction(action)
    }
    this.ws.send(JSON.stringify(action))
  }

  updateBoardFromServer(action: PokerAction) {
    this.serverBoard = this.serverBoard.processAction(action)

    // rebuild our local board with any pending actions since server's state
    let board = this.serverBoard
    this.pendingActions.forEach(a => {
      board = board.processAction(a)
    })

    this.board = board
  }

  updateTableFromServer(action: PokerAction) {
    this.serverTables = this.serverTables.processAction(action)

    // rebuild our local board with any pending actions since server's state
    let tables = this.serverTables
    this.pendingActions.forEach(a => {
      tables = tables.processAction(a)
    })

    this.tables = tables
  }

  updateTimerFromServer(action: PokerAction) {
    this.serverTimers = this.serverTimers.processAction(action)

    // rebuild our local board with any pending actions since server's state
    let timers = this.serverTimers
    this.pendingActions.forEach(a => {
      timers = timers.processAction(a)
    })

    this.timers = timers
  }
}

decorate(PokerClient, {
  clientId: observable,
  pokerClass: observable,
  board: observable.ref,
  serverBoard: observable.ref,
  tables: observable.ref,
  serverTables: observable.ref,
  timers: observable.ref,
  serverTimers: observable.ref,
  messages: observable,
  disconnected: observable,
  pendingActions: observable.shallow
})