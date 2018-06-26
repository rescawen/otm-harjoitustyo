import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

export default class Home extends Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired
  };
  render() {
    return (
      <div>
        <Task title="Changing bedsheets" />
        <Task title="Changing bedsheets" />
        <Task title="Changing bedsheets" />
    </div>
    );
  }
}
