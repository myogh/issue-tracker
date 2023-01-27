const fs = require("fs");
const { json } = require("express");
const cors = require("cors");
require("dotenv").config();
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");

const GraphQLDate = require("./graphql_date.js");
const about = require("./about.js");
const issue = require("./issue.js");
const auth = require("./auth.js");

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
    user: auth.resolveUser,
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
  typeDefs: fs.readFileSync("schema.graphql", "utf-8"),
  resolvers,
  formatError: error => {
    console.error(error);
    return error;
  },
});

async function installHandler(app) {
  const enableCors = process.env.ENABLE_CORS || false;
  let corsConfig;
  if (enableCors) {
    const methods = ["POST"];
    const origin = process.env.UI_SERVER_ORIGIN || "http://localhost:8000";
    corsConfig = { origin, credentials: true, methods };
  } else {
    corsConfig = { origin: false };
  }

  console.log("CORS settings:", corsConfig);

  await server.start();
  app.use("/graphql", cors(corsConfig), json(), expressMiddleware(server, { context: getContext }));
}

module.exports = { installHandler };
