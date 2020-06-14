import { userLoggedIn, userLoggedOut } from ".";
import { ThunkAction } from "store/types";
import api from "./api";
import setAuthorizationHeader from "utils/setAuthorizationHeader";
import { fetchUserById, fetchMemberships } from "pubnub-redux";
import { getConversationsByUserId } from "reducers/membership";

export const login = (credentials: {}): ThunkAction => (
  dispatch,
  getState,
  context
) =>
  api.login(credentials).then(({ user, token }) => {
    localStorage.laywookJWT = token;

    setAuthorizationHeader(token);
    dispatch(userLoggedIn(user));

    context.pubnub.api.setUUID(user.id);

    const isLoginSuccessful = dispatch(
      fetchUserById({ userId: user.id }) as ThunkAction<Promise<void>>
    )
      .then(() =>
        context.pubnub.api.subscribe({
          channels: [user.id],
          withPresence: true,
        })
      )
      .then(() =>
        dispatch(
          fetchMemberships({
            userId: user.id,
            include: {
              spaceFields: true,
              customSpaceFields: false,
              customFields: false,
              totalCount: false,
            },
          })
        )
      )
      .then(() => {
        // Subscribe to messages on the user's joined conversations
        const conversationChannels = getConversationsByUserId(getState())[
          user.id
        ].map((membership) => membership.id);

        context.pubnub.api.subscribe({
          channels: conversationChannels,
          withPresence: true,
        });
      });

    return Promise.all([isLoginSuccessful]);
  });

export const logout = (): ThunkAction => (dispatch) => {
  localStorage.removeItem("laywookJWT");
  setAuthorizationHeader();
  dispatch(userLoggedOut());
};
