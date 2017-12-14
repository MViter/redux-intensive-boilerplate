// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Instruments
import {  bool, func } from 'prop-types';
import authActions from 'actions/auth';
import Styles from './styles.scss';

// Components
import Grid from 'components/Grid';
import Spinner from 'components/Spinner';
import Navigation from 'components/Navigation';
import LoginForm from 'components/Forms/Login';

class Login extends Component {
    static propTypes = {
        authFetching: bool.isRequired,
        login: func.isRequired
    };

    render () {
        const { authFetching, login } = this.props;

        return[
             <Spinner key = '0' spin = { authFetching } />,
             <Navigation key = '1' />,
             <div key = '2' className = { Styles.loginpageInfo }>
                 <h1>Login to your account</h1>
                 <LoginForm  />
             </div>
         ];
    }
}


const mapStateToProps = (state) => ({
    authFetching: state.ui.get('authFetching')
});

const mapDispatchToProps = (dispatch) => ({
    login: bindActionCreators(authActions.login, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);