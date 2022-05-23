import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const SettingsOptions = () => {
  return (
    <div className="bg-white">
      <div className="grid border border-[#DFE0EB] grid-cols-1 divide-y divide-[#DFE0EB] ">
        <Link
          to="editCategories"
          className="flex text-[#414141] cursor-pointer px-10 py-3 text-lg font-semibold items-center justify-between"
        >
          Edit Categories <MdKeyboardArrowRight className="scale-150" />{" "}
        </Link>
        <Link
          to="editFilters"
          className="flex text-[#414141] cursor-pointer px-10 py-3 text-lg font-semibold items-center justify-between"
        >
          Edit Filters <MdKeyboardArrowRight className="scale-150" />{" "}
        </Link>
      </div>
    </div>
  );
};

export default SettingsOptions;
