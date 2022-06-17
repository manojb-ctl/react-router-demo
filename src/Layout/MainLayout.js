import React from "react";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  BrowserRouter,
} from "react-router-dom";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import Dashboard from "../pages/Dashboard";
import Userlist from "../pages/Userlist";
import Productlist from "../pages/Productlist";

const AuthLayout = () => {
  let { path, url } = useRouteMatch();
  console.log(path, url);

  return (
    <>
      <BrowserRouter>
        <MainHeader />
        <nav>
          <ul>
            <li>
              <Link to={`${url}/dashboard`}>Dashboard</Link>
            </li>
            <li>
              <Link to={`${url}/userlist`}>Userlist</Link>
            </li>
            <li>
              <Link to={`${url}/productlist`}>Productlist</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path={`${path}/dashboard`} exact component={Dashboard} />
          <Route path={`${path}/userlist`} exact component={Userlist} />
          <Route path={`${path}/productlist`} exact component={Productlist} />
        </Switch>

        <MainFooter />
      </BrowserRouter>
    </>
  );
};

export default AuthLayout;
