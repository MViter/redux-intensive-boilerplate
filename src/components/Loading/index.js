// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.scss';

// Components

export default class Movie extends Component {

    render () {
        return (
            <section className = { Styles.loading }>
                <div className = { Styles.loadingContent }>
                    <div className = { Styles.text }>
                        <p>Loading page</p>
                    </div>
                    <div className = { Styles.picture } />
                </div>
            </section>

        );
    }
}
