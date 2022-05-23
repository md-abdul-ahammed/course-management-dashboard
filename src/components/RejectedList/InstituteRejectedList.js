import React from "react";
import { useSelector } from "react-redux";
import { BsFillCircleFill } from "react-icons/bs";

const InstituteRejectedList = () => {
  const { loading, adminInstitutes } = useSelector(
    (state) => state.adminInstitutes
  );
  return (
    <div className="grid pb-[40px] md:grid-cols-2 gap-8 lg:gap-x-8">
      {adminInstitutes
        .filter((data) => data.approval === 2)
        .map((data, index) => (
          <div key={index}>
            <div className="bg-white px-[18px] border border-light-gray rounded-lg py-3.5">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-[21px] text-[#414141] font-bold ">
                    {data.name}
                  </h3>
                  <div className="text-[#767676] flex">
                    <p className="mr-1">{data.locations[0].state},</p>
                    {data.locations[0].city}
                  </div>
                </div>
                <button className="font-medium text-[#414141] text-[20px] px-4 rounded-md py-1 bg-[#ECECEC]">
                  Rejected
                </button>
              </div>
              <div className="flex items-center">
                <BsFillCircleFill className="text-[6px] text-[#3AC817]" />
                <span className="ml-2 my-1 text-[#414141]">Online</span>
              </div>
              <div className="text-[18px] text-[#747474]">
                {data.description}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default InstituteRejectedList;
