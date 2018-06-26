import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Day from './Day';

export default class Task extends Component {
    static propTypes = {

    };
    render() {

        const daysList = [];

        for (let i = 0; i < this.props.days; i++) {
            daysList.push(<Day key={i} />)
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
