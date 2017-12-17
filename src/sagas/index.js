// Core
import { all } from 'redux-saga/effects';

// Instruments
import feed from './feed';
import feedDetailedMovie from './feedDetailedMovie';
import feedWatchlist from './feedWatchlist';

export function* saga () {
    yield all([
        feed.fetchNewMoviesWatcher(),
        feed.fetchPopularMoviesWatcher(),
        feed.fetchUpcomingMoviesWatcher(),
        feed.fetchTopRatedMoviesWatcher(),
        feed.fetchGenresWatcher(),
        feedDetailedMovie.fetchDetailedMovieWatcher(),
        feedWatchlist.fetchWatchlistWatcher(),
        feedWatchlist.addToWatchlistWatcher()
    ]);
}
