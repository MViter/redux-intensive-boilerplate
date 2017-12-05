// Core
import React, { Component } from 'react';
import { bool, object, func } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';

// Instruments
//import Styles from './styles';
import Styles from './styles.scss';

export default class Navigation extends Component {
    static propTypes = {
        authenticated: bool.isRequired,
        logout:        func.isRequired,
        profile:       object.isRequired,
    };

    constructor () {
        super();
    }

    render () {

        return <section className = { Styles.navigation }>
                <div className = { Styles.logo } ></div>
                <div className = { Styles.authMenu }>
                    <a className = { Styles.authMenuBtn } href='#'>Sign In</a>
                    <a className = { Styles.authMenuBtn } href='#'>Sign Up</a>
                </div>
            </section>;
    }
}