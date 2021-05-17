import React from 'react';
import ReactDOMServer from 'react-dom/server';

import template from './template.js';
import About from '../src/About.jsx';

function render(_, res) {
  const body = ReactDOMServer.renderToString(React.createElement(About));
  res.send(template(body));
}

export default render;
