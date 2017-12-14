// Core
import { call, put, select } from 'redux-saga/effects';
import { normalize } from 'normalizr';

// Instruments
import feedActions from 'actions/feed';
import uiActions from 'actions/ui';
import { api, apiKey } from 'instruments/api';

export function* fetchUpcomingMoviesWorker () {
    try {

        const defaultPage = '1';
        yield put(uiActions.startFetchingFeed());

        const response = yield call(fetch, `${api}/3/movie/upcoming?api_key=${ apiKey }&page=${ defaultPage }`, {
            method:  'GET',
            headers: {
                Authorization: apiKey
            }
        });

        const { results } = yield call([response, response.json]);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(feedActions.fetchUpcomingMoviesSuccess(results));
    } catch ({ message }) {
        yield put(feedActions.fetchUpcomingMoviesFail(message));
    } finally {
        yield put(uiActions.stopFetchingFeed());
    }
}