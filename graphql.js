// @ts-check

const { ApolloServer, gql } = require('apollo-server-lambda');
const resolvers = require("./src/resolvers")
const typeDefs = require("./src/typeDefs")

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

exports.handler = server.createHandler();
