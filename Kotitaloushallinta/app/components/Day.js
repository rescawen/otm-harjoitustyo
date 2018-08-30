import React, { Component } from 'react';

export default class Day extends Component {

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
