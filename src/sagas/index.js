// Core
import { all } from 'redux-saga/effects';

// Instruments
import feed from './feed';
import auth from './auth';

export function* saga () {
    yield all([
        feed.fetchNewMoviesWatcher(),
        feed.fetchPopularMoviesWatcher(),
        feed.fetchUpcomingMoviesWatcher(),
        feed.fetchTopRatedMoviesWatcher(),
        feed.fetchGenresWatcher(),
        feed.fetchWishlistWatcher(),
        auth.loginWatcher(),
        auth.logoutWatcher(),
        auth.signupWatcher(),
        auth.loginGuestWatcher()
    ]);
}
