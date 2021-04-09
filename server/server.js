const fs = require("fs");
const express = require("express");
const { ApolloServer, UserInputError } = require("apollo-server-express");
const { GraphQLScalarType } = require("graphql");
const { Kind } = require("graphql/language");
const { MongoClient } = require("mongodb");

const url = "mongodb://localhost/issuetracker";
let db;

// ------------- In-memory Database --------------

let aboutMessage = "Issue Tracker API v1.0";

const issuesDB = [
    {
        id: 1,
        status: "New",
        owner: "Ravan",
        effort: 5,
        created: new Date("2019-01-15"),
        due: undefined,
        title: "Error in console when clicking Add",
    },
    {
        id: 2,
        status: "Assigned",
        owner: "Eddie",
        effort: 14,
        created: new Date("2019-01-16"),
        due: new Date("2019-02-01"),
        title: "Missing bottom border on panel",
    },
];

// ----- Resolver func for custom GraphQLDate ------------

const GraphQLDate = new GraphQLScalarType({
    name: "GraphQLDate",
    description: "A Date() type in GraphQL as a scalar",

    // for sending data
    serialize(value) {
        return value.toISOString();
    },

    // for receiving data
    // this is used when variable is used in query
    parseValue(value) {
        const dateValue = new Date(value);
        return isNaN(dateValue) ? undefined : dateValue;
    },

    parseLiteral(ast) {
        // the kind property indicates the type of the token
        // that the parser found
        if (ast.kind == Kind.STRING) {
            const value = new Date(ast.value);
            return isNaN(value) ? undefined : value;
        }
    },
});

// ---------- Resolvers For GraphQL Fields -------------------

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

// resolver func for setAboutMessage field
function setAboutMessage(_, { message }) {
    aboutMessage = message;
    return aboutMessage;
}

// resolver func for isseList field
async function issueList() {
    const issues = await db.collection('issues').find({}).toArray();
    return issues;
}

// validating utility func for incoming post data
function validateIssue(issue) {
    const errors = [];
    if (issue.title.length < 3) {
        errors.push('Field "Title" must be three characters long');
    }
    if (issue.status == "Assigned" && !issue.owner) {
        errors.push('Field "Owner" is required when status is "Assigned"');
    }
    if (errors.length > 0) {
        throw new UserInputError("Invalid input(s)", { errors });
    }
}

// resolver func for issueAdd field
function issueAdd(_, { issue }) {
    validateIssue(issue);
    issue.created = new Date();
    issue.id = issuesDB.length + 1;

    issuesDB.push(issue);
    return issue;
}

// -------- Integrating ApolloServer to Express  --------------------

const server = new ApolloServer({
    typeDefs: fs.readFileSync("./server/schema.graphql", "utf-8"),
    resolvers,
    formatError: (error) => {
        console.log(error);
        return error;
    },
});

const app = express();

app.use(express.static("public"));

server.applyMiddleware({ app, path: "/graphql" });

// ---------- Connect to database and Initialize Express server -------------

// Utility function for mongodb server connection
async function connectToDb() {
    const client = new MongoClient(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    await client.connect();
    console.log("Connected to MongoDb server: ", url);
    db = client.db();
}


(async function () {
    try {
        await connectToDb();
        app.listen(3000, function () {
            console.log("App started on port 3000");
        });
    } catch (err) {
        console.log("Error: ", err);
    }
})();
