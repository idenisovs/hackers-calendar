import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SmallYear from './SmallYear';
import mod from '../services/mod';

import style from './Year.scss';

class Year extends React.Component {
    constructor(props) {
        super(props);

        this.currentYear = new Date().getFullYear();
    }

    render() {
        const {calendar} = this.props;
        const changeYear = this.changeYear.bind(this);
        const reset = this.changeYear.bind(this, this.currentYear);

        const clickable = {
            [style['clickable']]: this.currentYear !== calendar.year
        };

        return (
            <header className={style.Year}>
                <SmallYear year={calendar.year-1} onClick={changeYear}/>

                <h1 className={classNames(clickable)} onClick={reset}>
                    0x{mod(calendar.year).toUpperCase()}
                </h1>

                <SmallYear year={calendar.year+1} onClick={changeYear}/>
            </header>
        );
    }

    changeYear(year) {
        this.props.onChange(year);
    }
}

Year.propTypes = {
    calendar: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Year
