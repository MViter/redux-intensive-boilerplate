// Core
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Instruments
import feed from './feed';
import ui from './ui';
import feedDetailedMovie from './feedDetailedMovie';

export default combineReducers({
    routerReducer,
    ui,
    feed,
    feedDetailedMovie
});
