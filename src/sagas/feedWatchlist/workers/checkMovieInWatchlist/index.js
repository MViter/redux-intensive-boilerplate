// Core
import { put } from 'redux-saga/effects';

// Instruments
import watchlistActions from 'actions/watchlist';

export function* checkMovieInWatchlistWorker ({ payload: movieTitle }) {
    yield put(watchlistActions.checkMovieInWatchlistSuccess((localStorage.getItem('Watchlist')|| []).indexOf(movieTitle) !== -1));
    // try {
    //     //const watchlistStorage = localStorage.getItem('Watchlist')|| [];
    //     //const isMovieInLocalStorage = watchlistStorage.indexOf(movieTitle) !== -1;
    //
    //     //console.log(`checkMovieInWatchlistWorker ${movieTitle} isMovieInLocalStorage = ${isMovieInLocalStorage}`);
    //
    //
    //
    //     //yield put(watchlistActions.checkMovieInWatchlistSuccess(isMovieInLocalStorage));
    // } catch ({ message }) {
    //     yield put(watchlistActions.checkMovieInWatchlistFail(message));
    // }
}
