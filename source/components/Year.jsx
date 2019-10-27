import React from 'react';
import PropTypes from 'prop-types';
import SmallYear from './SmallYear';
import mod from '../services/mod';

import style from './Year.scss';

class Year extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {calendar} = this.props;
        const changeYear = this.changeYear.bind(this);

        return (
            <header className={style.Year}>
                <SmallYear year={calendar.year-1} onClick={changeYear}/>
                <h1>
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
