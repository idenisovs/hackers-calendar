import React from 'react';

import style from './Year.scss';

class Year extends React.Component {
    render() {
        return (
            <h1 className={style.Year}>
                {this.getYear()}
            </h1>
        );
    }

    getYear() {
        const date = new Date();

        return date.getFullYear();
    }
}

export default Year