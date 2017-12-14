// Core
import { List } from 'immutable';

// Instruments
import types from 'actions/feed/types';

const initialState = {
    results:        List(),
    genres:         List(),
    likedMovies:    List()
};

const defaultState = {
    results: [],
    genres: [],
    likedMovies: []
};

const feedReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.FETCH_NEW_MOVIES_SUCCESS:
        case types.FETCH_POPULAR_MOVIES_SUCCESS:
        case types.FETCH_UPCOMING_MOVIES_SUCCESS:
        case types.FETCH_TOPRATED_MOVIES_SUCCESS:
            return {
                results: List(payload), // not payload.results - this was a great mistake :)
                likedMovies: List(),
                genres: state.genres
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


