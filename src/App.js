import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthLayout from "./Layout/AuthLayout";
import MainLayout from "./Layout/MainLayout";
import AdminLayout from "./Layout/AdminLayout";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <AuthLayout /> */}

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={AuthLayout} />
          <Route path="/main" exact component={MainLayout} />
          <Route path="/admin" exact component={AdminLayout} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
