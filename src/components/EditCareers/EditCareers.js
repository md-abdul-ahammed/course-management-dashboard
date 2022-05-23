import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../PageHeader/PageHeader";

const EditCareers = () => {
  return (
    <div>
      <PageHeader title={"Edit job posting"} />
      <div className="px-[30px] pt-4 pb-16 ">
        <div className="flex flex-col space-y-3">
          <input
            type="text"
            className="w-full px-6 bg-[#FAFAFA] border-2 border-[#A4A4A4] placeholder:text-[#A8A8A8]  text-[#414141] rounded-lg"
            placeholder="Job title*"
          />
          <textarea
            rows="4"
            placeholder="Job description (2-3 lines)*"
            className="w-full px-6 bg-[#FAFAFA] border-2 border-[#A4A4A4] placeholder:text-[#A8A8A8]  text-[#414141] rounded-lg"
          />
          <input
            type="text"
            className="w-full px-6 bg-[#FAFAFA] border-2 border-[#A4A4A4] placeholder:text-[#A8A8A8]  text-[#414141] rounded-lg"
            placeholder="Provide Google forms link*"
          />
          <div className="flex md:flex-row flex-col justify-center mt-5 gap-y-5 md:gap-x-5">
            <button className="px-12 font-bold rounded-lg py-2 text-white bg-[#7D23E0]">
              Confirm
            </button>
            <Link
              to="/adminDashboard/careers/activeCareers"
              className="px-12 text-center font-bold rounded-lg py-2 text-white bg-[#E46060]"
            >
              Cancel
            </Link>
            <button className="px-12 font-bold rounded-lg py-2 text-[#414141] bg-[#F0F0F0]">
              Delete Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCareers;
