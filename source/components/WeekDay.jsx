import React from 'react';
import classNames from 'classnames';

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
                {dayNr}
            </span>
        );
    }
}

export default WeekDay