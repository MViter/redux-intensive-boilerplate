// Core
import { all } from 'redux-saga/effects';

// Instruments
import feed from './feed';
import feedDetailedMovie from './feedDetailedMovie';

export function* saga () {
    yield all([
        feed.fetchNewMoviesWatcher(),
        feed.fetchPopularMoviesWatcher(),
        feed.fetchUpcomingMoviesWatcher(),
        feed.fetchTopRatedMoviesWatcher(),
        feed.fetchGenresWatcher(),
        feed.fetchWishlistWatcher(),
        feedDetailedMovie.fetchDetailedMovieWatcher()
    ]);
}
