import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import _ from "lodash";
import { connect } from "react-redux";

import "bootstrap/dist/css/bootstrap.css";

import RegShow from "./components/user/register/Show";
import LogShow from "./components/user/login/Show";
import Dashboard from "./components/dashboard/List";
import { startLogoutUser } from "./action/User";

function App(props) {
  const handleLogout = () => {
    setTimeout(() => {
      props.dispatch(startLogoutUser());
    }, 10000);
  };

  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg mx-auto">
        <h2 className="navbar-brand">
          <Link to="/">Xcelpros</Link>
        </h2>

        {_.isEmpty(props.user) ? (
          <div className="collapse navbar-collapse justify-content-end">
            <div className="nav-item">
              <Link to="/users/register" className="nav-link">
                Register
              </Link>
            </div>
            <div className="nav-item">
              <Link to="/users/login" className="nav-link">
                Login
              </Link>
            </div>
          </div>
        ) : (
          <div className="collapse navbar-collapse justify-content-end">
            <div className="nav-item">
              <Link to="/users/dashboard" className="nav-link">
                Dashboard
              </Link>
            </div>
            <div className="nav-item">
              <Link
                to="/users/login"
                className="nav-link"
                onClick={handleLogout()}
              >
                Logout
              </Link>
            </div>
          </div>
        )}
      </nav>
      <Switch>
        <Route path="/users/register" component={RegShow} />
        <Route path="/users/login" component={LogShow} />
        <Route path="/users/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(App);
