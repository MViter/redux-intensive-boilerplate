// Core
import { put } from 'redux-saga/effects';
//Instruments
import uiActions from 'actions/ui';
import watchlistActions from 'actions/watchlist';

export function* deleteFromWatchlistWorker ({ payload: id }) {
    try {

        yield put(uiActions.startFetchingFeed());

        const watchlistStorage = localStorage.getItem('Watchlist');

        if (!watchlistStorage) {

            throw new Error('Watchlist was not found.');
        }

        const movies = JSON.parse(watchlistStorage);
        const updatedMovieStorage = movies.filter((item) => item.id !== id);

        localStorage.setItem('Watchlist', JSON.stringify(updatedMovieStorage));

        yield put(watchlistActions.deleteFromWatchlistSuccess(updatedMovieStorage));

    } catch ({ message }) {
        yield put(watchlistActions.deleteFromWatchlistFail(message));
    } finally {
        yield put(uiActions.stopFetchingFeed());
    }
}
