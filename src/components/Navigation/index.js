// Core
import React, { Component } from 'react';
import { func } from 'prop-types';
import { NavLink } from 'react-router-dom';

// Instruments
import Styles from './styles.scss';
import pages from 'routes/pages';
import logo from '../../theme/assets/logosmall.png';

export default class Navigation extends Component {

    static propTypes = {
        fetchWatchlist: func
    };

    constructor () {
        super();

        this.getNavigation = ::this._getNavigation;
    }

    _getNavigation () {
        return [
            <NavLink
                exact
                activeClassName = { Styles.active }
                className = { Styles.movieTypeMenuBtn }
                key = '0'
                to = { `/feed${pages.popular}` }>
                Popular
            </NavLink>,
            <NavLink
                exact
                activeClassName = { Styles.active }
                className = { Styles.movieTypeMenuBtn }
                key = '1'
                to = { `/feed${pages.top_rated}` }>
                Top-Rated
            </NavLink>,
            <NavLink
                exact
                activeClassName = { Styles.active }
                className = { Styles.movieTypeMenuBtn }
                key = '2'
                to = { `/feed${pages.upcoming}` }>
                Upcoming
            </NavLink>,
            <NavLink
                exact
                activeClassName = { Styles.active }
                className = { Styles.movieTypeMenuBtn }
                key = '3'
                to = { `/feed${pages.now_playing}` }>
                Now-Playing
            </NavLink>,
            <NavLink
                exact
                activeClassName = { Styles.active }
                className = { Styles.movieTypeMenuBtn }
                key = '4'
                title = 'Watchlist'
                to = { pages.watchlist }
                onClick = { this.props.fetchWatchlist }>
                Watchlist
            </NavLink>
        ];
    }

    render () {

        const navigation = this.getNavigation();

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
