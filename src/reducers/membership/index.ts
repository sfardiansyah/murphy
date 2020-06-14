import { createMembershipReducer } from "pubnub-redux";
import { createSelector } from "reselect";
import { AppState } from "reducers/types";

export const chatMemberReducer = createMembershipReducer();

const getByUserIdSlice = (state: AppState) => state.joinedConversations;

export const getConversationsByUserId = createSelector(
  [getByUserIdSlice],
  (conversations) => {
    return conversations.byId;
  }
);
