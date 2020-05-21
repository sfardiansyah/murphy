import React, { useEffect } from "react";
import logo from "./logo.svg";
import "App.css";
import { Provider } from "react-redux";
import { createAppStore } from "store/create";
import Pubnub from "pubnub";
import { createPubNubListener } from "pubnub-redux";
import { PubNubProvider } from "pubnub-react";

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
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </PubNubProvider>
    </Provider>
  );
};

export default App;
