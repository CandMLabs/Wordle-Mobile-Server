const {gql} = require('apollo-server');

const typeDefs = gql`
  # Schema definition

  # User Definitions
  type User {
    id: String!
    name: String!
  }

  # Query
  type Query {
    user(id: String!): User
  }
`;
module.exports = typeDefs;