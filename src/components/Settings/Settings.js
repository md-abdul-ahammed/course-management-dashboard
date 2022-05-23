import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Settings = () => {
  return (
    <div>
      <Header pageTitle={"Settings"} />
      <div className="md:mr-3 mr-0 p-3 mb-10 rounded-lg">
        <Outlet />
      </div>
    </div>
  );
};

export default Settings;
