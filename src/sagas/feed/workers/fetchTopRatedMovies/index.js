// Core
import { call, put, select } from 'redux-saga/effects';
import { normalize } from 'normalizr';

// Instruments
import feedActions from 'actions/feed';
import uiActions from 'actions/ui';
import { api, apiKey } from 'instruments/api';

export function* fetchTopRatedMoviesWorker () {
    try {

        const defaultPage = '1';
        yield put(uiActions.startFetchingFeed());

        const response = yield call(fetch, `${api}/3/movie/top_rated?api_key=${ apiKey }&page=${ defaultPage }`, {
            method:  'GET',
            headers: {
                Authorization: apiKey
            }
        });

        const { results } = yield call([response, response.json]);

        if (response.status !== 200) {
            throw new Error(message);
        }

        //const normalizedMovies = normalize(movies, [post]);
        //const moviesNormalized = normalize(movies, [post]);
        yield put(feedActions.fetchTopRatedMoviesSuccess(results));
    } catch ({ message }) {
        yield put(feedActions.fetchTopRatedMoviesFail(message));
    } finally {
        yield put(uiActions.stopFetchingFeed());
    }
}
