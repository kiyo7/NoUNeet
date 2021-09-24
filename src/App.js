// lib
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { AuthProvider } from "./AuthService";
import { LoggedInRoute } from "./LoggedInRoute";
import MapBox from "./pages/MapBox";

export const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <LoggedInRoute exact path="/" component={Home}></LoggedInRoute>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
          <Route exact path="/mapbox" component={MapBox}></Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
};

