import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Counter from "src/pages/Counter";
import Users from "src/pages/Users";

const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Redirect to="/counter" />
      </Route>
      <Switch>
        <Route path="/counter">
          <Counter />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
