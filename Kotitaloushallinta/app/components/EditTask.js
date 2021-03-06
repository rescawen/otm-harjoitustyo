import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class EditTask extends Component {
  UNSAFE_componentWillMount() {
    // fetch the selected task's details and store in state
    const id = this.props.match.params.id;
    const task = this.props.tasks.find(function (task) {
      return task.id === id;
    });
    if (task) {
      this.setState({
        title: task.title,
        days: task.days,
        id: task.id,
        startingTime: task.startingTime
      });
    }
  }

  static propTypes = {
    editTask: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired,
  };

  replaceByKey = (array, params, newValue) => {
    array.some(function (item, index) {
      if (array[index][params.key] === params.value) {
        array[index] = newValue;
        return true;
      }
      return false;
    });
    return array;
  }

  state = {
    restartCycle: false
  };

  goToHome = () => {
    this.props.goToHome();
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  validate = () => {
    let isError = false;
    const errors = {
      titleError: '',
      daysError: ''
    };

    // how to display the error?

    if (this.state.title.length < 1) {
      isError = true;
      errors.titleError = 'Task title cannot be empty';
    }

    if (this.state.days < 1) {
      isError = true;
      errors.daysError = 'Task has to have minimum of a 1 day cycle';
    }

    // what does this setstate do?
    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  editTask = () => {
    const task = {
      title: this.state.title,
      days: this.state.days,
      startingTime: (this.state.restartCycle ? String(Date.now()) : this.state.startingTime),
      id: this.state.id
    };
    this.props.editTask({ task: task });
  }

  render() {
    return (
      <div className="main">
        <br />

        <button className="btn waves-effect waves-light" onClick={this.goToHome}>Back to Homepage</button>

        <br />
        <br />
        <div className="input-field s6">
          <i className="material-icons prefix">home</i>
          <label className="active">Task Name</label>
          <input onChange={this.onChange} name="title" type="text" value={this.state.title} />

        </div>
        <div className="input-field s6">
          <i className="material-icons prefix">access_time</i>
          <label className="active">Day Cycle</label>
          <input onChange={this.onChange} name="days" type="text" value={this.state.days} />

        </div>
        <div className="input-field s4">
          <p>
            <label>
              <input type="checkbox" className="filled-in" onChange={this.onChange} name="restartCycle" value={this.state.restartCycle} />
              <span>Restart day cycle</span>
            </label>
          </p>
        </div>
        <button className="btn waves-effect waves-light" onClick={this.editTask}>Edit Task<i className="material-icons right">send</i></button>

      </div>
    );
  }
}