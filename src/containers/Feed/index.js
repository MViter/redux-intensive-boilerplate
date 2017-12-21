// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Instruments
import { bool, object, array, func } from 'prop-types';
import Styles from './styles.scss';

// Components
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
        dispatch:     func.isRequired,
        feedFetching: bool.isRequired,
        genres:       array.isRequired,
        results:      array.isRequired
    };

    static defaultProps = {
        genres:  [],
        results: []
    };

    constructor () {
        super();

        this.fetchMovies = ::this._fetchMovies;
        this.fetchWatchlist = ::this._fetchWatchlist;
        this.addToWatchlist = ::this._addToWatchlist;
        // this.getMovies = ::this._getMovies;
    }

    componentWillMount () {

        const filter = this.props.match.params.filter;
        //this.props.actions.fetchGenres();
        this.props.actions.fetchMovies(filter);
    }
    componentWillReceiveProps (nextProps) {
        const type = this.props.match.params.filter;

        if (nextProps.match.params.filter !== type) {
            const filter = nextProps.match.params.filter;

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

    render () {

        const { results, genres, feedFetching } = this.props;

        const movieArray = results.map(({
            id,
            vote_average:voteAverage,
            title,
            poster_path:posterPath,
            genre_ids:genreIds,
            overview,
            release_date:releaseDate }, index) => (
            (
                <Movie
                    addToWatchlist = { this.addToWatchlist }
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
                    key = { index }
                    overview = { overview }
                    posterPath = { posterPath }
                    releaseDate = { releaseDate }
                    title = { title }
                    voteAverage = { voteAverage }
                />
            )
        ));

        // return [
        //     <Grid genres = { genres } key = '0' results = { results } />,
        //     <Spinner key = '1' spin = { feedFetching } />
        // ];

        return [
            <section className = { Styles.grid } key = '0'>
                <div className = { Styles.movieMenu }>
                    <Navigation fetchWatchlist = { this.fetchWatchlist } />
                </div>
                <span className = { Styles.typeOfDisplayedMovies } />
                <div className = { Styles.contentWrap }>
                    { movieArray }
                </div>
            </section>,
            <Spinner key = '1' spin = { feedFetching } />
        ];
    }
}

const mapStateToProps = (state) => ({
    //feedFetching: state.ui.get('feedFetching'),
    feedFetching: state.ui.feedFetching,
    results:      state.feed.results,
    genres:       state.feed.genres
});

const { startFetchingFeed, stopFetchingFeed } = uiActions;
const { fetchMovies } = feedActions;
const { fetchWatchlist, addToWatchlist, deleteFromWatchlist } = watchlistActions;

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
        { fetchMovies, fetchWatchlist, addToWatchlist, deleteFromWatchlist, startFetchingFeed, stopFetchingFeed }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
