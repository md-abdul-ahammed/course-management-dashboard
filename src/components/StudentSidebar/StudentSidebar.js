import React from "react";
import logo from "../../util/assets/images/logo.png";
import logoName from "../../util/assets/images/OSTELLO.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
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
    title: "Wishlist",
    route: "wishlist",
    icon: (
      <svg
        width="20"
        height="21"
        className="transition duration-700 group-hover:fill-[#7D23E0] group-hover:scale-125"
        viewBox="0 0 17 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8.49989 2.9198L7.73808 2.13674C5.94989 0.298614 2.67101 0.932927 1.48739 3.24386C0.931701 4.3308 0.806326 5.90011 1.82101 7.90293C2.79851 9.83136 4.83214 12.1412 8.49989 14.6572C12.1676 12.1412 14.2002 9.83136 15.1788 7.90293C16.1934 5.89905 16.0691 4.3308 15.5124 3.24386C14.3288 0.932927 11.0499 0.297552 9.2617 2.13568L8.49989 2.9198ZM8.49989 15.9376C-7.79142 5.1723 3.48383 -3.22995 8.31289 1.21449C8.37664 1.27293 8.43933 1.33349 8.49989 1.39618C8.55984 1.33355 8.62222 1.27329 8.68689 1.21555C13.5149 -3.23207 24.7912 5.17124 8.49989 15.9376Z" />
      </svg>
    ),
  },
  {
    title: "Recently Viewed",
    route: "recentlyViewed",
    icon: (
      <svg
        width="20"
        height="21"
        className="transition duration-700 group-hover:fill-[#7D23E0] group-hover:scale-125"
        viewBox="0 0 22 14"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21.0468 6.59773C18.8233 2.48734 14.9241 0 10.6091 0C6.29423 0 2.38838 2.48734 0.184736 6.59773L0 6.90782L0.171541 7.22451C2.39498 11.3349 6.29423 13.8222 10.6091 13.8222C14.9241 13.8222 18.8299 11.3679 21.0468 7.22451L21.2183 6.90782L21.0468 6.59773ZM10.6091 12.4697C6.89463 12.4697 3.4836 10.398 1.50428 6.90782C3.4836 3.41762 6.89463 1.34594 10.6091 1.34594C14.3237 1.34594 17.6951 3.42422 19.7074 6.90782C17.6951 10.398 14.3171 12.4697 10.6091 12.4697Z" />
        <path d="M10.8001 2.40246C9.90557 2.40899 9.03299 2.68048 8.29262 3.18263C7.55225 3.68479 6.9773 4.39508 6.64038 5.22381C6.30346 6.05254 6.21969 6.96253 6.39965 7.83884C6.57961 8.71515 7.01522 9.51848 7.65147 10.1474C8.28771 10.7762 9.09606 11.2025 9.97441 11.3722C10.8528 11.5419 11.7617 11.4476 12.5864 11.101C13.4112 10.7545 14.1148 10.1713 14.6083 9.42515C15.1018 8.67898 15.3631 7.8033 15.3592 6.90871C15.3566 6.31323 15.2365 5.7241 15.0058 5.17511C14.7751 4.62611 14.4384 4.12803 14.0149 3.70941C13.5914 3.29079 13.0894 2.95987 12.5377 2.7356C11.9861 2.51132 11.3956 2.39812 10.8001 2.40246ZM10.8001 10.135C10.1682 10.1285 9.55236 9.93541 9.02985 9.58001C8.50733 9.22461 8.10147 8.72274 7.86326 8.13743C7.62504 7.55213 7.56508 6.90948 7.6909 6.29021C7.81673 5.67093 8.12274 5.10265 8.57049 4.65672C9.01824 4.21079 9.58777 3.90711 10.2076 3.78381C10.8273 3.66051 11.4697 3.72309 12.0541 3.9637C12.6384 4.2043 13.1386 4.61221 13.4919 5.13617C13.8451 5.66013 14.0357 6.2768 14.0396 6.90871C14.0414 7.334 13.9587 7.75541 13.7964 8.1485C13.634 8.54159 13.3953 8.89854 13.0939 9.19865C12.7926 9.49876 12.4347 9.73606 12.0409 9.8968C11.6472 10.0575 11.2254 10.1385 10.8001 10.135Z" />
      </svg>
    ),
  },
  {
    title: "Purchased",
    route: "purchased",
    icon: (
      <svg
        width="20"
        height="21"
        viewBox="0 0 19 16"
        className="transition duration-700 group-hover:fill-[#7D23E0] group-hover:scale-125"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0.767677 3.37371e-05C0.564076 3.37371e-05 0.368815 0.0843192 0.224847 0.234348C0.08088 0.384377 0 0.587859 0 0.800032C0 1.0122 0.08088 1.21569 0.224847 1.36572C0.368815 1.51574 0.564076 1.60003 0.767677 1.60003H2.47192L4.4863 10C4.65749 10.712 5.26933 11.2 5.97329 11.2H15.5462C16.2394 11.2 16.8282 10.72 17.0102 10.024L19 2.40003H17.3925L15.5455 9.60001H5.97252L3.95891 1.20003C3.87573 0.855415 3.68398 0.549855 3.41438 0.332284C3.14477 0.114713 2.81291 -0.00228234 2.47192 3.37371e-05H0.767677ZM14.5859 11.2C13.323 11.2 12.2828 12.284 12.2828 13.6C12.2828 14.916 13.323 16 14.5859 16C15.8487 16 16.8889 14.916 16.8889 13.6C16.8889 12.284 15.8487 11.2 14.5859 11.2ZM7.67677 11.2C6.41394 11.2 5.37374 12.284 5.37374 13.6C5.37374 14.916 6.41394 16 7.67677 16C8.9396 16 9.9798 14.916 9.9798 13.6C9.9798 12.284 8.9396 11.2 7.67677 11.2ZM9.9798 3.37371e-05V4.00002H7.67677L10.7475 7.20002L13.8182 4.00002H11.5152V3.37371e-05H9.9798ZM7.67677 12.8C8.10974 12.8 8.44444 13.1488 8.44444 13.6C8.44444 14.0512 8.10974 14.4 7.67677 14.4C7.2438 14.4 6.90909 14.0512 6.90909 13.6C6.90909 13.1488 7.2438 12.8 7.67677 12.8ZM14.5859 12.8C15.0188 12.8 15.3535 13.1488 15.3535 13.6C15.3535 14.0512 15.0188 14.4 14.5859 14.4C14.1529 14.4 13.8182 14.0512 13.8182 13.6C13.8182 13.1488 14.1529 12.8 14.5859 12.8Z" />
      </svg>
    ),
  },
  {
    title: "Ongoing",
    route: "ongoing",
    icon: (
      <svg
        width="20"
        height="21"
        className="transition duration-700 group-hover:fill-[#7D23E0] group-hover:scale-125"
        viewBox="0 0 18 10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0.285 2.11L7.875 9.7C8.265 10.09 8.895 10.09 9.285 9.7L15.585 3.4V7C15.585 7.55 16.035 8 16.585 8C17.135 8 17.585 7.55 17.585 7V1C17.585 0.45 17.135 0 16.585 0H10.585C10.035 0 9.585 0.45 9.585 1C9.585 1.55 10.035 2 10.585 2H14.175L8.585 7.59L1.695 0.7C1.60249 0.607296 1.4926 0.533749 1.37162 0.483567C1.25065 0.433386 1.12097 0.407556 0.99 0.407556C0.859032 0.407556 0.729349 0.433386 0.608375 0.483567C0.487402 0.533749 0.377514 0.607296 0.285 0.7C-0.095 1.09 -0.095 1.73 0.285 2.11Z" />
      </svg>
    ),
  },
];

