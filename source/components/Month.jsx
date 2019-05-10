import React from 'react';

import style from './Month.scss';
import WeekDay from "./WeekDay";
import Week from "./Week";

class Month extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {month, weeks} = this.props.month;
        const weekDayNr = [ 1, 2, 3, 4, 5, 6, 7 ];

        return (
            <section className={style.Month}>
                <h2>
                    {month}
                </h2>
                <header>
                    {weekDayNr.map(dayNr => <WeekDay key={`weekday[${dayNr}]`} dayNr={dayNr} />)}
                </header>
                <section>
                    {weeks.map((week, idx) => <Week key={`month[${month}][${idx}]`} month={month} days={week} />)}
                </section>
            </section>
        );
    }
}

export default Month