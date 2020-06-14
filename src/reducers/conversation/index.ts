import { combineReducers } from "redux";
import { Conversation } from "./types";
import { createSpaceReducer, createSpaceListReducer } from "pubnub-redux";

export const conversationReducer = combineReducers({
  conversations: createSpaceReducer<Conversation>(),
  allConversations: createSpaceListReducer<Conversation>(),
});
