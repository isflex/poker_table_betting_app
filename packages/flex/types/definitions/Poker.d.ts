import { Immutable, castDraft } from 'immer'
import { PokerBoard, PokerTables, PokerTimer } from 'pointingpoker-common'

interface Issue {
  id: number
  name: string | null
  desc: string
}

interface Table {
  id: string
  name: string | null
  desc: string
  tableId: number
  order: number
  active: boolean
}

interface PokerTablesComponentProps {
  myPlayer?: PokerPlayer
  tables: PokerTables
  allTables: Table[]
  createTable: () => void
  deleteTable: (e: PokerClickEvent) => void
  activateTable: (e: PokerClickEvent) => void
}

interface PokerClickEvent {
  tableId?: number
}

interface PokerTableTimer {
  id: number
  time: Date
}

interface PokerTableMapValue {
  tableId: number
  nextPlayerAction: Date
}

type PokerTableMap = Map<number, PokerTableMapValue>

type PokerPlayer = Immutable<{
  id: string
  joining: boolean
  name: string | null
  vote: number | null
  observer: boolean
  tables?: Table[]
  timers?: PokerTimer
  joinedTables: number[]
  joinedTableTimers?: PokerTableTimer[]
  joinedTablesMap: PokerTableMap
}>

type ActionPokerBoard = (state?: PokerBoard) => PokerBoard
type ActionPokerTables = (state?: PokerTables) => PokerTables
type ActionPokerTimer = (state?: PokerTimer) => PokerTimer

interface IPokerMsg {
  [x: string]: any
  source: string
  action: ActionPokerBoard | ActionPokerTables | ActionPokerTimer
  currentlyVoting: string
  name: string | null
  vote: number | null
  observer: boolean
  tableID: number
  nextPlayerAction: Date
}

interface IPokerAction extends IPokerMsg {
  id: number
  seq: number
}

type PokerAction = Immutable<IPokerAction>

interface PokerBoardComponentProps {
  board:PokerBoard
  myPlayer: PokerPlayer
  vote: number | null
  activeTable: Table
  joinedTables: number[]
  changeCurrentlyVoting: (e: any) => void
  clearVotes: () => void
  showVotes: () => void
}