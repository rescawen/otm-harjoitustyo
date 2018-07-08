import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Day extends Component {
  static propTypes = {

  };
  render() {
    if (this.props.dayHasPassed == 'true') {
      return (
        <div className="col s1 expired"></div>
      );
    } else {
      return (
        <div className="col s1 unexpired"></div>
      );
    }
  }
}
