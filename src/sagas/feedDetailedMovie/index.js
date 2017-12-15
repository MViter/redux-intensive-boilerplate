// Core
import { takeEvery } from 'redux-saga/effects';

// Instruments
import types from 'actions/feedDetailedMovie/types';
import { fetchDetailedMovieWorker } from './workers/fetchDetailedMovie';

export default {
    * fetchDetailedMovieWatcher () {
        yield takeEvery(types.FETCH_DETAILED_MOVIE, fetchDetailedMovieWorker);
    }
}