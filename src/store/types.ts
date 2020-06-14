import { Store } from "redux";
import { PubnubThunkContext } from "pubnub-redux";
import { AppState } from "reducers/types";

export type AppThunkContext = PubnubThunkContext;

export type AppActions = {
  type: string;
};

export type ThunkAction<ThunkReturn = void> = (
  dispatch: AppDispatch,
  getState: () => AppState,
  context: AppThunkContext
) => ThunkReturn;

export interface AppDispatch {
  <T extends AppActions>(action: T): T;
  <R>(anyThunk: ThunkAction<R>): R;
}

export type AppStore = Store<AppState, AppActions> & {
  dispatch: AppDispatch;
};
