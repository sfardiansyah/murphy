import React from "react";
import LoginForm from "./LoginForm";
import { Container } from "semantic-ui-react";

const Login: React.FC = () => {
  return (
    <Container>
      <h1>Login</h1>
      <LoginForm handleSubmit={console.log} />
    </Container>
  );
};

export default Login;
