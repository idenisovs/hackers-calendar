import React from 'react';
import PropTypes from 'prop-types';
import mod from '../services/mod';

import style from './SmallYear.scss';

class SmallYear extends React.Component {
    render() {
        return (
            <h2 className={style.SmallYear}>
                {this.renderLabel()}
            </h2>
        );
    }

    renderLabel() {
        const {year} = this.props;
        const currentYear = (new Date()).getFullYear();
        const nextYear = currentYear + 1;
        const prevYear = currentYear - 1;

        if (prevYear > year || year > nextYear) {
            return null;
        }

        return (
            <span onClick={this.handleClick.bind(this)}>
                0x{mod(year).toUpperCase()}
            </span>
        )
    }
    
    handleClick() {
        const {year, onClick} = this.props;
        
        if (onClick) {
            onClick(year);
        }
    }
}

SmallYear.propTypes = {
    year: PropTypes.number.isRequired,
    onClick: PropTypes.func
};

export default SmallYear
