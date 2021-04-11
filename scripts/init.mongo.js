// performing mongo shell operations
// in a non-interactive way for the
// creation of indexes and database initialization

db.issues.remove({});

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

db.issues.insertMany(issuesDB);
const count = db.issues.count();
print("Inserted", count, "issues");

// creating a document with _id of 'issues'... 
// dedicated to the 'counts' of issues...
// in a collection called 'counters'
db.counters.remove({_id: 'issues'})
db.counters.insert({_id: 'issues', current: count})

// {id: 1} is the field we would like to index
// 1 specifies the index being an ascending one
// {unique: true} creates a unique index which will reject...
// any sort of duplication on that index

db.issues.createIndex({ id: 1 }, { unique: true });
db.issues.createIndex({ status: 1 });
db.issues.createIndex({ owner: 1 });
db.issues.createIndex({ created: 1 });
