/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten
export const getISSUE = /* GraphQL */ `
  query GetISSUE($id: ID!) {
    getISSUE(id: $id) {
      id
      name
      desc
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listISSUES = /* GraphQL */ `
  query ListISSUES(
    $filter: ModelISSUEFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listISSUES(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        desc
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
//# sourceMappingURL=queries.js.map