// Core
import { Map, List } from 'immutable';

// Instruments
import types from 'actions/watchlist/types';

const initialState = Map({
    watchlist: []
    //watchlist: Map()
    //watchlist: []
});

const watchlistReduser = (state = initialState, { type, payload }) => {
    switch (type) {

        case types.FETCH_WATCHLIST_SUCCESS: {
            return List(payload);
        }

        case types.ADD_TO_WATCHLIST_SUCCESS: {
            return List(payload);
        }

        case types.DELETE_FROM_WATCHLIST_SUCCESS: {
            return List(payload);
            //return state.set(payload);
        }

        default:
            return state;
    }
};

export default watchlistReduser;
