import { Amplify, API } from 'aws-amplify'
import awsconfig from '../aws-exports.js'

import * as mutations from '../graphql/includes/mutations.js'
import * as queries from '../graphql/includes/queries.js'

import {
  Issue
} from 'flexiness'

Amplify.configure(awsconfig)

export const onCreateIssue = async (issue: Issue) => {
  const newIssue = {
    name: issue.name,
    desc: issue.desc,
  }

  try {
    await API.graphql({
      query: mutations.createISSUE,
      variables: { input: newIssue },
    })

    // setIssueList((issues: Issue[]) => [...issues, { ...newIssue }])

    console.log('Successfully created a new Issue!')
  } catch (err) {
    console.log('error: ', err)
  }
}