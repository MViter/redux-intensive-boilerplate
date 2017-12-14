// Core
import { call, put } from 'redux-saga/effects';
// Instruments
import uiActions from 'actions/ui';
import feedActions from 'actions/feed';

export function* fetchWishlistWorker () {

    try {
        yield put(uiActions.startFetchingFeed());

        const response = yield call(localStorage.getItem('WishList'));
        const { data: movies } = yield call([response, response.json]);

        if (response.status !== 200) {

            throw new Error('Error from fetchWishlistWorker');
        }
        console.log('movies', movies);

        yield put(feedActions.fetchWishlistSuccess(movies));

    } catch ({ message }) {
        yield put(feedActions.fetchWishlistFail(message));
    } finally {
        yield put(uiActions.stopFetchingFeed());
    }
}
