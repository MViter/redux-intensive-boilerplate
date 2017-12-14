// Core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';

// Instruments
import pages from 'routes/pages';

// Components
import Login from 'containers/Login';
import Signup from 'containers/Signup';
import Guest from 'containers/Guest';

export default class Public extends Component {
    render () {
        return (
            <Switch>
                <Route component = { Login } exact path = { pages.login } />
                <Route component = { Signup } exact path = { pages['sign-up'] } />
                <Route component = { Guest } exact path = { pages.guest } />
                <Redirect to = { pages.login } />
            </Switch>
        );
    }
}