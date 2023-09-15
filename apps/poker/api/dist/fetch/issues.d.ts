import { ListISSUESQueryVariables, CreateISSUEInput, DeleteISSUEInput } from '../graphql/API.js';
export declare const onListIssue: (variables: ListISSUESQueryVariables) => Promise<({
    __typename: "ISSUE";
    id: string;
    name: string;
    desc?: string | null | undefined;
    createdAt: string;
    updatedAt: string;
} | null)[] | undefined>;
export declare const onCreateIssue: (newIssue: CreateISSUEInput) => Promise<{
    __typename: "ISSUE";
    id: string;
    name: string;
    desc?: string | null | undefined;
    createdAt: string;
    updatedAt: string;
} | undefined>;
export declare const onDeleteIssue: (issueDetails: DeleteISSUEInput) => Promise<void>;
