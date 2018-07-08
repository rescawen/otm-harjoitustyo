import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

export default class Home extends Component {
  componentWillMount() {
    this.props.loadTasks();
    console.log(this.props);
    console.log('loading?');
  }

  static propTypes = {
    loadTasks: PropTypes.func.isRequired,
    tasks: PropTypes.array
  };
  
  render() {
    const tasksList = this.props.tasks.map(task => (
      <Task 
        title={task.title}
        days={task.days}
        timeAtCreation={task.timeAtCreation}
      />
    ));
    return (
      <div>
      {tasksList}
    </div>
    );
  }
}
