import {combineReducers} from 'redux';

import AuthReducer from 'modules/authentication/reducers';
import {MemberCreateReducer} from 'modules/members/reducers';

const rootReducer = combineReducers({
    auth: AuthReducer,
    addMember: MemberCreateReducer
});

export default rootReducer;