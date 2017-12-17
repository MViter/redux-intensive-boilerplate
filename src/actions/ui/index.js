import types from './types';

export default {
    initialize: () => ({
        type: types.INITIALIZE
    }),
    startFetchingFeed: () => ({
        type: types.START_FETCHING_FEED
    }),
    stopFetchingFeed: () => ({
        type: types.STOP_FETCHING_FEED
    })
};
