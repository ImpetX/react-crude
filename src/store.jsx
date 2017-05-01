import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducer from './reducer';
import * as Actions from 'modules/authentication/actions';

const loggerMiddleware = createLogger();

export default function configureStore() {
    const store  = createStore(
        rootReducer,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    );

    store.dispatch(Actions.verifyAuth());

    return store;
}