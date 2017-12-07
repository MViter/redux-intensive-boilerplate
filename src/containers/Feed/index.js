// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Instruments
import { array, bool, object } from 'prop-types';
import feedActions from 'actions/feed';

// Components
import Grid from 'components/Grid';

class Feed extends Component {

    static propTypes = {
        //actions:      object.isRequired
       // feedFetching: bool.isRequired,
        genres:  array.isRequired,
        results: object.isRequired
        //profile:      object.isRequired
    };

    render () {

        const { results, genres } = this.props;

        return (
            <Grid genres = { genres } key = '1' results = { results } />
        );

    }
}

const mapStateToProps = (state) => ({
    results:  state.feed.results,
    genres: state.feed.genres
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(feedActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
