// Core
import { Map } from 'immutable';

// Instruments
import types from 'actions/ui/types';

const initialState = Map({
    initialized:  false,
    authFetching: false
});

export default (state = initialState, { type }) => {
    switch (type) {
        case types.INITIALIZE:
            return state.set('initialized', true);

        case types.START_FETCHING_AUTH:
            return state.set('authFetching', true);

        case types.STOP_FETCHING_AUTH:
            return state.set('authFetching', false);

        default:
            return state;
    }
};
