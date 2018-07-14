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
      titleError: '',
      daysError: ''
    };

    // error displayed through materializedcss, all good!

    if (this.state.title.length < 1) {
      isError = true;
      errors.titleError = "Task title cannot be empty";
    }

    if (this.state.days < 1) {
      isError = true;
      errors.daysError = "Task has to have minimum of a 1 day cycle";
    }

    // what does this setstate do?
    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  onSubmit = () => {

    const err = this.validate();

    console.log(err);

    if (err === true) {
      // clear form
      this.setState({
        title: '',
        titleError: '',
        days: '',
        daysError: ''
      });
    } else if (err === false) {
      this.newTask;
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

        <button class="btn waves-effect waves-light" onClick={this.goToHome}>Back to Homepage</button>

        <br />
        <br />

        
          <div className="input-field s6">
            <i class="material-icons prefix">home</i>
            <label for="icon_prefix2">Task Name</label>
            <input id="icon_prefix2" onChange={this.onChange} value={this.state.title} type="text"name="title" />
          </div>
          <div className="input-field s6">
            <i class="material-icons prefix">access_time</i>
            <label for="icon_prefix2">Day Cycle</label>
            <input id="icon_prefix2" onChange={this.onChange} name="days" type="text" value={this.state.days} />
          </div>

          <br />

          <div>
            <button class="btn waves-effect waves-light" type="submit" name="action" onClick={this.onSubmit}>Create Task<i class="material-icons right">send</i></button>
          </div>
        

      </div>
    );
  }
}