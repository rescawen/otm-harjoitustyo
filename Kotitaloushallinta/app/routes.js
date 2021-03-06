import React from 'react';
import { Switch, Route } from 'react-router';

import HomePage from './containers/HomePage';
import AddTaskPage from './containers/AddTaskPage';
import EditTaskPage from './containers/EditTaskPage';

export default (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/AddTask" component={AddTaskPage} />
    <Route path="/EditTask/:id" component={EditTaskPage} />
  </Switch>
);
