import React from 'react';

import Calendar from './services/calendar/Calendar';
import Year from './components/Year';
import Month from './components/Month';

import style from './Application.scss';

class Application extends React.Component {
    constructor(props) {
        super(props);

        this.calendar = new Calendar();

        console.log(this.calendar);
    }

    render() {
        return (
            <div className={style['Application']}>
                <Year calendar={this.calendar}/>
                <div className={style['Application__Calendar']}>
                    {this.calendar.months.map((m, idx) => <Month key={`month[${idx}]`} month={m}/>)}
                </div>
            </div>
        )
    }
}

export default Application