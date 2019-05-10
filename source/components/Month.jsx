import React from 'react';

import style from './Month.scss';

class Month extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {month} = this.props.month;

        return (
            <section className={style.Month}>
                <h2>
                    {month}
                </h2>
                <header>
                    1 2 3 4 5 6 7
                </header>
            </section>
        );
    }
}

export default Month