import { combineReducers } from "redux";
import { userReducer } from "reducers/user";
import { authReducer } from "reducers/auth";

const rootReducers = combineReducers({
  chatUser: userReducer,
  user: authReducer,
});

export default rootReducers;
