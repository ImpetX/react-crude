import {combineReducers} from 'redux';

import AuthReducer from 'modules/authentication/reducers';
import MemberReducer from 'modules/authentication/reducers';

const rootReducer = combineReducers({
    auth: AuthReducer,
    member: MemberReducer
});

export default rootReducer;