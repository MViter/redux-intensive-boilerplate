// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Instruments
import {  bool, func } from 'prop-types';
import authActions from 'actions/auth';
import feedActions from 'actions/feed';
import Styles from './styles.scss';

// Components
import Feed from 'containers/Feed';
import Spinner from 'components/Spinner';
import Navigation from 'components/Navigation';

class Guest extends Component {
    static propTypes = {
        authFetching: bool.isRequired
        //loginGuest:   func.isRequired
    };

    // componentDidMount () {
    //   this.props.dispatch(authActions.loginGuest());
    // }

    render () {
        const { authFetching } = this.props;

        return [
            <Spinner key = '0' spin = { authFetching } />,
            <Navigation key = '1' />,
            <Feed key = '2' />
        ];
    }
}

const mapStateToProps = (state) => ({
    authFetching: state.ui.get('authFetching')
});

const mapDispatchToProps = (dispatch) => ({
    loginGuest: bindActionCreators(authActions.loginGuest, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Guest);
