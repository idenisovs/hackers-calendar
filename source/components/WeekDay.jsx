import React from 'react';
import classNames from 'classnames';
import mod from '../services/mod';

import style from './WeekDay.scss';

class WeekDay extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {dayNr} = this.props;

        const classes = {
            [style['Workday']]: (dayNr <= 5),
            [style['Weekend']]: (dayNr > 5)
        };

        return (
            <span className={classNames(classes)}>
                {mod(dayNr, 3, 2)}
            </span>
        );
    }
}

export default WeekDay