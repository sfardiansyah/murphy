import React from "react";
import { RouteProps, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "reducers/types";

const GuestRoute: React.FC<RouteProps> = (props) => {
  const isLoggedIn = useSelector((state: RootState) => !!state.user.id);

  return (
    <Route {...props}>
      {isLoggedIn ? <Redirect to="/chat" /> : props.children}
    </Route>
  );
};

export default GuestRoute;
