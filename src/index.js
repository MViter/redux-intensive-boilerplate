// Core
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

// Instruments
import store, { history } from './store';

// Components
import Routes from './routes';

render(
    <Provider store = { store }>
        <ConnectedRouter history = { history }>
            <Routes />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
