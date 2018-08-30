import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddTask extends Component {
  static propTypes = {
    newTask: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired,
    task: PropTypes.object
  };

  state = {
    title: '',
    titleError: '',
    days: '',
    daysError: ''
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
      titleError: 'validate valid',
      daysError: 'validate valid'
    };

    // error displayed through materializedcss, all good!

    if (this.state.title.length < 1) {
      isError = true;
      errors.titleError = 'validate invalid';
    }

    if (!Number.isInteger(Number(this.state.days)) || Number(this.state.days) < 1 || Number(this.state.days) > 30) {
      isError = true;
      errors.daysError = 'validate invalid';
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  onSubmit = () => {
    if (this.validate() === false) {
      this.newTask();
    }
  };

  newTask = () => {
    const task = {
      title: this.state.title,
      days: this.state.days,
      startingTime: String(Date.now()),
      id: '_' + Math.random().toString(36).substr(2, 9)
    };
    this.props.newTask({ task: task });
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
          <label htmlFor="icon_prefix2">Task Name</label>
          <input id="icon_prefix2" onChange={this.onChange} className={this.state.titleError} name="title" type="text" value={this.state.title} />
          <span className="helper-text" data-error="Task title cannot be empty" data-success=""></span>
        </div>
        <div className="input-field s6">
          <i className="material-icons prefix">access_time</i>
          <label htmlFor="icon_prefix2">Day Cycle</label>
          <input id="icon_prefix2" onChange={this.onChange} className={this.state.daysError} name="days" type="text" value={this.state.days} />
          <span className="helper-text" data-error="Task has to have a day cycle between 1 and 30" data-success=""></span>
        </div>

        <br />

        <div>
          <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.onSubmit}>Create Task<i className="material-icons right">send</i></button>
        </div>
        

      </div>
    );
  }
}