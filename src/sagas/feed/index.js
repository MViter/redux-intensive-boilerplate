// Core
import { takeEvery } from 'redux-saga/effects';

// Instruments
import types from 'actions/feed/types';
import uiTypes from 'actions/ui/types';
import { fetchGenresWorker } from './workers/fetchGenres';
import { fetchMoviesWorker } from './workers/fetchMovies';

export default {
    // * fetchGenresWatcher () {
    //     yield takeEvery(types.FETCH_GENRES, fetchGenresWorker);
    // },
    * fetchGenresWatcher () {
             yield takeEvery(uiTypes.INITIALIZE, fetchGenresWorker);
         },
    * fetchMoviesWatcher () {
        yield takeEvery(types.FETCH_MOVIES, fetchMoviesWorker);
    }
};
