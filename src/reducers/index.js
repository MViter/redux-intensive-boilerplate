// Core
import { combineReducers } from 'redux';
//import { routerReducer } from 'react-router-redux';

// Instruments
import feed from './feed';
import ui from './ui';
import auth from './auth';

export default combineReducers({
    //routerReducer,
    feed,
    ui,
    auth
});
