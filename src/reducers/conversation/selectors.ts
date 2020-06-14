import { AppState } from "reducers/types";
import { createSelector } from "reselect";
import { ConversationsIndexedById } from "./types";

const getChatState = (state: AppState) => state.chat;
const getConversationsSlice = (state: AppState) => state.chat.conversations;
const getAllConversationsSlice = (state: AppState) =>
  state.chat.allConversations;

export const getConversationsById = createSelector(
  [getChatState],
  (chat): ConversationsIndexedById => chat.conversations.byId
);
