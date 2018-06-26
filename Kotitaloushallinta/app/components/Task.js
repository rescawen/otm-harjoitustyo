import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Day from './Day';

export default class Task extends Component {
  static propTypes = {
    
  };
  render() {




    return (
      <div>
        <h2>{this.props.title}</h2>
        
      </div>
    );
  }
}
