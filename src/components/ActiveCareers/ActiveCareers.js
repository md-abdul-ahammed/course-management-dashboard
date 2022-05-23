import React from "react";
import { Link } from "react-router-dom";
import CareerCard from "../AdminCard/CareerCard.js";
import DeleteIcon from "../DeleteIcon/DeleteIcon";
import PageHeader from "../PageHeader/PageHeader";

const allData = [
  {
    title: "Ui/Ux Designer",
    desc: "You don’t need any advanced degrees or experiences to be a part of the Ostello team. You don’t need any advanced degrees or experiences to be a part of the Ostello team.",
  },
  {
    title: "Ui/Ux Designer",
    desc: "You don’t need any advanced degrees or experiences to be a part of the Ostello team. You don’t need any advanced degrees or experiences to be a part of the Ostello team.",
  },
  {
    title: "Ui/Ux Designer",
    desc: "You don’t need any advanced degrees or experiences to be a part of the Ostello team. You don’t need any advanced degrees or experiences to be a part of the Ostello team.",
  },
  {
    title: "Ui/Ux Designer",
    desc: "You don’t need any advanced degrees or experiences to be a part of the Ostello team. You don’t need any advanced degrees or experiences to be a part of the Ostello team.",
  },
  {
    title: "Ui/Ux Designer",
    desc: "You don’t need any advanced degrees or experiences to be a part of the Ostello team. You don’t need any advanced degrees or experiences to be a part of the Ostello team.",
  },
  {
    title: "Ui/Ux Designer",
    desc: "You don’t need any advanced degrees or experiences to be a part of the Ostello team. You don’t need any advanced degrees or experiences to be a part of the Ostello team.",
  },
  {
    title: "Ui/Ux Designer",
    desc: "You don’t need any advanced degrees or experiences to be a part of the Ostello team. You don’t need any advanced degrees or experiences to be a part of the Ostello team.",
  },
  {
    title: "Ui/Ux Designer",
    desc: "You don’t need any advanced degrees or experiences to be a part of the Ostello team. You don’t need any advanced degrees or experiences to be a part of the Ostello team.",
  },
  {
    title: "Ui/Ux Designer",
    desc: "You don’t need any advanced degrees or experiences to be a part of the Ostello team. You don’t need any advanced degrees or experiences to be a part of the Ostello team.",
  },
];

const ActiveCareers = () => {
  return (
    <div>
      <PageHeader
        title={"Careers"}
        actionName={"Add Career"}
        route={"/adminDashboard/careers/addCareer"}
      />
      <div className="px-[30px] pt-4 pb-16">
        <div className="grid gap-10 md:grid-cols-2 grid-cols-1">
          {allData.map((data, index) => (
            <div key={index} className="relative">
              <Link to="/adminDashboard/careers/editCareers">
                <CareerCard data={data} />
              </Link>
              <div className="absolute top-5 right-6 bg-white p-2.5 shadow-lg cursor-pointer rounded-full">
                <DeleteIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActiveCareers;
