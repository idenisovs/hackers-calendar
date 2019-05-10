import React from 'react';

import style from './Application.scss';
import Year from "./components/Year";
import Calendar from './services/Calendar';

class Application extends React.Component {
    constructor(props) {
        super(props);

        this.calendar = new Calendar();
    }

    render() {
        return (
            <div className={style['Application']}>
                <Year calendar={this.calendar}/>
            </div>
        )
    }
}

export default Application