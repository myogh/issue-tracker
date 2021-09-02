const Router = require('express');
const express = require('express');
const jwt = require('jsonwebtoken');

let { JWT_SECRET } = process.env;

if (!JWT_SECRET) {
  if (process.env.NODE_ENV !== 'production') {
    JWT_SECRET = 'tempjwtsecretfordevonly';
    console.log('Missing env var JWT_SECRET. Using unsafe dev secret');
  } else {
    console.log('Missing env var JWT_SECRET. Authentication disabled');
  }
}

const routes = Router();

routes.use(express.json());

function getUser(req) {
  const token = req.cookies.jwt;
  if (!token) return { signedIn: false };

  try {
    const credentials = jwt.verify(token, JWT_SECRET);
    return credentials;
  } catch (error) {
    return { signedIn: false };
  }
}

routes.post('/signin', async (req, res) => {
  if (!JWT_SECRET) {
    res.status(500).send('Missing JWT_SECRET. Refusing to authenticate.');
  }

  const { username, pswd } = req.body;
  // check for password
  if (pswd === 'superman') {
    const credentials = {
      signedIn: true,
      username,
    };

    const token = jwt.sign(credentials, JWT_SECRET);
    res.cookie('jwt', token, { httpOnly: true });
    res.json(credentials);
  } else {
    // refues to authroize
    res.status(403).send('Invalid credentials.');
  }
});

routes.post('/signout', (req, res) => {
  res.clearCookie('jwt', { httpOnly: true });
  res.json({ status: 'ok' });
});

routes.post('/user', (req, res) => {
  res.json(getUser(req));
});

module.exports = { routes };
