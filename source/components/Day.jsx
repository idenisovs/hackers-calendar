import React from 'react';
import classNames from 'classnames';

import style from './Day.scss';

class Day extends React.Component {
    render() {
        const {day} = this.props;

        if (!day) {
            return this.makePlaceholder();
        }

        const classes = {
            [style.Workday]: (day.weekDay <= 5),
            [style.Weekend]: (day.weekDay > 5)
        };

        return (
            <div className={classNames(classes)}>
                {day.day}
            </div>
        );
    }

    makePlaceholder() {
        return (
            <div className={style.Placeholder}></div>
        );
    }
}

export default Day