import React from "react";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  BrowserRouter,
} from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPass from "../pages/ForgotPass";

const AuthLayout = () => {
  let { path, url } = useRouteMatch();
  console.log(path, url);

  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to={`${url}/login`}>Login</Link>
            </li>
            <li>
              <Link to={`${url}/register`}>Register</Link>
            </li>
            <li>
              <Link to={`${url}/forgot-pass`}>Forgot Password</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path={`${path}/login`} exact>
            <Login />
          </Route>
          <Route path={`${path}/register`} exact component={Register} />
          <Route path={`${path}/forgot-pass`} exact component={ForgotPass} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default AuthLayout;
