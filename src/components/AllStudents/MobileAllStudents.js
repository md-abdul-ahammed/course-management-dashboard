import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import Image from "../../util/assets/images/courses-image.png";
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

const MobileAllStudents = () => {
  const navigate = useNavigate();

  const handleOnclick = (id) => {
    navigate(`/studentDetails/${id}`);
  };

  return (
    <div className="md:hidden block">
      <h3 className="mb-3 font-bold text-[#9FA2B4]">Name of Students</h3>
      <div className="flex space-y-4 flex-col">
        {allData.map((data, i) => (
          <div onClick={() => handleOnclick(data.id)} key={i}>
            <div className="flex items-center justify-start">
              <div className="flex items-center space-x-3">
                <img
                  className="h-[50px] w-[50px] rounded-full"
                  src={data.img}
                  alt=""
                />
                <p className="text-[#252733] font-bold">Rajbir Ostello</p>
              </div>
              <div>
                <RiArrowRightSLine className="scale-125" />
              </div>
            </div>
            <div className="flex mt-3 space-x-1 justify-between">
              <div className="w-6/12 text-[#717171] text-sm">
                <div>Age group :</div>
                <div>Date of Registration :</div>
                <div>Location :</div>
              </div>
              <div className="w-6/12 font-bold text-sm">
                <div>Above 18</div>
                <div>May 26, 2019</div>
                <div>Saket,New Delhi</div>
              </div>
            </div>
            <hr className="mt-3" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileAllStudents;
