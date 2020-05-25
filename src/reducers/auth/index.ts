import { AuthAction } from "./types";

const initialState = {};

export const authReducer = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case "USER_LOGGED_IN":
      state = action.payload;
      return state;
    case "USER_LOGGED_OUT":
      state = {};
      return state;
    default:
      return state;
  }
};

export const userLoggedIn = (user: { name: string }) => ({
  type: "USER_LOGGED_IN",
  payload: user,
});

export const userLoggedOut = () => ({
  type: "USER_LOGGED_OUT",
});
