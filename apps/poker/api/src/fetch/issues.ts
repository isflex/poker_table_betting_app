// import awsmobile from '../aws-exports.js'
const { AMPLIFY_API_CONFIG } = await import('@flexiness/aws/dist/index.js')
import { Amplify, API } from 'aws-amplify'
import { GraphQLQuery } from '@aws-amplify/api'
const {
  getISSUE,
  listISSUES,
  createISSUE,
  updateISSUE,
  deleteISSUE
} = await import('../graphql/includes/index.js')
import {
  ISSUE,
  ListISSUESQueryVariables, ListISSUESQuery,
  CreateISSUEInput, CreateISSUEMutation,
  UpdateISSUEInput, UpdateISSUEMutation,
  DeleteISSUEInput, DeleteISSUEMutation
} from '../graphql/API.js'

// Amplify.configure(awsmobile)
Amplify.configure(AMPLIFY_API_CONFIG)

export const onListIssue = async (variables: ListISSUESQueryVariables) => {
  // Fetch first 20 records
  // const variables: ListTodosQueryVariables = {
  //   limit: 20, 
  //   // add filter as needed
  // }

  try {
    const { data } = await API.graphql<GraphQLQuery<ListISSUESQuery>>({ 
      query: listISSUES,
      variables: { input: variables },
    })

    // setIssueList((issues: Issue[]) => [...issues, { ...newIssue }])

    // console.log('Successfully fetched page 1 of Issues!')
    
    if (data?.listISSUES) {
      const { items, nextToken } = data.listISSUES
      return items
    }
    return []

  } catch (err) {
    console.log('error: ', err)
  }
}

export const onCreateIssue = async (newIssue: CreateISSUEInput) => {
  // const newIssue = {
  //   name: issue.name,
  //   desc: issue.desc,
  // }
  try {
    const { data } = await API.graphql<GraphQLQuery<CreateISSUEMutation>>({ 
      query: createISSUE,
      variables: { input: newIssue },
    })

    // setIssueList((issues: Issue[]) => [...issues, { ...newIssue }])

    // console.log('Successfully created a new Issue!')

    if (data?.createISSUE) {
      return data.createISSUE
    }
  } catch (err) {
    console.log('error: ', err)
  }
}

export const onDeleteIssue = async (issueDetails: DeleteISSUEInput) => {
  // const issueDetails = {
  //   id: 'some_id'
  // }

  try {
    await API.graphql<GraphQLQuery<DeleteISSUEMutation>>({ 
      query: deleteISSUE,
      variables: { input: issueDetails },
    })

    // setIssueList((issues: Issue[]) => [...issues, { ...newIssue }])

    console.log('Successfully deleted an existing Issue!')
  } catch (err) {
    console.log('error: ', err)
  }
}
