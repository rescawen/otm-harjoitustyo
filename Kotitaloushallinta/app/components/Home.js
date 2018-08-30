import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

export default class Home extends Component {
  UNSAFE_componentWillMount() {
    this.props.loadTasks();
    console.log(this.props);
    console.log('loading?');
  }

  goToAddTask = () => {
    this.props.goToAddTask();
  };

  toggleEditMode = () => {
    this.props.toggleEditMode();
  };

  editTask = (payload) => {
    this.props.editTask(payload);
  };

  deleteValidation = () => {
    
  };

  deleteTask = (payload) => {
    this.props.deleteTask(payload);
  };

  static propTypes = {
    loadTasks: PropTypes.func.isRequired,
    goToAddTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    tasks: PropTypes.array,
    task: PropTypes.object
  };

  

  render() {
    const tasksList = this.props.tasks.map((task, i) => (
      <Task
        title={task.title}
        days={task.days}
        startingTime={task.startingTime}
        editMode={this.props.editMode}
        id={task.id}
        key={i}

        // conditional rendering for these 2
        deleteTask={this.deleteTask}
        editTask={this.editTask}
      />
    ));
    return (
      <div>
        {tasksList}
        <div style={{position: 'fixed', bottom: '10px', right: '10px'}}>
          <div>
            <a onClick={this.toggleEditMode} className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">menu</i></a>
          </div><div style={{marginTop: '10px'}}>
            <a onClick={this.goToAddTask} className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
          </div>
        </div>
      </div>
    );
  }
}
