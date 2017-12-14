// Core
import { call, put, select } from 'redux-saga/effects';
import { normalize } from 'normalizr';

// Instruments
import feedActions from 'actions/feed';
import uiActions from 'actions/ui';
import { api, apiKey } from 'instruments/api';

export function* fetchDetailedMovieWorker () {
    try {
        const movieId = '440021';
        const defaultPage = '1';
        yield put(uiActions.startFetchingFeed());

        const response = yield call(fetch, `${api}/3/movie/${ movieId }?api_key=${ apiKey }&page=${defaultPage}&language=en-US`, {
            method:  'GET',
            headers: {
                Authorization: apiKey
            }
        });

        const { results } = yield call([response, response.json]);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(feedActions.fetchDetailedMovieSuccess(results));
    } catch ({ message }) {
        yield put(feedActions.fetchDetailedMovieFail(message));
    } finally {
        yield put(uiActions.stopFetchingFeed());
    }
}
