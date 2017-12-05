// Core
import { combineReducers } from 'redux';
import { Map, List, fromJS } from 'immutable';

// Instruments
import types from 'actions/feed/types';

const initialState = Map({
    authors: Map(),
    posts:   Map()
});

const result = (state = List(), { type, payload }) => {
    switch (type) {
        case types.FETCH_NEW_MOVIES_SUCCESS:
            return List(payload.result);

        default:
            return state;
    }
};

const entities = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.FETCH_NEW_MOVIES_SUCCESS:
            return fromJS(payload.entities);

            default:
                return state;
    }
};

export default combineReducers({
    entities,
    result
});
