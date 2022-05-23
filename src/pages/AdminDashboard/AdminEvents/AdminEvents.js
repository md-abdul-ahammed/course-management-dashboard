import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../../components/Header/Header";

const Events = () => {
  return (
    <div>
      <Header pageTitle={"Events"} />
      <Outlet />
    </div>
  );
};

export default Events;
