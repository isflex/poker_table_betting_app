/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createISSUE = /* GraphQL */ `
  mutation CreateISSUE(
    $input: CreateISSUEInput!
    $condition: ModelISSUEConditionInput
  ) {
    createISSUE(input: $input, condition: $condition) {
      id
      name
      desc
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateISSUE = /* GraphQL */ `
  mutation UpdateISSUE(
    $input: UpdateISSUEInput!
    $condition: ModelISSUEConditionInput
  ) {
    updateISSUE(input: $input, condition: $condition) {
      id
      name
      desc
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteISSUE = /* GraphQL */ `
  mutation DeleteISSUE(
    $input: DeleteISSUEInput!
    $condition: ModelISSUEConditionInput
  ) {
    deleteISSUE(input: $input, condition: $condition) {
      id
      name
      desc
      createdAt
      updatedAt
      __typename
    }
  }
`;
