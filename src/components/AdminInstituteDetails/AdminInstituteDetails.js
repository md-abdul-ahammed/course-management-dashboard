import React from "react";
import InstituteDetailsContainer from "./InstituteDetailsContainer";
import InstituteMobileMenu from "./InstituteMobileMenu";
import InstituteSidebar from "./InstituteSidebar";

const AdminInstituteDetails = () => {
  return (
    <div className="flex md:flex-row flex-col">
      <div className="w-[240px] md:block hidden ">
        <InstituteSidebar />
      </div>
      <InstituteMobileMenu />
      <div className="w-full">
        <InstituteDetailsContainer />
      </div>
    </div>
  );
};

export default AdminInstituteDetails;
