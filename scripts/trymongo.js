const { MongoClient } = require("mongodb");

// ---------- Establish a connection with mongodb server ---------

// ------------- Callback Paradiagm ---------------------

function testWithCallbacks(callback) {
    console.log("\n------ testWithCallbacks ---------");
    const url = "mongodb://localhost/issuetracker";
    const client = new MongoClient(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    // connect to the mongodb server
    client.connect(function (err, client) {
        if (err) {
            callback(err);
            return;
        }
        console.log("Connected to MongoDB");

        const db = client.db();
        const collection = db.collection("employees");

        const employee = { id: 1, name: "A. Callback", age: 23 };

        // insert a document to the 'employees' collection
        collection.insertOne(employee, function (err, result) {
            if (err) {
                client.close();
                callback(err);
                return;
            }
            console.log("Result of insert:\n", result.insertedId);

            // read the inserted document back
            collection
                .find({ _id: result.insertedId })
                .toArray(function (err, docs) {
                    if (err) {
                        client.close();
                        callback(err);
                        return;
                    }
                    console.log("Result of find:\n", docs);
                    client.close();
                    callback(err);
                });
        });
    });
}

// ------------- Async Await Paradiagm ---------------------

async function testWithAsync() {
    console.log("---- Connected with Async------");
    const url = "mongodb://localhost/issuetracker";
    const client = new MongoClient(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    try {
        const cli = await client.connect();
        console.log("Connected to MongoDB");
        const db = cli.db();

        const collection = db.collection("employees");

        const employee = { id: 2, name: "B. Callback", age: 16 };
        const result = await collection.insertOne(employee);
        console.log("Result of insert: \n", result);

        const docs = await collection
            .find({_id: result.insertedId})
            .toArray();

        console.log("Result of find:\n", docs);
    } catch (err) {
        console.log(err);
    } finally {
        client.close();
    }
}

// --------------- MAIN FUNCTION CALL --------------------

testWithCallbacks(function (err) {
    if (err) {
        console.log(err);
    }
    testWithAsync();
});

// testWithAsync();
