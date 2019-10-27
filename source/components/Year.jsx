import React from 'react';

import mod from '../services/mod';

import style from './Year.scss';

class Year extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {calendar} = this.props;

        return (
            <header className={style.Year}>
                <h2>
                    0x{mod(calendar.year-1).toUpperCase()}
                </h2>
                <h1>
                    0x{mod(calendar.year).toUpperCase()}
                </h1>
                <h2>
                    0x{mod(calendar.year+1).toUpperCase()}
                </h2>
            </header>
        );
    }
}

export default Year
