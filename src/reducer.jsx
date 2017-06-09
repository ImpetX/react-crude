import {combineReducers} from 'redux';

import AuthReducer from 'modules/authentication/reducers';
import {MemberCreateReducer, MemberListReducer} from 'modules/members/reducers';

const rootReducer = combineReducers({
    auth: AuthReducer,
    addMember: MemberCreateReducer,
    members: MemberListReducer
});

export default rootReducer;