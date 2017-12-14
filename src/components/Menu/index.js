// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.scss';
import { func } from 'prop-types';

export default class Menu extends Component {

    static PropTypes = {
        fetchNewMovies:      func.isRequired,
        fetchPopularMovies:  func.isRequired,
        fetchTopRatedMovies: func.isRequired,
        fetchUpcomingMovies: func.isRequired
    };
    constructor () {
        super();
        this.updateStyleEventTarget = ::this._updateStyleEventTarget;
    }
    _updateStyleEventTarget (event) {

    }

    render () {

        const { fetchNewMovies, fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies } = this.props;

        return (
            <section>
                <h1>In Menu!</h1>
                <ul className = { Styles.movieMenu }>
                    <li key = '0'><a href = '#' onClick = { fetchPopularMovies } >Popular</a></li>
                    <li key = '1'><a href = '#' onClick = { fetchTopRatedMovies } >Top-Rated</a></li>
                    <li key = '2'><a href = '#' onClick = { fetchUpcomingMovies } >Upcoming</a></li>
                    <li key = '3'><a href = '#' onClick = { fetchNewMovies } >New</a></li>
                </ul>
            </section>
        );
    }
}