import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import mod from '../services/mod';

import style from './SmallYear.scss';

class SmallYear extends React.Component {
    constructor(props) {
        super(props);

        this.isClickable = true;
    }

    render() {
        this.isClickable = !this.isYearBoundaryReached();

        const clickable = { [style['clickable']]: this.isClickable };
        const styles = classNames(style.SmallYear, clickable);

        return (
            <h2 className={styles}>
                {this.renderLabel()}
            </h2>
        );
    }

    renderLabel() {
        const {year} = this.props;
        const label = `0x${mod(year).toUpperCase()}`;

        return (
            <span onClick={this.handleClick.bind(this)}>
                {label}
            </span>
        )
    }
    
    handleClick() {
        const {onClick} = this.props;

        if (!this.isClickable || !onClick) {
            return;
        }

        onClick(this.props.year);
    }

    isYearBoundaryReached() {
        const {year} = this.props;

        const currentYear = (new Date()).getFullYear();

        const nextYear = currentYear + 1;
        const prevYear = currentYear - 1;

        return prevYear > year || year > nextYear;
    }
}

SmallYear.propTypes = {
    year: PropTypes.number.isRequired,
    onClick: PropTypes.func
};

export default SmallYear
