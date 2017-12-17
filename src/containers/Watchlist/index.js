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
        const { watchlist } = this.props;
        // const { results } = this.props;

        const { feedFetching } = this.props;

        const watchlistToIterable = watchlist.map((movieId, index) => (
            <div key = { index }>{ movieId}</div>
        ));

        return [
            feedFetching?
                <Spinner key = '1' spin = { feedFetching } />
                :
                <section className = { Styles.watchlist } key = '1' >
                    <div>{ watchlistToIterable }</div>
                </section>
        ];
    }
}

const mapStateToProps = (state) => {
    console.log('state: ', state);

    return {
        feedFetching: state.ui.get('feedFetching'),
        results:      state.feed.results,
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
