// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Instruments
import { bool, object } from 'prop-types';
import feedActions from 'actions/feed';

// Components
import Grid from 'components/Grid';
import Spinner from 'components/Spinner';

class Feed extends Component {

    static propTypes = {
        feedFetching: bool.isRequired,
        genres:       object.isRequired,
        results:      object.isRequired
    };

    static defaultProps = {
        genres:  {},
        results: []
    };

    render () {

        const { results, genres, feedFetching } = this.props;

        return [
            <Grid genres = { genres } key = '0' results = { results } />,
            <Spinner key = '1' spin = { feedFetching } />
        ];
    }
}

const mapStateToProps = (state) => ({
    feedFetching: state.ui.get('feedFetching'),
    results:      state.feed.results,
    genres:       state.feed.genres
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(feedActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
