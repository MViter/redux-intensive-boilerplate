// Core
import { Map } from 'immutable';

// Instruments
import types from 'actions/ui/types';

const initialState = Map({
    initialized:  false,
    feedFetching: false
});

export default (state = initialState, { type }) => {
    switch (type) {
        case types.INITIALIZE:
            return state.set('initialized', true);

        case types.START_FETCHING_FEED:
            return {
                initialized:  true,
                feedFetching: true
            };

        case types.STOP_FETCHING_FEED:
            return {
                initialized:  true,
                feedFetching: false
            };

        default:
            return state;
    }
};
