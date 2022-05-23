import React, { useEffect, useState } from "react";
import CourseImg from "../../assets/courseImg3.png";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp
} from "react-icons/md";
import { AiFillStar } from "react-icons/ai";

const TopSelling = () => {
  const [viewMore, setViewMore] = useState(false);

  const courses = [
    {
      id: 1,
      src: CourseImg,
      courseName: "Digital Marketing",
      rating: 4,
      price: "599"
    },
    {
      id: 1,
      src: CourseImg,
      courseName: "Digital Marketing",
      rating: 4,
      price: "599"
    },
    {
      id: 1,
      src: CourseImg,
      courseName: "Digital Marketing",
      rating: 4,
      price: "599"
    },
    {
      id: 1,
      src: CourseImg,
      courseName: "Digital Marketing",
      rating: 4,
      price: "599"
    },
    {
      id: 1,
      src: CourseImg,
      courseName: "Digital Marketing",
      rating: 4,
      price: "599"
    },
    {
      id: 2,
      src: CourseImg,
      courseName: "Digital Marketing",
      rating: 4,
      price: "599"
    }
  ];

  return (
    <div className="lg:w-3/4 overflow-y-hidden ">
      <h1 className=" text-xl lg:text-2xl lg:ml-10 font-bold">
        Top Selling Courses
      </h1>
      <div
        className=" hidden lg:flex flex-col  lg:h-72 overflow-x-hidden overflow-y-scrool   gap-10 lg:ml-10 mt-7"
        id="scroll"
      >
        {/* For Desktop Screen */}
        {courses.map((item) => (
          <TopSellingCourseCard item={item} />
        ))}
      </div>

      {/* For Mobile Screens */}
      <div className=" lg:hidden flex  flex-col    gap-10  mt-7">
        {courses.map((item, index) => (
          <>
            {index <= 1 && <TopSellingCourseCard item={item} />}
            {viewMore && index > 1 && <TopSellingCourseCard item={item} />}
          </>
        ))}
      </div>

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
  );
};

export default TopSelling;

export const TopSellingCourseCard = ({ item }) => {
  return (
    <div className="flex space-x-5 items-center">
      <img src={item.src} alt="" />
      <div className="flex flex-col">
        <h1 className="w-max">{item.courseName}</h1>

        <p className="flex">
          {[...Array(5)].map((star) => (
            <AiFillStar />
          ))}
        </p>
        <p className="">&#8377; {item.price}</p>
      </div>
      <div className="scroll"></div>
    </div>
  );
};
