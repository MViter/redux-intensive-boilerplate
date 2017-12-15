// Core
import { call, put, select } from 'redux-saga/effects';
import { normalize } from 'normalizr';

// Instruments
import feedDetailedMovieActions from 'actions/feedDetailedMovie';
import uiActions from 'actions/ui';
import { api, apiKey } from 'instruments/api';

export function* fetchDetailedMovieWorker ({ payload: movieId=19404 }) {
    console.log('getDetails in Sagas/fetchDetailedMovieWorker - 4');
    try {
        const defaultPage = '1';
        yield put(uiActions.startFetchingFeed());
        console.log('@@@ movieId', movieId);

        const response = yield call(fetch, `${api}/3/movie/${ movieId }?api_key=${ apiKey }&page=${defaultPage}&language=en-US`, {
            method:  'GET',
            headers: {
                'Content-Type': 'text/html;charset=utf-8'
            }
        });

        const detailedMovie = yield call([response, response.json]);
        console.log('&&&&&&&&&&&&&&& SAGA - detailedMovie = ', detailedMovie);
        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(feedDetailedMovieActions.fetchDetailedMovieSuccess(detailedMovie));
    } catch ({ message }) {
        yield put(feedDetailedMovieActions.fetchDetailedMovieFail(message));
    } finally {
        yield put(uiActions.stopFetchingFeed());
    }
}
