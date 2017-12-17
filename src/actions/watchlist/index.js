import types from './types';

export default{

    fetchWatchlist: () => ({
        type: types.FETCH_WATCHLIST
    }),
    fetchWatchlistSuccess: (ADD_TO_WATCHLIST_SUCCESSmovieIDs) => ({
        type:    types.FETCH_WATCHLIST_SUCCESS,
        payload: movieIDs
    }),
    fetchWatchlistFail: (message) => ({
        type:    types.FETCH_WATCHLIST_FAIL,
        payload: message
    }),

    addToWatchlist: (movieToAddId) => ({
        type:    types.ADD_TO_WATCHLIST,
        payload: movieToAddId
    }),
    addToWatchlistSuccess: (movies) => ({
        type:    types.ADD_TO_WATCHLIST_SUCCESS,
        payload: movies
    }),
    addToWatchlistFail: (message) => ({
        type:    types.ADD_TO_WATCHLIST_FAIL,
        payload: message
    })
};
