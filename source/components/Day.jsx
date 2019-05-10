import React from 'react';
import classNames from 'classnames';
import mod from '../services/mod';

import style from './Day.scss';

class Day extends React.Component {
    render() {
        const {date} = this.props;

        if (!date) {
            return this.makePlaceholder();
        }

        const classes = {
            [style.Workday]: (date.weekDay <= 5),
            [style.Weekend]: (date.weekDay > 5),
            [style.Today]: date.isToday
        };

        return (
            <div className={classNames(classes)}>
                {mod(date.day)}
            </div>
        );
    }

    makePlaceholder() {
        return (
            <div className={style.Placeholder}> </div>
        );
    }
}

export default Day