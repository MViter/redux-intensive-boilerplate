// Types
import types from './types';

export default Object.freeze({
    fillUserProfile: (profile) => ({
        type:    types.FILL_USER_PROFILE,
        payload: profile
    }),
    clearUserProfile: () => ({
        type: types.CLEAR_USER_PROFILE
    }),
    updateProfile: (user) => ({
        type:    types.UPDATE_PROFILE,
        payload: user
    }),
    updateProfileSuccess: (user) => ({
        type:    types.UPDATE_PROFILE_SUCCESS,
        payload: user
    }),
    updateProfileFail: (message) => ({
        type:    types.UPDATE_PROFILE_FAIL,
        payload: message
    })
});
