// Core
import React, { Component } from 'react';
import { bool, object, func } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';

// Instruments
import Styles from './styles.scss';
import authActions from 'actions/auth';
import pages from 'routes/pages';
import logo from '../../theme/assets/logosmall.png'
import menubtn from '../../theme/assets/menubtn.png';

// Components
import Menu from 'components/Menu';

class Navigation extends Component {
    static propTypes = {
        authenticated: bool.isRequired,
        logout:        func.isRequired
        //profile:       object.isRequired,
    };

    constructor () {
        super();

        this.getNavigation = ::this._getNavigation;
        this.handleMenu = ::this._handleMenu;
        this.getDropDown = ::this._getDropDown;
    }

    _handleMenu() {
        console.log('In Navigation / _handleMenu');

        return (<Menu />, document.getElementById('dropDownMenu'));
    }

    _getDropDown () {
        const isKeyPressed = false;

        return isKeyPressed
            ? [
                <Menu key = '0' />
            ]
            : [
                <a className = { Styles.menuBtn } key = '3' onClick = { this.handleMenu }>
                    <img src = { menubtn } />
                    { Styles.dropDownMenu }
                </a>

            ];
    }
    _getNavigation () {
        const { authenticated } = this.props;


        return authenticated
            ? [
                <h1 key = '0'>User authentacated</h1>
            ]
            : [
                <NavLink
                    activeClassName = { Styles.active }
                    className = { Styles.authMenuBtn }
                    key = '0'
                    to = { pages.login}>Log In
                </NavLink>,
                <NavLink
                    activeClassName = { Styles.active }
                    className = { Styles.authMenuBtn }
                    key = '1'
                    to = { pages['sign-up'] }>Sign Up
                </NavLink>,
                <NavLink
                    activeClassName = { Styles.active }
                    className = { Styles.authMenuBtn }
                    key = '2'
                    to = { pages.guest }>Guest
                </NavLink>
            ];
    }

    _logout () {
        this.props.logout();
    }

    render () {

        const navigation = this.getNavigation();
        const dropDownMenu = this.getDropDown();

        return (<section className = { Styles.navigation }>
            <div className = { Styles.logo }>
                <a href = 'https://www.themoviedb.org/'>
                    <img src = { logo } />
                </a>
            </div>
            <div className = { Styles.authMenu }>
                { navigation }
                { dropDownMenu }
            </div>
        </section>);
    }
}

const mapSTateToProps = (state) => ({
    authenticated: state.auth.get('authenticated')
});

const mapDispatchToProps = (dispatch) => ({
    logout: bindActionCreators(authActions.logout, dispatch)
});

export default connect(mapSTateToProps, mapDispatchToProps)(Navigation);