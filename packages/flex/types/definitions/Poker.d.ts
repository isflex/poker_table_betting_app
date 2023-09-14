import { Immutable, castDraft, Draft } from 'immer'
import { PokerBoard, PokerTables, PokerTimer } from 'pointingpoker-common'
import { GraphQLQuery } from '@aws-amplify/api'
import {
  ISSUE,
  ListISSUESQuery
} from 'pointingpoker-api'


interface GraphQLResult {
  data?: Record<string, any>
  errors?: [object]
  extensions?: {
    [key: string]: any
  }
}

type TableQuery = GraphQLQuery<ListISSUESQuery> & {
  tableId: number
  order: number
  active: boolean
}

type TableIssue = ISSUE & {
  tableId: number
  order: number
  active: boolean
}

interface Table {
  id?: string,
  name?: string,
  desc?: string | null,
  tableId: number
  order: number
  active: boolean
  createdAt?: string
  updatedAt?: string
  __typename?: string
}

// interface Table extends ISSUE {
//   id: string,
//   name: string,
//   desc?: string | null,
//   tableId: number
//   order: number
//   active: boolean
//   createdAt: string
//   updatedAt: string
//   __typename: "ISSUE"
// }

// interface Table extends ISSUE {
//   tableId: number
//   order: number
//   active: boolean
// }

interface PokerTableTimer {
  id: number
  time: Date
}

interface PokerTableMapValue {
  id: string,
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
  source?: string
  action: (ActionPokerBoard | ActionPokerTables | ActionPokerTimer) | string
  // action: string
  currentlyVoting?: string
  name?: string | null
  vote?: number | null
  observer?: boolean
  tableID?: number
  nextPlayerAction?: Date
  hour?: number
  minute?: number
  second?: number
  date?: Date
  timeReadable?: string
  timeUTC?: Date
  getNextActionTimeUTC?: number
}

interface IPokerAction extends IPokerMsg {
  id: string | number
  seq?: number
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

interface PokerTablesComponentProps {
  myPlayer?: PokerPlayer
  tables: PokerTables
  allTables: Table[]
  createTable: (tableName: string, tableDesc: string) => void
  deleteTable: (id: string, tableId: number) => void
  activateTable: (id: string, tableId: number) => void
}

interface PokerClickEvent {
  id: string,
  tableId: number
}

interface PokerTablesModalCreateProps {
  active: boolean
  setModalShow: (arg0: boolean) => void
  createTable: (tableName: string, tableDesc: string) => void
}