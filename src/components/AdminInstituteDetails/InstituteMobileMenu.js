import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import logo from "../../util/assets/images/logo.png";
import largeLogo from "../../util/assets/images/large-logo.png";
import logoName from "../../util/assets/images/OSTELLO.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const allData = [
  {
    title: "Overview",
    route: "overview",
    icon: (
      <svg
        width="20"
        height="21"
        className="transition duration-700 group-hover:fill-[#7D23E0] group-hover:scale-125"
        viewBox="0 0 21 19"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.6042 4.47355H6.14583C6.04085 4.47355 5.94017 4.42752 5.86594 4.34558C5.7917 4.26364 5.75 4.1525 5.75 4.03662V1.85197C5.75 1.73609 5.7917 1.62495 5.86594 1.54301C5.94017 1.46107 6.04085 1.41504 6.14583 1.41504H19.6042C19.7091 1.41504 19.8098 1.46107 19.8841 1.54301C19.9583 1.62495 20 1.73609 20 1.85197V4.03662C20 4.1525 19.9583 4.26364 19.8841 4.34558C19.8098 4.42752 19.7091 4.47355 19.6042 4.47355ZM19.6042 11.0275H6.14583C6.04085 11.0275 5.94017 10.9815 5.86594 10.8995C5.7917 10.8176 5.75 10.7065 5.75 10.5906V8.40592C5.75 8.29004 5.7917 8.1789 5.86594 8.09696C5.94017 8.01502 6.04085 7.96899 6.14583 7.96899H19.6042C19.7091 7.96899 19.8098 8.01502 19.8841 8.09696C19.9583 8.1789 20 8.29004 20 8.40592V10.5906C20 10.7065 19.9583 10.8176 19.8841 10.8995C19.8098 10.9815 19.7091 11.0275 19.6042 11.0275ZM19.6042 17.5815H6.14583C6.04085 17.5815 5.94017 17.5354 5.86594 17.4535C5.7917 17.3715 5.75 17.2604 5.75 17.1445V14.9599C5.75 14.844 5.7917 14.7329 5.86594 14.6509C5.94017 14.569 6.04085 14.5229 6.14583 14.5229H19.6042C19.7091 14.5229 19.8098 14.569 19.8841 14.6509C19.9583 14.7329 20 14.844 20 14.9599V17.1445C20 17.2604 19.9583 17.3715 19.8841 17.4535C19.8098 17.5354 19.7091 17.5815 19.6042 17.5815ZM3.375 4.47355H1.39583C1.29085 4.47355 1.19017 4.42752 1.11594 4.34558C1.0417 4.26364 1 4.1525 1 4.03662V1.85197C1 1.73609 1.0417 1.62495 1.11594 1.54301C1.19017 1.46107 1.29085 1.41504 1.39583 1.41504H3.375C3.47998 1.41504 3.58066 1.46107 3.6549 1.54301C3.72913 1.62495 3.77083 1.73609 3.77083 1.85197V4.03662C3.77083 4.1525 3.72913 4.26364 3.6549 4.34558C3.58066 4.42752 3.47998 4.47355 3.375 4.47355ZM3.375 11.0275H1.39583C1.29085 11.0275 1.19017 10.9815 1.11594 10.8995C1.0417 10.8176 1 10.7065 1 10.5906V8.40592C1 8.29004 1.0417 8.1789 1.11594 8.09696C1.19017 8.01502 1.29085 7.96899 1.39583 7.96899H3.375C3.47998 7.96899 3.58066 8.01502 3.6549 8.09696C3.72913 8.1789 3.77083 8.29004 3.77083 8.40592V10.5906C3.77083 10.7065 3.72913 10.8176 3.6549 10.8995C3.58066 10.9815 3.47998 11.0275 3.375 11.0275ZM3.375 17.5815H1.39583C1.29085 17.5815 1.19017 17.5354 1.11594 17.4535C1.0417 17.3715 1 17.2604 1 17.1445V14.9599C1 14.844 1.0417 14.7329 1.11594 14.6509C1.19017 14.569 1.29085 14.5229 1.39583 14.5229H3.375C3.47998 14.5229 3.58066 14.569 3.6549 14.6509C3.72913 14.7329 3.77083 14.844 3.77083 14.9599V17.1445C3.77083 17.2604 3.72913 17.3715 3.6549 17.4535C3.58066 17.5354 3.47998 17.5815 3.375 17.5815Z"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Institute Courses",
    route: "instituteCourse",
    icon: (
      <svg
        width="20"
        height="21"
        className="transition duration-700 group-hover:fill-[#7D23E0] group-hover:scale-125"
        viewBox="0 0 17 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.15 3.4C15.9246 3.4 15.7084 3.48955 15.549 3.64896C15.3896 3.80837 15.3 4.02457 15.3 4.25V12.75C15.3 13.4263 15.0313 14.0749 14.5531 14.5531C14.0749 15.0313 13.4263 15.3 12.75 15.3H4.25C4.02457 15.3 3.80837 15.3896 3.64896 15.549C3.48955 15.7084 3.4 15.9246 3.4 16.15C3.4 16.3754 3.48955 16.5916 3.64896 16.751C3.80837 16.9104 4.02457 17 4.25 17H12.75C13.8772 17 14.9582 16.5522 15.7552 15.7552C16.5522 14.9582 17 13.8772 17 12.75V4.25C17 4.02457 16.9104 3.80837 16.751 3.64896C16.5916 3.48955 16.3754 3.4 16.15 3.4ZM13.6 11.05V2.55C13.6 1.8737 13.3313 1.2251 12.8531 0.746878C12.3749 0.26866 11.7263 0 11.05 0H2.55C1.8737 0 1.2251 0.26866 0.746878 0.746878C0.26866 1.2251 0 1.8737 0 2.55V11.05C0 11.7263 0.26866 12.3749 0.746878 12.8531C1.2251 13.3313 1.8737 13.6 2.55 13.6H11.05C11.7263 13.6 12.3749 13.3313 12.8531 12.8531C13.3313 12.3749 13.6 11.7263 13.6 11.05ZM6.8 1.7H8.5V5.831L8.194 5.576C8.04127 5.44878 7.84878 5.37912 7.65 5.37912C7.45122 5.37912 7.25873 5.44878 7.106 5.576L6.8 5.831V1.7ZM1.7 11.05V2.55C1.7 2.32457 1.78955 2.10837 1.94896 1.94896C2.10837 1.78955 2.32457 1.7 2.55 1.7H5.1V7.65C5.09999 7.81249 5.14655 7.97158 5.23418 8.10842C5.3218 8.24526 5.44681 8.35412 5.59439 8.4221C5.74198 8.49007 5.90596 8.51433 6.06691 8.49198C6.22785 8.46963 6.37902 8.40162 6.5025 8.296L7.65 7.3355L8.7975 8.296C8.95147 8.42767 9.14741 8.50002 9.35 8.5C9.47297 8.49913 9.59447 8.4731 9.707 8.4235C9.85454 8.35522 9.97941 8.24606 10.0668 8.10896C10.1542 7.97186 10.2004 7.81258 10.2 7.65V1.7H11.05C11.2754 1.7 11.4916 1.78955 11.651 1.94896C11.8104 2.10837 11.9 2.32457 11.9 2.55V11.05C11.9 11.2754 11.8104 11.4916 11.651 11.651C11.4916 11.8104 11.2754 11.9 11.05 11.9H2.55C2.32457 11.9 2.10837 11.8104 1.94896 11.651C1.78955 11.4916 1.7 11.2754 1.7 11.05Z" />
      </svg>
    ),
  },
];

