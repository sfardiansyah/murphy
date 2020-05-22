import { combineReducers } from "redux";
import { userReducer } from "reducers/user";
import { authReducer } from "reducers/auth";

const rootReducers = combineReducers({
  user: userReducer,
  auth: authReducer,
});

export default rootReducers;
