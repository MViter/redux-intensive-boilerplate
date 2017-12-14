// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Instruments
import { bool, func } from 'prop-types';
import authActions from 'actions/auth';
import Styles from './styles.scss';

// Components
import Spinner from 'components/Spinner';
import Navigation from 'components/Navigation';
import SignupForm from 'components/Forms/Signup';

class Signup extends Component {
    static propTypes = {
        authFetching: bool.isRequired,
        signup:       func.isRequired
    };

    render () {

        const { authFetching, signup } = this.props;

        console.log('In Container - Sign Up');

        return [

            <Spinner key = '0' spin = { authFetching } />,
            <Navigation key = '1' />,
            <div className = { Styles.signuppageInfo } key = '2'>
                <h1>Sign up for an account</h1>
                <SignupForm authFetching = { authFetching } signup = { signup } />
            </div>

        ];
    }
}

const mapStateToProps = (state) => ({
    authFetching: state.ui.get('authFetching')
});

const mapDispatchToProps = (dispatch) => ({
    signup: bindActionCreators(authActions.signup, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

