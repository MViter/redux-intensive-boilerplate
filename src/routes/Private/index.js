// Core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';

// Instruments
import pages from 'routes/pages';

// Components
import Feed from 'containers/Feed';

export default class Private extends Component {
    render () {
        return (
            <Switch>
                <Route component = { Feed } exact path = { pages.feed } />
                <Redirect to = { pages.feed } />
            </Switch>
        );
    }
}