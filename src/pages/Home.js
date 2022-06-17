import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import AuthLayout from "../Layout/AuthLayout";
import MainLayout from "../Layout/MainLayout";
import AdminLayout from "../Layout/AdminLayout";

const Home = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={`/auth`}>AuthLayout</Link>
          </li>
          <li>
            <Link to={`/main`}>MainLayout</Link>
          </li>
          <li>
            <Link to={`/admin`}>AdminLayout</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path={`/auth`} exact component={AuthLayout} />
        <Route path={`/main`} exact component={MainLayout} />
        <Route path={`/admin`} exact component={AdminLayout} />
      </Switch>
    </>
  );
};

export default Home;
