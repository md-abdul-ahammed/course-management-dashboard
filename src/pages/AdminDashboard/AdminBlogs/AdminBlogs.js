import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../../components/Header/Header";

const Blogs = () => {
  return (
    <div>
      <Header pageTitle={"Blogs"} />
      <Outlet />
    </div>
  );
};

export default Blogs;
