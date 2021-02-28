import {gql} from "apollo-server-express"

export const typeDefs = gql`
  type Whale {
    id: ID!
    name: String!
  }
  
  type Query {
    hello: String
    getAll: [Whale]!
  }
  type Mutation  {
    create(name: String!): Whale
  }
`