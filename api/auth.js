const Router = require('express');
const express = require('express');

const routes = Router();

routes.use(express.json());

routes.post('/signin', async (req, res) => {
  const { usrname, pswd } = req.body;
  // check for password
  if (pswd === '12345') {
    const credentials = {
      signedIn: true,
      username: usrname,
      password: pswd,
    };
    res.json(credentials);
  } else {
    // refues to authroize
    res.status(403).send('Invalid credentials.');
  }
});

module.exports = { routes };
