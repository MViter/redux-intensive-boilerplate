// Core
import React, { Component } from 'react';
import { func } from 'prop-types';
import { NavLink } from 'react-router-dom';

// Instruments
import Styles from './styles.scss';
import pages from 'routes/pages';
import logo from '../../theme/assets/logosmall.png';

// Components
//import Menu from 'components/Menu';

export default class Navigation extends Component {

    static propTypes = {
        fetchNewMovies:      func.isRequired,
        fetchPopularMovies:  func.isRequired,
        fetchTopRatedMovies: func.isRequired,
        fetchUpcomingMovies: func.isRequired
    };

    constructor () {
        super();

        this.getNavigation = ::this._getNavigation;
    }
    _getNavigation () {

        const { fetchNewMovies, fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies } = this.props;

        return [
            <NavLink
                activeClassName = { Styles.active }
                className = { Styles.movieTypeMenuBtn }
                key = '0'
                to = { pages.popular }
                onClick = { fetchPopularMovies }>
                Popular
            </NavLink>,
            <NavLink
                activeClassName = { Styles.active }
                className = { Styles.movieTypeMenuBtn }
                key = '1'
                to = { pages['top-rated'] }
                onClick = { fetchTopRatedMovies }>
                Top-Rated
            </NavLink>,
            <NavLink
                activeClassName = { Styles.active }
                className = { Styles.movieTypeMenuBtn }
                key = '2'
                to = { pages.upcoming }
                onClick = { fetchUpcomingMovies } >
                Upcoming
            </NavLink>,

            <NavLink
                activeClassName = { Styles.active }
                className = { Styles.movieTypeMenuBtn }
                key = '3'
                to = { pages.new }
                onClick = { fetchNewMovies }>
                New
            </NavLink>,
            <NavLink
                activeClassName = { Styles.active }
                className = { Styles.movieTypeMenuBtn }
                key = '4'
                to = { pages.watchlist } >
                See Watchlist
            </NavLink>
        ];

    }

    render () {

        const navigation = this.getNavigation();
        //const dropDownMenu = this.getDropDown();

        return (<section className = { Styles.navigation }>
            <div className = { Styles.logo }>
                <a href = 'https://www.themoviedb.org/'>
                    <img src = { logo } />
                </a>
            </div>
            <div className = { Styles.movieTypeMenu }>
                { navigation }
            </div>
        </section>);
    }
}