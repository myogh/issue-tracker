const { getDb, getNextSequence } = require("./db.js");
const { mustBeSignedIn } = require("./auth.js");
const { GraphQLError } = require("graphql");

const PAGE_SIZE = 10;
// ----------- resolver func for isseList field ------------

// eslint-disable-next-line
async function list(_, { status, effortMin, effortMax, search, page }) {
  const db = getDb();

  const filter = {};
  if (status) filter.status = status;

  if (effortMin !== undefined || effortMax !== undefined) {
    filter.effort = {};
    if (effortMin !== undefined) filter.effort.$gte = effortMin;
    if (effortMax !== undefined) filter.effort.$lte = effortMax;
  }

  if (search) filter.$text = { $search: search };

  const cursor = db
    .collection("issues")
    .find(filter)
    .sort({ id: 1 })
    .skip(PAGE_SIZE * (page - 1))
    .limit(PAGE_SIZE);

  // count(boolean: should skip and limit be applied)
  const totalCount = await cursor.count(false);
  const issues = cursor.toArray();
  const pages = Math.ceil(totalCount / PAGE_SIZE);

  return { issues, pages };
}

// ------- resolver func for issue field ------------------

async function get(_, { id }) {
  const db = getDb();
  const issue = await db.collection("issues").findOne({ id });
  return issue;
}

// ----------- validating utility func for incoming post data -------

function validate(issue) {
  if (issue.title.length < 3) {
    throw new GraphQLError('Field "Title" must be three characters long', {
      extensions: {
        code: "BAD_USER_INPUT",
      },
    });
  }
  if (issue.status === "Assigned" && !issue.owner) {
    throw new GraphQLError(' Field "Owner" is required when status is "Assigned"', {
      extensions: {
        code: "BAD_USER_INPUT",
      },
    });
  }
}

// --------- resolver func for issueAdd field ----------------

async function add(_, { issue }) {
  const db = getDb();
  validate(issue);
  const newIssue = Object.assign({}, issue);
  newIssue.created = new Date();
  newIssue.id = await getNextSequence("issues");

  const result = await db.collection("issues").insertOne(newIssue);
  const savedIssue = await db.collection("issues").findOne({ _id: result.insertedId });
  return savedIssue;
}

// --------- resolver func for issueCounts field ------------------

async function counts(_, { status, effortMin, effortMax }) {
  const db = getDb();
  const filter = {};
  if (status) filter.status = status;

  if (effortMin !== undefined || effortMax !== undefined) {
    filter.effort = {};
    if (effortMin !== undefined) filter.effort.$gte = effortMin;
    if (effortMax !== undefined) filter.effort.$lte = effortMax;
  }

  const results = await db
    .collection("issues")
    .aggregate([
      { $match: filter },
      {
        $group: {
          _id: { owner: "$owner", status: "$status" },
          count: { $sum: 1 },
        },
      },
    ])
    .toArray();

  const stats = {};
  results.forEach(result => {
    // eslint-disable-next-line no-underscore-dangle
    const { owner, status: statusKey } = result._id;
    if (!stats[owner]) stats[owner] = { owner };
    stats[owner][statusKey] = result.count;
  });

  return Object.values(stats);
}

// ------------- resolver func for issueUpdate field --------

async function update(_, { id, changes }) {
  const db = getDb();
  if (changes.title || changes.owner || changes.status) {
    const issue = await db.collection("issues").findOne({ id });
    Object.assign(issue, changes);
    validate(issue);
  }
  await db.collection("issues").updateOne({ id }, { $set: changes });
  const savedIssue = await db.collection("issues").findOne({ id });
  return savedIssue;
}

// ---------- resolver func for issueDelete field --------

async function remove(_, { id }) {
  const db = getDb();
  const issue = await db.collection("issues").findOne({ id });
  if (!issue) return false;

  issue.deleted = new Date();
  let result = await db.collection("deleted_issues").insertOne(issue);
  if (result.insertedId) {
    result = await db.collection("issues").removeOne({ id });
    return result.deletedCount === 1;
  }
  return false;
}

// ---------- resolver func for issueRestore field --------

async function restore(_, { id }) {
  const db = getDb();
  const issue = await db.collection("deleted_issues").findOne({ id });
  if (!issue) return false;

  issue.deleted = new Date();
  let result = await db.collection("issues").insertOne(issue);
  if (result.insertedId) {
    result = await db.collection("deleted_issues").removeOne({ id });
    return result.deletedCount === 1;
  }
  return false;
}

module.exports = {
  list,
  add: mustBeSignedIn(add),
  get,
  update: mustBeSignedIn(update),
  remove: mustBeSignedIn(remove),
  counts,
  restore: mustBeSignedIn(restore),
};
