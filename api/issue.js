const { UserInputError } = require('apollo-server-express');
const { getDb, getNextSequence } = require('./db.js');

// resolver func for isseList field
async function list() {
  const db = getDb();
  const issues = await db.collection('issues').find({}).toArray();
  return issues;
}

// validating utility func for incoming post data
function validate(issue) {
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

// resolver func for issueAdd field
async function add(_, { issue }) {
  const db = getDb();
  validate(issue);
  const newIssue = Object.assign({}, issue);
  newIssue.created = new Date();
  newIssue.id = await getNextSequence('issues');

  const result = await db.collection('issues').insertOne(issue);
  const savedIssue = await db
    .collection('issues')
    .findOne({ _id: result.insertedId });
  return savedIssue;
}

module.exports = { list, add };
