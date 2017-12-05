// Core
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Instruments
import store, { history } from './store';
import './theme/reset.css';

// Flux
import Feed from './containers/Feed';

render(
    <Provider store = { store }>
        <Feed />
    </Provider>,
    document.getElementById('root')
);

// render(
//         <Feed />,
//         document.getElementById('root')
// );
