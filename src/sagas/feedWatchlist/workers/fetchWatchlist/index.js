// Core
import { put } from 'redux-saga/effects';

// Instruments
import feedWatchlistActions from 'actions/watchlist';
import uiActions from 'actions/ui';

export function* fetchWatchlistWorker () {

    try {
        yield put(uiActions.startFetchingFeed());

        let response = [];
        const watchlistStorage = localStorage.getItem('Watchlist');

        if (watchlistStorage) {
            response = JSON.parse(watchlistStorage);
        } else {
            throw new Error('Watchlist does not found.');
        }

        //const movies = JSON.parse(response);

        yield put(feedWatchlistActions.fetchWatchlistSuccess(response));

    } catch ({ message }) {
        yield put(feedWatchlistActions.fetchWatchlistFail(message));
    } finally {
        yield put(uiActions.stopFetchingFeed());
    }
}
