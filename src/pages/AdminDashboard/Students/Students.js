import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../../components/Header/Header";

const Students = () => {
  return (
    <div>
      <Header pageTitle={"Students"} />
      <Outlet />
    </div>
  );
};

export default Students;
