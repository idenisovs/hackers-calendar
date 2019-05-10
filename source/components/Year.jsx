import React from 'react';

import style from './Year.scss';

class Year extends React.Component {
    constructor(props) {
        super(props);

        this.calendar = props.calendar;
    }

    render() {
        return (
            <h1 className={style.Year}>
                {this.calendar.year}
            </h1>
        );
    }
}

export default Year