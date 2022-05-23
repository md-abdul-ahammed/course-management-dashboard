import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../../components/Header/Header";

const Careers = () => {
  return (
    <div>
      <Header pageTitle={"Careers"} />
      <Outlet />
    </div>
  );
};

export default Careers;
