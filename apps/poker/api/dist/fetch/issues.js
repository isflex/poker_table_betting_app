// import awsmobile from '../aws-exports.js'
const { AMPLIFY_API_CONFIG } = process.env.FLEX_MODE === 'development'
    ? await import('./init-amplify-dev.js')
    : await import('@flexiness/aws/dist/index.js');
import { Amplify, API } from 'aws-amplify';
const { getISSUE, listISSUES, createISSUE, updateISSUE, deleteISSUE } = await import('../graphql/includes/index.js');
// Amplify.configure(awsmobile)
Amplify.configure(AMPLIFY_API_CONFIG);
export const onListIssue = async (variables) => {
    // Fetch first 20 records
    // const variables: ListTodosQueryVariables = {
    //   limit: 20, 
    //   // add filter as needed
    // }
    try {
        const { data } = await API.graphql({
            query: listISSUES,
            variables: { input: variables },
        });
        // setIssueList((issues: Issue[]) => [...issues, { ...newIssue }])
        // console.log('Successfully fetched page 1 of Issues!')
        if (data === null || data === void 0 ? void 0 : data.listISSUES) {
            const { items, nextToken } = data.listISSUES;
            return items;
        }
        return [];
    }
    catch (err) {
        console.log('error: ', err);
    }
};
export const onCreateIssue = async (newIssue) => {
    // const newIssue = {
    //   name: issue.name,
    //   desc: issue.desc,
    // }
    try {
        const { data } = await API.graphql({
            query: createISSUE,
            variables: { input: newIssue },
        });
        // setIssueList((issues: Issue[]) => [...issues, { ...newIssue }])
        // console.log('Successfully created a new Issue!')
        if (data === null || data === void 0 ? void 0 : data.createISSUE) {
            return data.createISSUE;
        }
    }
    catch (err) {
        console.log('error: ', err);
    }
};
export const onDeleteIssue = async (issueDetails) => {
    // const issueDetails = {
    //   id: 'some_id'
    // }
    try {
        await API.graphql({
            query: deleteISSUE,
            variables: { input: issueDetails },
        });
        // setIssueList((issues: Issue[]) => [...issues, { ...newIssue }])
        console.log('Successfully deleted an existing Issue!');
    }
    catch (err) {
        console.log('error: ', err);
    }
};
//# sourceMappingURL=issues.js.map