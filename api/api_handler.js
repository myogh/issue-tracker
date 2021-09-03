const fs = require('fs');
require('dotenv').config();
const { ApolloServer } = require('apollo-server-express');

const GraphQLDate = require('./graphql_date.js');
const about = require('./about.js');
const issue = require('./issue.js');
const auth = require('./auth.js');

function getContext({ req }) {
  /**
   * For reference, check apollo server docs, authentication.
   * This function is fed to ApolloServer.
   * https://www.apollographql.com/docs/apollo-server/security...
   * .../authentication/#putting-authenticated-user-info-on-the-context
   */
  const user = auth.getUser(req);
  return { user };
}

const resolvers = {
  Query: {
    about: about.getMessage,
    issueList: issue.list,
    issue: issue.get,
    issueCounts: issue.counts,
  },
  Mutation: {
    setAboutMessage: about.setAboutMessage,
    issueAdd: issue.add,
    issueUpdate: issue.update,
    issueDelete: issue.remove,
    issueRestore: issue.restore,
  },
  GraphQLDate,
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync('schema.graphql', 'utf-8'),
  resolvers,
  context: getContext,
  formatError: (error) => {
    console.log(error);
    return error;
  },
});

function installHandler(app) {
  const enableCors = process.env.ENABLE_CORS || false;
  let cors;
  if (enableCors) {
    const method = 'POST';
    const origin = process.env.UI_SERVER_ORIGIN || 'http://localhost:8000';
    cors = { origin, credentials: true, method };
  } else {
    cors = 'false';
  }
  console.log('CORS settings:', enableCors);
  server.applyMiddleware({ app, path: '/graphql', cors });
}

module.exports = { installHandler };
