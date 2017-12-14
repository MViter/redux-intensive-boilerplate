// Core
import { Map } from 'immutable';

// Instruments
import types from 'actions/profile/types';

const initialState = Map({
    avatar: '',
    email: '',
    id: '',
    token: '',
    username: ''
});

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case types.FILL_USER_PROFILE:
        case types.UPDATE_PROFILE_SUCCESS:
            return state.merge(payload);

        case types.CLEAR_USER_PROFILE:
            return initialState;

        default: return state;
    }
};