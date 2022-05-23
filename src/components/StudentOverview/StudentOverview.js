import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DropDown from "../DropDown/DropDown";
import Header from "../Header/Header";
import InputField from "../InputField/InputField";
import { BiEditAlt } from "react-icons/bi";

const StudentOverview = () => {
  const { studentId } = useParams();
  const [formData, setFormData] = useState({});
  const [edit, setEdit] = useState(false);
  console.log(studentId);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(name, value);
  };

  return (
    <div>
      <Header pageTitle={"Student"} />
      <DropDown edit={edit} setEdit={setEdit} title={"Student Basic Details"}>
        <form onSubmit={handleSubmit}>
          <div className="my-5">
            <div className="flex flex-col md:flex-row gap-x-8 justify-between">
              <InputField
                defaultValue={"5674 6578 7568 7564"}
                label={"Student Name"}
                setOnchange={handleChange}
                title="bankNumber"
                isReadOnly={edit ? false : true}
              />
              <InputField
                defaultValue={"977125483"}
                label={"Contact No."}
                setOnchange={handleChange}
                title="contactNo"
                type="number"
                isReadOnly={edit ? false : true}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-x-8 justify-between">
              <InputField
                defaultValue={"ostello@gmail.com"}
                label={"Email"}
                setOnchange={handleChange}
                title="ifscCode"
                type="email"
                isReadOnly={edit ? false : true}
              />
              <InputField
                defaultValue={"Saket, New Delhi"}
                label={"Location"}
                setOnchange={handleChange}
                title="gstNo"
                isReadOnly={edit ? false : true}
              />
            </div>
          </div>

          {edit ? (
            <div className="mb-12 flex flex-col md:flex-row px-3  gap-x-8 justify-end mt-6">
              <button
                className="bg-[#7D23E0] text-white mb-3 rounded-lg md:py-2 py-3 px-5"
                type="submit"
              >
                Save
              </button>
              <button
                onClick={() => setEdit(false)}
                className="bg-[#E46060] text-white mb-3 rounded-lg md:py-2 py-3 px-5"
              >
                Cancel
              </button>
            </div>
          ) : (
            <div className="md:hidden block">
              {!edit && (
                <div className="flex justify-center mb-3">
                  <button
                    onClick={() => setEdit(true)}
                    className="text-[14px] flex justify-center items-center px-5 py-1 rounded-full text-white bg-[#4C4C4C]"
                  >
                    <BiEditAlt className="scale-125 mr-2" /> Edit
                  </button>
                </div>
              )}
            </div>
          )}
        </form>
      </DropDown>
    </div>
  );
};

export default StudentOverview;