const InstituteMobileMenu = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/adminDashboard/institutes", {
      replace: true,
    });
  };
  return (
    <>
      <div className="md:hidden block bg-white py-5 px-10 shadow-md !mt-0">
        <div className="flex justify-start">
          <GiHamburgerMenu
            onClick={() => setOpen(true)}
            className="text-xl scale-150 text-[#232323]"
          />
        </div>
      </div>
      {open && (
        <div className="h-screen md:hidden block w-[70%] z-50 rounded-r-3xl shadow-[0_35px_800px_-10px_rgba(0,0,0,0.9)] fixed top-0 left-0 bg-white">
          <div className="flex justify-between items-center pt-12 px-4">
            <div className=" flex w-[80%] items-center">
              <img src={logo} className="w-[30px] mr-4" alt="" />
              <img src={logoName} alt="" />
            </div>
            <ImCross
              onClick={() => setOpen(false)}
              className="text-[#414141] cursor-pointer mr-3"
            />
          </div>

          <div className="flex py-5 justify-center items-center flex-col">
            <img src={largeLogo} alt="" />
            <h3 className="pt-1">Super Admin</h3>
          </div>
          <div
            onClick={goBack}
            className="p-5 mt-5 text-[#828095] flex cursor-pointer text-lg font-medium items-center"
          >
            <MdOutlineKeyboardArrowLeft className="mr-2 scale-125" /> Back
          </div>
          {allData.map((data, index) => (
            <NavLink
              className={(navInfo) =>
                navInfo.isActive
                  ? "text-[#7D23E0] bg-gradient-to-r from-[#f3e8ff] fill-[#7D23E0] via-[#fff] to-[#fff] flex items-center cursor-pointer gap-x-3 py-2 "
                  : "flex items-center text-[#828095] cursor-pointer fill-[#828095] hover:text-[#7D23E0] gap-x-3 py-2 hover:bg-gradient-to-r hover:from-[#f3e8ff]  hover:via-[#fff] hover:to-[#fff]"
              }
              key={index}
              to={data.route}
            >
              <div className="group px-8">
                <div className="flex items-center space-x-3 py-1 sm:pl-[15px] lg:pl-[30px]">
                  {data.icon}
                  <p className="font-semibold">{data.title}</p>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};

export default InstituteMobileMenu;
