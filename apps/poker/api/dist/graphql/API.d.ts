export declare type CreateISSUEInput = {
    id?: string | null;
    name: string;
    desc?: string | null;
};
export declare type ModelISSUEConditionInput = {
    name?: ModelStringInput | null;
    desc?: ModelStringInput | null;
    and?: Array<ModelISSUEConditionInput | null> | null;
    or?: Array<ModelISSUEConditionInput | null> | null;
    not?: ModelISSUEConditionInput | null;
};
export declare type ModelStringInput = {
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
    attributeExists?: boolean | null;
    attributeType?: ModelAttributeTypes | null;
    size?: ModelSizeInput | null;
};
export declare enum ModelAttributeTypes {
    binary = "binary",
    binarySet = "binarySet",
    bool = "bool",
    list = "list",
    map = "map",
    number = "number",
    numberSet = "numberSet",
    string = "string",
    stringSet = "stringSet",
    _null = "_null"
}
export declare type ModelSizeInput = {
    ne?: number | null;
    eq?: number | null;
    le?: number | null;
    lt?: number | null;
    ge?: number | null;
    gt?: number | null;
    between?: Array<number | null> | null;
};
export declare type ISSUE = {
    __typename: "ISSUE";
    id: string;
    name: string;
    desc?: string | null;
    createdAt: string;
    updatedAt: string;
};
export declare type UpdateISSUEInput = {
    id: string;
    name?: string | null;
    desc?: string | null;
};
export declare type DeleteISSUEInput = {
    id: string;
};
export declare type ModelISSUEFilterInput = {
    id?: ModelIDInput | null;
    name?: ModelStringInput | null;
    desc?: ModelStringInput | null;
    and?: Array<ModelISSUEFilterInput | null> | null;
    or?: Array<ModelISSUEFilterInput | null> | null;
    not?: ModelISSUEFilterInput | null;
};
export declare type ModelIDInput = {
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
    attributeExists?: boolean | null;
    attributeType?: ModelAttributeTypes | null;
    size?: ModelSizeInput | null;
};
export declare type ModelISSUEConnection = {
    __typename: "ModelISSUEConnection";
    items: Array<ISSUE | null>;
    nextToken?: string | null;
};
export declare type ModelSubscriptionISSUEFilterInput = {
    id?: ModelSubscriptionIDInput | null;
    name?: ModelSubscriptionStringInput | null;
    desc?: ModelSubscriptionStringInput | null;
    and?: Array<ModelSubscriptionISSUEFilterInput | null> | null;
    or?: Array<ModelSubscriptionISSUEFilterInput | null> | null;
};
export declare type ModelSubscriptionIDInput = {
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
    in?: Array<string | null> | null;
    notIn?: Array<string | null> | null;
};
export declare type ModelSubscriptionStringInput = {
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
    in?: Array<string | null> | null;
    notIn?: Array<string | null> | null;
};
export declare type CreateISSUEMutationVariables = {
    input: CreateISSUEInput;
    condition?: ModelISSUEConditionInput | null;
};
export declare type CreateISSUEMutation = {
    createISSUE?: {
        __typename: "ISSUE";
        id: string;
        name: string;
        desc?: string | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type UpdateISSUEMutationVariables = {
    input: UpdateISSUEInput;
    condition?: ModelISSUEConditionInput | null;
};
export declare type UpdateISSUEMutation = {
    updateISSUE?: {
        __typename: "ISSUE";
        id: string;
        name: string;
        desc?: string | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type DeleteISSUEMutationVariables = {
    input: DeleteISSUEInput;
    condition?: ModelISSUEConditionInput | null;
};
export declare type DeleteISSUEMutation = {
    deleteISSUE?: {
        __typename: "ISSUE";
        id: string;
        name: string;
        desc?: string | null;
        createdAt: string;
        updatedAt: string;
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
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type ListISSUESQueryVariables = {
    filter?: ModelISSUEFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};
export declare type ListISSUESQuery = {
    listISSUES?: {
        __typename: "ModelISSUEConnection";
        items: Array<{
            __typename: "ISSUE";
            id: string;
            name: string;
            desc?: string | null;
            createdAt: string;
            updatedAt: string;
        } | null>;
        nextToken?: string | null;
    } | null;
};
export declare type OnCreateISSUESubscriptionVariables = {
    filter?: ModelSubscriptionISSUEFilterInput | null;
};
export declare type OnCreateISSUESubscription = {
    onCreateISSUE?: {
        __typename: "ISSUE";
        id: string;
        name: string;
        desc?: string | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type OnUpdateISSUESubscriptionVariables = {
    filter?: ModelSubscriptionISSUEFilterInput | null;
};
export declare type OnUpdateISSUESubscription = {
    onUpdateISSUE?: {
        __typename: "ISSUE";
        id: string;
        name: string;
        desc?: string | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type OnDeleteISSUESubscriptionVariables = {
    filter?: ModelSubscriptionISSUEFilterInput | null;
};
export declare type OnDeleteISSUESubscription = {
    onDeleteISSUE?: {
        __typename: "ISSUE";
        id: string;
        name: string;
        desc?: string | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
