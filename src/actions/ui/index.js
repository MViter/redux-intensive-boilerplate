import types from './types';

export default {
    initialize: () => ({
        type: types.INITIALIZE
    }),
    startFetchingAuth: () => ({
        type: types.START_FETCHING_AUTH
    }),
    stopFetchingAuth: () => ({
        type: types.STOP_FETCHING_AUTH
    }),
    startFetchingFeed: () => ({
        type: types.START_FETCHING_FEED
    }),
    stopFetchingFeed: () => ({
        type: types.STOP_FETCHING_FEED
    })
}