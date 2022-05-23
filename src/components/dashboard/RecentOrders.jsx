import React, { useState, useEffect } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp
} from "react-icons/md";
import CourseImg from "../../assets/courseImg2.png";

const recentCourses = [
  {
    id: 1,
    src: CourseImg,
    CourseName: "Economics",
    price: "390",
    totalOrder: "30",
    totalAmount: "1000"
  },
  {
    id: 1,
    src: CourseImg,
    CourseName: "Economics",
    price: "390",
    totalOrder: "30",
    totalAmount: "1000"
  },
  {
    id: 1,
    src: CourseImg,
    CourseName: "Economics",
    price: "390",
    totalOrder: "30",
    totalAmount: "1000"
  },
  {
    id: 1,
    src: CourseImg,
    CourseName: "Economics",
    price: "390",
    totalOrder: "30",
    totalAmount: "1000"
  }
];

const RecentOrders = () => {
  const [month, setMonth] = useState("");
  const [dropDown, setDropDown] = useState(false);
  const [viewMore, setViewMore] = useState(false);

  useEffect(() => {
    const date = new Date();

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    setMonth(months[date.getMonth()]);
  }, []);

  return (
    <>
      <div className="lg:px-5 w-full">
        <div className="flex items-center justify-between">
          <h1 className=" text-lg lg:text-2xl  font-bold">Recent Orders</h1>
          <div
            className="flex  items-center  p-2 cursor-pointer text-lg text-[#16B8E7] space-x-1"
            onClick={() => {
              setDropDown(!dropDown);
            }}
          >
            <div className="flex flex-col relative">
              <div className="flex items-center ">
                <p className="text-sm lg:text-xl">Last Month</p>
                {dropDown ? (
                  <MdOutlineKeyboardArrowUp className="text-2xl" />
                ) : (
                  <MdOutlineKeyboardArrowDown className="text-2xl" />
                )}
              </div>
              {dropDown && (
                <div
                  className="bg-white  w-max m-auto absolute top-7 text-solid rounded-lg py-2"
                  style={{
                    boxShadow: "0px 8px 40px -10px rgba(122, 129, 220, 0.25)"
                  }}
                >
                  <p className="px-3 ">Today</p>
                  <hr className="text-[#E3E3E3] my-2" />

                  <p className="px-3 w-max">Last Week</p>
                  <hr className="text-[#E3E3E3] my-2" />
                  <p className="px-3 w-max">Last Month</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <p className="">{month}</p>

        <div className="  mt-5">
          <div className=" hidden lg:flex   gap-20 items-center ">
            <h1 className="lg:mr-20  ">Course Name</h1>
            <h1 className="">Price</h1>
            <h1 className="">Total Order</h1>
            <h1 className="">Total Amount</h1>
          </div>
          <hr className="hidden lg:flex text-[#030229] opacity-10 my-5" />

          {/* for Desktop */}

          <div className=" hidden lg:flex   flex-col ">
            {recentCourses.map((item, index) => (
              <RecentCourseCard item={item} />
            ))}
          </div>

          {/* for mobile */}
          <div className=" lg:hidden   flex-col ">
            {recentCourses.map((item, index) => (
              <>
                {index <= 1 && <RecentCourseCard item={item} />}
                {viewMore && index > 1 && <RecentCourseCard item={item} />}
              </>
            ))}
          </div>

          <div className=""></div>
          <div
            className={`flex lg:hidden justify-center space-x-2 text-violet my-5 mb-10 `}
            onClick={() => {
              setViewMore(!viewMore);
            }}
          >
            <button className="text-center font-bold ">
              {" "}
              {viewMore ? "View Less " : "View More "}{" "}
            </button>
            {viewMore ? (
              <MdOutlineKeyboardArrowUp className="text-2xl" />
            ) : (
              <MdOutlineKeyboardArrowDown className="text-2xl" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentOrders;

export const RecentCourseCard = ({ item }) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row  items-center gap-5 lg:gap-20 mb-3  mt-3">
        <div className="flex   items-center  space-x-3 lg:mr-16">
          <img src={item.src} alt="" />
          <p className="">{item.CourseName}</p>
          <div className="w-full lg:hidden ">
            <p className=" ml-20 "> &#8377; {item.price}</p>
          </div>
        </div>
        <p className="hidden lg:flex">{item.price}</p>

        {/* For mobile Screen */}
        <div className="flex gap- w-full justify-between  lg:hidden">
          <div className="flex text-sm items-center">
            <p className="">Total Order - </p>
            <p className="  flex items-center px-2  text-[#26C0E2]">
              {item.totalOrder}
            </p>
          </div>
          <div className="flex text-sm  items-center ">
            <p className="">Total Amount </p>

            <p className=" pl-1 text-[#26C0E2]">&#8377; {item.totalAmount}</p>
          </div>
        </div>

        {/* For Desktop */}

        <p
          className="lg:mr-10   hidden lg:flex items-center px-7 rounded-lg text-[#26C0E2]"
          style={{ background: "rgb(38 192 226 / 10%)" }}
        >
          {item.totalOrder}
        </p>
        <p className="hidde n lg:flex">{item.totalAmount}</p>
      </div>

      <hr className="lg:hidden  text-[#030229] opacity-10 my-2" />
    </>
  );
};
