// Core
import { Map, List } from 'immutable';

// Instruments
import types from 'actions/feed/types';

const initialState = Map({
    results: Map()
});

const feedReducer = (state = List(), { type, payload }) => {
    switch (type) {
        case types.FETCH_NEW_MOVIES_SUCCESS:
            return List(payload.result);

        default:
            return state;
    }
};

export default feedReducer;

