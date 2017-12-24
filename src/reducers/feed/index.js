// Core
import { List, Map } from 'immutable';

// Instruments
import types from 'actions/feed/types';

const initialState = Map({
    movies:         Map(),
    genres:         Map(),
    idsInWatchlist: Map()
});

const feedReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.FETCH_MOVIES_SUCCESS:
            return {
                movies:         List(payload),
                genres:         state.genres,
                idsInWatchlist: state.idsInWatchlist
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
