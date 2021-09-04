const { AuthenticationError } = require('apollo-server-express');
const Router = require('express');
const cors = require('cors');
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

const origin = process.env.UI_SERVER_ORIGIN || 'http://localhost:8000';
routes.use(cors({ origin, credentials: true }));

function getUser(req) {
  /**
   * * Get authentication credentials from the Json Web Token which
   * * was included in the client's request as a cookie.
   * Params - req: Express.Resquest
   * Returns an object of user status
   * { signedIn: boolean, username: String }
   */
  const token = req.cookies.jwt;
  if (!token) return { signedIn: false };

  try {
    const credentials = jwt.verify(token, JWT_SECRET);
    return credentials;
  } catch (error) {
    return { signedIn: false };
  }
}

function mustBeSignedIn(resolver) {
  /**
   * Wrapper function for the resolvers.
   * Param - resolver: Func
   * Returns: a resolver Func only if the user property exists
   * in the context object.
   * A resolver function is originally given three arguments by
   * GraphQL which are (root, args, context).
   */
  return (root, args, { user }) => {
    if (!user || !user.signedIn) {
      throw new AuthenticationError('You must be signed in');
    }
    return resolver(root, args, { user });
  };
}

function resolveUser(_, arg, { user }) {
  return user;
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

module.exports = {
  routes,
  getUser,
  mustBeSignedIn,
  resolveUser,
};
