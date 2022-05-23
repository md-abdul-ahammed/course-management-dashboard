import React, { useEffect, useContext, useState } from "react";
import CourseImg from "../../assets/courseImg.png";
import { AiOutlinePlus, AiFillStar } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import NOCourseImg1 from "../../assets/vectors/noCourse1.png";
import NOCourseImg2 from "../../assets/vectors/noCourse2.png";
import DashboardHeader from "../../components/MerchantDashboard/DashboardHeader";

import { SidePopupContext } from "../../components/SidePopup/SidePopup";
import AddCourse from "./AddCourse";
import axios from "axios";
import { host } from "../../util/constant/constant";
import EmptyCourse from "../../components/MerchantDashboard/Courses/EmptyCourse";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  useEffect(() => {
    document.title = "Courses - Ostello India";

    axios
      .get(`${host}/course`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${window.localStorage.getItem(
            "ACCESS_TOKEN"
          )}`,
        },
      })
      .then((res) => setCourses(res.data.message))
      .catch((e) => console.error(e));
  }, []);

  // const [{ isVisible }, dispatch] = useContext(SidePopupContext);
  const [courses, setCourses] = useState([]);
  // const [isDeletePop, setIsDeletePop] = useState(false);
  // const [isAddCourse, setIsAddCourse] = useState(true);

  function handleDelete(idx) {
    axios
      .delete(`${host}/course?id=${courses[idx].id}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${window.localStorage.getItem(
            "ACCESS_TOKEN"
          )}`,
        },
      })
      .catch((err) => console.error(err));

    setCourses((prev) => {
      const temp = [];

      prev.forEach((c, id) => {
        if (id !== idx) temp.push(c);
      });

      return temp;
    });
  }

  const navigate = useNavigate();

  return (
    <div className="p-5">
      <div className="heading mb-5">
        <h1 className="text-2xl font-bold ">Your Courses</h1>
        <div className=" fixed lg:relative lg:mt-8 bottom-0 lg:right-0 mb-10 lg:mb-0 z-40 lg:flex items-center w-full">
          <button
            className="flex items-center  ml-auto w-32 py-2 lg:py-1  mr-10 rounded-full text-white justify-center bg-violet"
            onClick={(e) => {
              navigate("/merchant/dashboard/addCourses");
            }}
          >
            <AiOutlinePlus className="text-white" />
            <p className="">Add Course</p>
          </button>
        </div>
      </div>
      {courses.length > 0 ? (
        <div className="w-full space-x-2 grid lg:grid-cols-3 gap-4  px-6 lg:px-12 4 lg:py-6  m-auto lg:m-0">
          {courses.map((course, idx) => (
            <CourseCard course={course} handleDelete={handleDelete} idx={idx} />
          ))}
        </div>
      ) : (
        <EmptyCourse />
      )}
    </div>
  );
};

export default Courses;

export const CourseCard = (props) => {
  const { course, handleDelete, idx } = props;

  console.log(course);
  return (
    <div className="bg-white w-12/12 rounded-3xl    m-auto lg:m-0">
      <div className="relative z-0">
        <RiDeleteBinLine
          className="absolute w-7 h-7 z-10 p-1 bg-white mr-2 lg:mr-4 lg:top-4 top-2 right-0 rounded-full text-[#E46060]"
          onClick={() => {
            handleDelete(idx);
          }}
        />
        <img src={course?.images[0]?.url} alt="" className="w-full  " />
      </div>

      <div className="flex items-center px-6 py-3">
        <div className="">
          <p className="font-bold">{course.name}</p>
        </div>
        <div
          className="flex items-center rounded-lg space-x-1 text-white ml-auto px-2 lg:mr-2"
          style={{ backgroundColor: "#FFD130" }}
        >
          <p className="lg:text-xl">{course.rating}</p>
          <AiFillStar />
        </div>
      </div>

      <div className="py-3 px-6 flex items-center">
        <div className="">
          <p className="text-2xl font-bold">Rs. {course.effectiveprice}</p>
          <p
            className="line-through"
            style={{ color: "#E46060", textDecorationLine: "line-through" }}
          >
            Rs.{course.grossprice}
          </p>
        </div>
        <div className="bg-[#E3FFE6] p-2 px-4  ml-auto">
          <p className="text-[#00B912]">Approved</p>
        </div>
      </div>
    </div>
  );
};
