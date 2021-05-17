import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import render from './render.jsx';

dotenv.config();

const app = express();

const UI_API_ENDPOINT =
  process.env.UI_API_ENDPOINT || 'http://localhost:3000/graphql';

const env = { UI_API_ENDPOINT };

const port = process.env.UI_SERVER_PORT || 8000;

const enableHMR = (process.env.ENABLE_HMR || 'true') === 'true';

if (enableHMR && process.env.NODE_ENV !== 'production') {
  console.log('Adding dev middleware, enabling HMR');

  /* eslint "global-require": "off" */
  /* eslint "import/no-extraneous-dependencies": "off" */
  const webpack = require('webpack');
  const devMiddleware = require('webpack-dev-middleware');
  const hotMiddleware = require('webpack-hot-middleware');

  const config = require('../webpack.config.js')[0];
  config.entry.app.push('webpack-hot-middleware/client');
  config.plugins = config.plugins || [];
  config.plugins.push(new webpack.HotModuleReplacementPlugin());

  const compiler = webpack(config);
  app.use(devMiddleware(compiler));
  app.use(hotMiddleware(compiler));
}

app.use(express.static('public'));

app.get('/env.js', (_, res) => {
  res.send(`window.ENV = ${JSON.stringify(env)}`);
});

app.get('/about', render);

app.get('*', (_, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

app.listen(port, () => {
  console.log(`UI started on port ${port}`);
});
