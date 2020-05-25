import React, { useEffect, useState, useCallback } from "react";
import { usePubNub } from "pubnub-react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { createPubNubListener } from "pubnub-redux";

import { Menu, MenuItemProps } from "semantic-ui-react";

import Login from "components/auth/Login";
import Home from "components/home/Home";
import Chat from "components/chat/Chat";
import GuestRoute from "components/routes/GuestRoute";
import UserRoute from "components/routes/UserRoute";

import { logout } from "reducers/auth/actions";

import { RootState } from "reducers/types";

const App: React.FC = () => {
  const [activeItem, setActiveItem] = useState("home");

  const dispatch = useDispatch();
  const pubnub = usePubNub();
  const isLoggedIn = useSelector((state: RootState) => !!state.user.id);

  const handleMenuClick = (
    _: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    { name }: MenuItemProps
  ) => name && setActiveItem(name);

  const leaveApplication = useCallback(() => pubnub.unsubscribeAll(), [pubnub]);

  useEffect(() => {
    pubnub.addListener(createPubNubListener(dispatch));
    // pubnub.addListener(createTypingIndicatorsListener(store.dispatch));
    return leaveApplication;
  }, [pubnub, dispatch, leaveApplication]);

  useEffect(() => {
    window.addEventListener("beforeunload", leaveApplication);
  }, [leaveApplication]);

  console.log(isLoggedIn);

  return (
    <BrowserRouter>
      <Menu>
        <Menu.Item
          name="home"
          as={Link}
          to="/"
          active={activeItem === "home"}
          onClick={handleMenuClick}
        >
          Home
        </Menu.Item>
        {isLoggedIn && (
          <Menu.Item
            name="chat"
            as={Link}
            to="/chat"
            active={activeItem === "chat"}
            onClick={handleMenuClick}
          >
            Chat
          </Menu.Item>
        )}
        <Menu.Menu position="right">
          {isLoggedIn ? (
            <Menu.Item name="logout" onClick={() => dispatch(logout())}>
              Logout
            </Menu.Item>
          ) : (
            <Menu.Item
              name="login"
              as={Link}
              to="/login"
              active={activeItem === "login"}
              onClick={handleMenuClick}
            >
              Login
            </Menu.Item>
          )}
        </Menu.Menu>
      </Menu>
      <Switch>
        <GuestRoute path="/login">
          <Login />
        </GuestRoute>
        <UserRoute path="/chat">
          <Chat />
        </UserRoute>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
