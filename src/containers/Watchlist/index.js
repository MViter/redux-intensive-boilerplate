// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Instruments
import { object, bool } from 'prop-types';
import Styles from './styles.scss';

// Actions
import uiActions from 'actions/ui';
import watchlistActions from 'actions/watchlist';
import detailedMovieActions from 'actions/feedDetailedMovie';

// Components
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
        watchlist:    object.isRequired
    };

    componentWillMount () {
        this.props.actions.fetchWatchlist();
    }

    render () {
        const { watchlist, feedFetching } = this.props;

        const path = this.props.match.path;

        const watchlistMovieArray = watchlist.map(({
            genres,
            id,
            overview,
            posterPath,
            releaseDate,
            title,
            voteAverage
        }, index) =>
            (
                <Movie
                    genres = { genres }
                    id = { id }
                    key = { index }
                    overview = { overview }
                    path = { path }
                    posterPath = { `https://image.tmdb.org/t/p/w500${posterPath}` }
                    releaseDate = { releaseDate }
                    title = { title }
                    voteAverage = { voteAverage }
                />
            ));

        const watchlistContent = watchlistMovieArray.count() === 1 && watchlistMovieArray.first().props.title === '' ?
            <div>No movies in your watchlist</div>:
            watchlistMovieArray;

        return [
            feedFetching ?
                <Spinner key = '0' spin = { feedFetching } />
                :
                <section className = { Styles.watchlistGrid } key = '0' >
                    <div>
                        <Navigation fetchWatchlist = { this.fetchWatchlist } />
                    </div>
                    <div className = { Styles.contentWrap } >
                        { watchlistContent }
                    </div>
                </section>
        ];
    }
}

const mapStateToProps = (state) => {
    return {
        feedFetching: state.ui.feedFetching,
        //feedFetching: state.ui.get('feedFetching'),
        watchlist:    state.watchlist
    };
};

const { startFetchingFeed, stopFetchingFeed } = uiActions;
const { fetchWatchlist } = watchlistActions;
const { fetchDetailedMovie } = detailedMovieActions;

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ fetchWatchlist, fetchDetailedMovie, startFetchingFeed, stopFetchingFeed }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Watchlist);
