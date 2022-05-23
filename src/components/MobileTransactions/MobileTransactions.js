import React from "react";
import { Link } from "react-router-dom";

const allData = [
  {
    name: "Tarun K",
    course: "UX Design Program",
    institute: "ALLEN Institute",
    date: "Mar 31, 2022",
    amount: "Rs. 4999",
  },
  {
    name: "Tarun K",
    course: "UX Design Program",
    institute: "ALLEN Institute",
    date: "Mar 31, 2022",
    amount: "Rs. 4999",
  },
  {
    name: "Tarun K",
    course: "UX Design Program",
    institute: "ALLEN Institute",
    date: "Mar 31, 2022",
    amount: "Rs. 4999",
  },
  {
    name: "Tarun K",
    course: "UX Design Program",
    institute: "ALLEN Institute",
    date: "Mar 31, 2022",
    amount: "Rs. 4999",
  },
];

const MobileTransactions = () => {
  return (
    <div className="bg-white rounded-lg p-5">
      <div className="flex justify-between items-center mb-12">
        <h4 className="text-[19px] text-[#414141 ] font-medium">
          Transactions by Users
        </h4>
        <Link to="#" className="text-[14px] font-medium text-[#AD62FF]">
          View All
        </Link>
      </div>
      {allData.map((data, index) => (
        <div key={index} className="border-b border-light-gray pt-2">
          <div className="flex flex-col space-y-3">
            <div className="flex justify-between">
              <div className="text-[14px] font-medium text-[#252733]">
                {data.name}
              </div>
              <div className=" text-[#252733] font-medium">{data.amount}</div>
            </div>
            <div className="flex justify-between pb-2">
              <div>
                <h3 className="text-[14px] text-[#252733] font-semibold">
                  {data.course}
                </h3>
                <p className="text-[12px] text-[#6B7280]">{data.institute}</p>
              </div>
              <div className="text-[10px] flex items-end text-[#9E9E9E]">
                {data.date}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileTransactions;
