import { User } from "reducers/auth/types";
import { ChatUser } from "./user";
import { SpacesByIdState } from "pubnub-redux/dist/features/space/SpaceReducer";
import { Conversation } from "./conversation/types";
import { MembershipByUserIdState } from "pubnub-redux/dist/features/membership/MembershipReducer";
import { Membership } from "pubnub-redux/dist/features/membership/MembershipActions";

export interface AppState {
  auth: User;
  chat: {
    conversations: SpacesByIdState<Conversation>;
    allConversations: { spaceIds: string[] };
  };
  joinedConversations: MembershipByUserIdState<Membership>;
  user: ChatUser;
}
