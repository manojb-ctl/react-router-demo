import React from "react";
import { useParams } from "react-router-dom";

const Login = () => {
  const { login } = useParams();
  console.log(login);

  return <div>Login Page {login}</div>;
};

export default Login;
