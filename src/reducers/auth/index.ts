import { AuthAction } from "./types";

const initialState = {
  user: {},
};

export const authReducer = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case "USER_LOGGED_IN":
      state.user = action.payload;
      return state;
    default:
      return state;
  }
};

export const userLoggedIn = (user: { name: string }) => ({
  type: "USER_LOGGED_IN",
  payload: user,
});
