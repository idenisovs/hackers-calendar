import React from 'react';
import Day from "./Day";

import style from './Week.scss';

class Week extends React.Component {
    render() {
        const {month} = this.props;

        return (
            <section className={style.Week}>
                {this.props.days.map((day, idx) => {
                    const key = `month[${month}][${idx}]`;
                    
                    return (<Day key={key} day={day}/>);
                })}
            </section>
        );
    }
}

export default Week