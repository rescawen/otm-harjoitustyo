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
    this.props.newTask({task: task});
  }

  render() {
    return (
      <div className="main">      
          <button onClick={this.goToHome}>Back to Homepage</button> 
                <div className="input-field s6">
                  <input onChange={this.onChange} name="title" type="text" value={this.state.title} />
                  <label>Task Name</label>
                </div>
                <div className="input-field s6">
                  <input onChange={this.onChange} name="days" type="text" value={this.state.days} />
                  <label>Day Cycle</label>
                </div>
             <button onClick={this.newTask}>Create Task</button> 
      </div>
    );
  }
}