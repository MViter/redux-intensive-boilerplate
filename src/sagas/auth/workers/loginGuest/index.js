// Core
import { call, put } from 'redux-saga/effects';
import { actions } from 'react-redux-form';

// Instruments
import uiACtions from 'actions/ui';
import authACtions from 'actions/auth';
import { api, apiKey } from 'instruments/api';

export function* loginGuestWorker () {
    try {
        console.log('@@@ In loginGuestWorker saga');
        yield put(uiActions.startFetchingAuth());


        // `${ api }/3/authentication/guest_session/new?api_key=${ apiKey }`
        const response = yield call(fetch, `${ api }/3/authentication/guest_session/new?api_key=${ apiKey }`, {
            method:  'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log('In auth/loginGuest');

        /* example of the response
        {
            "success": true,
            "guest_session_id": "2f1d3b5737c3c0c2a611446bfce809d9",
            "expires_at": "2017-12-13 17:09:43 UTC"
        }*/

        const { success, guest_session_id, expires_at } = yield call([
            response,
            response.json
        ]);

        if (response.status !== 200 && success !== true) {

            throw new Error(message);
        }


        yield put(authActions.loginGuestSuccess());

        const username = 'Guest';
        yield put(actions.change('forms.user.profile.username', username));
        yield put(actions.reset('forms.login'));

    }catch(e) {
        yield put(authActions.loginFail(message));
    }
    finally {
        yield put(uiActions.stopFetchingAuth());
    }
}