/* eslint-disable camelcase */
// https://docs.aws.amazon.com/amplify/latest/userguide/environment-variables.html#access-env-vars
// https://docs.aws.amazon.com/amplify/latest/userguide/ssr-environment-variables.html
// https://github.com/aws-amplify/amplify-cli/issues/3643

const AMPLIFY_API_CONFIG  = {
  aws_project_region: `${process.env.FLEX_AWS_PROJECT_REGION}`,
  aws_appsync_graphqlEndpoint: `${process.env.FLEX_AWS_APPSYNC_GRAPHQL_ENDPOINT}`,
  aws_appsync_region: `${process.env.FLEX_AWS_APPSYNC_REGION}`,
  aws_appsync_authenticationType: `${process.env.FLEX_AWS_APPSYNC_AUTHENTICATIONTYPE}`,
  aws_appsync_apiKey:  `${process.env.FLEX_AWS_APPSYNC_APIKEY}`,
}

export { AMPLIFY_API_CONFIG }
