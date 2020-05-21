import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import { AppThunkContext, AppStore } from "./types";
import rootReducers from "../reducers";

export const composeEnhancers =
  (process.env.NODE_ENV === "development" &&
    window &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const preloadedState = {};

export const createAppStore = (thunkContext: AppThunkContext): AppStore => {
  const storeEnhancer = composeEnhancers(
    applyMiddleware(ReduxThunk.withExtraArgument(thunkContext))
  );

  return createStore(rootReducers, preloadedState, storeEnhancer);
};
