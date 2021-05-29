import { BrowserRouter, Switch, Route } from "react-router-dom";
import Counter from "src/pages/Counter";
import Users from "src/pages/Users";

const Router = () => {
  return (
    <BrowserRouter>
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
