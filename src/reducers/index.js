// Core
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Instruments
import feed from './feed';
import ui from './ui';
import feedDetailedMovie from './detailedMovie';
import watchlist from './watchlist';
import checkMovieInWatchlist from './checkMovieInWatchlist';

export default combineReducers({
    routerReducer,
    ui,
    feed,
    feedDetailedMovie,
    watchlist,
    checkMovieInWatchlist
});
