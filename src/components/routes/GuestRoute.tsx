import React from "react";
import { RouteProps, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppState } from "reducers/types";

const GuestRoute: React.FC<RouteProps> = (props) => {
  const isLoggedIn = useSelector((state: AppState) => !!state.user.id);

  return (
    <Route {...props}>
      {isLoggedIn ? <Redirect to="/chat" /> : props.children}
    </Route>
  );
};

export default GuestRoute;
