// Core
import { takeEvery } from 'redux-saga/effects';

// Instruments
import types from 'actions/watchlist/types';
import { fetchWatchlistWorker } from './workers/fetchWatchlist/index';
import { addToWatchlistWorker } from './workers/addToWatchlist/index';

export default {
    * fetchWatchlistWatcher () {
        yield takeEvery(types.FETCH_WATCHLIST, fetchWatchlistWorker);
    },

    * addToWatchlistWatcher () {
        yield takeEvery(types.ADD_TO_WATCHLIST, addToWatchlistWorker);
    }
};
