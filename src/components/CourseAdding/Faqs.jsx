import React, { useState, useEffect } from "react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { addSyllabusDescription } from "../../redux/slices/AddCourseSlice";

const Faqs = ({ proceedState5 }) => {
  const [proceed6, setProceed6] = proceedState5;
  const [categoryError, setCategoryError] = useState("");
  const [questionError, setQuestionError] = useState("");
  const [answerError, setAnswerError] = useState("");

  const [addBoxes, setAddBoxes] = useState([
    {
      title: "",
      description: "",
      lectures: 0,
      hours: 0
    }
  ]);

  const dispatch = useDispatch();

  const addInputs = () => {
    setAddBoxes((prev) => [
      ...prev,
      {
        title: "",
        description: "",
        lectures: 0,
        hours: 0
      }
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
    let categoryValue = event.target[0].value;
    let questionValue = event.target[1].value;
    let answerValue = event.target[2].value;

    if (categoryValue === "") {
      setQuestionError("Category is required");
    } else {
      setQuestionError("");
      window.localStorage.setItem("category", categoryValue);
    }

    if (questionValue === "") {
      setQuestionError("Question is required");
    } else {
      setQuestionError("");
      window.localStorage.setItem("title", questionValue);
    }

    if (answerValue === "") {
      setAnswerError("Answer is required");
    } else {
      setAnswerError("");
      window.localStorage.setItem("course_description", answerValue);
    }

    if (categoryValue === "" || answerValue === "" || questionValue === "") {
      alert("Please fill all the fields");
    } else {
      setProceed6(true);

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
        FAQs
      </h1>

      {addBoxes.map((inputs, index) => (
        <div>
          <RiDeleteBinLine
            className=" w-7 h-7 p-1 hidden ml-auto lg:mb-2 lg:block  rounded-full mr-5 text-[#E46060]"
            onClick={() => {
              deleteInput(index);
            }}
            style={{ backgroundColor: "rgba(228, 96, 96, 0.15)" }}
          />
          <div
            className={`  w-full rounded-lg text-base items-center font-normal text-slate  bg-clip-padding bg-no-repeat border-2 border-solid ${
              questionError.length > 0 || answerError.length > 0
                ? "border-red "
                : "border-[#A4A4A4]  "
            }  first-letter:transition ease-in-out m-0`}
          >
            <div className="flex flex-col lg:flex-row space-x-3 items-center ">
              <div
                className=" text-violet px-5 py-1 w-full lg:w-max lg:py-2 border-b border-r border-violet"
                style={{ backgroundColor: "rgba(125, 35, 224, 0.1" }}
              >
                {/* {`Part ${index + 1}`} */}
                <input
                  type="text"
                  className="bg-transparent  placeholder-violet lg:w-52  w-full focus:outline-none"
                  placeholder="Type category here"
                />
              </div>
              <input
                type="text"
                placeholder="Type question here"
                defaultValue={inputs.title}
                name="title"
                onChange={(e) => {
                  setAddBoxes((prev) => {
                    prev[index].title = e.target.value;
                    return prev;
                  });
                }}
                className="bg-transparent  placeholder-[#A4A4A4] w-full px-4 lg:px-0 py-1 lg:py-0 lg:w-96 focus:outline-none"
              />
              {/* <p className="text-[#A4A4A4]">Title 1</p> */}
              <div className="flex-1"></div>
            </div>
            <hr className="text-[#D2D2D2]" />
            <textarea
              type="text"
              className="text-slate text-lg px-3 py-2 bg-transparent  placeholder-ghost w-full focus:outline-none"
              rows="4"
              cols="50"
              placeholder="Type answer here (2-3 lines)"
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

          <hr className="text-[#D2D2D2] py-2 w-full" />
        </div>
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
          + Add Question
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

export default Faqs;
