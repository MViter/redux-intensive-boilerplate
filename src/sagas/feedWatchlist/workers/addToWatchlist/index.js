// Core
import { put } from 'redux-saga/effects';
//Instruments
import uiActions from 'actions/ui';
import watchlistActions from 'actions/watchlist';

export function* addToWatchlistWorker ({ payload: movieToAdd }) {
    //localStorage.clear();
    try {
        yield put(uiActions.startFetchingFeed());
        let watchlistStorage = JSON.parse(localStorage.getItem('Watchlist'));

        watchlistStorage = watchlistStorage || [];
        console.log(`111 watchlistStorage = ${watchlistStorage}, typeof watchlistStorage = ${typeof watchlistStorage}`);

        watchlistStorage.push(movieToAdd);
        watchlistStorage = Array.from(new Set(watchlistStorage));

        // if (watchlistStorage) {
        //     watchlistStorage.push(movieToAdd);
        //     watchlistStorage = Array.from(new Set(watchlistStorage));
        // } else {
        //     watchlistStorage = [movieToAdd];
        // }

        localStorage.setItem('Watchlist', JSON.stringify(watchlistStorage));
        yield put(watchlistActions.addToWatchlistSuccess(watchlistStorage));

    } catch ({ message }) {
        yield put(watchlistActions.addToWatchlistFail(message));
    } finally {
        yield put(uiActions.stopFetchingFeed());
    }
}
