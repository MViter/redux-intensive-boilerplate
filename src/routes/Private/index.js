// Core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';

// Intruments
import pages from 'routes/pages';

// Containers
import Feed from 'containers/Feed';
import Profile from 'containers/Profile';
import NewPassword from 'containers/NewPassword';

export default class Private extends Component {
    render () {
        return (
            <Switch>
                <Route exact component = { Feed } path = { pages.feed } />
                <Route exact component = { Profile } path = { pages.profile } />
                <Route
                    exact
                    component = { NewPassword }
                    path = { pages['new-password'] }
                />
                <Redirect to = { pages.feed } />
            </Switch>
        );
    }
}
