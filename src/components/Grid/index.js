// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Instruments
import { array, func } from 'prop-types';
import Styles from './styles.scss';
import actions from 'actions/feed';

// Components
import Movie from '../Movie';
import Menu from '../Menu';

class Grid extends Component {

    static propTypes = {
        dispatch: func.isRequired,
        genres:   array.isRequired,
        results:  array.isRequired
    };

    static defaultProps = {
        results: [],
        genres:  []
    };

    constructor () {
        super();

        this.fetchTopRatedMovies = ::this._fetchTopRatedMovies;
        this.fetchNewMovies = ::this._fetchNewMovies;
        this.fetchPopularMovies = ::this._fetchPopularMovies;
        this.fetchUpcomingMovies = ::this._fetchUpcomingMovies;
    }

    mapGenreIdToGenreName(id, genres = []) {

        const genre = genres.find(item => item.id === id);

        if (genre) {
            return genre.name;
        }

        return '';
    }

    componentDidMount () {
        //this.props.actions.fetchNewMovies();
        this.props.dispatch(actions.fetchGenres());
        this.props.dispatch(actions.fetchTopRatedMovies());
    }

    _fetchTopRatedMovies () {
        this.props.dispatch(actions.fetchTopRatedMovies());
    }

    _fetchNewMovies () {
        this.props.dispatch(actions.fetchNewMovies());
    }

    _fetchPopularMovies () {
        this.props.dispatch(actions.fetchPopularMovies());
    }

    _fetchUpcomingMovies () {
        this.props.dispatch(actions.fetchUpcomingMovies());
    }

    render () {

        const { results, genres } = this.props;

        const movieArray = results.map(({
            id,
            vote_average:voteAverage,
            title,
            poster_path:posterPath,
            genre_ids:genreIds,
            overview,
            release_date:releaseDate }, index) => {
            return (
                <Movie
                    genres = {
                        genreIds.reduce((accum, genreId) => {
                            if (accum) {
                                return `${accum}, ${this.mapGenreIdToGenreName(genreId, genres)}`;
                            }

                            return this.mapGenreIdToGenreName(genreId, genres);
                        }
                            , '')
                    }
                    genreIds = { genreIds }
                    id = { id }
                    key = { index }
                    overview = { overview }
                    posterPath = { posterPath }
                    releaseDate = { releaseDate }
                    title = { title }
                    voteAverage = { voteAverage }
                />
            );
        });

        return (
            <section className = { Styles.grid } >
                <div className = { Styles.movieMenu }>
                    <Menu
                        fetchNewMovies = { this.fetchNewMovies }
                        fetchPopularMovies = { this.fetchPopularMovies }
                        fetchTopRatedMovies = { this.fetchTopRatedMovies }
                        fetchUpcomingMovies = { this.fetchUpcomingMovies }
                    />
                </div>
                <span className = { Styles.typeOfDisplayedMovies }></span>
                <div className = { Styles.contentWrap }>
                    { movieArray }
                </div>
            </section>
        );
    }
}

export default connect()(Grid);