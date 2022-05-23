import React, { useEffect, useState } from "react";
import { MdDashboard } from "react-icons/md";
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

import { MdOutlineInsertChart } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { NavLink, Outlet } from "react-router-dom";

import image1 from "../../../src/assets/merchantDashboard/Accountancy/Kazi Mohammad Fahad Kibria.png";
import { Container } from "@mui/material";
import ProfileImageModal from "./ProfileImageModal";
import LogAndDeleteModal from "./LogAndDeleteModal";
import { useDispatch, useSelector } from "react-redux";
import {
  authSelector,
  getInstituteDetails,
  getUser,
} from "../../redux/slices/authSlice";

const ProfileNavbar = () => {
  const [open, setOpen] = React.useState(false);
  const [modalType, setModalType] = useState("");

  const [deleteAndLogopen, seDeleteAndLogOpen] = React.useState(false);
  const [selectImage, setSelectedImage] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleDeleteAndLogOpen = (type) => {
    seDeleteAndLogOpen(true);
    setModalType(type);
  };

  const imageUpload = () => {
    handleOpen();
    setSelectedImage(true);
  };

  const imageHandleChange = (e) => {
    // setImages([])
    console.log(e.target.files);
    // if (e.target.files) {
    // FilterImagesAndVideos({
    //   filesArray: e.target.files,
    //   setImages,
    //   setVideos,
    // })
    //   let filesArray = e.target.files
    //   Object.values(filesArray).forEach((item) => {

    //     if (item.type.toLowerCase().includes('image')) {
    //       console.log('its an image')
    //       setImages((prev) => (!isEmptyField(prev) ? [...prev, item] : [item]))
    //     }
    //   })
    //   const fileArray = Array.from(e.target.files).map((file) =>
    //     URL.createObjectURL(file)
    //   )
    //   setSelectedImages((prevImages) => prevImages.concat(fileArray))
    //   setImageCounter((prev) => prev + fileArray.length)
    //   Array.from(e.target.files).map((file) => URL.revokeObjectURL(file))
    // }
  };

  const dispatch = useDispatch();
  const { instituteDetails, userData } = useSelector(authSelector);

  useEffect(() => {
    dispatch(getInstituteDetails());
    dispatch(getUser());
  }, [dispatch]);

  console.log(instituteDetails, userData);
  return (
    <div>
      <Container>
        <div className="userImage mb-5">
          <div className="relative">
            <div>
              {!userData?.image ? (
                <div
                  style={{
                    height: "210px",
                    width: "210px",
                    borderRadius: "50%",
                  }}
                  className="bg-violet  flex items-center justify-center  text-white mx-auto cursor-pointer text-8xl "
                >
                  {userData?.name?.slice(0, 1).toUpperCase()}
                </div>
              ) : (
                <img
                  src={userData?.image}
                  className="mx-auto "
                  style={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "50%",
                  }}
                  alt=""
                />
              )}

              <FaRegEdit
                className="text-4xl shadow-lg text-[#7D23E0] bg-white rounded-full p-2 mb-auto"
                style={{
                  position: "absolute",
                  transform: "translate(-50%,-50%)",
                  top: "20%",
                  left: "75%",
                }}
                onClick={imageUpload}
              />
            </div>
          </div>
          <p className="text-3xl text-center font-medium mt-4">
            {userData?.name}
          </p>
        </div>
        <div className="menu profile justify-start mt-10">
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
              className="menu-item flex items-center gap-3"
            >
              {" "}
              <FiUser></FiUser> Profile{" "}
            </NavLink>
            <NavLink
              to="/profile/reviews"
              activeclassName="active"
              className="menu-item flex items-center gap-3"
            >
              {" "}
              <AiOutlineStar></AiOutlineStar> Review{" "}
            </NavLink>
            <NavLink
              to="/profile/wishlist"
              activeclassName="active"
              className="menu-item flex items-center gap-3"
            >
              <AiOutlineHeart></AiOutlineHeart> Wishlist{" "}
            </NavLink>
            <NavLink
              to="/profile/invite&earns"
              activeclassName="active"
              className="menu-item flex items-center gap-3"
            >
              <BiUserPlus></BiUserPlus> Invite & Earns{" "}
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
              Courses
            </p>
            <NavLink
              to="/profile/recentlyViewed/"
              activeclassName="active"
              className="menu-item flex items-center gap-3"
            >
              {" "}
              <AiOutlineEye></AiOutlineEye> Recently Viewed{" "}
            </NavLink>
            <NavLink
              to="/profile/purchaseCourse"
              activeclassName="active"
              className="menu-item flex items-center gap-3"
            >
              {" "}
              <BsBag></BsBag> Purchase Courses{" "}
            </NavLink>
            <NavLink
              to="/profile/ongoingCourse"
              activeclassName="active"
              className="menu-item flex items-center gap-3"
            >
              <MdOutlineInsertChart></MdOutlineInsertChart> Ongoing Courses{" "}
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
              className="menu-item flex items-center gap-3"
            >
              {" "}
              <AiOutlineCreditCard></AiOutlineCreditCard> Manage Cards{" "}
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
              to="/merchant/dashboard/"
              activeclassName="active"
              className="menu-item flex items-center gap-3"
            >
              {" "}
              <MdDashboard></MdDashboard> Blogs{" "}
            </NavLink>
            <NavLink
              to="/merchant/dashboard/"
              activeclassName="active"
              className="menu-item flex items-center gap-3"
            >
              {" "}
              <RiCalendarEventFill></RiCalendarEventFill> Events{" "}
            </NavLink>
            <NavLink
              to="/merchant/dashboard/courses"
              activeclassName="active"
              className="menu-item flex items-center gap-3"
            >
              {" "}
              <AiOutlineQuestionCircle></AiOutlineQuestionCircle> FAQs{" "}
            </NavLink>
            <NavLink
              to="/merchant/dashboard"
              activeclassName="active"
              className="menu-item flex items-center gap-3"
            >
              <BiMessageDots></BiMessageDots> Need Help?{" "}
            </NavLink>
          </div>

          <hr className="my-3 text-ghost/60 " />

          <h3
            onClick={() => handleDeleteAndLogOpen("delete")}
            className="menu-item flex items-center gap-3 "
          >
            {" "}
            Delete Account{" "}
          </h3>
          <h3
            onClick={() => handleDeleteAndLogOpen("logout")}
            className="menu-item flex items-center gap-3 text-red/80"
          >
            {" "}
            <FiLogOut></FiLogOut> Log Out{" "}
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
  );
};

export default ProfileNavbar;
