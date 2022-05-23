import React from "react";
import img from "../../util/assets/images/courseBanner.png";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const CourseCard = ({ data }) => {
  const { name, regularPrice, sellPrice } = data;

  return (
    <div className="p-4 bg-white rounded-[2.5rem] shadow-md">
      <div className="flex flex-col">
        <img className="rounded-t-xl" src={img} alt="" />
        <div className="my-5 flex-col flex px-4">
          <div className="flex justify-between">
            <Link to={`/adminEditCourse/2/1`} className=" text-[18px] cursor-pointer font-semibold leading-[30px] ">
              {name}
            </Link>
            <div className="flex bg-[#FFD130] px-3 py-0 text-white font-bold rounded-lg  items-center">
              3.0
              <AiFillStar className="ml-1" />
            </div>
          </div>
          <h3 className="font-bold text-xl">Rs. {sellPrice}</h3>
          <del className="text-sm text-red">Rs.{regularPrice}</del>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
