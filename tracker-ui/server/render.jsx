import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';

import template from './template.js';
import Page from '../src/Page.jsx';
import routes from '../src/routes.js';
import store from '../src/store.js';

async function render(req, res) {
  /**
   * Serves as an express middleware for all the urls in the ui server.
   * Matches the request path with the ones in routes.js.
   * Fetches data from api server, and saves it in global "store" object.
   * Converts the element to markup string and sends it to the client.
   */

  // -------- ui server fetchs data from the api server ----------

  // matchPath(): Returns the "match" object { params: '...' } and null if the
  // path doesn't match.
  // https://reactrouter.com/web/api/matchPath
  const activeRoute = routes.find(route => matchPath(req.path, route));

  let initialData;
  if (activeRoute && activeRoute.component.fetchData) {
    // get the match obj to feed it to fetchData()
    const match = matchPath(req.path, activeRoute);

    // get the search query string
    const index = req.path.indexOf('?');
    const search = index !== -1 ? req.path.substr(index) : null;

    // fetch data and store it in initialData.
    initialData = await activeRoute.component.fetchData(match, search, null);
  }

  const userData = await Page.fetchData(req.headers.cookie);

  store.initialData = initialData;
  store.userData = userData;

  // ------- render the routed element to markup -----------------

  // this object signfies any redirects with the help of StaticRouter
  const context = {};

  // StaticRouter renders one particular component based on its location props
  const element = (
    <StaticRouter location={req.url} context={context}>
      <Page />
    </StaticRouter>
  );

  // create a markup of the component without any event handlers
  const body = ReactDOMServer.renderToString(element);

  // ------ send resource to the client ------------

  if (context.url) {
    res.redirect(301, context.url);
  } else {
    // send the fetched data alongside the markup
    res.send(template(body, initialData, userData));
  }
}

export default render;
