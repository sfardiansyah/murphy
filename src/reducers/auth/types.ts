interface LoginAction {
  type: "USER_LOGGED_IN" | "USER_LOGGED_OUT";
  payload: object;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

export type AuthAction = LoginAction;
