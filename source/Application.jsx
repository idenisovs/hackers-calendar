import React from 'react';

import Calendar from './services/calendar/Calendar';
import Year from './components/Year';
import Month from './components/Month';

import style from './Application.scss';

class Application extends React.Component {
    constructor(props) {
        super(props);

        const date = new Date();

        this.state = {
            year: date.getFullYear()
        };
    }

    render() {
        const calendar = new Calendar(this.state.year);

        return (
            <div className={style['Application']}>
                <Year calendar={calendar} onChange={this.onYearChanged.bind(this)}/>
                <div className={style['Application__Calendar']}>
                    {calendar.months.map((m, idx) => <Month key={`month[${idx}]`} month={m}/>)}
                </div>
            </div>
        )
    }

    onYearChanged(year) {
        this.setState({
            year: year
        });
    }
}

export default Application
