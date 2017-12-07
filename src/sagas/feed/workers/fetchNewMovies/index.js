// Core
import { call, put, select } from 'redux-saga/effects';
import { normalize } from 'normalizr';

// Instruments
import feedActions from 'actions/feed';
import uiActions from 'actions/ui';
import { api, apiKey } from 'instruments/api';

export function* fetchNewMoviesWorker () {
    try {

        yield put(uiActions.startFetchingFeed());

        const response = yield call(fetch, `${api}/3/movie/now_playing?api_key=${ apiKey }&page=1`, {
            method:  'GET',
            headers: {
                Authorization: apiKey
            }
        });

        console.log('response = ', response);

        const { results } = yield call([response, response.json]);

        //console.log(yield call([response, response.json]));

        // if (response.status !== 200) {
        //     throw new Error(message);
        // }

        //const normalizedMovies = normalize(movies, [post]);

        //const moviesNormalized = normalize(movies, [post]);
        yield put(feedActions.fetchNewMoviesSuccess(results));
    } catch ({ message }) {
        yield put(feedActions.fetchNewMoviesFail(message));
    } finally {
        yield put(uiActions.stopFetchingFeed());
    }
}
