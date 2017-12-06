// Core
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

// Instruments
import reducer from 'reducers';
import { saga } from 'sagas';

const dev = process.env.NODE_ENV === 'development';
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const logger = createLogger({
    duration:  true,
    collapsed: true,
    diff:      true,
    colors:    {
        title:     () => '#3dfec4',
        prevState: () => '#8f64af',
        action:    () => '#5e992b',
        nextState: () => '#94a433',
        error:     () => '#ff254c'
    }
});

const history = createHistory();

const middleware = [routerMiddleware(history)]; // for working with routes

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = dev && devtools ? devtools : compose;

middleware.push(sagaMiddleware);

if (dev) {
    middleware.push(logger);
}

export { history };
export default createStore(reducer, composeEnhancers(applyMiddleware(...middleware)));
// another way (p. 26) - export default createStore(reducer, applyMiddleware(logger));
// or export default createStore(reducer, applyMiddleware(...middleware));

sagaMiddleware.run(saga);
