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
            <h1 className={style.Year}>
                0x<span>{mod(calendar.year)}</span>
            </h1>
        );
    }
}

export default Year