import React, { useState, Fragment, useEffect } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  addBasicDetails,
  addCourseSelector,
} from "../../redux/slices/AddCourseSlice";
import { CategorySideNav } from "./Dropdowns/CourseCategory";
import Acadamics from "../CourseCategory/Acadamics";
import Engineering from "../CourseCategory/Engineering";
import Medical from "../CourseCategory/Medical";
import Loader from "../Loader/Loader";

export const BasicDetails = ({ loading, courseData, proceedState }) => {
  const [proceed, setProceed] = proceedState;

  const [isDropDown1, setIsDropDown1] = useState(false);
  const [isDropDown2, setIsDropDown2] = useState(false);
  const [isDropDown3, setIsDropDown3] = useState(false);

  const [courseName, setCourseName] = useState("");
  const [courseDuration, setCourseDuration] = useState("");
  const [isDropDownValue1, setIsDropDownValue1] = useState("");
  const [isDropDownValue2, setIsDropDownValue2] = useState("");
  const [categorySelected, setCategorySelected] = useState("");
  const [courseDescription, setCourseDescription] = useState("lll");
  const [photographyCheckValue, setPhotographyCheckValue] = useState();
  const [businessCheckValues, setBusinessCheckValues] = useState();
  const [designCheckValues, setDesignCheckValues] = useState();
  const [itCheckValues, setItCheckValues] = useState();
  const [marketCheckValues, setMarketCheckValues] = useState();
  const [developmentCheckValues, setDevelopmentCheckValues] = useState();
  const [otherSkillsCheckValues, setOtherSkillsCheckValues] = useState();
  const [courseNameEroor, setCourseNameEroor] = useState("");
  const [modeCourseError, setModeCourseError] = useState("");
  const [courseDurationError, setCourseDurationError] = useState("");
  const [selectError, setSelectError] = useState("");
  const [courseCategoryError, setCourseCategoryError] = useState("");
  const [courseDescriptionError, setCourseDescriptionError] = useState("");

  const [selectClassValues, setSelectClassValues] = useState([]);
  const [selectBoardValues, setSelectBoardValues] = useState([]);
  const [selectEnggExam, setSelectEnggExam] = useState([]);
  const [selectMedicalExam, setSelectMedicalExam] = useState([]);

  const [isDropDown10, setIsDropDown10] = useState(false);
  const [isDropDown20, setIsDropDown20] = useState(false);
  const [isDropDown30, setIsDropDown30] = useState(false);
  const [isDropDown12, setIsDropDown12] = useState(false);
  const [isDropDown21, setIsDropDown21] = useState(false);
  const dispatch = useDispatch();

  const { basicDetails } = useSelector(addCourseSelector);

  console.log(courseDescription);

  useEffect(() => {
    let courseCategoryValue = window.localStorage.getItem("Course_Category");
    let photographyCheckValues = window.localStorage.getItem(
      "Photography_Checked"
    );
    let BusinessCheckValues = window.localStorage.getItem("Business_Checked");
    let ItCheckValues = window.localStorage.getItem("It_Checked");
    let DesignCheckValues = window.localStorage.getItem("Design_Checked");
    let MarketCheckValues = window.localStorage.getItem("Market_Checked");
    let DevelopmentCheckValues = window.localStorage.getItem(
      "Development_Checked"
    );
    let OtherSkillsCheckValues = window.localStorage.getItem(
      "OtherSkills_Checked"
    );

    setIsDropDownValue1(
      courseData.classtype === 1
        ? "Hybrid"
        : courseData.classtype === 2
        ? "Online"
        : "Offline"
    );

    console.log(isDropDownValue2);

    setIsDropDownValue2(courseData?.duration?.split(" ")[1]);
    setCategorySelected(courseCategoryValue);
    setPhotographyCheckValue(JSON.parse(photographyCheckValues));
    setBusinessCheckValues(JSON.parse(BusinessCheckValues));
    setDesignCheckValues(JSON.parse(DesignCheckValues));
    setItCheckValues(JSON.parse(ItCheckValues));
    setMarketCheckValues(JSON.parse(MarketCheckValues));
    setDevelopmentCheckValues(JSON.parse(DevelopmentCheckValues));
    setOtherSkillsCheckValues(JSON.parse(OtherSkillsCheckValues));
  }, [courseData]);

  const handleSubmit = (event) => {
    let courseNameValue = event.target[0].value;
    let courseModeValue = event.target[1].value;
    let courseDurationValue = event.target[3].value;
    let courseSelectValue = event.target[4].value;
    let courseDescriptionValue = event.target[5].value;
    let courseCategoryValue = event.target[6].value;
    event.preventDefault();

    if (courseNameValue === "") {
      setCourseNameEroor("Course Name is required");
    }

    if (courseModeValue === "") {
      setModeCourseError("Course Mode is required");
    }
    if (courseDurationValue === "") {
      setCourseDurationError("Course Duration  is required");
    }
    if (courseSelectValue === "") {
      setSelectError("Select is required");
    }
    if (courseDescriptionValue === "") {
      setCourseDescriptionError("Course Description is required");
    }
    if (courseCategoryValue === "") {
      setCourseCategoryError("Course Category is required");
    }

    if (
      courseCategoryValue === "" ||
      courseDescriptionValue === "" ||
      courseSelectValue === "" ||
      courseDurationValue === "" ||
      courseModeValue === ""
    ) {
      alert("Please fill all the fields");
    } else {
      setProceed(true);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <form
          action=""
          onSubmit={handleSubmit}
          className="bg-white rounded-lg  lg:p-8 w-full lg:w-max my-5"
        >
          <h1 className=" hidden lg:flex text-2xl w-full space-x-2  items-center  py-4 pb-7  font-dm-sans font-bold">
            Basic Details
          </h1>

          {courseNameEroor.length > 0 ? (
            <p className="w-full text-xs text-right text-red">
              {courseNameEroor}
            </p>
          ) : (
            ""
          )}
          <div
            className={`px-2 lg:px-4 py-3 flex flex-wrap w-full  rounded-lg text-base font-normal text-slate   border-2 border-solid ${
              courseNameEroor.length > 0 ? "border-red" : "border-[#A4A4A4] "
            }  first-letter:transition ease-in-out `}
          >
            <input
              type="text"
              className="text-slate text-lg px-3 bg-transparent  placeholder-ghost w-full focus:outline-none"
              defaultValue={courseData.name}
              key={courseData.name}
              placeholder="Course Name *"
              name="Course Name"
              onChange={(e) => {
                setCourseName(e.target.value);
              }}
            />
          </div>

          {modeCourseError.length > 0 ? (
            <p className="w-full text-xs text-right text-red">
              {modeCourseError}
            </p>
          ) : (
            ""
          )}
          <div
            className={` px-4 py-3 w-full rounded-lg  text-base font-normal text-slate flex items-center bg-clip-padding bg-no-repeat border-2 border-solid ${
              modeCourseError.length > 0
                ? "border-red "
                : "border-[#A4A4A4] my-5 "
            }  first-letter:transition ease-in-out m-0`}
            onClick={() => {
              setIsDropDown1(!isDropDown1);
            }}
          >
            <input
              type="text"
              className="text-slate text-lg px-3 bg-transparent  placeholder-ghost w-full focus:outline-none"
              disabled
              defaultValue={isDropDownValue1}
              placeholder="Mode of course *"
            />

            <MdKeyboardArrowDown
              className={`text-2xl ${isDropDown1 ? "hidden" : "flex"}`}
            />
            <MdKeyboardArrowUp
              className={`text-2xl ${isDropDown1 ? "flex" : "hidden"}`}
            />
          </div>
          {isDropDown1 && (
            <div className="w-full bg-white cursor-pointer shadow rounded-lg">
              <div
                className="flex items-center px-10  space-x-2"
                onClick={() => {
                  setIsDropDownValue1("Online");
                  setIsDropDown1(false);
                }}
              >
                <input type="radio" />
                <p className="text-solid ">Online</p>
              </div>
              <hr className="text-[#E3E3E3] " />

              <div
                className="flex items-center px-10  space-x-2"
                onClick={() => {
                  setIsDropDownValue1("Offline");
                  setIsDropDown1(false);
                }}
              >
                <input type="radio" />

                <p className="text-solid">Offline</p>
              </div>
              <hr className="text-[#E3E3E3]" />

              <div
                className="flex items-center px-10  space-x-2"
                onClick={() => {
                  setIsDropDownValue1("Hybrid");
                  setIsDropDown1(false);
                }}
              >
                <input type="radio" />
                <p className="text-solid ">Hybrid</p>
              </div>
            </div>
          )}

          {courseDurationError.length > 0 ? (
            <p className="w-full text-xs text-right text-red">
              {courseDurationError}
            </p>
          ) : (
            ""
          )}
          {selectError.length > 0 ? (
            <p className="w-full text-xs text-right text-red">{selectError}</p>
          ) : (
            ""
          )}
          <div
            className={` px-4 py-1 w-full rounded-lg  text-base font-normal text-slate flex flex-col lg:flex-row items-center bg-clip-padding bg-no-repeat border-2 border-solid ${
              courseDurationError.length > 0
                ? "border-red "
                : "border-[#A4A4A4]  "
            } ${
              selectError.length > 0 ? "border-red " : "border-[#A4A4A4] my-5 "
            }  first-letter:transition ease-in-out m-0`}
          >
            <input
              type="text"
              className="text-slate w-full lg:w-80 text-center lg:text-left text-lg px-3 bg-transparent  placeholder-ghost  focus:outline-none"
              disabled
              placeholder="Course duration *"
            />
            <div className="flex-1"></div>
            <div className="flex py-3 lg:py-0 ">
              <input
                type="text"
                className="text-slate w-20 text-lg rounded-lg px-3 py-2 bg-transparent text-center placeholder-ghost  bg-[#F0F4F9] focus:outline-none"
                placeholder="0"
                defaultValue={courseData?.duration?.split(" ")[0]}
                key={courseData?.duration?.split(" ")[0]}
                onKeyDown={(e) =>
                  ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
                }
              />
              <div
                className="flex items-center lg:w-full mx-4 rounded-lg text-lg px-3 py-2 bg-transparent  placeholder-ghost  bg-[#F0F4F9] "
                onClick={() => {
                  setIsDropDown2(!isDropDown2);
                }}
              >
                <input
                  type="text"
                  className="text-slate  w-32 lg:w-full focus:outline-none"
                  defaultValue={isDropDownValue2}
                  placeholder="Select"
                  disabled
                />
                <MdKeyboardArrowDown
                  className={`text-2xl ${isDropDown2 ? "hidden" : "flex"}`}
                />
                <MdKeyboardArrowUp
                  className={`text-2xl ${isDropDown2 ? "flex" : "hidden"}`}
                />
              </div>
            </div>
          </div>

          {isDropDown2 && (
            <div className="flex cursor-pointer  justify-end lg:mr-8">
              <div className="w-60 bg-white shadow rounded-lg">
                <p
                  className="text-solid px-10"
                  onClick={() => {
                    setIsDropDownValue2("Days");
                    setIsDropDown2(false);
                  }}
                >
                  Days
                </p>
                <hr className="text-[#E3E3E3] " />
                <p
                  className="text-solid px-10"
                  onClick={() => {
                    setIsDropDownValue2("Weeks");
                    setIsDropDown2(false);
                  }}
                >
                  Weeks
                </p>
                <hr className="text-[#E3E3E3]" />

                <p
                  className="text-solid px-10"
                  onClick={() => {
                    setIsDropDownValue2("Months");
                    setIsDropDown2(false);
                  }}
                >
                  Months
                </p>
              </div>
            </div>
          )}

          {courseDescriptionError.length > 0 ? (
            <p className="w-full text-xs text-right text-red">
              {courseDescriptionError}
            </p>
          ) : (
            ""
          )}
          <div
            className={` px-4 py-3 w-full rounded-lg  text-base font-normal text-slate flex items-center bg-clip-padding bg-no-repeat border-2 border-solid  ${
              courseDescriptionError.length > 0
                ? "border-red "
                : "border-[#A4A4A4] my-5 "
            } first-letter:transition ease-in-out m-0`}
          >
            <textarea
              type="text"
              className="text-slate text-lg px-3 bg-transparent  placeholder-ghost w-full focus:outline-none"
              rows="6"
              cols="50"
              placeholder="Course description *"
              defaultValue={courseData.description}
              key={courseData.description}
              onChange={(e) => setCourseDescription(e.target.value)}
            />
          </div>

          {courseCategoryError.length > 0 ? (
            <p className="w-full text-xs text-right text-red">
              {courseCategoryError}
            </p>
          ) : (
            ""
          )}
          <div
            className={` px-4 py-3 w-full rounded-lg  text-base font-normal text-slate flex items-center bg-clip-padding bg-no-repeat border-2 border-solid ${
              courseCategoryError.length > 0
                ? "border-red "
                : "border-[#A4A4A4] my-5 "
            }  first-letter:transition ease-in-out m-0`}
            onClick={() => {
              setIsDropDown3(!isDropDown3);
            }}
          >
            <input
              type="text"
              className="text-slate text-lg px-3 bg-transparent  placeholder-ghost w-full focus:outline-none"
              disabled
              value={categorySelected}
              placeholder="Course category*"
            />

            <MdKeyboardArrowDown
              className={`text-2xl ${isDropDown3 ? "hidden" : "flex"}`}
            />
            <MdKeyboardArrowUp
              className={`text-2xl ${isDropDown3 ? "flex" : "hidden"}`}
            />
          </div>
          {isDropDown3 ? (
            <CategorySideNav
              dropDownClose={[isDropDown3, setIsDropDown3]}
              categoryState={[categorySelected, setCategorySelected]}
            />
          ) : (
            <div className=""></div>
          )}

          <Fragment>
            <form
              action=""
              className="relative w-full lg:mr-10 mb-10 lg:mb-0 bg-white rounded-lg   "
            >
              {categorySelected === "Academics" ||
              categorySelected === "Medical" ||
              categorySelected === "Engineering" ? (
                <h1 className="text-2xl w-full space-x-2 hidden lg:flex items-center  pt-4   font-dm-sans font-bold">
                  Sub-Category
                </h1>
              ) : (
                ""
              )}

              {/*====================== If Course Category is Acadamics  =========================== */}

              {categorySelected === "Academics" && (
                <div className="">
                  <Acadamics />
                </div>
              )}

              {/*======================== If Course Category is Engineering ======================  */}
              {categorySelected === "Engineering" && (
                <div className="">
                  <Engineering />
                </div>
              )}

              {/*========================= if Course Category is Medical ======================== */}
              {categorySelected === "Medical" && (
                <div className="">
                  <Medical />
                </div>
              )}
            </form>
          </Fragment>

          <div className={`hidden lg:flex justify-end `}>
            <button className="text-white bg-violet w-44 py-3 rounded-lg  ">
              Save and Continue
            </button>
          </div>
        </form>
      )}
    </>
  );
};
