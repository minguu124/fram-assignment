import Router from "./router";
import NavBar from "src/components/NavBar";
import { Fragment } from "react";

const AppRoutes = () => {
  return (
    <Fragment>
      <NavBar />
      <Router />
    </Fragment>
  );
};

export default AppRoutes;
