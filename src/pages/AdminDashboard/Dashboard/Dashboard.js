import React from "react";
import AdminDashboardContainer from "../../../components/AdminDashboardContainer/DashboardContainer";
import Protect from "../../../components/Auth/Protect";
import AdminMobileMenu from "../../../components/Mobilemenu/AdminMobileMenu";
import Sidebar from "../../../components/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex bg-[#fafafa] min-h-screen md:flex-row flex-col">
      {/* <Protect userType={[1]}> */}
      <div className="w-[220px] md:block hidden ">
        <Sidebar />
      </div>
      <AdminMobileMenu />
      <div className="w-full">
        <AdminDashboardContainer />
      </div>
      {/* </Protect> */}
    </div>
  );
};

export default Dashboard;
