import React, { useEffect, useState } from "react";
import { FaSortAmountUp } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Image from "../../util/assets/images/courses-image.png";
import MobileAllStudents from "./MobileAllStudents";

const allData = [
  {
    id: 1,
    name: "Tarun K",
    age: 18,
    time: "6:30 PM",
    date: "Mar 31, 2022",
    location: "Saket",
    city: "New Delhi",
    img: Image,
  },
  {
    id: 2,
    name: "Tarun K",
    age: 18,
    time: "6:30 PM",
    date: "Mar 31, 2022",
    location: "Saket",
    city: "New Delhi",
    img: Image,
  },
  {
    id: 3,
    name: "Tarun K",
    age: 18,
    time: "6:30 PM",
    date: "Mar 31, 2022",
    location: "Saket",
    city: "New Delhi",
    img: Image,
  },
  {
    id: 4,
    name: "Tarun K",
    age: 18,
    time: "6:30 PM",
    date: "Mar 31, 2022",
    location: "Saket",
    city: "New Delhi",
    img: Image,
  },
  {
    id: 5,
    name: "Tarun K",
    age: 18,
    time: "6:30 PM",
    date: "Mar 31, 2022",
    location: "Saket",
    city: "New Delhi",
    img: Image,
  },
  {
    id: 6,
    name: "Tarun K",
    age: 18,
    time: "6:30 PM",
    date: "Mar 31, 2022",
    location: "Saket",
    city: "New Delhi",
    img: Image,
  },
  {
    id: 7,
    name: "Tarun K",
    age: 18,
    time: "6:30 PM",
    date: "Mar 31, 2022",
    location: "Saket",
    city: "New Delhi",
    img: Image,
  },
  {
    id: 8,
    name: "Tarun K",
    age: 18,
    time: "6:30 PM",
    date: "Mar 31, 2022",
    location: "Saket",
    city: "New Delhi",
    img: Image,
  },
  {
    id: 9,
    name: "Tarun K",
    age: 18,
    time: "6:30 PM",
    date: "Mar 31, 2022",
    location: "Saket",
    city: "New Delhi",
    img: Image,
  },
  {
    id: 10,
    name: "Tarun K",
    age: 18,
    time: "6:30 PM",
    date: "Mar 31, 2022",
    location: "Saket",
    city: "New Delhi",
    img: Image,
  },
  {
    id: 11,
    name: "Tarun K",
    age: 18,
    time: "6:30 PM",
    date: "Mar 31, 2022",
    location: "Saket",
    city: "New Delhi",
    img: Image,
  },
  {
    id: 12,
    name: "Tarun K",
    age: 18,
    time: "6:30 PM",
    date: "Mar 31, 2022",
    location: "Saket",
    city: "New Delhi",
    img: Image,
  },
  {
    id: 13,
    name: "Tarun K",
    age: 18,
    time: "6:30 PM",
    date: "Mar 31, 2022",
    location: "Saket",
    city: "New Delhi",
    img: Image,
  },
];

const AllStudents = () => {
  const navigate = useNavigate();

  const handleOnclick = (id) => {
    navigate(`/studentDetails/2`);
  };

  return (
    <div className="bg-white md:mb-12 my-6 shadow-lg md:shadow-none md:mx-8 mx-3 rounded-lg md:border border-light-gray border-0 py-5">
      <div className="flex gap-x-1 md:px-5 px-3  justify-between">
        <h3 className="font-bold text-[19px] text-[#252733]">All Students</h3>
        <div className="flex md:gap-x-8 gap-x-5 items-center">
          <div className="flex items-center">
            <FaSortAmountUp className="text-[#C5C7CD]" />
            <span className="font-bold md:block hidden ml-2">Sort</span>
          </div>
          <div className="flex items-center">
            <FaFilter className="text-[#C5C7CD]" />
            <span className="font-bold md:block hidden ml-2">Filter</span>
          </div>
        </div>
      </div>
      <div className="bg-white md:mt-5 mt-0 p-3 rounded-lg">
        <table className="md:block hidden">
          <thead className="bg-white table w-full table-fixed border-light-gray border-b">
            <tr>
              <th
                scope="col"
                className="text-[18px] font-medium text-[#ABABAB] px-6 py-4 text-left"
              >
                Name of Student
              </th>
              <th
                scope="col"
                className="text-[18px] font-medium text-[#ABABAB] px-6 py-4 text-left"
              >
                Age Group
              </th>
              <th
                scope="col"
                className="text-[18px] font-medium text-[#ABABAB] px-6 py-4 text-left"
              >
                Date of Registration
              </th>
              <th
                scope="col"
                className="text-[18px] font-medium text-[#ABABAB] px-6 py-4 text-left"
              >
                Location
              </th>
            </tr>
          </thead>
          <tbody className="">
            {allData.map((data, index) => (
              <tr
                onClick={() => handleOnclick(data.id)}
                key={index}
                className="bg-white border-b border-light-gray cursor-pointer transition duration-300 ease-in-out hover:bg-gray-100 table w-full table-fixed"
              >
                <td className="px-6 py-4 whitespace-nowrap font-medium text-[#252733]">
                  <div className="flex items-center">
                    <img
                      className="mr-3 h-10 w-10 rounded-full"
                      src={data.img}
                      alt=""
                    />
                    {data.name}
                  </div>
                </td>
                <td className="text-[#252733] font-medium px-6 py-4 whitespace-nowrap">
                  Above {data.age}
                </td>
                <td className="text-[#252733] font-medium px-6 py-4 whitespace-nowrap">
                  <div className="flex flex-col">
                    {data.date}
                    <div className="text-[#9FA2B4] text-sm">{data.time}</div>
                  </div>
                </td>
                <td className="text-[#252733] font-medium px-6 py-4 whitespace-nowrap">
                  <div className="flex flex-col">
                    {data.location}
                    <div className="text-[#9FA2B4] font-normal">New Delhi</div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <MobileAllStudents />
      </div>
      <div className="hidden md:block">
        <div className="flex text-[#9FA2B4] items-center font-[Mulish] justify-end px-5 pt-12 gap-x-5">
          <div>
            <p>
              Rows per page:<span className="ml-2 text-[#4B506D]">17</span>
            </p>
          </div>
          <div>1-4 of 4</div>
          <div className="flex gap-x-5 ">
            <MdKeyboardArrowLeft className="scale-150 cursor-pointer" />
            <MdKeyboardArrowRight className="scale-150 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllStudents;
