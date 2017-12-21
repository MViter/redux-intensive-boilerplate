// Core
import { all } from 'redux-saga/effects';

// Instruments
import feed from './feed';
import feedDetailedMovie from './feedDetailedMovie';
import feedWatchlist from './feedWatchlist';

export function* saga () {
    yield all([
        feed.fetchGenresWatcher(),
        feed.fetchMoviesWatcher(),
        feedDetailedMovie.fetchDetailedMovieWatcher(),
        feedWatchlist.fetchWatchlistWatcher(),
        feedWatchlist.addToWatchlistWatcher(),
        feedWatchlist.deleteFromWatchlistWatcher()
    ]);
}
