import React from 'react';

import style from './Application.scss';
import Year from "./components/Year";

class Application extends React.Component {
    render() {
        return (
            <div className={style['Application']}>
                <Year/>
            </div>
        )
    }
}

export default Application