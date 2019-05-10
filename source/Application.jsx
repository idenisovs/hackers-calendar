import React from 'react';
import Year from "./components/Year";
import Calendar from './services/Calendar';
import Month from "./components/Month";

import style from './Application.scss';

class Application extends React.Component {
    constructor(props) {
        super(props);

        this.calendar = new Calendar();
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