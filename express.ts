import { ApolloServer } from 'apollo-server-express'
import {resolvers} from  "./src/resolvers"
import {typeDefs} from  "./src/typeDefs"
import express from 'express'

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
