// Core
import { put } from 'redux-saga/effects';
//Instruments
import uiActions from 'actions/ui';
import watchlistActions from 'actions/watchlist';

export function* addToWatchlistWorker ({ payload: movieToAdd }) {
    try {
        yield put(uiActions.startFetchingFeed());
        let watchlistStorage = JSON.parse(localStorage.getItem('Watchlist'));

        watchlistStorage = watchlistStorage || [];

        if (JSON.stringify(watchlistStorage).indexOf(movieToAdd.title) === -1) {
            watchlistStorage.push(movieToAdd);
            watchlistStorage = Array.from(new Set(watchlistStorage));
            localStorage.setItem('Watchlist', JSON.stringify(watchlistStorage));
        }

        // if (watchlistStorage) {
        //     watchlistStorage.push(movieToAdd);
        //     watchlistStorage = Array.from(new Set(watchlistStorage));
        // } else {
        //     watchlistStorage = [movieToAdd];
        // }

        yield put(watchlistActions.addToWatchlistSuccess(watchlistStorage));

    } catch ({ message }) {
        yield put(watchlistActions.addToWatchlistFail(message));
    } finally {
        yield put(uiActions.stopFetchingFeed());
    }
}
