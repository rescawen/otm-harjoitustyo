import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

export default class Home extends Component {
  componentWillMount() {
    this.props.loadTasks();
    console.log(this.props);
    console.log('loading?');
  }

  goToAddTask = () => {
    this.props.goToAddTask();
  };

  editTask = (payload) => {
    this.props.editTask(payload);
  };

  deleteTask = (payload) => {
      this.props.deleteTask(payload);
  }

  static propTypes = {
    loadTasks: PropTypes.func.isRequired,
    goToAddTask: PropTypes.func.isRequired,
    editTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    tasks: PropTypes.array,
    task: PropTypes.object
  };

  

  render() {
    const tasksList = this.props.tasks.map(task => (
      <Task
        title={task.title}
        days={task.days}
        startingTime={task.startingTime}
        id={task.id}
        deleteTask={this.deleteTask}
        editTask={this.editTask}
      />
    ));
    return (
      <div>
        {tasksList}
        <a onClick={this.goToAddTask} className="btn-floating btn-large right waves-effect waves-light red"><i className="material-icons">+</i></a>
      </div>
    );
  }
}
