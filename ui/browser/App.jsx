/* eslint "react/react-in-jsx-scope": "off" */
/* eslint "react/jsx-no-undef": "off" */

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../src/store.js';

import Page from '../src/Page.jsx';

// eslint-disable-next-line no-underscore-dangle
store.initialData = window.__INITIAL_DATA__;

const element = (
  <Router>
    <Page />
  </Router>
);

ReactDOM.hydrate(element, document.getElementById('contents'));

// hot module replacement
if (module.hot) {
  module.hot.accept();
}
