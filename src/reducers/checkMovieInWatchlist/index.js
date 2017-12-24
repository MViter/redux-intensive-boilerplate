// Core
import { Map } from 'immutable';

// Instruments
import types from 'actions/watchlist/types';

const initialState = Map({
    isInWatchlist: true
});

const checkMovieInWatchlistReduser = (state = initialState, { type, payload }) => {
    switch (type) {

        case types.CHECK_MOVIE_IN_WATCHLIST_SUCCESS: {
            return state.set('isInWatchlist', payload);
        }
        default:
            return state;
    }
};

export default checkMovieInWatchlistReduser;
