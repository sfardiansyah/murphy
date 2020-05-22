import React, { useCallback } from "react";
import LoginForm from "./LoginForm";
import { Container } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { login } from "reducers/auth/actions";

const K_LOGIN_FORM_INITIAL_VALUES = { email: "", password: "" };

const Login: React.FC = () => {
  const dispatch = useDispatch();

  const actionLogin = useCallback((credential) => dispatch(login(credential)), [
    dispatch,
  ]);

  return (
    <Container>
      <h1>Login</h1>
      <LoginForm
        handleSubmit={actionLogin}
        initialValues={K_LOGIN_FORM_INITIAL_VALUES}
      />
    </Container>
  );
};

export default Login;
