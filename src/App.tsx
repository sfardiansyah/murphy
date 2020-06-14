import React, { useEffect, useCallback } from "react";
import { usePubNub } from "pubnub-react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createPubNubListener } from "pubnub-redux";

import Login from "components/auth/Login";
import Home from "components/home/Home";
import Chat from "components/chat/Chat";
import GuestRoute from "components/routes/GuestRoute";
import UserRoute from "components/routes/UserRoute";
import ComingSoon from "components/comingSoon/ComingSoon";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const pubnub = usePubNub();

  const leaveApplication = useCallback(() => pubnub.unsubscribeAll(), [pubnub]);

  useEffect(() => {
    pubnub.addListener(createPubNubListener(dispatch));
    // pubnub.addListener(createTypingIndicatorsListener(store.dispatch));
    return leaveApplication;
  }, [pubnub, dispatch, leaveApplication]);

  useEffect(() => {
    window.addEventListener("beforeunload", leaveApplication);
  }, [leaveApplication]);

  return (
    <BrowserRouter>
      <Switch>
        <GuestRoute path="/login">
          <Login />
        </GuestRoute>
        <UserRoute path="/chat">
          <Chat />
        </UserRoute>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <ComingSoon />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
