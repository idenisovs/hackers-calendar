import React from 'react';

import WeekDay from './WeekDay';
import Week from './Week';
import mod from '../services/mod';

import style from './Month.scss';

class Month extends React.Component {
    constructor(props) {
        super(props);

        this.myRef = React.createRef();
    }

    componentDidMount() {
        const now = new Date();

        const {month} = this.props.month;

        if (now.getMonth() + 1 === month) {
            setTimeout(() => {
                window.scrollTo(0, this.myRef.current.offsetTop);
            }, 100);
        }
    }

    render() {
        const {month, weeks} = this.props.month;
        const weekDayNr = [ 1, 2, 3, 4, 5, 6, 7 ];

        return (
            <section className={style.Month} ref={this.myRef}>
                <h2>
                    {mod(month)}
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