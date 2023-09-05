import { immerable, produce } from 'immer'
import { PokerBoard } from './PokerBoard.js'
import { uniqueNamesGenerator, starWars, adjectives, animals, colors } from 'unique-names-generator'
import 'amplify/components/amplify-api-config.js'

// import { Amplify, API } from 'aws-amplify'
// import awsmobile from 'pointingpoker-api/aws-exports.js'
// const awsmobile = await import('pointingpoker-api/aws-exports.js')
// const { createISSUE } = await import('pointingpoker-api/dist/graphql/includes/index.js')

// import { createISSUE, updateISSUE, deleteISSUE } from 'pointingpoker-api/graphql/includes/mutations.js'
// const { createISSUE, updateISSUE, deleteISSUE } = await import('pointingpoker-api/graphql/includes/mutations.js')
// import { getISSUE, listISSUES } from 'pointingpoker-api/graphql/includes/queries.js'
// const { getISSUE, listISSUES } = await import('pointingpoker-api/graphql/includes/queries.js')

// Amplify.configure(awsmobile)

import {
  Issue,
  Table,
  PokerAction
} from 'flexiness'

// const onCreateIssue = async (issue: Issue) => {
//   const newIssue = {
//     name: issue.name,
//     desc: issue.desc,
//   }

//   try {
//     await API.graphql({
//       query: createISSUE,
//       variables: { input: newIssue },
//     })

//     // setIssueList((issues: Issue[]) => [...issues, { ...newIssue }])

//     console.log('Successfully created a new Issue!')
//   } catch (err) {
//     console.log('error: ', err)
//   }
// }

const generateTableName = () => {
  const i = Math.floor(Math.random() * Math.floor(2))
  const nouns = [animals, starWars]
  const name = uniqueNamesGenerator({
    dictionaries: [adjectives, colors, nouns[i], ],
    length: Math.floor(Math.random() * Math.floor(4)),
    separator: ' ',
    style: 'capital'
  })
  return `${name} Table`
}

const desc = "Some quick example text to build on the card title and make up the bulk of the card's content."

const baseTableState = [
  {
      id: "",
      tableId: 1,
      name: generateTableName(),
      desc: desc,
      order: 9999,
      active: false
  },
  {
      id: "",
      tableId: 2,
      name: generateTableName(),
      desc: desc,
      order: 9999,
      active: false
  },
  {
      id: "",
      tableId: 3,
      name: generateTableName(),
      desc: desc,
      order: 9999,
      active: false
  },
  {
      id: "",
      tableId: 4,
      name: generateTableName(),
      desc: desc,
      order: 9999,
      active: false
  },
]

const actions = {
  snapshotTables: produce<PokerTables>((draft, action) => {
    draft.tables = action.tables
  }),

  initTables: produce<PokerBoard>((draft) => {
    draft.tables = baseTableState
  }),

  createTable: produce<PokerTables>((draft, action) => {
    if (draft.tables.length !== 0) {
      draft.tables.push({
        id: "",
        tableId: draft.tables[draft.tables.length - 1].tableId + 1,
        name: action.tableName,
        desc: desc,
        order: 0,
        active: false
      })
    } else {
      draft.tables = baseTableState
    }
  }),

  deleteTable: produce<PokerTables>((draft, action) => {
    const index = draft.tables.findIndex(table => table.id === (action.tableID.id))
    if (index !== -1) draft.tables.splice(index, 1)
  }),

  activateTable: produce<PokerTables>((draft, action) => {
    draft.tables.map(table => {
      table.active = (table.tableId === action.tableID.tableId) ?? false
    })
  }),
}

export class PokerTables extends PokerBoard {
  [action: string]: any

  tables: Table[] = []

  constructor() {
    super()
    this[immerable] = true
    this.board = new PokerBoard()
    this.tables = baseTableState
  }

  get activeBoard() {
    return this.board
  }

  get allTables() {
    return this.tables
  }

  // setBoard(newBoard: PokerBoard) {
  //   this.board = newBoard
  // }

  get snapshotTables() {
    return {
      action: PokerTables.ACTION_SNAPSHOT,
      tables: this.tables,
    }
  }

  get newTableName() {
    return generateTableName()
  }

  static get ACTION_SNAPSHOT() {
    return 'snapshotTables'
  }

  static get ACTION_INIT_TABLES() {
    return 'initTables'
  }

  static get ACTION_CREATE_TABLE() {
    return 'createTable'
  }

  static get ACTION_DELETE_TABLE() {
    return 'deleteTable'
  }

  static get ACTION_ACTIVATE_TABLE() {
    return 'activateTable'
  }

  getActiveTable() {
    return this.tables.find(it => it.active === true)
  }

  getTableByID(TableId: PokerTables['id']) {
    return this.tables.find(it => it.id === TableId)
  }

  processAction(action: PokerAction) {
    // if (action.source !== 'PokerTables') return
    if (!action || !action.action)
      throw new Error('action is undefined')

    // @ts-expect-error
    const producer: typeof produce = actions[action.action]
    if (!producer)
      throw new Error(`unknown action ${action.action}`)

    // @ts-expect-error
    return producer(this, action)
  }
}
