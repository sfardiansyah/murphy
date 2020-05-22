import React, { useEffect, useState } from "react";
import Pubnub from "pubnub";
import { PubNubProvider } from "pubnub-react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { createPubNubListener } from "pubnub-redux";

import { Menu, MenuItemProps } from "semantic-ui-react";

import { createAppStore } from "store/create";

import Login from "components/auth/Login";
import Home from "components/home/Home";
import Chat from "components/chat/Chat";

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

const leaveApplication = () => pubnub.unsubscribeAll();

const App: React.FC = () => {
  const [activeItem, setActiveItem] = useState("home");

  const handleMenuClick = (
    _: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    { name }: MenuItemProps
  ) => name && setActiveItem(name);

  useEffect(() => {
    pubnub.addListener(createPubNubListener(store.dispatch));
    // pubnub.addListener(createTypingIndicatorsListener(store.dispatch));
    return leaveApplication;
  }, []);

  useEffect(() => {
    window.addEventListener("beforeunload", leaveApplication);
  }, []);

  return (
    <Provider store={store}>
      <PubNubProvider client={pubnub}>
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
            <Menu.Item
              name="login"
              as={Link}
              to="/login"
              active={activeItem === "login"}
              onClick={handleMenuClick}
            >
              Login
            </Menu.Item>
            <Menu.Item
              name="chat"
              as={Link}
              to="/chat"
              active={activeItem === "chat"}
              onClick={handleMenuClick}
            >
              Chat
            </Menu.Item>
          </Menu>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/chat">
              <Chat />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </PubNubProvider>
    </Provider>
  );
};

export default App;
