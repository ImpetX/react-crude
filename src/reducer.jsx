import {combineReducers} from 'redux';

import AuthReducer from 'modules/authentication/reducers';
import {MemberCreateReducer, MemberListReducer, MemberModifyReducer} from 'modules/members/reducers';

const rootReducer = combineReducers({
    auth: AuthReducer,
    addMember: MemberCreateReducer,
    members: MemberListReducer,
    memberModify: MemberModifyReducer
});

export default rootReducer;