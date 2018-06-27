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
        {/* 24.6 ~~ 3 days ago */}
        <Task title="Changing bedsheets" days="7" timeAtCreation="1529863189000"/> 
        {/* 23.6 ~~ 4 days ago */}
        <Task title="Vacuuming" days="5" timeAtCreation="1529776789000"/>
        {/* 27.6 ~~ now */}
        <Task title="Stocking refrigerator" days="4" timeAtCreation="1530122615000"/>
        {/* 22.6 ~~ 5 days ago */}
        <Task title="Cleaning toilet" days="6" timeAtCreation="1529690615000"/>
    </div>
    );
  }
}
