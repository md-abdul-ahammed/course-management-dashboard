import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import DropDown from "../DropDown/DropDown";
import BasicDetails from "./BasicDetails";
import ManageLocations from "./ManageLocations";
import YourServices from "./YourServices";
import OwnerDetails from "./OwnerDetails";
import Header from "../Header/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  fetchAdminSingleInstitute,
  instituteApprove,
} from "../../redux/slices/adminInstitutesSlice";

const EditInstitute = () => {
  const { instituteId, pathLocation } = useParams();
  // const {} = useParams();
  console.log(pathLocation);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));

    console.log(name, value);
  };

  console.log(formData);

  const goBack = () => {
    navigate("/adminDashboard/requests/instituteRequests", {
      replace: true,
    });
  };

  const allData = [
    {
      title: "Basic Details",
      component: <BasicDetails handleChange={handleChange} />,
    },
    {
      title: "Manage locations",
      component: <ManageLocations handleChange={handleChange} />,
    },
    {
      title: "Owner Details",
      component: <OwnerDetails handleChange={handleChange} />,
    },
    // {
    //   title: "Your Services",
    //   component: <YourServices handleChange={handleChange} />,
    // },
  ];

  useEffect(() => {
    dispatch(fetchAdminSingleInstitute(instituteId));
  }, [dispatch, instituteId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      id,
      approve: approval - Number(value),
    };
    dispatch(instituteApprove(updatedData));
  };

  return (
    <div className="flex md:flex-row flex-col min-h-screen overflow-hidden">
      <div className="md:w-[180px] bg-white md:bg-transparent drop-shadow-sm w-full">
        <div
          onClick={goBack}
          className="p-5 md:mt-5 mt-0 flex cursor-pointer text-lg font-medium items-center"
        >
          <MdOutlineKeyboardArrowLeft className="mr-2" /> Back
        </div>
      </div>
      <div className="w-full">
        <div className="w-[93%]">
          <Header pageTitle={"Institutes"} />
        </div>
        <form
          onSubmit={handleSubmit}
          className="md:ml-[30px] ml-0 mr-0 md:mr-[190px]"
        >
          {allData.map((data, index) => (
            <DropDown key={index} title={data.title}>
              {data.component}
            </DropDown>
          ))}
          <div className="mb-12 flex flex-col md:flex-row px-3  gap-x-8 justify-center mt-6">
            <button
              className="bg-[#7D23E0] text-white mb-3 rounded-lg md:py-2 py-3 px-5"
              type="submit"
            >
              Accept Changes
            </button>
            <button
              className="bg-[#E46060] text-white mb-3 rounded-lg md:py-2 py-3 px-5"
              onClick={goBack}
            >
              Cancel Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditInstitute;
