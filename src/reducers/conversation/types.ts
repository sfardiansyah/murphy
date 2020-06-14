import { Space } from "pubnub-redux";

export type Conversation = Required<Pick<Space, "id" | "name" | "description">>;

export type ConversationsIndexedById = { [id: string]: Conversation };
