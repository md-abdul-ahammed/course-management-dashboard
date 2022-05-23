import React from "react";
import icon1 from "../../../../assets/merchantDashboard/DashboardHome/Icon.png";
import icon2 from "../../../../assets/merchantDashboard/DashboardHome/Incon.png";
import icon3 from "../../../../assets/merchantDashboard/DashboardHome/Icon (1).png";
const HeaderCard = () => {
  return (
    <div>
      <div className="grid grid-cols-8  gap-6">
        <div className="bg-white p-6 flex items-center  rounded-2xl col-span-8 md:col-span-2">
          <div className="icon">
            <img src={icon1} alt="" />
          </div>
          <div className="details ml-4">
            <h1 className="text-3xl font-bold">0</h1>
            <p className="text-base">Courses Sold</p>
          </div>
        </div>
        <div className="bg-white p-6 flex items-center  rounded-2xl  col-span-8 md:col-span-2">
          <div className="icon">
            <img src={icon2} alt="" />
          </div>
          <div className="details ml-4">
            <h1 className="text-3xl font-bold">₹ 0</h1>
            <p className="text-base">Revenue Collected</p>
          </div>
        </div>

        <div className="bg-white p-6 flex items-center  rounded-2xl  col-span-8 md:col-span-2">
          <div className="icon">
            <img src={icon3} alt="" />
          </div>
          <div className="details ml-4">
            <h1 className="text-3xl font-bold">0</h1>
            <p className="text-base">Students Enrolled</p>
          </div>
        </div>
      </div>

      <div className="mt-4 ">{/* <Charts></Charts> */}</div>
    </div>
  );
};

export default HeaderCard;
