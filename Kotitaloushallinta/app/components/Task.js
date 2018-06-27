import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Day from './Day';

export default class Task extends Component {
    static propTypes = {

    };
    render() {

        let timeRightNow = new Date().getTime();
        console.log("time right now " + timeRightNow);
        let timeAtCreation = this.props.timeAtCreation;
        console.log("time at creation " + timeAtCreation);
        console.log("difference in milliseconds " + (timeRightNow - timeAtCreation));
        console.log("difference in days " + (timeRightNow - timeAtCreation)/ (1000 * 60 * 24 * 60));
        console.log("difference in exact days " + Math.floor((timeRightNow - timeAtCreation) / (1000 * 60 * 24 * 60)));
        let daysLeft = Math.floor((timeRightNow - timeAtCreation) / (1000 * 60 * 24 * 60)) % this.props.days;

        console.log("days left " + daysLeft);

        const daysList = [];

        for (let i = 0; i < this.props.days; i++) {
        // still need to work out frontend logic how does cycle end and start?
            if (i < daysLeft) {
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
