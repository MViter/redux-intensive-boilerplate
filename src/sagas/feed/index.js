// Core
import { takeEvery } from 'redux-saga/effects';

// Instruments
import types from 'actions/feed/types';
import { fetchNewMoviesWorker } from './workers/fetchNewMovies';
import { fetchPopularMoviesWorker } from './workers/fetchPopularMovies';
import { fetchUpcomingMoviesWorker } from './workers/fetchUpcomingMovies';
import { fetchTopRatedMoviesWorker } from './workers/fetchTopRatedMovies';
import { fetchGenresWorker } from './workers/fetchGenres';

export default {
    * fetchGenresWatcher () {
        yield takeEvery(types.FETCH_GENRES, fetchGenresWorker);
    },
    * fetchNewMoviesWatcher () {
        yield takeEvery(types.FETCH_NEW_MOVIES, fetchNewMoviesWorker);
    },
    * fetchPopularMoviesWatcher () {
        yield takeEvery(types.FETCH_POPULAR_MOVIES, fetchPopularMoviesWorker);
    },
    * fetchUpcomingMoviesWatcher () {
        yield takeEvery(types.FETCH_UPCOMING_MOVIES, fetchUpcomingMoviesWorker);
    },
    * fetchTopRatedMoviesWatcher () {
        yield takeEvery(types.FETCH_TOPRATED_MOVIES, fetchTopRatedMoviesWorker);
    }
};
