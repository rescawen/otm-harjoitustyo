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
        <h2>Login</h2>
        <input onChange={this.handleChange} type="text" value={this.state.username} />
        <button onClick={this.handleLogin}>Log In</button>
      </div>
    );
  }
}