const StudentSidebar = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/adminDashboard/students/allStudents", {
      replace: true,
    });
  };

  return (
    <div className="h-screen fixed top-0 left-0 bg-white">
      <div className=" flex justify-between items-center py-5 lg:px-2 xl:px-4 md:px-2">
        <img src={logo} alt="" />
        <img src={logoName} alt="" />
      </div>
      <div className="h-[70%]">
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
            <div className="group">
              <div className="flex items-center gap-x-3 py-1 sm:pl-[15px] lg:pl-[30px]">
                {data.icon}
                <p className="font-medium">{data.title}</p>
              </div>
            </div>
          </NavLink>
        ))}
      </div>

      <Link to="#">
        <div className="flex w-full items-center gap-x-3 px-[25px]">
          <div>
            <svg
              width="23"
              height="20"
              viewBox="0 0 23 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.59973 5.34359V3.14763C7.59973 2.56522 7.84806 2.00667 8.2901 1.59484C8.73214 1.18302 9.33167 0.95166 9.9568 0.95166H19.3851C20.0102 0.95166 20.6097 1.18302 21.0518 1.59484C21.4938 2.00667 21.7421 2.56522 21.7421 3.14763V16.3234C21.7421 16.9058 21.4938 17.4644 21.0518 17.8762C20.6097 18.288 20.0102 18.5194 19.3851 18.5194H10.4282C9.12652 18.5194 7.59973 17.5362 7.59973 16.3234V14.1275"
                stroke="#9A9A9A"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.2567 5.34375L15.6138 7.53972L17.9709 9.73568L13.2567 14.1276M1 9.73568H17.0281"
                stroke="#9A9A9A"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-[#828095]">Logout</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default StudentSidebar;
