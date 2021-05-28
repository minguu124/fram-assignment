import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Counter from "src/pages/Counter";
import Home from "src/pages/Home";
import Users from "src/pages/Users";

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/counter">
          <Counter />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRoutes;
