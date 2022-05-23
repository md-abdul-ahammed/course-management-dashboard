import React from "react";
import { MdDashboard } from "react-icons/md";
import { RiFileMarkLine } from "react-icons/ri";
import { MdOutlineInsertChart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiFillSetting } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const ToggleDashboard = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className="flex items-center cursor-pointer   lg:hidden mb-3  bg-white">
      {showSidebar ? (
        <button
          className="flex text-4xl items-center cursor-pointer fixed left-10 top-2 z-50"
          style={{ color: "#414141" }}
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="flex  items-center cursor-pointer ml-4 my-3 lg:hidden "
          fill="
          #414141"
          viewBox="0 0 100 80"
          width="30"
          height="30"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div
        className={`top-0 left-0  bg-white   fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "-translate-x-0 " : "-translate-x-full"
        }`}
      >
        <div className="menu dashboard justify-start mt-16">
          <NavLink
            to="/merchant/dashboard/"
            activeclassName="active"
            className="menu-item flex items-center gap-3"
          >
            {" "}
            <MdDashboard></MdDashboard> Dashboard{" "}
          </NavLink>
          <NavLink
            to="/merchant/dashboard/courses"
            activeclassName="active"
            className="menu-item flex items-center gap-3"
          >
            {" "}
            <RiFileMarkLine></RiFileMarkLine> Courses{" "}
          </NavLink>
          <NavLink
            to="/merchant/dashboard/accountancy"
            activeclassName="active"
            className="menu-item flex items-center gap-3"
          >
            <MdOutlineInsertChart></MdOutlineInsertChart> Accountancy{" "}
          </NavLink>
          <NavLink
            to="/merchant/dashboard/profile"
            activeclassName="active"
            className="menu-item flex items-center gap-3"
          >
            <CgProfile></CgProfile> My Profile{" "}
          </NavLink>
          <NavLink
            to="/merchant/dashboard/notifications"
            activeclassName="active"
            className="menu-item flex items-center gap-3"
          >
            <IoIosNotificationsOutline></IoIosNotificationsOutline>Notification{" "}
            <span className="bg-red/30 p-1 rounded-full text-xs text-red/70">
              0
            </span>
          </NavLink>
          <NavLink
            to="/merchant/dashboard/settings"
            activeclassName="active"
            className="menu-item flex items-center gap-3"
          >
            <AiFillSetting></AiFillSetting> Setting{" "}
          </NavLink>
          <h3 className="menu-item flex items-center gap-3">
            {" "}
            <FiLogOut></FiLogOut> Log Out{" "}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ToggleDashboard;
