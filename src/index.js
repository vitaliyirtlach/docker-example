const app = require('express')()
const { ApolloServer } = require('apollo-server-express')
const {typeDefs} = require("./typeDefs")
const {resolvers} = require("./resolvers")
 
const server = new ApolloServer({ typeDefs, resolvers })
 
server.applyMiddleware({ app })

app.listen(process.env.PORT, () =>
  console.log(`Now browse to http://localhost:${process.env.PORT}/graphql`)
)