// Core
import { call, put } from 'redux-saga/effects';
import { actions } from 'react-redux-form';

// Instruments
import uiACtions from 'actions/ui';
import authACtions from 'actions/auth';
import { api, apiKey } from 'instruments/api';

export function* loginWorker () {
    yield put(uiActions.startFetchingAuth());

    const user = token ? { token } : { email, password };

    //https://api.themoviedb.org/3/authentication/token/new?api_key=91c1a5a46a2617a97b91f80720f8f7bf;
    const tmpRequestTokenResponse = yield call(fetch, `${ api }/3/authentication/token/new?api_key=${ apiKey }`, {
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    // redirect to `${ api }/authenticate/${tmpRequestTokenResponse}`;
    // then request to `${ api }/3/authentication/token/validate_with_login?api_key=${ apiKey }&username=${ email }&password=${ password }&request_token=${tmpRequestTokenResponse}`

    const response = yield call(fetch, ``, {

    });
}