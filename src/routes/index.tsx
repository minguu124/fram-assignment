import Router from "./router";
import NavBar from "src/components/NavBar";
import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppRoutes = () => {
  return (
    <Fragment>
      <NavBar />
      <Router />
      <ToastContainer />
    </Fragment>
  );
};

export default AppRoutes;
