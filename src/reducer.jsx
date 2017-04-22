import {combineReducers} from 'redux';

import AuthReducer from 'modules/authentication/reducers';

const rootReducer = combineReducers({
    auth: AuthReducer
});

export default rootReducer;