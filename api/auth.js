const Router = require('express');
const express = require('express');

const routes = Router();

routes.use(express.json());

routes.post('/signin', async (req, res) => {
  const { username, pswd } = req.body;
  // check for password
  if (pswd === 'superman') {
    const credentials = {
      signedIn: true,
      username,
    };
    res.json(credentials);
  } else {
    // refues to authroize
    res.status(403).send('Invalid credentials.');
  }
});

module.exports = { routes };
