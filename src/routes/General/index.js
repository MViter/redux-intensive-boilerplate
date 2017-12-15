//Core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';

//Instruments
import pages from 'routes/pages';

//Components
import Feed from 'containers/Feed';
import DetailedMovie from 'containers/DetailedMovie';

export default class Public extends Component {
    render () {
        return (
            <Switch>
                <Route exact component = { Feed } path = { '/feed' } />
                <Route exact component = { DetailedMovie } path = { `${pages.detailedmovie}/:id` } />
                <Redirect to = { '/feed' } />
            </Switch>
        );
    }
}