import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Day from './Day';

export default class Task extends Component {
    static propTypes = {

    };
    render() {

        let timeRightNow = new Date().getTime();
        let timeAtCreation = this.props.timeAtCreation;
        let timeLeft = Math.floor((timeRightNow - timeAtCreation)/(60*60*24*60)) % this.props.days;


        const daysList = [];

        for (let i = 0; i < this.props.days; i++) {

            if (i < timeLeft) {
                daysList.push(<Day key={i} dayHasPassed='true' />)
            } else {
                daysList.push(<Day key={i} dayHasPassed='false' />)
            }

            
        }

        return (
            <div>
                <h2>{this.props.title}</h2>
                <div className="row">
                {daysList}
                </div>
            </div>
        );
    }
}
