// Core
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Instruments
import feed from './feed';
import ui from './ui';
import auth from './auth';
import forms from './forms';

export default combineReducers({
    routerReducer,
    forms,
    ui,
    auth,
    feed
});
