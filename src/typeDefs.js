// @ts-check

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  # A boolean that when set is applied to every user
  # across the Artsy ecosystem
  type OperationFeature {
    # A user facing name
    name: String!
    # The value used when referencing the flag in code
    key: String!
    # Whether it is on or off for everyone
    value: Boolean!
  }

  # A value that can differ per user
  type FeatureFlag {
    # A user facing name
    name: String!
    # The value used when referencing the flag in code
    key: String!
    # The set of string values it could be
    values:  [String!]!
    # An optional list of 0-100, of the same size of values
    # that add up to 100, which indicate the chances of arriving at a value
    percent: [Int!]
    # a Google Analytics dimension. You can create one by logging into GA, clicking 'Admin', clicking 'Custom Definitions' 
    # in the middle column, clicking 'Custom Dimensions'. From there you can create a new custom dimension. Note that 
    # you should then name this 'dimension1', 'dimension2', etc. - corresponding to the index of the custom definition in this UI.
    dimension: String
    # An option that admins will only see
    edge: String
    # An option that admins will only see
    controlGroup: String
  }

  # Root queries that are available
  type Query {
    hello: String
  }
`;

module.exports = typeDefs
