// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Instruments
import { func, object, array } from 'prop-types';
import Styles from './styles.scss';

// Actions
import feedActions from 'actions/feed';
import watchlistActions from 'actions/watchlist';

// Components
import Movie from '../Movie';
import Navigation from '../Navigation';

class Grid extends Component {

    static propTypes = {
        dispatch: func.isRequired,
        genres:   object.isRequired,
        results:  array.isRequired
    };

    static defaultProps = {
        results: [],
        genres:  []
    };

    constructor () {
        super();

        this.fetchMovies = ::this._fetchMovies;
        this.fetchTopRatedMovies = ::this._fetchTopRatedMovies;
        this.fetchNewMovies = ::this._fetchNewMovies;
        this.fetchPopularMovies = ::this._fetchPopularMovies;
        this.fetchUpcomingMovies = ::this._fetchUpcomingMovies;
        this.fetchWatchlist = ::this._fetchWatchlist;
        this.addToWatchlist = ::this._addToWatchlist;
    }
    componentWillMount () {
        console.log('In componentWillMount');
        //console.log('this.props.match.params = ', this.props.match.params);
        //this.props.actions.fetchDetailedMovie(this.props.match.params.id);
        //const type = this.props.params.match.params.filter;
        const type = 'popular';

        this.props.dispatch(feedActions.fetchGenres());
        this.props.dispatch(feedActions.fetchMovies(type));
    }
    componentWillReceiveProps (nextProps) {
        console.log('In componentWillReceiveProps');
        //const typeOfFetchingMovies = this.props.match.params.filter;
        const filter = 'now_playing';
       console.log('nextProps = ', nextProps);
        console.log('this.props = ', this.props);
        //this.props.dispatch(feedActions.fetchMovies(filter));

        // if(nextProps.match.params.filter !== typeOfFetchingMovies) {
        //     const filter = nextProps.match.params.filter;
        //
        //     this.props.dispatch(feedActions.fetchMovies(filter));
        // }
    }

    mapGenreIdToGenreName (id, genres = []) {

        const genre = genres.find((item) => item.id === id);

        if (genre) {
            return genre.name;
        }

        return '';
    }

    _fetchMovies () {
        this.props.dispatch(feedActions.fetchMovies());
    }

    _fetchTopRatedMovies () {
        this.props.dispatch(feedActions.fetchTopRatedMovies());
    }

    _fetchNewMovies () {
        this.props.dispatch(feedActions.fetchNewMovies());
    }

    _fetchPopularMovies () {
        this.props.dispatch(feedActions.fetchPopularMovies());
    }

    _fetchUpcomingMovies () {
        this.props.dispatch(feedActions.fetchUpcomingMovies());
    }

    _fetchWatchlist () {
        this.props.dispatch(watchlistActions.fetchWatchlist());
    }

    _addToWatchlist (movieToAddId) {
        this.props.dispatch(watchlistActions.addToWatchlist(movieToAddId));
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
            release_date:releaseDate }, index) => (
            (
                <Movie
                    addToWatchlist = { this.addToWatchlist }
                    genreIds = { genreIds }
                    // genres = {
                    //     genreIds.reduce((accum, genreId) => {
                    //         if (accum) {
                    //             return `${accum}, ${this.mapGenreIdToGenreName(genreId, genres)}`;
                    //         }
                    //
                    //         return this.mapGenreIdToGenreName(genreId, genres);
                    //     }
                    //         , '')
                    // }
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

        return (
            <section className = { Styles.grid } >
                <div className = { Styles.movieMenu }>
                    <Navigation
                        fetchMovies = { this.fetchMovies }
                        fetchNewMovies = { this.fetchNewMovies }
                        fetchPopularMovies = { this.fetchPopularMovies }
                        fetchTopRatedMovies = { this.fetchTopRatedMovies }
                        fetchUpcomingMovies = { this.fetchUpcomingMovies }
                        fetchWatchlist = { this.fetchWatchlist }
                    />
                </div>
                <span className = { Styles.typeOfDisplayedMovies } />
                <div className = { Styles.contentWrap }>
                    { movieArray }
                </div>
            </section>
        );
    }
}

export default connect()(Grid);
