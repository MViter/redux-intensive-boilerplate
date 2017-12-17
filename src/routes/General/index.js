//Core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';

//Instruments
import pages from 'routes/pages';

//Components
import Feed from 'containers/Feed';
import DetailedMovie from 'containers/DetailedMovie';
import Watchlist from 'containers/Watchlist';

export default class Public extends Component {
    render () {
        //<Route exact component = { Feed } path = { `${pages.feed}/:moviestypes` } />
        // <Route exact component = { Feed  } path = { `/feed/:filter` } />
        return (
            <Switch>

                <Route exact component = { Feed } path = { '/feed' } />
                <Route exact component = { DetailedMovie } path = { `${pages.detailedmovie}/:id` } />
                <Route exact component = { Watchlist } path = { '/watchlist' } />
                <Redirect to = { '/feed' } />
            </Switch>
        );
    }
}
