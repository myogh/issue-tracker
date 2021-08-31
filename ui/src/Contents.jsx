import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from './routes.js';

// contents of the pages below the naviagtion bar
export default function Contents() {
  return (
    <Switch>
      <Redirect exact from="/" to="/issues" />
      {/* <Route path={} component={} /> */}
      {routes.map(attrs => (
        <Route {...attrs} key={attrs.path} />
      ))}
    </Switch>
  );
}
