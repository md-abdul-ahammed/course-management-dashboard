import React from "react";
import CourseCard from "../AdminCard/CourseCard";
import DeleteIcon from "../DeleteIcon/DeleteIcon";
import Header from "../Header/Header";

const allData = [
  {
    name: "UX Design Program",
    regularPrice: 1500,
    sellPrice: 500,
    Rating: 3,
  },
  {
    name: "UX Design Program",
    regularPrice: 1500,
    sellPrice: 500,
    Rating: 3,
  },
  {
    name: "UX Design Program",
    regularPrice: 1500,
    sellPrice: 500,
    Rating: 3,
  },
  {
    name: "UX Design Program",
    regularPrice: 1500,
    sellPrice: 500,
    Rating: 3,
  },
  {
    name: "UX Design Program",
    regularPrice: 1500,
    sellPrice: 500,
    Rating: 3,
  },
  {
    name: "UX Design Program",
    regularPrice: 1500,
    sellPrice: 500,
    Rating: 3,
  },
  {
    name: "UX Design Program",
    regularPrice: 1500,
    sellPrice: 500,
    Rating: 3,
  },
  {
    name: "UX Design Program",
    regularPrice: 1500,
    sellPrice: 500,
    Rating: 3,
  },
  {
    name: "UX Design Program",
    regularPrice: 1500,
    sellPrice: 500,
    Rating: 3,
  },
  {
    name: "UX Design Program",
    regularPrice: 1500,
    sellPrice: 500,
    Rating: 3,
  },
  {
    name: "UX Design Program",
    regularPrice: 1500,
    sellPrice: 500,
    Rating: 3,
  },
];

const AdminInstituteCourse = () => {
  return (
    <div>
      <Header pageTitle={"Institute Courses"} />
      <div className="px-[30px] pt-4 pb-16">
        <h2 className="text-lg mb-3 px-2 md:hidden block font-bold">
          WishList
        </h2>
        <div className="grid gap-10 md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
          {allData.map((data, index) => (
            <div key={index} className="relative">
              <CourseCard data={data} />
              <div className="absolute top-8 right-8 bg-white p-2.5 shadow-lg cursor-pointer rounded-full">
                <DeleteIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminInstituteCourse;
