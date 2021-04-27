const { UserInputError } = require('apollo-server-express');
const { getDb, getNextSequence } = require('./db.js');

// resolver func for isseList field
async function list(_, { status, effortMin, effortMax }) {
  const db = getDb();

  const filter = {};
  if (status) filter.status = status;

  if (effortMin !== undefined || effortMax !== undefined) {
    filter.effort = {};
    if (effortMin !== undefined) filter.effort.$gte = effortMin;
    if (effortMax !== undefined) filter.effort.$lte = effortMax;
  }

  const issues = await db.collection('issues').find(filter).toArray();
  return issues;
}

// resolver func for issue field
async function get(_, { id }) {
  const db = getDb();
  const issue = await db.collection('issues').findOne({ id });
  return issue;
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

  const result = await db.collection('issues').insertOne(newIssue);
  const savedIssue = await db
    .collection('issues')
    .findOne({ _id: result.insertedId });
  return savedIssue;
}

module.exports = { list, add, get };
