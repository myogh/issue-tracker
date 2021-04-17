/* eslint "react/react-in-jsx-scope": "off" */
/* globals React ReactDOM PropTypes */
/* eslint "react/jsx-no-undef": "off" */

import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';

import IssueList from './IssueList.jsx';

const element = <IssueList />;
ReactDOM.render(element, document.getElementById('contents'));

if (module.hot) {
  module.hot.accept();
}
