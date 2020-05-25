import { createUserReducer, User as PubNubUser } from "pubnub-redux";

interface CustomUserFields {
  title: string;
}

export type ChatUser = Required<
  Pick<PubNubUser, "id" | "name" | "profileUrl">
> & {
  custom: CustomUserFields;
};

export const userReducer = createUserReducer<ChatUser>();
