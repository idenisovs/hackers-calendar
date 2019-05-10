import React from 'react';

import style from './Day.scss';

class Day extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span className={style['Day']}>
                1
            </span>
        );
    }
}

export default Day