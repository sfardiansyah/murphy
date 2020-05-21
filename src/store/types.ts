import { Store } from "redux";

export interface AppThunkContext {}

export type AppState = {};

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
