import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store';

import Routes from './routes';

const store = configureStore();
const app = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    app
);
