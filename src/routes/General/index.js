//Core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';

//Instruments
import pages from 'routes/pages';

//Components
import Feed from 'containers/Feed';
import DetailedMovie from 'containers/DetailedMovie';
import Watchlist from 'containers/Watchlist';
import Loading from 'components/Loading';

export default class Public extends Component {
    render () {
        return (
            <Switch>
                <Route exact component = { Feed } path = { `${pages.feed}/:filter` } />
                <Route exact component = { DetailedMovie } path = { `${pages.detailedmovie}/:id` } />
                <Route exact component = { Watchlist } path = { '/watchlist' } />
                <Route exact component = { Loading } path = { '/loading' } />
                <Redirect to = { `${pages.feed}${pages.now_playing}` } />
            </Switch>
        );
    }
}
