import { combineReducers } from "redux";
import { userReducer } from "reducers/user";

const rootReducers = combineReducers({
  user: userReducer,
});

export default rootReducers;
