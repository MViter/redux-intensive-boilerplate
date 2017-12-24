// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Instruments
import { bool, object } from 'prop-types';
import Styles from './styles.scss';
import { List } from 'immutable';

// Components
import Catcher from 'components/Catcher';
import Spinner from 'components/Spinner';
import Movie from 'components/Movie';
import Navigation from 'components/Navigation';

// Actions
import feedActions from 'actions/feed';
import watchlistActions from 'actions/watchlist';
import uiActions from 'actions/ui';

class Feed extends Component {

    static propTypes = {
        actions:      object.isRequired,
        feedFetching: bool.isRequired,
        genres:       object.isRequired,
        //isInWatchlist: bool.isRequired,
        movies:       object.isRequired
    };

    static defaultProps = {
        genres: List(),
        movies: List()
    };

    constructor () {
        super();

        this.fetchMovies = ::this._fetchMovies;
        this.fetchWatchlist = ::this._fetchWatchlist;
        this.addToWatchlist = ::this._addToWatchlist;
        this.deleteFromWatchlist = ::this._deleteFromWatchlist;
        this.checkIsInWatchlist = ::this._checkIsInWatchlist;
    }

    componentWillMount () {

        const filter = this.props.match.params.filter; // eslint-disable-line
        this.props.actions.fetchMovies(filter);
    }
    componentWillReceiveProps (nextProps) {
        const type = this.props.match.params.filter; // eslint-disable-line

        if (nextProps.match.params.filter !== type) { // eslint-disable-line
            const filter = nextProps.match.params.filter; // eslint-disable-line

            this.props.actions.fetchMovies(filter);
        }
    }

    mapGenreIdToGenreName (id, genres = []) {

        const genre = genres.find((item) => item.id === id);

        if (genre) {
            return genre.name;
        }

        return '';
    }

    _fetchMovies (filter) {
        this.props.actions.fetchMovies(filter);
    }
    _fetchWatchlist () {
        this.props.actions.fetchWatchlist();
    }
    _addToWatchlist (movieToAdd) {
        this.props.actions.addToWatchlist(movieToAdd);
    }
    _deleteFromWatchlist (movieIdToDelete) {
        this.props.actions.deleteFromWatchlist(movieIdToDelete);
    }
    _checkIsInWatchlist (movieId) {
        this.props.actions.checkMovieInWatchlist(movieId);
    }

    render () {

        const { movies, genres, feedFetching } = this.props;

        const movieArray = movies.map(({
            id,
            vote_average:voteAverage,
            title,
            poster_path:posterPath,
            genre_ids:genreIds,
            overview,
            release_date:releaseDate }) => (
            (
                <Movie
                    addToWatchlist = { this.addToWatchlist }
                    checkIsInWatchlist = { this.checkIsInWatchlist }
                    deleteFromWatchlist = { this.deleteFromWatchlist }
                    feedFetching = { feedFetching }
                    genreIds = { genreIds }
                    genres = {
                        genreIds.reduce((accum, genreId) => {
                            if (accum) {
                                return `${accum}, ${this.mapGenreIdToGenreName(genreId, genres)}`;
                            }

                            return this.mapGenreIdToGenreName(genreId, genres);
                        }
                            , '')
                    }
                    id = { id }
                    //isInWatchlist = { this.props.isInWatchlist }
                    key = { id }
                    overview = { overview }
                    posterPath = { posterPath }
                    releaseDate = { releaseDate }
                    title = { title }
                    voteAverage = { voteAverage }
                />
            )
        ));

        return (
            <Catcher key = '0'>
                <section className = { Styles.grid } key = '1'>
                    <div className = { Styles.movieMenu }>
                        <Navigation fetchWatchlist = { this.fetchWatchlist } />
                    </div>
                    <span className = { Styles.typeOfDisplayedMovies } />
                    <div className = { Styles.contentWrap }>
                        { movieArray }
                    </div>
                </section>,
                <Spinner key = '2' spin = { feedFetching } />
            </Catcher>
        );
    }
}

const mapStateToProps = (state) => ({
    //feedFetching: state.ui.get('feedFetching'),
    isInWatchlist: state.checkMovieInWatchlist.isInWatchlist,
    feedFetching:  state.ui.feedFetching,
    movies:        state.feed.movies,
    genres:        state.feed.genres
});

const { startFetchingFeed, stopFetchingFeed } = uiActions;
const { fetchMovies } = feedActions;
const { fetchWatchlist, addToWatchlist, deleteFromWatchlist, checkMovieInWatchlist } = watchlistActions;

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
        { fetchMovies, fetchWatchlist, addToWatchlist, deleteFromWatchlist, checkMovieInWatchlist, startFetchingFeed, stopFetchingFeed }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
