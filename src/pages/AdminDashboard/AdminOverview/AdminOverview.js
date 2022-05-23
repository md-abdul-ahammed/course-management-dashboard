import React from "react";
import Chart from "../../../components/Chart/Chart";
import Transactions from "../../../components/Transactions/Transactions";
import PendingRequests from "../../../components/PendingRequests/PendingRequests";
import dollar from "../../../util/assets/images/dollar.png";
import avatar from "../../../util/assets/images/avatar.png";
import time from "../../../util/assets/images/time.png";
import TopCard from "../../../components/AdminCard/TopCard";
import Header from "../../../components/Header/Header";
import TopCourses from "../../../components/TopCourses/TopCourses";
import MobileTransactions from "../../../components/MobileTransactions/MobileTransactions";

const allData = [
  {
    title: "Total Funds received",
    icon: dollar,
    quantity: "₹ 0",
  },
  {
    title: "recieved queries",
    icon: time,
    quantity: 0,
  },
  {
    title: "Funds Despersed",
    icon: avatar,
    quantity: 0,
  },
];

const Overview = () => {
  return (
    <div className=" md:px-[30px] bg-[#fafafa] px-[15px] ">
      <Header pageTitle={"Overview"} />
      <div className="grid lg:grid-cols-4 !mt-[0px] md:grid-cols-2 gap-6 lg:gap-x-6">
        {allData.map((data, index) => (
          <TopCard key={index} data={data} />
        ))}
        <button className="px-8 py-1 md:block hidden self-center rounded-full ml-5 shadow-lg w-fit text-white text-[18px] h-fit bg-[#7D23E0]">
          Google Analytics
        </button>
      </div>

      <Chart />

      <div className="flex md:flex-row flex-col my-12 lg:justify-start justify-between items-center lg:gap-8 gap-5">
        <PendingRequests />
        <TopCourses />
      </div>
      <div className="pb-12">
        <div className="md:block hidden">
          <Transactions />
        </div>
        <div className="block md:hidden">
          <MobileTransactions />
        </div>
      </div>
    </div>
  );
};

export default Overview;
