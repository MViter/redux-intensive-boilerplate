// Core
import { call, put } from 'redux-saga/effects';

// Instruments
import feedActions from 'actions/feed';
import uiActions from 'actions/ui';
import { api, apiKey } from 'instruments/api';

export function* fetchGenresWorker () {
    try {

        yield put(uiActions.startFetchingFeed());

        const response = yield call(fetch, `${api}/3/genre/movie/list?api_key=${apiKey}&language=en-US`, {
            method:  'GET',
            headers: {
                'Content-Type': 'text/html;charset=utf-8'
            }
        });

        const { genres } = yield call([response, response.json]);

        if (response.status !== 200) {
            throw new Error('Error while fetching genres');
        }

        yield put(feedActions.fetchGenresSuccess(genres));
    } catch ({ message }) {
        yield put(feedActions.fetchGenresFail(message));
    } finally {
        yield put(uiActions.stopFetchingFeed());
    }
}
