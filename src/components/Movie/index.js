// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.scss';
import { func, string, number } from 'prop-types';
import pages from 'routes/pages';
import { NavLink } from 'react-router-dom';

export default class Movie extends Component {

    static propTypes = {
        genres:              string.isRequired,
        id:                  number.isRequired,
        index:               string.isRequired,
        overview:            string.isRequired,
        releaseDate:         string.isRequired,
        title:               string.isRequired,
        voteAverage:         number.isRequired,
        addToWatchlist:      func,
        deleteFromWatchlist: func,
        path:                string,
        poster_path:         string, // eslint-disable-line camelcase
        posterPath:          string
    };

    static defaultProps = {
        genres:      '',
        id:          0,
        index:       '',
        overview:    '',
        posterPath:  '',
        releaseDate: '',
        title:       '',
        voteAverage: 0
    };

    constructor () {
        super();

        this.handleAddMovieToWatchlist = ::this._handleAddMovieToWatchlist;
        this.heartStyle = ::this._heartStyle;
        this.handleDeleteMovieFromWatchlist = ::this._handleDeleteMovieFromWatchlist;
    }

    _handleAddMovieToWatchlist () {
        const {
            id,
            index,
            genres,
            overview,
            posterPath,
            releaseDate,
            title,
            voteAverage
        } = this.props;

        const movieToAdd = {
            id,
            index,
            genres,
            overview,
            posterPath,
            releaseDate,
            title,
            voteAverage
        };

        this.props.addToWatchlist(movieToAdd);
    }

    _handleDeleteMovieFromWatchlist () {
        this.props.deleteFromWatchlist(this.props.id);
    }

    _heartStyle (movieId) {
        const watchlistStorage = localStorage.getItem('Watchlist') || [];
        const isMovieInLocalStorage = watchlistStorage.indexOf(movieId) !== -1;

        return isMovieInLocalStorage ?
            <a className = { Styles.redHeart } title = { 'Delete from Watchlist' } onClick = { this.handleDeleteMovieFromWatchlist } />:
            <a className = { Styles.blackHeart } title = { 'Add to Watchlist' } onClick = { this.handleAddMovieToWatchlist } />;

    }

    render () {
        const {
            id,
            index,
            genres,
            overview,
            path,
            releaseDate,
            title,
            voteAverage
        } = this.props;

        const abilityToDeleteFromWatchlist = path === '/watchlist' ?
            <a className = { Styles.cross } title = { 'Delete from Watchlist' } onClick = { this.handleDeleteMovieFromWatchlist } >x</a> :
            null;

        const abilityToAddToWatchlist = path !== '/watchlist'? this.heartStyle(this.props.id) : null;

        const posterUrl = this.props.poster_path ? this.props.poster_path : this.props.posterPath;
        const adaptedPosterPath =
            posterUrl.indexOf('https://image.tmdb.org/t/p/w500')!== -1 ?
                posterUrl :
                `https://image.tmdb.org/t/p/w500/${posterUrl}`;

        return (
            <section className = { Styles.movie } key = { index }>
                <div className = { Styles.poster } >
                    <img alt = { title } src = { adaptedPosterPath } />
                </div>
                <div className = { Styles.info }>
                    <p className = { Styles.infoHeader }>
                        <a className = { Styles.infoHeader_title } href = '#'>{ title }</a>
                        <span className = { Styles.infoHeader_vote }>{ voteAverage }</span>
                        { abilityToDeleteFromWatchlist }
                    </p>
                    <p className = { Styles.meta_flex }>
                        <span className = { Styles.releaseDate }>{ releaseDate }</span>
                        <span className = { Styles.genres } >{ genres } </span>
                    </p>
                    <p className = { Styles.overview }>
                        { overview }
                    </p>
                    <p className = { Styles.infoFooter }>
                        <NavLink
                            activeClassName = { Styles.active }
                            className = { Styles.viewMove }
                            title = 'Open details'
                            to = { `${pages.detailedmovie}/${id}` }>
                            Details
                        </NavLink>
                        { abilityToAddToWatchlist }
                    </p>
                </div>
            </section>
        );
    }
}
