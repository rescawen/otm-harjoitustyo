import React from 'react';
import { Switch, Route } from 'react-router';

import HomePage from './containers/HomePage';
import LoggedInPage from './containers/LoggedInPage';

export default (
  <Switch>
    <Route exact path="/" component={HomePage} />
    
  </Switch>
);
