import { userLoggedIn, userLoggedOut } from ".";
import { ThunkAction } from "store/types";
import api from "./api";
import setAuthorizationHeader from "utils/setAuthorizationHeader";

export const login = (credentials: {}): ThunkAction => (dispatch) =>
  api.login(credentials).then((data) => {
    localStorage.laywookJWT = data.token;
    setAuthorizationHeader(data.token);
    dispatch(userLoggedIn(data.user));
  });

export const logout = (): ThunkAction => (dispatch) => {
  localStorage.removeItem("laywookJWT");
  setAuthorizationHeader();
  dispatch(userLoggedOut());
};
