import React, { useEffect } from "react";
import { useState } from "react";
import "./Dashboard.css";
import { MdDashboard } from "react-icons/md";
import { RiFileMarkLine } from "react-icons/ri";
import { MdOutlineInsertChart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiFillSetting } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import {
  Link,
  NavLink,
  NavNavLink,
  Outlet,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import logo from "../../assets/merchantDashboard/Accountancy/logo.png";
import ToggleDashboard from "./ToggleDashboard";
import { useDispatch, useSelector } from "react-redux";
import {
  authSelector,
  getInstituteDetails,
} from "../../redux/slices/authSlice";
import { isEmpty } from "../../components/utils";
import LoadingSpinner from "../../components/layout/LoadingSpinner";
import Protect from "../../components/Auth/Protect";

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { instituteDetails, loading } = useSelector(authSelector);
  const [refetch, setRefetch] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.localStorage.getItem("OWNER_ID") === null) navigate("/login");
    else if (window.localStorage.getItem("INSTITUTE_ID") === null)
      navigate("/merchant/details");
    dispatch(getInstituteDetails());
  }, [dispatch, navigate, refetch]);
  useEffect(() => {
    console.log(instituteDetails);
    if (
      !loading &&
      !isEmpty(instituteDetails) &&
      instituteDetails.approval !== 1
    ) {
      navigate("/merchant/details/success");
    } else {
      return;
    }
  }, [instituteDetails]);

  function logout() {
    navigate("/merchant");
    localStorage.clear();
    window.location.reload();
  }

  if (loading) return <LoadingSpinner />;

  return (
    <>
      <div className="dashboard">
        <ToggleDashboard
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        ></ToggleDashboard>
        <div className=" grid grid-cols-6 gap-0 bg-white ">
          <div className=" hidden  lg:block">
            <div>
              <div className="logo flex items-center ml-4 mt-5 mb-12">
                <img src={logo} alt="" />
              </div>

              <div className="menu dashboard justify-start">
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
                  <IoIosNotificationsOutline></IoIosNotificationsOutline>
                  Notification{" "}
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
                <h3
                  onClick={() => {
                    console.log("ll");
                    logout();
                  }}
                  className="menu-item flex items-center gap-3"
                >
                  {" "}
                  <FiLogOut></FiLogOut> Log Out{" "}
                </h3>
              </div>
            </div>
          </div>
          <div
            style={{ background: " #FAFAFB", height: "100%" }}
            className="  col-span-6 lg:col-span-5  "
            onClick={() => setShowSidebar(false)}
          >
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
