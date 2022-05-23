import React, { useState, useEffect } from "react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { addSyllabusDescription } from "../../redux/slices/AddCourseSlice";

const SyllabusDescription = ({ proceedState3 }) => {
  const [proceed4, setProceed4] = proceedState3;
  const [lectures, setLectures] = useState("");
  const [hours, setHours] = useState("");

  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [lecturesError, setLecturesError] = useState("");
  const [hoursError, setHoursError] = useState("");

  const [addBoxes, setAddBoxes] = useState([
    {
      title: "",
      description: "",
      lectures: 0,
      hours: 0,
    },
  ]);

  const dispatch = useDispatch();

  const addInputs = () => {
    setAddBoxes((prev) => [
      ...prev,
      {
        title: "",
        description: "",
        lectures: 0,
        hours: 0,
      },
    ]);
  };

  const deleteInput = (i) => {
    if (i > -1)
      setAddBoxes((prev) => {
        const temp = [];

        prev.forEach((box, idx) => {
          if (idx !== i) temp.push(box);
        });

        return temp;
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    let titleValue = event.target[0].value;
    let descriptionValue = event.target[1].value;
    let lectureValue = event.target[3].value;
    let hoursValue = event.target[5].value;

    if (titleValue === "") {
      setTitleError("Title is required");
    } else {
      setTitleError("");
      window.localStorage.setItem("title", titleValue);
    }

    if (descriptionValue === "") {
      setDescriptionError("Description is required");
    } else {
      setDescriptionError("");
      window.localStorage.setItem("course_description", descriptionValue);
    }
    if (lectureValue === "") {
      setLecturesError("Lecture is required");
    } else {
      setLecturesError("");
      window.localStorage.setItem("lecture", lectureValue);
    }
    if (hoursValue === "") {
      setHoursError("Hours is required");
    } else {
      setHoursError("");
      window.localStorage.setItem("hours", hoursValue);
    }

    if (
      hoursValue === "" ||
      lectureValue === "" ||
      descriptionValue === "" ||
      titleValue === ""
    ) {
      alert("Please fill all the fields");
    } else {
      setProceed4(true);

      dispatch(addSyllabusDescription(addBoxes));
    }
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="bg-white rounded-lg lg:p-8 my-5 w-11/12 lg:mr-10"
    >
      <h1 className="text-2xl w-full space-x-2 hidden lg:flex items-center  py-4 pb-7  font-dm-sans font-bold">
        Add syllabus description
      </h1>

      {addBoxes.map((inputs, index) => (
        <div>
          <div
            className={`  w-full rounded-lg text-base items-center font-normal text-slate  bg-clip-padding bg-no-repeat border-2 border-solid ${
              titleError.length > 0 || descriptionError.length > 0
                ? "border-red "
                : "border-[#A4A4A4]  "
            }  first-letter:transition ease-in-out m-0`}
          >
            <div className="flex space-x-3 items-center ">
              <div
                className=" text-violet px-5 py-1 lg:py-2 border-b border-r border-violet"
                style={{ backgroundColor: "rgba(125, 35, 224, 0.1" }}
              >
                {`Part ${index + 1}`}
              </div>
              <input
                type="text"
                placeholder="Title 1"
                defaultValue={inputs.title}
                name="title"
                onChange={(e) => {
                  setAddBoxes((prev) => {
                    prev[index].title = e.target.value;
                    return prev;
                  });
                }}
                className="bg-transparent  placeholder-[#A4A4A4]  lg:w-96 focus:outline-none"
              />
              {/* <p className="text-[#A4A4A4]">Title 1</p> */}
              <div className="flex-1"></div>
              <div className="flex gap-3">
                <BiEdit
                  className="text-[#12B3E5] w-7 h-7 p-1 hidden lg:block rounded-full "
                  style={{ backgroundColor: "rgba(18, 179, 229, 0.15)" }}
                />
                <RiDeleteBinLine
                  className=" w-7 h-7 p-1 hidden lg:block  rounded-full mr-5 text-[#E46060]"
                  onClick={() => {
                    deleteInput(index);
                  }}
                  style={{ backgroundColor: "rgba(228, 96, 96, 0.15)" }}
                />
              </div>
            </div>
            <hr className="text-[#D2D2D2]" />
            <textarea
              type="text"
              className="text-slate text-lg px-3 py-2 bg-transparent  placeholder-ghost w-full focus:outline-none"
              rows="4"
              cols="50"
              placeholder="Description (3-4 lines)"
              defaultValue={inputs.description}
              onChange={(e) => {
                setAddBoxes((prev) => {
                  prev[index].description = e.target.value;
                  return prev;
                });
              }}
              name="description"
            />
            <RiDeleteBinLine
              className=" w-7 h-7 p-1 lg:hidden ml-auto  rounded-full mr-2 text-[#E46060]"
              onClick={() => {
                deleteInput(index);
              }}
              style={{ backgroundColor: "rgba(228, 96, 96, 0.15)" }}
            />
          </div>

          <div className="flex flex-col lg:flex-row lg:gap-3">
            <div
              className={` px-4 py-1 lg:w-64 rounded-lg mt-5 lg:my-5 text-base font-normal text-slate flex items-center bg-clip-padding bg-no-repeat border-2 border-solid ${
                lecturesError.length > 0 ? "border-red " : "border-[#A4A4A4]  "
              }  first-letter:transition ease-in-out m-0`}
            >
              <input
                type="text"
                className="text-[#A8A8A8] w-32 text-lg  bg-transparent  placeholder-ghost  focus:outline-none"
                disabled
                placeholder="No. of lecturess"
              />
              <div className="flex-1"></div>
              <input
                type="text"
                className="text-slate w-20 text-lg rounded-lg px-3 py-2 bg-transparent text-center placeholder-ghost  bg-[#F0F4F9] focus:outline-none"
                onChange={(e) => {
                  setAddBoxes((prev) => {
                    prev[index].lectures = Number.parseInt(e.target.value);
                    return prev;
                  });
                }}
                defaultValue={lectures}
                placeholder={inputs.lectures}
                name="lectures"
              />
            </div>
            <div
              className={` px-4 py-1 lg:w-72 rounded-lg my-5 text-base font-normal text-slate flex items-center bg-clip-padding bg-no-repeat border-2 border-solid ${
                hoursError.length > 0 ? "border-red " : "border-[#A4A4A4]  "
              }   first-letter:transition ease-in-out m-0`}
            >
              <input
                type="text"
                className="text-[#A8A8A8] lg:w-36 text-lg  bg-transparent  placeholder-ghost  focus:outline-none"
                disabled
                placeholder="Duration in hours"
              />
              <div className="flex-1"></div>
              <input
                type="text"
                className="text-slate w-20 text-lg rounded-lg px-3 py-2 bg-transparent text-center placeholder-ghost  bg-[#F0F4F9] focus:outline-none"
                onChange={(e) => {
                  setAddBoxes((prev) => {
                    prev[index].hours = Number.parseInt(e.target.value);
                    return prev;
                  });
                }}
                placeholder={inputs.hours}
                defaultValue={hours}
                name="hours"
              />
            </div>
          </div>

          <hr className="text-[#D2D2D2] py-2 w-full" />
        </div>
        //    <>
        //   <SyllabusInput part={`Part ${index }`} onClick={deleteInput} index={index}  />
        // </>
      ))}

      <div
        className={` px-4 py-3 mt-5 w-full rounded-lg  text-base items-center font-normal text-slate flex bg-clip-padding    first-letter:transition ease-in-out m-0`}
        style={{ backgroundColor: "rgba(159, 159, 159, 0.1)" }}
        onClick={(e) => {
          e.preventDefault();
          addInputs();
        }}
      >
        <button className="text-[#A4A4A4] text-center m-auto text-xl">
          + Add Section
        </button>
      </div>
      <div className="hidden lg:flex py-5 justify-end">
        <button className="text-white bg-violet w-44 py-3 rounded-lg ">
          Save and Continue
        </button>
      </div>
    </form>
  );
};

export default SyllabusDescription;

// export const SyllabusInput = ({part,onClick,index}) => {
//   return (

//   )
// }
