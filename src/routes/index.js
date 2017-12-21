// Core
import React, { Component } from 'react';
import { bool, func, object } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

// Instruments
import uiActions from 'actions/ui';
import feedActions from 'actions/feed';

//Components
import General from './General';
import Loading from '../components/Loading';

class Routes extends Component {
    static propTypes = {
        fetchGenres: func.isRequired,
        history:     object.isRequired,
        initialize:  func.isRequired,
        initialized: bool.isRequired,
        location:    object.isRequired
    };

    componentDidMount () {
        const { initialize, fetchGenres } = this.props;

        initialize();
        fetchGenres();
    }

    render () {
        const { initialized } = this.props;

        return (
            initialized ? <General /> : (<Loading />)
        );
    }
}


const mapStateToProps = (state) => ({
    initialized: state.ui.initialized,
    genres:      state.feed.genres
    // initialized: state.ui.get('initialized')
});

const { initialize } = uiActions;
const { fetchGenres } = feedActions;

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ initialize, fetchGenres }, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
