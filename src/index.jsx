import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import * as firebase from 'firebase';

import config from './firebase/config';
import configureStore from './store';
import Routes from './routes';

// Creates and initializes a Firebase app instance.
firebase.initializeApp(config);

const store = configureStore();
const app = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    app
);
