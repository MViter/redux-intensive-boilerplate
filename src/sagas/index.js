// Core
import { all } from 'redux-saga/effects';

// Instruments
import feed from './feed';


export function* saga () {
    yield all([
        feed.fetchNewMoviesWatcher()
    ]);
}
