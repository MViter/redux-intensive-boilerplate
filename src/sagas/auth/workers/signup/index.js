// Core
import { call, put } from 'redux-saga/effects';
import { actions } from 'react-redux-form';

// Instruments
import uiActions from 'actions/ui';
import authActions from 'actions/auth';
import { api, apiKey } from 'instruments/api';

// https://www.themoviedb.org/account/signup
export function* signupWorker () {
    try {
        console.log('In signupWorker saga - 1');
        yield put(uiActions.startFetchingAuth());

        const response = yield call(fetch, `${ api }/account/signup`, {
            method:  'POST',
            headers: {
                'Content-Type': 'text/html'
            }
        });

        console.log('In signupWorker saga - 2');

        const { message } = yield call([
            response,
            response.json
        ]);

    }catch(e) {
        yield put(authActions.signupFail(message));
    }
    finally {
        yield put(uiActions.stopFetchingAuth());
    }
}