import React, { useState, useEffect } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  addAdditionalDescription,
  addCourseSelector,
} from "../../redux/slices/AddCourseSlice";
import AddFaculty from "./DropDowns/AddFaculty";

const AdditionalDescription = ({ proceedState1 }) => {
  const [faculty, setFaculty] = useState(false);
  const [proceed, setProceed] = proceedState1;

  const { additionalDescription } = useSelector(addCourseSelector);

  const [facultyError, setFacultyError] = useState("");
  const [object1, setObject1] = useState("");
  const [object2, setObject2] = useState("");
  const [object3, setObject3] = useState("");
  const [object4, setObject4] = useState("");
  const [highlight1, setHighlight1] = useState("");
  const [highlight2, setHighlight2] = useState("");
  const [highlight3, setHighlight3] = useState("");
  const [highlight4, setHighlight4] = useState("");
  const [highlight5, setHighlight5] = useState("");
  const [shortDescription, setShortDescription] = useState("");

  const [objectError1, setObjectError1] = useState("");
  const [objectError2, setObjectError2] = useState("");
  const [objectError3, setObjectError3] = useState("");
  const [objectError4, setObjectError4] = useState("");

  const [highlightError1, setHighlightError1] = useState("");
  const [highlightError2, setHighlightError2] = useState("");
  const [highlightError3, setHighlightError3] = useState("");
  const [highlightError4, setHighlightError4] = useState("");
  const [highlightError5, setHighlightError5] = useState("");
  const [shortDescriptionError, setShortDescriptioError] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    let object1Value = window.localStorage.getItem("Object_1");
    let object2Value = window.localStorage.getItem("Object_2");
    let object3Value = window.localStorage.getItem("Object_3");
    let object4Value = window.localStorage.getItem("Object_4");
    let highlight1Value = window.localStorage.getItem("Highlight_1");
    let highlight2Value = window.localStorage.getItem("Highlight_2");
    let highlight3Value = window.localStorage.getItem("Highlight_3");
    let highlight4Value = window.localStorage.getItem("Highlight_4");
    let highlight5Value = window.localStorage.getItem("Highlight_5");
    let shortDescriptionValue = window.localStorage.getItem("shortDescription");

    setObject1(object1Value);
    setObject2(object2Value);
    setObject3(object3Value);
    setObject4(object4Value);
    setHighlight1(highlight1Value);
    setHighlight2(highlight2Value);
    setHighlight3(highlight3Value);
    setHighlight4(highlight4Value);
    setHighlight5(highlight5Value);
    setShortDescription(shortDescriptionValue);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event.target.elements.username.value) // from elements property
    // console.log(event.target.username.value)
    // or directly

    console.log(event);
    if (event.target[0].value === "") {
      setFacultyError("Add Faculty is required");
    } else {
      setFacultyError("");
    }
    if (event.target[1].value === "") {
      setObjectError1("Object1 is Required");
    } else {
      setObjectError1("");
      window.localStorage.setItem("Object_1", event.target[1].value);
    }
    if (event.target[2].value === "") {
      setObjectError2("Object2 is required");
    } else {
      setObjectError2("");
      window.localStorage.setItem("Object_2", event.target[2].value);
    }
    if (event.target[3].value === "") {
      setObjectError3("Object3 is required");
    } else {
      setObjectError3("");
      window.localStorage.setItem("Object_3", event.target[3].value);
    }
    if (event.target[4].value === "") {
      setObjectError4("Object4 is required");
    } else {
      setObjectError4("");
      window.localStorage.setItem("Object_4", event.target[4].value);
    }
    if (event.target[5].value === "") {
      setHighlightError1("Highlight1 is  required");
    } else {
      setHighlightError1("");
      window.localStorage.setItem("Highlight_1", event.target[5].value);
    }
    if (event.target[6].value === "") {
      setHighlightError2("Highlight2 is required");
    } else {
      setHighlightError2("");
      window.localStorage.setItem("Highlight_2", event.target[6].value);
    }
    if (event.target[7].value === "") {
      setHighlightError3("Highlight3 is required");
    } else {
      setHighlightError3("");
      window.localStorage.setItem("Highlight_3", event.target[7].value);
    }
    if (event.target[8].value === "") {
      setHighlightError4("Highlight4 is required");
    } else {
      setHighlightError4("");
      window.localStorage.setItem("Highlight_4", event.target[8].value);
    }
    if (event.target[9].value === "") {
      setHighlightError5("Highlight5 is required");
    } else {
      setHighlightError5("");
      window.localStorage.setItem("Highlight_5", event.target[9].value);
    }

    if (event.target[10].value === "") {
      setShortDescriptioError("Short Description is required");
    } else {
      setShortDescriptioError("");
      window.localStorage.setItem("shortDescription", event.target[10].value);
    }

    if (
      event.target[10].value === "" ||
      event.target[9].value === "" ||
      event.target[8].value === "" ||
      event.target[7].value === "" ||
      event.target[6].value === "" ||
      event.target[5].value === "" ||
      event.target[4].value === "" ||
      event.target[3].value === "" ||
      event.target[1].value === ""
    ) {
      alert("Please fill all the fields");
    } else {
      dispatch(
        addAdditionalDescription({
          object1: event.target[1].value,
          object2: event.target[2].value,
          object3: event.target[3].value,
          object4: event.target[4].value,
          highlight1: event.target[5].value,
          highlight2: event.target[6].value,
          highlight3: event.target[7].value,
          highlight4: event.target[8].value,
          highlight5: event.target[9].value,
          shortDescription: event.target[10].value,
        })
      );
      setProceed(true);
    }
  };

  const [isDropDown, setIsDropDown] = useState(false);
  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="bg-white rounded-lg w-full lg:w-max lg:p-8 my-5"
    >
      <h1 className=" text-2xl w-full space-x-2 hidden  lg:flex items-center  py-4 pb-7  font-dm-sans font-bold">
        Additional Description
      </h1>

      {facultyError.length > 0 ? (
        <p className="w-full text-xs text-right text-red">{facultyError}</p>
      ) : (
        ""
      )}
      <div
        className={` px-4 py-3 w-full rounded-lg text-base font-normal text-slate flex bg-clip-padding bg-no-repeat border-2 border-solid ${
          facultyError.length > 0 ? "border-red " : "border-[#A4A4A4]  "
        }   first-letter:transition ease-in-out m-0`}
        onClick={() => {
          setIsDropDown(!isDropDown);
        }}
      >
        <input
          type="text"
          className="text-slate text-lg px-3 bg-transparent  placeholder-ghost w-full focus:outline-none"
          disabled
          placeholder="Add Faculty *"
        />

        <MdKeyboardArrowDown
          className={`text-2xl ${isDropDown ? "hidden" : "flex"}`}
        />
        <MdKeyboardArrowUp
          className={`text-2xl ${isDropDown ? "flex" : "hidden"}`}
        />
      </div>
      {isDropDown && <AddFaculty facultyState={[faculty, setFaculty]} />}

      {objectError1.length > 0 ||
      objectError2.length > 0 ||
      objectError3.length > 0 ||
      objectError4.length > 0 ? (
        <p className="w-full text-xs text-right text-red py-2">
          {objectError1 || objectError2 || objectError3 || objectError4}
        </p>
      ) : (
        ""
      )}
      <div className="grid lg:grid-cols-3 py-5 gap-3">
        <div
          className={` px-4 py-3 w-full rounded-lg text-base font-normal text-slate flex bg-clip-padding bg-no-repeat border-2 border-solid ${
            objectError1.length > 0 ? "border-red" : "border-[#A4A4A4] "
          } first-letter:transition ease-in-out m-0`}
        >
          <input
            type="text"
            className="text-slate text-lg px-3 bg-transparent  placeholder-ghost w-full focus:outline-none"
            placeholder="Type course objective 1"
            defaultValue={object1}
            onChange={(e) => {
              setObject1(e.target.value);
            }}
          />{" "}
        </div>

        <div
          className={` px-4 py-3 w-full rounded-lg text-base font-normal text-slate flex bg-clip-padding bg-no-repeat border-2 border-solid ${
            objectError2.length > 0 ? "border-red" : "border-[#A4A4A4] "
          } first-letter:transition ease-in-out m-0`}
        >
          <input
            type="text"
            className="text-slate text-lg px-3 bg-transparent  placeholder-ghost w-full focus:outline-none"
            placeholder="Type course objective 2"
            defaultValue={object2}
            onChange={(e) => {
              setObject2(e.target.value);
            }}
          />{" "}
        </div>
        <div
          className={` px-4 py-3 w-full rounded-lg text-base font-normal text-slate flex bg-clip-padding bg-no-repeat border-2 border-solid ${
            objectError3.length > 0 ? "border-red" : "border-[#A4A4A4] "
          }  first-letter:transition ease-in-out m-0`}
        >
          <input
            type="text"
            className="text-slate text-lg px-3 bg-transparent  placeholder-ghost w-full focus:outline-none"
            placeholder="Type course objective 3"
            defaultValue={object3}
            onChange={(e) => {
              setObject3(e.target.value);
            }}
          />{" "}
        </div>
        <div
          className={` px-4 py-3 w-full rounded-lg text-base font-normal text-slate flex bg-clip-padding bg-no-repeat border-2 border-solid ${
            objectError4.length > 0 ? "border-red" : "border-[#A4A4A4] "
          }  first-letter:transition ease-in-out m-0`}
        >
          <input
            type="text"
            className="text-slate text-lg px-3 bg-transparent  placeholder-ghost w-full focus:outline-none"
            placeholder="Type course objective 4  "
            defaultValue={object4}
            onChange={(e) => {
              setObject4(e.target.value);
            }}
          />{" "}
        </div>
      </div>
      <h1 className="text-violet">
        *Objectives are to help students know the purpose of this course
      </h1>

      {highlightError1.length > 0 ||
      highlightError2.length > 0 ||
      highlightError3.length > 0 ||
      highlightError4.length > 0 ||
      highlightError5.length > 0 ? (
        <p className="w-full text-xs text-right text-red py-2">
          {highlightError1 ||
            highlightError2 ||
            highlightError3 ||
            highlightError4 ||
            highlightError5}
        </p>
      ) : (
        ""
      )}
      <div className="grid lg:grid-cols-3 py-5 gap-3">
        <div
          className={` px-4 py-3 w-full rounded-lg text-base font-normal text-slate flex bg-clip-padding bg-no-repeat border-2 border-solid ${
            highlightError1.length > 0 ? "border-red" : "border-[#A4A4A4] "
          }   first-letter:transition ease-in-out m-0`}
        >
          <input
            type="text"
            className="text-slate text-lg px-3 bg-transparent  placeholder-ghost w-full focus:outline-none"
            placeholder="Type course highlight 1"
            defaultValue={highlight1}
            onChange={(e) => {
              setHighlight1(e.target.value);
            }}
          />{" "}
        </div>
        <div
          className={` px-4 py-3 w-full rounded-lg text-base font-normal text-slate flex bg-clip-padding bg-no-repeat border-2 border-solid ${
            highlightError2.length > 0 ? "border-red" : "border-[#A4A4A4] "
          }   first-letter:transition ease-in-out m-0`}
        >
          <input
            type="text"
            className="text-slate text-lg px-3 bg-transparent  placeholder-ghost w-full focus:outline-none"
            placeholder="Type course highlight 2"
            defaultValue={highlight2}
            onChange={(e) => {
              setHighlight2(e.target.value);
            }}
          />{" "}
        </div>
        <div
          className={` px-4 py-3 w-full rounded-lg text-base font-normal text-slate flex bg-clip-padding bg-no-repeat border-2 border-solid ${
            highlightError3.length > 0 ? "border-red" : "border-[#A4A4A4] "
          } first-letter:transition ease-in-out m-0`}
        >
          <input
            type="text"
            className="text-slate text-lg px-3 bg-transparent  placeholder-ghost w-full focus:outline-none"
            placeholder="Type course highlight 3"
            defaultValue={highlight3}
            onChange={(e) => {
              setHighlight3(e.target.value);
            }}
          />{" "}
        </div>
        <div
          className={` px-4 py-3 w-full rounded-lg text-base font-normal text-slate flex bg-clip-padding bg-no-repeat border-2 border-solid ${
            highlightError4.length > 0 ? "border-red" : "border-[#A4A4A4] "
          }   first-letter:transition ease-in-out m-0`}
        >
          <input
            type="text"
            className="text-slate text-lg px-3 bg-transparent  placeholder-ghost w-full focus:outline-none"
            placeholder="Type course highlight 4 "
            defaultValue={highlight4}
            onChange={(e) => {
              setHighlight4(e.target.value);
            }}
          />{" "}
        </div>
        <div
          className={` px-4 py-3 w-full rounded-lg text-base font-normal text-slate flex bg-clip-padding bg-no-repeat border-2 border-solid ${
            highlightError5.length > 0 ? "border-red" : "border-[#A4A4A4] "
          }   first-letter:transition ease-in-out m-0`}
        >
          <input
            type="text"
            className="text-slate text-lg px-3 bg-transparent  placeholder-ghost w-full focus:outline-none"
            placeholder="Type course highlight 5 "
            defaultValue={highlight5}
            onChange={(e) => {
              setHighlight5(e.target.value);
            }}
          />{" "}
        </div>
      </div>
      <h1 className="text-violet">
        *Highlights are to help students know the features of this course
      </h1>

      {shortDescriptionError.length > 0 ? (
        <p className="w-full text-xs text-right text-red py-2">
          {shortDescriptionError}
        </p>
      ) : (
        ""
      )}
      <div
        className={` px-4 py-3 mt-4 mb-6 lg:mb-0 w-full rounded-lg text-base font-normal text-slate flex bg-clip-padding bg-no-repeat border-2 border-solid ${
          shortDescriptionError.length > 0 ? "border-red" : "border-[#A4A4A4] "
        }  first-letter:transition ease-in-out m-0`}
      >
        <input
          type="text"
          className="text-slate text-lg px-3 bg-transparent  placeholder-ghost w-full focus:outline-none"
          placeholder="Short Description (1-2 lines)"
          defaultValue={shortDescription}
          onChange={(e) => {
            setShortDescription(e.target.value);
          }}
        />{" "}
      </div>
      <div className="hidden lg:flex justify-end py-5">
        <button className="text-white bg-violet w-44 py-3 rounded-lg ">
          Save and Continue
        </button>
      </div>
    </form>
  );
};

export default AdditionalDescription;
