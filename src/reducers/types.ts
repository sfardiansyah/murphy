import { User } from "reducers/auth/types";
import { ChatUser } from "./user";

export interface RootState {
  auth: User;
  user: ChatUser;
}
