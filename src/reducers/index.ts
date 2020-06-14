import { combineReducers } from "redux";
import { userReducer } from "reducers/user";
import { authReducer } from "reducers/auth";
import { chatMemberReducer } from "./membership";

const rootReducers = combineReducers({
  chatUser: userReducer,
  user: authReducer,
  joinedConversations: chatMemberReducer,
});

export default rootReducers;
