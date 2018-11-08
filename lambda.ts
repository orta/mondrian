import { ApolloServer } from 'apollo-server-lambda'
import {resolvers} from  "./src/resolvers"
import {typeDefs} from  "./src/typeDefs"

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
  }),
});

export const handler = server.createHandler();
