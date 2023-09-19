/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateISSUEInput = {
  name: string,
  desc?: string | null,
};

export type ISSUE = {
  __typename: "ISSUE",
  id: string,
  name: string,
  desc?: string | null,
};

export type UpdateISSUEInput = {
  id: string,
  name?: string | null,
  desc?: string | null,
};

export type DeleteISSUEInput = {
  id: string,
};

export type TableISSUEFilterInput = {
  id?: TableIDFilterInput | null,
  name?: TableStringFilterInput | null,
  desc?: TableStringFilterInput | null,
};

export type TableIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ISSUEConnection = {
  __typename: "ISSUEConnection",
  items?:  Array<ISSUE | null > | null,
  nextToken?: string | null,
};

export type CreateISSUEMutationVariables = {
  input: CreateISSUEInput,
};

export type CreateISSUEMutation = {
  createISSUE?:  {
    __typename: "ISSUE",
    id: string,
    name: string,
    desc?: string | null,
  } | null,
};

export type UpdateISSUEMutationVariables = {
  input: UpdateISSUEInput,
};

export type UpdateISSUEMutation = {
  updateISSUE?:  {
    __typename: "ISSUE",
    id: string,
    name: string,
    desc?: string | null,
  } | null,
};

export type DeleteISSUEMutationVariables = {
  input: DeleteISSUEInput,
};

export type DeleteISSUEMutation = {
  deleteISSUE?:  {
    __typename: "ISSUE",
    id: string,
    name: string,
    desc?: string | null,
  } | null,
};

export type GetISSUEQueryVariables = {
  id: string,
};

export type GetISSUEQuery = {
  getISSUE?:  {
    __typename: "ISSUE",
    id: string,
    name: string,
    desc?: string | null,
  } | null,
};

export type ListISSUESQueryVariables = {
  filter?: TableISSUEFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListISSUESQuery = {
  listISSUES?:  {
    __typename: "ISSUEConnection",
    items?:  Array< {
      __typename: "ISSUE",
      id: string,
      name: string,
      desc?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateISSUESubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  desc?: string | null,
};

export type OnCreateISSUESubscription = {
  onCreateISSUE?:  {
    __typename: "ISSUE",
    id: string,
    name: string,
    desc?: string | null,
  } | null,
};

export type OnUpdateISSUESubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  desc?: string | null,
};

export type OnUpdateISSUESubscription = {
  onUpdateISSUE?:  {
    __typename: "ISSUE",
    id: string,
    name: string,
    desc?: string | null,
  } | null,
};

export type OnDeleteISSUESubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  desc?: string | null,
};

export type OnDeleteISSUESubscription = {
  onDeleteISSUE?:  {
    __typename: "ISSUE",
    id: string,
    name: string,
    desc?: string | null,
  } | null,
};
