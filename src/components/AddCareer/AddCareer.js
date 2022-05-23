import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import PageHeader from "../PageHeader/PageHeader";

const AddCareer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <PageHeader title={"Add new job posting"} />
      <div className="px-[30px] pt-4 pb-16 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-3"
        >
          <input
            type="text"
            className="w-full px-6 bg-[#FAFAFA] border-2 border-[#A4A4A4] placeholder:text-[#A8A8A8]  text-[#414141] rounded-lg"
            placeholder="Job title*"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <span className="!mt-0 text-red-500">This field is required</span>
          )}
          <textarea
            {...register("desc", { required: true })}
            rows="4"
            placeholder="Job description (2-3 lines)*"
            className="w-full px-6 bg-[#FAFAFA] border-2 border-[#A4A4A4] placeholder:text-[#A8A8A8]  text-[#414141] rounded-lg"
          />
          {errors.desc && (
            <span className="!mt-0 text-red-500">This field is required</span>
          )}
          <input
            type="text"
            {...register("link", { required: true })}
            className="w-full px-6 bg-[#FAFAFA] border-2 border-[#A4A4A4] placeholder:text-[#A8A8A8]  text-[#414141] rounded-lg"
            placeholder="Provide Google forms link*"
          />
          {errors.link && (
            <span className="!mt-0 text-red-500">This field is required</span>
          )}
          <div className="flex md:flex-row flex-col justify-center md:space-y-0 space-x-0 space-y-5 md:space-x-5">
            <button
              type="submit"
              className="px-12 font-bold rounded-lg py-2 text-white bg-[#7D23E0]"
            >
              Confirm
            </button>
            <Link
              to="/adminDashboard/careers/activeCareers"
              className="px-12 text-center font-bold rounded-lg py-2 text-white bg-[#E46060]"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCareer;
