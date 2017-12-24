// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.scss';

export default class Movie extends Component {

    render () {
        return (
            <section className = { Styles.loading }>
                <div className = { Styles.loadingContent }>
                    <div className = { Styles.text }>
                        <p>Loading ...</p>
                        <p className = { Styles.additionalText } >for now just look at this awesome fruits</p>
                    </div>
                    <div className = { Styles.picture } />
                </div>
            </section>

        );
    }
}
