import React from "react";
import { useSelector } from "react-redux";
import InputField from "../InputField/InputField";

const OwnerDetails = ({ handleChange }) => {
  const { adminSingleInstitute } = useSelector(
    (state) => state.adminInstitutes
  );
  const { owner } = adminSingleInstitute;
  const { name, email, phonenumber } = owner;

  return (
    <div className="my-3">
      <div className="flex flex-col md:flex-row md:gap-x-8 justify-between">
        <InputField
          defaultValue={name}
          label={"Owner Name"}
          setOnchange={handleChange}
          title="ownerName"
        />
        <InputField
          defaultValue={phonenumber}
          label={"Contact No."}
          setOnchange={handleChange}
          title="ownerPhoneNumber"
          type="number"
        />
      </div>
      <div className="flex justify-between">
        <div className="md:w-[48%] w-full">
          <InputField
            defaultValue={email}
            setOnchange={handleChange}
            title="ownerEmail"
            type="email"
            label={"TypeofInstitute"}
          />
        </div>
      </div>
    </div>
  );
};

export default OwnerDetails;
