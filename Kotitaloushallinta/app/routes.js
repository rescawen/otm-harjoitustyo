import React from 'react';
import { Switch, Route } from 'react-router';

import HomePage from './containers/HomePage';
import AddTaskPage from './containers/AddTaskPage';
import LoggedInPage from './containers/LoggedInPage';

export default (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/AddTask" component={AddTaskPage} />
  </Switch>
);
