interface LoginAction {
  type: "USER_LOGGED_IN";
  payload: object;
}

export type AuthAction = LoginAction;
