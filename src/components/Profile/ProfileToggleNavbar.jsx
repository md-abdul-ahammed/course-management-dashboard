import React, { useEffect, useState } from "react";
import { MdDashboard } from "react-icons/md";
import { RiFileMarkLine } from "react-icons/ri";
import { MdOutlineInsertChart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiFillSetting } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setLogoForBottomMenu,
  setShowSideBar,
} from "../../redux/slices/UserProfileSidePopUp";
import image1 from "../../assets/merchantDashboard/Accountancy/Kazi Mohammad Fahad Kibria.png";
import { Container } from "@mui/material";
import { FiUser } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BiUserPlus } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { AiOutlineCreditCard } from "react-icons/ai";
import { RiCalendarEventFill } from "react-icons/ri";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BiMessageDots } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";
import { HiOutlineLogin } from "react-icons/hi";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import ProfileImageModal from "./ProfileImageModal";
import LogAndDeleteModal from "./LogAndDeleteModal";
import logo from "../../assets/merchantDashboard/Accountancy/logo.png";
import BottomNav from "../BottomNav";
import BottomBar from "../layout/BottomBar";
import {
  authSelector,
  getInstituteDetails,
  getUser,
} from "../../redux/slices/authSlice";

const ProfileToggleNavbar = () => {
  const showSidebar = useSelector(
    (state) => state.userProfileSideBar.showSideBar
  );
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const [selectImage, setSelectedImage] = useState(false);
  const handleOpen = () => setOpen(true);

  const logoForBottomMenu = useSelector(
    (state) => state.userProfileSideBar.logoForBottomMenu
  );

  const userLogin = useSelector((state) => state.auth.isAuthenticated);

  const [modalType, setModalType] = useState("");
  const [deleteAndLogopen, seDeleteAndLogOpen] = React.useState(false);
  const handleDeleteAndLogOpen = (type) => {
    seDeleteAndLogOpen(true);
    setModalType(type);
  };

  const imageUpload = () => {
    handleOpen();
    setSelectedImage(true);
  };

  const { instituteDetails, userData } = useSelector(authSelector);

  useEffect(() => {
    dispatch(getInstituteDetails());
    dispatch(getUser());
  }, [dispatch]);

  console.log(instituteDetails, "inn", userData);
  return (
    <>
      <div className="flex items-center cursor-pointer   lg:hidden mb-3  bg-white">
        <div className="bg-ghost/10 w-full">
          {!userLogin || logoForBottomMenu ? (
            <div className="py-3 px-5">
              <img src={logo} alt="" />
            </div>
          ) : (
            <div>
              {showSidebar ? (
                ""
              ) : (
                <svg
                  onClick={() => dispatch(setShowSideBar(!showSidebar))}
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
            </div>
          )}
        </div>

        <div
          className={`top-0 left-0  bg-white w-full  fixed h-full overflow-y-scroll z-40  ease-in-out duration-300 ${
            showSidebar ? "-translate-x-0 " : "-translate-x-full"
          }`}
        >
          <Container>
            <div className="menu profile justify-start mt-5 ">
              <div className="image-section flex items-center justify-center mb-5">
                <div>
                  {userData?.image ? (
                    <img
                      className="w-20 h-20 rounded-full mx-auto"
                      src={image1}
                      alt=""
                    />
                  ) : (
                    <div className="bg-violet h-20 w-20 rounded-full mx-auto flex items-center justify-center p-1 text-white  text-3xl">
                      {userData?.name?.slice(0, 1).toUpperCase()}
                    </div>
                  )}
                  <p
                    onClick={imageUpload}
                    className="text-xs mt-2 text-[#7D23E0] underline underline-offset-2"
                  >
                    Change Profile Picture
                  </p>
                </div>

                <div className="details ml-2 mb-5">
                  <p className="text-lg font-bold">{userData?.name}</p>
                  <p className="text-base">{userData?.email}</p>
                </div>
              </div>

              <hr className="my-3 text-ghost/60" />

              <div>
                <p
                  className="mt-5 mb-2"
                  style={{
                    paddingLeft: "20px",
                    letterSpacing: "5px",
                    textTransform: "uppercase",
                  }}
                >
                  Activity
                </p>

                <NavLink
                  to="/profile/profileHome/"
                  activeclassName="active"
                  className="menu-item flex items-center justify-between gap-3"
                  onClick={() => {
                    dispatch(setShowSideBar(!showSidebar));
                    dispatch(setLogoForBottomMenu(false));
                  }}
                >
                  {" "}
                  <div className="flex items-center">
                    <FiUser className="mr-2"></FiUser> Profile{" "}
                  </div>
                  <div>
                    <AiOutlineRight></AiOutlineRight>
                  </div>
                </NavLink>

                <NavLink
                  to="/profile/reviews"
                  activeclassName="active"
                  className="menu-item flex items-center justify-between gap-3"
                  onClick={() => {
                    dispatch(setShowSideBar(!showSidebar));
                    dispatch(setLogoForBottomMenu(false));
                  }}
                >
                  {" "}
                  <div className="flex items-center ">
                    <AiOutlineStar className="mr-2"></AiOutlineStar> Review{" "}
                  </div>
                  <div>
                    <AiOutlineRight></AiOutlineRight>
                  </div>
                </NavLink>

                {/* <NavLink
                to='/merchant/dashboard/accountancy'
                activeclassName='active'
                className='menu-item flex items-center gap-3'
              >
                <AiOutlineHeart></AiOutlineHeart> Wishlist{' '}
              </NavLink>
              <NavLink
                to='/merchant/dashboard/profile'
                activeclassName='active'
                className='menu-item flex items-center gap-3'
              >
                <BiUserPlus></BiUserPlus> Invite & Earns{' '}
              </NavLink> */}
              </div>
              <hr className="my-3 text-ghost/60" />
              <div>
                <p
                  className="mt-5 mb-2"
                  style={{
                    paddingLeft: "20px",
                    letterSpacing: "5px",
                    textTransform: "uppercase",
                  }}
                >
                  Courses
                </p>

                <NavLink
                  to="/profile/recentlyViewed/"
                  activeclassName="active"
                  className="menu-item flex items-center justify-between gap-3"
                  onClick={() => {
                    dispatch(setShowSideBar(!showSidebar));
                    dispatch(setLogoForBottomMenu(false));
                  }}
                >
                  {" "}
                  <div className="flex items-center">
                    <AiOutlineEye className="mr-2"></AiOutlineEye> Recently
                    Viewed{" "}
                  </div>
                  <div>
                    <AiOutlineRight></AiOutlineRight>
                  </div>
                </NavLink>

                <NavLink
                  to="/profile/purchaseCourse"
                  activeclassName="active"
                  className="menu-item flex items-center justify-between gap-3"
                  onClick={() => {
                    dispatch(setShowSideBar(!showSidebar));
                    dispatch(setLogoForBottomMenu(false));
                  }}
                >
                  {" "}
                  <div className="flex items-center ">
                    <BsBag className="mr-2"></BsBag> Purchase Courses{" "}
                  </div>
                  <div>
                    <AiOutlineRight></AiOutlineRight>
                  </div>
                </NavLink>

                <NavLink
                  to="/profile/ongoingCourse/"
                  activeclassName="active"
                  className="menu-item flex items-center justify-between gap-3"
                  onClick={() => {
                    dispatch(setShowSideBar(!showSidebar));
                    dispatch(setLogoForBottomMenu(false));
                  }}
                >
                  {" "}
                  <div className="flex items-center ">
                    <MdOutlineInsertChart className="mr-2"></MdOutlineInsertChart>{" "}
                    Ongoing Courses{" "}
                  </div>
                  <div>
                    <AiOutlineRight></AiOutlineRight>
                  </div>
                </NavLink>
              </div>

              <hr className="my-3 text-ghost/60" />

              <div>
                <p
                  className="mt-5 mb-2"
                  style={{
                    paddingLeft: "20px",
                    letterSpacing: "5px",
                    textTransform: "uppercase",
                  }}
                >
                  Payment
                </p>

                <NavLink
                  to="/profile/manageCards"
                  activeclassName="active"
                  className="menu-item flex items-center justify-between gap-3"
                  onClick={() => {
                    dispatch(setShowSideBar(!showSidebar));
                    dispatch(setLogoForBottomMenu(false));
                  }}
                >
                  {" "}
                  <div className="flex items-center ">
                    <AiOutlineCreditCard className="mr-2"></AiOutlineCreditCard>{" "}
                    Manage Cards{" "}
                  </div>
                  <div>
                    <AiOutlineRight></AiOutlineRight>
                  </div>
                </NavLink>
              </div>

              <hr className="my-3 text-ghost/60 " />

              <div>
                <p
                  className="mt-5 mb-2"
                  style={{
                    paddingLeft: "20px",
                    letterSpacing: "5px",
                    textTransform: "uppercase",
                  }}
                >
                  Others
                </p>

                <NavLink
                  to="/profile/profileHome/"
                  activeclassName="active"
                  className="menu-item flex items-center justify-between gap-3"
                  onClick={() => {
                    dispatch(setShowSideBar(!showSidebar));
                    dispatch(setLogoForBottomMenu(false));
                  }}
                >
                  {" "}
                  <div className="flex items-center">
                    <MdDashboard className="mr-2"></MdDashboard> Blogs{" "}
                  </div>
                  <div>
                    <AiOutlineRight></AiOutlineRight>
                  </div>
                </NavLink>

                <NavLink
                  to="/events"
                  activeClass="active"
                  className="menu-item flex items-center justify-between mt-1"
                  onClick={() => {
                    dispatch(setShowSideBar(!showSidebar));
                    dispatch(setLogoForBottomMenu(false));
                  }}
                >
                  {" "}
                  <div className="flex items-center ">
                    <RiCalendarEventFill className="mr-2"></RiCalendarEventFill>{" "}
                    Events{" "}
                  </div>
                  <div>
                    <AiOutlineRight></AiOutlineRight>
                  </div>
                </NavLink>

                <NavLink
                  to="/profile/profileHome/"
                  activeclassName="active"
                  className="menu-item flex items-center justify-between gap-3"
                  onClick={() => {
                    dispatch(setShowSideBar(!showSidebar));
                    dispatch(setLogoForBottomMenu(false));
                  }}
                >
                  {" "}
                  <div className="flex items-center ">
                    <AiOutlineQuestionCircle className="mr-2"></AiOutlineQuestionCircle>{" "}
                    FAQs{" "}
                  </div>
                  <div>
                    <AiOutlineRight></AiOutlineRight>
                  </div>
                </NavLink>

                <NavLink
                  to="/profile/profileHome/"
                  activeclassName="active"
                  className="menu-item flex items-center justify-between gap-3"
                  onClick={() => {
                    dispatch(setShowSideBar(!showSidebar));
                    dispatch(setLogoForBottomMenu(false));
                  }}
                >
                  {" "}
                  <div className="flex items-center gap-3">
                    <AiOutlineQuestionCircle></AiOutlineQuestionCircle> FAQs{" "}
                  </div>
                  <div>
                    <AiOutlineRight></AiOutlineRight>
                  </div>
                </NavLink>

                <NavLink
                  to="/profile/profileHome/"
                  activeclassName="active"
                  className="menu-item flex items-center justify-between gap-3"
                  onClick={() => {
                    dispatch(setShowSideBar(!showSidebar));
                    dispatch(setLogoForBottomMenu(false));
                  }}
                >
                  {" "}
                  <div className="flex items-center gap-3">
                    <BiMessageDots></BiMessageDots> Need Help?{" "}
                  </div>
                  <div>
                    <AiOutlineRight></AiOutlineRight>
                  </div>
                </NavLink>
              </div>

              <hr className="my-3 text-ghost/60" />

              <h3
                onClick={() => handleDeleteAndLogOpen("delete")}
                className="menu-item flex items-center mt-1 "
              >
                {" "}
                Delete Account{" "}
              </h3>
              <h3
                onClick={() => handleDeleteAndLogOpen("logout")}
                className="menu-item flex items-center mt-1 text-red/80 mb-20"
              >
                {" "}
                <FiLogOut className="mr-2"></FiLogOut> Log Out{" "}
              </h3>
            </div>
            <ProfileImageModal
              name={userData?.name}
              open={open}
              handleOpen={handleOpen}
              setOpen={setOpen}
              setSelectedImage={setSelectedImage}
              selectImage={selectImage}
              image={userData?.image}
            ></ProfileImageModal>

            <LogAndDeleteModal
              open={deleteAndLogopen}
              handleOpen={handleDeleteAndLogOpen}
              setOpen={seDeleteAndLogOpen}
              modalType={modalType}
            ></LogAndDeleteModal>
          </Container>
        </div>
      </div>

      {/*
       profile bottom navbar 
      */}

      <div className="fixed bottom-0 left-0 right-0 z-[100] bg-white block shadow-4xl rounded-t-2xl py-2 lg:hidden">
        <Container>
          <BottomBar></BottomBar>
        </Container>
      </div>
    </>
  );
};

export default ProfileToggleNavbar;
