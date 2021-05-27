import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';

import template from './template.js';
import Page from '../src/Page.jsx';
import store from '../src/store.js';
import routes from '../src/routes.js';

async function render(req, res) {
  const activeRoute = routes.find((route) => matchPath(req.path, route));

  let initialData;
  if (activeRoute && activeRoute.component.fetchData) {
    const match = matchPath(req.path, activeRoute);
    const index = req.path.indexOf('?');
    const search = index !== -1 ? req.path.substr(index) : null;
    initialData = await activeRoute.component.fetchData(match, search);
  }

  store.initialData = initialData;
  const element = (
    <StaticRouter location={req.url} context={{}}>
      <Page />
    </StaticRouter>
  );
  const body = ReactDOMServer.renderToString(element);
  res.send(template(body, initialData));
}

export default render;
