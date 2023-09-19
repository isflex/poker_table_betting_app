export declare type CreateISSUEInput = {
    name: string;
    desc?: string | null;
};
export declare type ISSUE = {
    __typename: "ISSUE";
    id: string;
    name: string;
    desc?: string | null;
};
export declare type UpdateISSUEInput = {
    id: string;
    name?: string | null;
    desc?: string | null;
};
export declare type DeleteISSUEInput = {
    id: string;
};
export declare type TableISSUEFilterInput = {
    id?: TableIDFilterInput | null;
    name?: TableStringFilterInput | null;
    desc?: TableStringFilterInput | null;
};
export declare type TableIDFilterInput = {
    ne?: string | null;
    eq?: string | null;
    le?: string | null;
    lt?: string | null;
    ge?: string | null;
    gt?: string | null;
    contains?: string | null;
    notContains?: string | null;
    between?: Array<string | null> | null;
    beginsWith?: string | null;
};
export declare type TableStringFilterInput = {
    ne?: string | null;
    eq?: string | null;
    le?: string | null;
    lt?: string | null;
    ge?: string | null;
    gt?: string | null;
    contains?: string | null;
    notContains?: string | null;
    between?: Array<string | null> | null;
    beginsWith?: string | null;
};
export declare type ISSUEConnection = {
    __typename: "ISSUEConnection";
    items?: Array<ISSUE | null> | null;
    nextToken?: string | null;
};
export declare type CreateISSUEMutationVariables = {
    input: CreateISSUEInput;
};
export declare type CreateISSUEMutation = {
    createISSUE?: {
        __typename: "ISSUE";
        id: string;
        name: string;
        desc?: string | null;
    } | null;
};
export declare type UpdateISSUEMutationVariables = {
    input: UpdateISSUEInput;
};
export declare type UpdateISSUEMutation = {
    updateISSUE?: {
        __typename: "ISSUE";
        id: string;
        name: string;
        desc?: string | null;
    } | null;
};
export declare type DeleteISSUEMutationVariables = {
    input: DeleteISSUEInput;
};
export declare type DeleteISSUEMutation = {
    deleteISSUE?: {
        __typename: "ISSUE";
        id: string;
        name: string;
        desc?: string | null;
    } | null;
};
export declare type GetISSUEQueryVariables = {
    id: string;
};
export declare type GetISSUEQuery = {
    getISSUE?: {
        __typename: "ISSUE";
        id: string;
        name: string;
        desc?: string | null;
    } | null;
};
export declare type ListISSUESQueryVariables = {
    filter?: TableISSUEFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};
export declare type ListISSUESQuery = {
    listISSUES?: {
        __typename: "ISSUEConnection";
        items?: Array<{
            __typename: "ISSUE";
            id: string;
            name: string;
            desc?: string | null;
        } | null> | null;
        nextToken?: string | null;
    } | null;
};
export declare type OnCreateISSUESubscriptionVariables = {
    id?: string | null;
    name?: string | null;
    desc?: string | null;
};
export declare type OnCreateISSUESubscription = {
    onCreateISSUE?: {
        __typename: "ISSUE";
        id: string;
        name: string;
        desc?: string | null;
    } | null;
};
export declare type OnUpdateISSUESubscriptionVariables = {
    id?: string | null;
    name?: string | null;
    desc?: string | null;
};
export declare type OnUpdateISSUESubscription = {
    onUpdateISSUE?: {
        __typename: "ISSUE";
        id: string;
        name: string;
        desc?: string | null;
    } | null;
};
export declare type OnDeleteISSUESubscriptionVariables = {
    id?: string | null;
    name?: string | null;
    desc?: string | null;
};
export declare type OnDeleteISSUESubscription = {
    onDeleteISSUE?: {
        __typename: "ISSUE";
        id: string;
        name: string;
        desc?: string | null;
    } | null;
};
