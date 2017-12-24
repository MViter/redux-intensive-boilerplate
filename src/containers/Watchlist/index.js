// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Instruments
import { object, bool, string } from 'prop-types';
import Styles from './styles.scss';

// Actions
import uiActions from 'actions/ui';
import watchlistActions from 'actions/watchlist';
import detailedMovieActions from 'actions/detailedMovie';

// Components
import Catcher from 'components/Catcher';
import Spinner from 'components/Spinner';
import Movie from 'components/Movie';
import Navigation from 'components/Navigation';

class Watchlist extends Component {

    static defaultProps = {
        watchlist: []
    };
    static propTypes = {
        actions:      object.isRequired,
        feedFetching: bool.isRequired,
        watchlist:    object.isRequired,
        path:         string
    };

    componentWillMount () {
        this.props.actions.fetchWatchlist();
    }

    componentWillReceiveProps () {
        this.forceUpdate();
    }

    render () {
        const { watchlist, feedFetching } = this.props;

        const path = this.props.match.path; // eslint-disable-line

        //production_companies: []
        //production_countries

        const watchlistMovieArray = watchlist.map(({
            budget,
            genres,
            id,
            overview,
            posterPath,
            releaseDate,
            revenue,
            title,
            voteAverage
        }) =>
            (
                <Movie
                    budget = { budget }
                    deleteFromWatchlist = { this.props.actions.deleteFromWatchlist }
                    genres = { genres }
                    id = { id }
                    key = { id }
                    overview = { overview }
                    path = { path }
                    posterPath = { `https://image.tmdb.org/t/p/w500${posterPath}` }
                    releaseDate = { releaseDate }
                    revenue = { revenue }
                    title = { title }
                    voteAverage = { voteAverage }
                />
            ));

        const watchlistContent = watchlistMovieArray.count() === 1 && watchlistMovieArray.first().props.title === '' || watchlistMovieArray.count() === 0 ?
            <div>No movies in your watchlist</div>:
            watchlistMovieArray;

        return (
            <Catcher key = '0'>
                <section className = { Styles.watchlistGrid } key = '1' >
                    <div>
                        <Navigation fetchWatchlist = { this.props.actions.fetchWatchlist } />
                    </div>
                    <div className = { Styles.contentWrap } >
                        { watchlistContent }
                    </div>
                </section>,
                <Spinner key = '2' spin = { feedFetching } />
            </Catcher>
        );
    }
}

const mapStateToProps = (state) =>
    ({
        feedFetching: state.ui.feedFetching,
        watchlist:    state.watchlist
    });

const { startFetchingFeed, stopFetchingFeed } = uiActions;
const { fetchWatchlist, deleteFromWatchlist } = watchlistActions;
const { fetchDetailedMovie } = detailedMovieActions;

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        fetchWatchlist,
        deleteFromWatchlist,
        fetchDetailedMovie,
        startFetchingFeed,
        stopFetchingFeed }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Watchlist);
