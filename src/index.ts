import "reflect-metadata"
import * as express from "express"
import { ApolloServer } from 'apollo-server-express'
import { typeDefs } from "./typeDefs"
import { resolvers } from "./resolvers"
import { createConnection } from "typeorm"

(async () => {  
  
  try {
    const server = new ApolloServer({ typeDefs, resolvers })
    const app = express()
    const PORT = process.env.PORT || 4000
    server.applyMiddleware({ app })
    await createConnection()
    app.listen(PORT, () =>
      console.log(`http://localhost:${PORT}/graphql`)
    )
  } catch(e) {
    console.log(e)
  }

})()