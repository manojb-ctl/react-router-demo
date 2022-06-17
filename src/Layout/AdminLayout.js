import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import AdminLogin from "../pages/AdminLogin";
import AdminDashboard from "../pages/AdminDashboard";
import AdminUserlist from "../pages/AdminUserlist";
import AdminProductlist from "../pages/AdminProductlist";
import AdminFooter from "../components/AdminFooter";

const AuthLayout = () => {
  let { path, url } = useRouteMatch();
  console.log(path, url);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={`${url}/admin-login`}>Admin Login</Link>
          </li>
          <li>
            <Link to={`${url}/admin-dashboard`}>Admin Dashboard</Link>
          </li>
          <li>
            <Link to={`${url}/admin-userlist`}>Admin Userlist</Link>
          </li>
          <li>
            <Link to={`${url}/admin-productlist`}>Admin Productlist</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path={`${path}/admin-login`} exact component={AdminLogin} />
        <Route
          path={`${path}/admin-dashboard`}
          exact
          component={AdminDashboard}
        />
        <Route
          path={`${path}/admin-userlist`}
          exact
          component={AdminUserlist}
        />
        <Route
          path={`${path}/admin-productlist`}
          exact
          component={AdminProductlist}
        />
      </Switch>

      <AdminFooter />
    </>
  );
};

export default AuthLayout;
