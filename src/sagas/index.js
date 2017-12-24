// Core
import { all } from 'redux-saga/effects';

// Instruments
import feed from './feed';
import detailedMovie from './detailedMovie';
import feedWatchlist from './feedWatchlist';

export function* saga () {
    yield all([
        feed.fetchGenresWatcher(),
        feed.fetchMoviesWatcher(),
        detailedMovie.fetchDetailedMovieWatcher(),
        feedWatchlist.fetchWatchlistWatcher(),
        feedWatchlist.addToWatchlistWatcher(),
        feedWatchlist.deleteFromWatchlistWatcher(),
        feedWatchlist.checkMovieInWatchlistWatcher()
    ]);
}
