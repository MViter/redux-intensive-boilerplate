// Core
import { List, Map } from 'immutable';

// Instruments
import types from 'actions/feed/types';

const initialState = Map({
    results: [],
    genres:  []
});

const feedReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.FETCH_NEW_MOVIES_SUCCESS:
        case types.FETCH_POPULAR_MOVIES_SUCCESS:
        case types.FETCH_UPCOMING_MOVIES_SUCCESS:
        case types.FETCH_TOPRATED_MOVIES_SUCCESS:
            return {
                results: List(payload),
                genres:  state.genres
            };

        case types.FETCH_GENRES_SUCCESS:
            return {
                genres: List(payload)
            };

        default:
            return state;
    }
};

export default feedReducer;
