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
    days: '',
  };

  goToHome = () => {
    this.props.goToHome();
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

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

        {/* BUGGY SELECTION PROBLEMS */}

        <div className="input-field s6">
          <i class="material-icons prefix">home</i>
          <input id="icon_prefix2" onChange={this.onChange} name="title" type="text" value={this.state.title} />
          <label for="icon_prefix2">Task Name</label>
        </div>


        <div className="input-field s6">
        <i class="material-icons prefix">access_time</i>
          <input id="icon_prefix2" onChange={this.onChange} name="days" type="text" value={this.state.days} />
          <label for="icon_prefix2">Day Cycle</label>
        </div>
        <button class="btn waves-effect waves-light" type="submit" name="action" onClick={this.newTask}>Create Task<i class="material-icons right">send</i></button>

      </div>
    );
  }
}