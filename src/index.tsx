import React from "react";
import ReactDOM from "react-dom";
import Pubnub from "pubnub";
import decode from "jwt-decode";
import "semantic-ui-css/semantic.min.css";

import { createAppStore } from "store/create";

import "./custom.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import setAuthorizationHeader from "utils/setAuthorizationHeader";
import { userLoggedIn } from "reducers/auth";
import { Provider } from "react-redux";
import { PubNubProvider } from "pubnub-react";
import { User } from "reducers/auth/types";
// import { fetchUserById, fetchMemberships } from "pubnub-redux";
// import { getConversationsByUserId } from "reducers/membership";
// import { ThunkAction } from "store/types";

const pubnubConfig = Object.assign(
  {},
  {
    restore: true,
    heartbeatInterval: 0,
    publishKey: "pub-c-03740331-d324-4488-aee1-9a3e0e3fe47f",
    subscribeKey: "sub-c-ba3d0034-9ac5-11ea-8d30-d29256d12d3d",
  }
  // keyConfiguration
);
const pubnub = new Pubnub(pubnubConfig);

const store = createAppStore({
  pubnub: {
    api: pubnub,
  },
});

if (localStorage.laywookJWT) {
  const { id, email, name }: User = decode(localStorage.laywookJWT);
  const user = { id, email, name };

  setAuthorizationHeader(localStorage.laywookJWT);
  store.dispatch(userLoggedIn(user));

  // store.dispatch((dispatch, getState, context) => {
  //   context.pubnub.api.setUUID(id);

  //   const isLoginSuccessful = dispatch(
  //     fetchUserById({ userId: id }) as ThunkAction<Promise<void>>
  //   )
  //     .then(() =>
  //       context.pubnub.api.subscribe({
  //         channels: [user.id],
  //         withPresence: true,
  //       })
  //     )
  //     .then(() =>
  //       dispatch(
  //         fetchMemberships({
  //           userId: user.id,
  //           include: {
  //             spaceFields: true,
  //             customSpaceFields: false,
  //             customFields: false,
  //             totalCount: false,
  //           },
  //         })
  //       )
  //     )
  //     .then(() => {
  //       // Subscribe to messages on the user's joined conversations
  //       const conversationChannels = getConversationsByUserId(getState())[
  //         user.id
  //       ].map((membership) => membership.id);

  //       context.pubnub.api.subscribe({
  //         channels: conversationChannels,
  //         withPresence: true,
  //       });
  //     });

  //   return Promise.all([isLoginSuccessful]);
  // });
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PubNubProvider client={pubnub}>
        <App />
      </PubNubProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
