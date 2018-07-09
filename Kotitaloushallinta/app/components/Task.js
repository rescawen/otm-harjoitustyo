import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Day from './Day';

export default class Task extends Component {
    static propTypes = {

    };
    render() {

        let timeRightNow = new Date().getTime();
        // ALL THE CONSOLE.LOG BELOW FOR TESTING ALGORITHM
        // console.log("time right now " + timeRightNow);
        let startingTime = this.props.startingTime;

        // console.log("time at creation " + startingTime);
        // console.log("difference in milliseconds " + (timeRightNow - startingTime));
        // console.log("difference in days " + (timeRightNow - startingTime)/ (1000 * 60 * 24 * 60));
        // console.log("difference in exact days " + Math.floor((timeRightNow - startingTime) / (1000 * 60 * 24 * 60)));

        let daysLeft = Math.floor((timeRightNow - startingTime) / (1000 * 60 * 24 * 60)) % this.props.days;

        // console.log("days left " + daysLeft);

        const daysList = [];

        for (let i = 0; i < this.props.days; i++) {
        // right now it never fills all the blocks, always goes to filling 'totaldays - 1 blocks' and then all go blank
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
