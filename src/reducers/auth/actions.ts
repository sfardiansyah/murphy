import { userLoggedIn } from ".";
import { ThunkAction } from "store/types";
import api from "./api";

export const login = (creadentials: {}): ThunkAction<void> => (dispatch) =>
  api.login(creadentials).then((data) => dispatch(userLoggedIn(data.user)));
