import React from "react";
import { Outlet } from "react-router-dom";

const RequestsContainer = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default RequestsContainer;
