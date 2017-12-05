// Core
import { takeEvery } from 'redux-saga/effects';

// Instruments
import types from 'actions/feed/types';
import { fetchNewMoviesWorker } from './workers/fetchNewMovies';

export default {
    * fetchNewMoviesWatcher () {
        yield console.log('In Saga - feed new movies');
        yield takeEvery(types.FETCH_NEW_MOVIES, fetchNewMoviesWorker);
    }
};