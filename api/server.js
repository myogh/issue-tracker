const express = require('express');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const { connectToDb } = require('./db.js');
const { installHandler } = require('./api_handler.js');
const auth = require('./auth.js');

const app = express();

// Parse Cookie header and populate req.cookies with
// an object keyed by the cookie names
app.use(cookieParser());

// routes which handles user authentication
app.use('/auth', auth.routes);

installHandler(app);

const port = process.env.API_SERVER_PORT || 3000;

// ---------- Connect to database and Initialize Express server -------------

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
