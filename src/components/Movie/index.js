// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.scss';
import { func, string, number } from 'prop-types';
import pages from 'routes/pages';
import { NavLink } from 'react-router-dom';

export default class Movie extends Component {

    static propTypes = {
        addToWatchlist: func.isRequired,
        genres:         string.isRequired,
        id:             number.isRequired,
        index:          string.isRequired,
        overview:       string.isRequired,
        posterPath:     string.isRequired,
        releaseDate:    string.isRequired,
        title:          string.isRequired,
        voteAverage:    number.isRequired
    };

    static defaultProps = {
        genres:      '',
        id:          '',
        index:       '',
        overview:    '',
        posterPath:  '',
        releaseDate: '',
        title:       '',
        voteAverage: 0
    };

    constructor () {
        super();

        this.handleLikeMovie = ::this._handleLikeMovie;
        this.likeDesign = ::this._likeDesign;

    }

    _handleLikeMovie () {
        const movieToAdd = this.props.id;

        this.props.addToWatchlist(movieToAdd);
    }

    _likeDesign () {
        return <a alt = 'Add to wishlist' className = { Styles.heart } title = { 'Add to Watchlist' } onClick = { this.handleLikeMovie } />;
    }

    render () {

        const movieTitle = this.props.title;
        const addToWatchlist = this._likeDesign(movieTitle);

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

        const adaptedPosterPath = `https://image.tmdb.org/t/p/w500/${posterPath}`;
        const linkToMovie = `https://www.themoviedb.org/movie/${id}`;

        return (

            <section className = { Styles.movie } key = { index }>
                <div className = { Styles.poster } >
                    <a href = { linkToMovie }>
                        <img alt = { title } src = { adaptedPosterPath } />
                    </a>
                </div>

                <div className = { Styles.info }>
                    <p className = { Styles.infoHeader }>
                        <a className = { Styles.infoHeader_title } href = '#'>{ title }</a>
                        <span className = { Styles.infoHeader_vote }>{ voteAverage }</span>
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
                            title = 'Details'
                            to = { `${pages.detailedmovie}/${id}` }>
                            Details
                        </NavLink>
                        { addToWatchlist }
                    </p>

                </div>
            </section>

        );
    }
}
