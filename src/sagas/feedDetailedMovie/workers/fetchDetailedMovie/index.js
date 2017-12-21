// Core
import { call, put } from 'redux-saga/effects';

// Instruments
import feedDetailedMovieActions from 'actions/feedDetailedMovie';
import uiActions from 'actions/ui';
import { api, apiKey } from 'instruments/api';

export function* fetchDetailedMovieWorker ({ payload: movieId }) {
    try {

        const defaultPage = '1';

        yield put(uiActions.startFetchingFeed());

        const response = yield call(fetch, `${api}/3/movie/${movieId}?api_key=${apiKey}&page=${defaultPage}&language=en-US`, {
            method:  'GET',
            headers: {
                'Content-Type': 'text/html;charset=utf-8'
            }
        });

        const detailedMovie = yield call([response, response.json]);

        if (response.status !== 200) {
            throw new Error('Movie was not found');
        }

        yield put(feedDetailedMovieActions.fetchDetailedMovieSuccess(detailedMovie));
    } catch ({ message }) {
        yield put(feedDetailedMovieActions.fetchDetailedMovieFail(message));
    } finally {
        yield put(uiActions.stopFetchingFeed());
    }
}
