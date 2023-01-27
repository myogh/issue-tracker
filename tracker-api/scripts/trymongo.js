require('dotenv').config();
const { MongoClient } = require('mongodb');

// ---------- Establish a connection with mongodb server ---------

// ------------- Callback Paradiagm ---------------------

function testWithCallbacks(callback) {
  console.log('\n------ testWithCallbacks ---------');
  const url = process.env.DB_URL || 'mongodb://localhost/issuetracker';
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // connect to the mongodb server
  client.connect((conErr, cli) => {
    if (conErr) {
      callback(conErr);
      return;
    }
    console.log('Connected to MongoDB URL', url);

    const db = cli.db();
    const collection = db.collection('employees');

    const employee = { id: 1, name: 'A. Callback', age: 23 };

    // insert a document to the 'employees' collection
    collection.insertOne(employee, (inserErr, result) => {
      if (inserErr) {
        cli.close();
        callback(inserErr);
        return;
      }
      console.log('Result of insert:\n', result.insertedId);

      // read the inserted document back
      collection
        .find({ _id: result.insertedId })
        .toArray((findErr, docs) => {
          if (findErr) {
            cli.close();
            callback(findErr);
            return;
          }
          console.log('Result of find:\n', docs);
          cli.close();
          callback(findErr);
        });
    });
  });
}

// ------------- Async Await Paradiagm ---------------------

async function testWithAsync() {
  console.log('---- Connected with Async------');

  const url = process.env.DB_URL || 'mongodb://localhost/issuetracker';
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    const cli = await client.connect();
    console.log('Connected to MongoDB URL', url);
    const db = cli.db();

    const collection = db.collection('employees');

    const employee = { id: 2, name: 'B. Callback', age: 16 };
    const result = await collection.insertOne(employee);
    console.log('Result of insert: \n', result.insertedId);

    const docs = await collection
      .find({ _id: result.insertedId })
      .toArray();

    console.log('Result of find:\n', docs);
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
}

// --------------- MAIN FUNCTION CALL --------------------

testWithCallbacks((err) => {
  if (err) {
    console.log(err);
  }
  testWithAsync();
});

// testWithAsync();
