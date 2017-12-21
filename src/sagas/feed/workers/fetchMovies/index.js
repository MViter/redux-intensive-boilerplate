// Core
import { call, put } from 'redux-saga/effects';

// Instruments
import feedActions from 'actions/feed';
import uiActions from 'actions/ui';
import { api, apiKey } from 'instruments/api';

export function* fetchMoviesWorker ({ payload: type = 'now_playing' }) {
    try {
        yield put(uiActions.startFetchingFeed());
        const defaultPage = '1';

        const response = yield call(fetch, `${api}/3/movie/${type}?api_key=${apiKey}&page=${defaultPage}`, {
            method:  'GET',
            headers: {
                Authorization: apiKey
            }
        });

        const { results } = yield call([response, response.json]);

        if (response.status !== 200) {
            throw new Error('Error while fetching movies.');
        }

        yield put(feedActions.fetchMoviesSuccess(results));
    } catch ({ message }) {
        yield put(feedActions.fetchMoviesFail(message));
    } finally {
        yield put(uiActions.stopFetchingFeed());
    }
}
