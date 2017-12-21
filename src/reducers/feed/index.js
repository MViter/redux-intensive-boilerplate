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
        case types.FETCH_MOVIES_SUCCESS:
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
