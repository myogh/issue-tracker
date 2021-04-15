const fs = require('fs');
const express = require('express');
const { ApolloServer, UserInputError } = require('apollo-server-express');
const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const url = process.env.DB_URL || 'mongodb://localhost/issuetracker';
const port = process.env.API_SERVER_PORT || 3000;
let db;

// ------------- In-memory Database --------------

let aboutMessage = 'Issue Tracker API v1.0';

// ----- Resolver func for custom GraphQLDate ------------

const GraphQLDate = new GraphQLScalarType({
  name: 'GraphQLDate',
  description: 'A Date() type in GraphQL as a scalar',

  // for sending data
  serialize(value) {
    return value.toISOString();
  },

  // for receiving data
  // this is used when variable is used in query
  parseValue(value) {
    const dateValue = new Date(value);
    return Number.isNaN(dateValue) ? undefined : dateValue;
  },

  parseLiteral(ast) {
    // the kind property indicates the type of the token
    // that the parser found
    if (ast.kind === Kind.STRING) {
      const value = new Date(ast.value);
      return Number.isNaN(value) ? undefined : value;
    }
    return undefined;
  },
});

// ---------- Resolvers For GraphQL Fields -------------------

// resolver func for isseList field
async function issueList() {
  const issues = await db.collection('issues').find({}).toArray();
  return issues;
}

// resolver func for setAboutMessage field
function setAboutMessage(_, { message }) {
  aboutMessage = message;
  return aboutMessage;
}

// ------ issueAdd resolver ---------------

// validating utility func for incoming post data
function validateIssue(issue) {
  const errors = [];
  if (issue.title.length < 3) {
    errors.push('Field "Title" must be three characters long');
  }
  if (issue.status === 'Assigned' && !issue.owner) {
    errors.push('Field "Owner" is required when status is "Assigned"');
  }
  if (errors.length > 0) {
    throw new UserInputError('Invalid input(s)', { errors });
  }
}

// incrementing the count by one in the document
// with _id of 'issues' in 'counters' collection
async function getNextSequence(name) {
  const result = await db
    .collection('counters')
    .findOneAndUpdate(
      { _id: name },
      { $inc: { current: 1 } },
      { returnOriginal: false },
    );
  return result.value.current;
}

// resolver func for issueAdd field
async function issueAdd(_, { issue }) {
  validateIssue(issue);
  const newIssue = Object.assign({}, issue);
  newIssue.created = new Date();
  newIssue.id = await getNextSequence('issues');

  // The insert() returns an object that contains the status of the operation.
  const result = await db.collection('issues').insertOne(issue);
  const savedIssue = await db
    .collection('issues')
    .findOne({ _id: result.insertedId });
  return savedIssue;
}

const resolvers = {
  Query: {
    about: () => aboutMessage,
    issueList,
  },
  Mutation: {
    setAboutMessage,
    issueAdd,
  },
  GraphQLDate,
};

// -------- Integrating ApolloServer to Express  --------------------

const server = new ApolloServer({
  typeDefs: fs.readFileSync('schema.graphql', 'utf-8'),
  resolvers,
  formatError: (error) => {
    console.log(error);
    return error;
  },
});

const app = express();

const enableCors = (process.env.ENABLE_CORS || 'true') === 'true';
console.log('CORS setting: ', enableCors);

server.applyMiddleware({ app, path: '/graphql', cors: enableCors });

// ---------- Connect to database and Initialize Express server -------------

// Utility function for mongodb server connection
async function connectToDb() {
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();
  console.log('Connected to MongoDb server: ', url);
  db = client.db();
}

(async function start() {
  try {
    await connectToDb();
    app.listen(port, () => {
      console.log(`API server started on port ${port}`);
    });
  } catch (err) {
    console.log('Error: ', err);
  }
}());
