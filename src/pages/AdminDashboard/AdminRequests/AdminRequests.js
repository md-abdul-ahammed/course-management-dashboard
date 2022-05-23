import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import { MdKeyboardArrowDown } from "react-icons/md";
import RequestsContainer from "../../../components/RequestsContainer/RequestsContainer";
import { Link, NavLink } from "react-router-dom";

const menuItems = [
  {
    name: "Institute Requests",
    route: "instituteRequests",
  },
  {
    name: "Course Requests",
    route: "courseRequests",
  },
  {
    name: "Changes Request",
    route: "changesRequest",
  },
  {
    name: "Rejected List",
    route: "rejectedList",
  },
];

const Requests = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Institute Requests");
  return (
    <div className="bg-[#fafafa]">
      <Header pageTitle={"Pending Requests"} />
      <div className="md:px-[30px] px-[5px] !mt-[0px]">
        {/* for desktop view */}
        <div className="md:block hidden">
          <div className="flex mb-8">
            <NavLink
              to="instituteRequests"
              className={(navInfo) =>
                navInfo.isActive
                  ? "font-medium text-[#ffffff] px-4 rounded-md py-1 bg-[#7D23E0]"
                  : "font-medium text-[#868686] px-4 rounded-md py-1 bg-[#F0F0F0]"
              }
            >
              Institute Requests
            </NavLink>
            <NavLink
              to="courseRequests"
              className={(navInfo) =>
                navInfo.isActive
                  ? "font-medium text-[#ffffff] mx-4 px-4 rounded-md py-1 bg-[#7D23E0]"
                  : "font-medium text-[#868686] px-4 mx-4 rounded-md py-1 bg-[#F0F0F0]"
              }
            >
              Course Requests
            </NavLink>
            <NavLink
              to="changesRequest"
              className={(navInfo) =>
                navInfo.isActive
                  ? "font-medium text-[#ffffff] px-4 rounded-md py-1 bg-[#7D23E0]"
                  : "font-medium text-[#868686] px-4 rounded-md py-1 bg-[#F0F0F0]"
              }
            >
              Changes Request
            </NavLink>
            <NavLink
              to="rejectedList"
              className={(navInfo) =>
                navInfo.isActive
                  ? "font-medium text-[#ffffff] px-4 ml-4 rounded-md py-1 bg-[#7D23E0]"
                  : "font-medium text-[#868686] px-4 ml-4 rounded-md py-1 bg-[#F0F0F0]"
              }
            >
              Rejected List
            </NavLink>
          </div>
        </div>
        {/* for mobile view */}
        <div className=" md:hidden block pt-5 pb-8 px-3">
          <div className=" flex justify-between items-center">
            <div className="font-bold font-[18px]">Pending Requests</div>
            <div className="relative w-[170px]">
              <div
                onClick={() => setOpen(!open)}
                className="flex items-center justify-end cursor-pointer font-medium text-[#7D23E0]"
              >
                {value}
                <MdKeyboardArrowDown className="ml-1 text-2xl" />
              </div>
              {open && (
                <div className="w-[100%] text-[#747474] shadow-xl absolute top-[30px] rounded-lg left-0 bg-white">
                  <div className="grid grid-cols-1 divide-y-[1px]">
                    {menuItems
                      .filter((menu) => menu.name !== value)
                      .map((menu) => (
                        <Link
                          to={menu.route}
                          onClick={() => {
                            setValue(menu.name);
                            setOpen(false);
                          }}
                          className="px-3 py-3"
                        >
                          {menu.name}
                        </Link>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <RequestsContainer />
      </div>
    </div>
  );
};

export default Requests;
