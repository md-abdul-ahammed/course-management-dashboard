import axios from "axios";
import { TiMessage } from "react-icons/ti";
import { GrFormClose } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { IoRocketSharp } from "react-icons/io5";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdAddPhotoAlternate } from "react-icons/md";
import React, { useState, useEffect, Fragment } from "react";
import { RiArrowDropDownFill, RiArrowDropUpFill } from "react-icons/ri";

import { host } from "../../../util/constant/constant";
import Swal from "sweetalert2";
import {
  FilterImagesAndVideos,
  headers,
  isEmpty,
} from "../../../components/utils";
import { toast } from "react-toastify";
import AddLocationPopUp from "./AddLocationPopUp";
import FacultyPopup from "./FacultyPopup";
import EditAddPopup from "./EditAddPopup";
import AddAchievementPopup from "./AddAchievementPopup";
import DropdownSelector from "./DropdownSelector";
import { CustomInputField } from "./CustomInputField";
import DocumentSubmission from "./DocumentSubmission";
import CategorySelect from "../../../components/CategorySelect";
import MediaManager from "./MediaManager";
const subjectsForStreams = {
  Science: [
    "English ",
    "Chemistry",
    "Physics",
    "Maths",
    "Botany",
    "Zoology",
    "IP",
    "Computer Science ",
    "Java ",
    "Other",
  ],
  Commerce: [
    "Commerce ",
    "English ",
    "Accountancy",
    "Economics",
    "Business Studies",
    "Mathematics",
    "Statistics",
    "IP",
    "Computer Science",
    "Java ",
    "Other",
  ],
  "Arts/Humanities": [
    "Economics",
    "Psychology",
    "History",
    "Geography ",
    "Philosophy",
    "Sociology",
    "Anthropology ",
    "Political Science",
    "Journalism ",
    "English ",
    "Law",
    "Other ",
  ],
  Vocational: [
    "Banking ",
    "Accountancy & Auditing",
    "Fabrication Technology",
    "Marketing & Salesmanship",
    "Horticulture ",
    "Food Service & Management ",
    "Life Insurance ",
    "Financial Market Management",
    "Library Management",
    "Other ",
  ],
};

const examsFromFields = {
  UPSC: ["CSE", "SSC"],
  "Defence Services": [
    "NDA",
    "CDS",
    "Indian Air Force Recruitment",
    "Indian Naval Academy Recruitment",
    "AFCAT",
    "SSB",
  ],
  Law: ["CLAT", "AILET"],
  "Fashion & Design": ["NIFT", "NID", "DAT", "CEED", "UCEED", "SOFT "],
  Medical: ["NEET"],
  Engineering: [
    "JEE - MAIN",
    "JEE -ADVANCE",
    "BITSAT",
    "VITEEE",
    "SRMJEE",
    "COMEDK",
    "KIITEE",
    "WBJEE",
    "MHTCET",
    "MET",
  ],
  Railways: ["RRV", "RRB"],
};

const getSubjectsFromStreams = (streams) => {
  let subjects = [];
  streams.forEach((stream) => {
    subjects = subjects.concat(subjectsForStreams[stream]);
  });
  return subjects.filter(
    (subject, index, self) => self.indexOf(subject) === index
  );
};

const getExamsFromFields = (fields) => {
  let exams = [];
  fields.forEach((field) => {
    exams = exams.concat(examsFromFields[field]);
  });
  return exams.filter((exam, index, self) => self.indexOf(exam) === index);
};

const MyProfile = () => {
  const [reFetch, setRefetch] = useState(false);
  const [openingTime, setOpeningTime] = useState("");
  const [openingTimeError, setOpeningTimeError] = useState("");
  const [closingTime, setClosingTime] = useState("");
  const [closingTimeError, setClosingTimeError] = useState("");
  const [boardsJrSchool, setBoardsJrSchool] = useState([]);
  const [classesJrSchool, setClassesJrSchool] = useState([]);
  const [subjectsJrSchool, setSubjectsJrSchool] = useState([]);

  const [boardsSrSchool, setBoardsSrSchool] = useState([]);
  const [streamsSrSchool, setStreamsSrSchool] = useState([]);
  const [subjectsSrSchool, setSubjectsSrSchool] = useState([]);

  const [majors, setMajors] = useState([]);
  const [graduationFields, setGraduationFields] = useState([]);

  const [postMajors, setPostMajors] = useState([]);
  const [postGraduationFields, setPostGraduationFields] = useState([]);

  const [fieldsCompetitiveExams, setFieldsCompetitiveExams] = useState([]);
  const [examsCompetitiveExams, setExamsCompetitiveExams] = useState([]);
  const [skills, setSkills] = useState([]);

  const navigate = useNavigate();
  const [instituteDetails, setInstituteDetails] = useState({});
  const [locationValues, setLocationValues] = useState(
    instituteDetails.locations
  );
  const [activeFaculty, setActiveFaculty] = useState(null);
  const [facultyValues, setFacultyValues] = useState([]);
  const [achievementValues, setAchievementValues] = useState([]);

  const [instituteDomain, setInstituteDomain] = useState([]);
  const [instituteDomainError, setInstituteDomainError] = useState("");

  const [classMode, setClassMode] = useState();
  const [imageCounter, setImageCounter] = useState(0);
  const [videoCounter, setVideoCounter] = useState(0);
  const [instituteName, setInstituteName] = useState(instituteDetails.name);
  const [instituteMobile, setInstituteMobile] = useState(
    instituteDetails.phonenumber
  );
  const [instituteDescription, setInstituteDescription] = useState(
    instituteDetails.description
  );

  console.log(instituteDetails);
  const [instituteEmail, setInstituteEmail] = useState(instituteDetails.email);
  useEffect(() => {
    setInstituteName(instituteDetails.name);
    setInstituteMobile(instituteDetails.phonenumber);
    setInstituteDescription(instituteDetails.description);
    setInstituteEmail(instituteDetails.email);

    if (instituteDetails.classmode === 1) {
      setClassMode("Hybrid");
    }
    if (instituteDetails.classmode === 2) {
      setClassMode("Online");
    }
    if (instituteDetails.classmode === 3) {
      setClassMode("Offline");
    }
  }, [instituteDetails]);

  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [fileSrcAchievment, setFileSrcAchievment] = useState("");
  const [fileSrcFaculty, setFileSrcFaculty] = useState("");
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);

  const [isDropDown1, setIsDropDown1] = useState(true);
  const [isDropDown2, setIsDropDown2] = useState(true);
  const [isDropDown3, setIsDropDown3] = useState(true);
  const [isDropDown4, setIsDropDown4] = useState(true);
  const [isDropDown5, setIsDropDown5] = useState(true);
  const [isDropDown6, setIsDropDown6] = useState(true);
  const [isDropDown7, setIsDropDown7] = useState(true);
  const [isDropDown8, setIsDropDown8] = useState(true);

  const [showPopUp, setShowPopUp] = useState(false);
  const [showEditPopUp, setShowEditPopUp] = useState(false);
  const [showPopUp1, setShowPopUp1] = useState(false);
  const [showPopUp2, setShowPopUp2] = useState(false);
  const [viewAllPhoto, setViewAllPhoto] = useState(false);
  const [viewAllVideo, setViewAllVideo] = useState(false);
  const [isDisable, setIsDisable] = useState(true);
  const [isDisable1, setIsDisable1] = useState(true);
  const [isDisable2, setIsDisable2] = useState(true);
  const [isDisable3, setIsDisable3] = useState(true);
  const [boardsJrSchoolError, setBoardsJrSchoolError] = useState("");
  const [classesJrSchoolError, setClassesJrSchoolError] = useState("");
  const [subjectsJrSchoolError, setSubjectsJrSchoolError] = useState("");

  const [boardsSrSchoolError, setBoardsSrSchoolError] = useState("");
  const [streamsSrSchoolError, setStreamsSrSchoolError] = useState("");
  const [subjectsSrSchoolError, setSubjectsSrSchoolError] = useState("");

  const [majorsError, setMajorsError] = useState("");
  const [graduationFieldsError, setGraduationFieldsError] = useState("");

  const [postMajorsError, setPostMajorsError] = useState("");
  const [postGraduationFieldsError, setPostGraduationFieldsError] =
    useState("");

  const [fieldsCompetitiveExamsError, setFieldsCompetitiveExamsError] =
    useState("");
  const [examsCompetitiveExamsError, setExamsCompetitiveExamsError] =
    useState("");
  const [skillsError, setSkillsError] = useState("");
  let initialLocation = locationValues?.[0] || {};
  console.log(locationValues);

  useEffect(() => {
    if (instituteDetails?.locations?.length) {
      let temp = [];
      instituteDetails?.locations?.forEach((item) => temp.push(item && item));
      setLocationValues(temp);
    }
  }, [instituteDetails]);

  useEffect(() => {
    setRefetch(!reFetch);
  }, [showPopUp]);

  console.log(boardsSrSchool);

  useEffect(() => {
    document.title = "My Profile - Ostello India";

    if (window.localStorage.getItem("INSTITUTE_ID") === null) {
      navigate("/login");
      return;
    }

    axios
      .get(
        `${host}/institute?id=${window.localStorage.getItem("INSTITUTE_ID")}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${window.localStorage.getItem(
              "ACCESS_TOKEN"
            )}`,
          },
        }
      )
      .then((res) => {
        // console.log(res.data)
        setInstituteDetails(res.data.message);

        setInstituteDomain([...res?.data?.message?.coursecategories]);
        setBoardsSrSchool([...res?.data?.message?.services[0]?.boards]);
        setStreamsSrSchool([...res?.data?.message?.services[0]?.streams]);
        setSubjectsSrSchool([...res?.data?.message?.services[0]?.subjects]);

        setFacultyValues((prev) => {
          const temp = [...prev];
          res.data.message?.faculty?.forEach((fac) => temp.push(fac));
          return temp;
        });

        setAchievementValues((prev) => {
          const temp = [...prev];
          res.data.message.achievements?.forEach((ach) => temp.push(ach));
          return temp;
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, [reFetch]);

  const uploadFiles = () => {
    const myFile = document.getElementById("myFile");
    myFile.click();
  };

  const uploadFiles1 = () => {
    const myFile = document.getElementById("myFile1");
    myFile.click();
  };

  const imageHandleChange = (e) => {
    setImages([]);
    if (e.target.files) {
      // FilterImagesAndVideos({
      //   filesArray: e.target.files,
      //   setImages,
      //   setVideos,
      // })
      let filesArray = e.target.files;
      Object.values(filesArray).forEach((item) => {
        if (item.type.toLowerCase().includes("video")) {
          console.log("Its a video");
          setVideos((prev) => (!isEmpty(prev) ? [...prev, item] : [item]));
        }
        if (item.type.toLowerCase().includes("image")) {
          console.log("its an image");
          setImages((prev) => (!isEmpty(prev) ? [...prev, item] : [item]));
        }
      });

      const fileArray = Array.from(e.target.files)?.map((file) =>
        URL.createObjectURL(file)
      );
      setImageCounter((prev) => prev + fileArray.length);
      Array.from(e.target.files)?.map((file) => URL.revokeObjectURL(file));
    }
  };

  const videoChangeHandle = (e) => {
    setVideos([]);
    if (e.target.files) {
      // FilterImagesAndVideos({
      //   filesArray: e.target.files,
      //   setImages,
      //   setVideos,
      // } )
      let filesArray = e.target.files;
      console.log(filesArray);
      Object.values(filesArray).forEach((item) => {
        if (item.type.toLowerCase().includes("video")) {
          console.log("Its a video");
          setVideos((prev) => (!isEmpty(prev) ? [...prev, item] : [item]));
        }
        if (item.type.toLowerCase().includes("image")) {
          console.log("its an image");
          setImages((prev) => (!isEmpty(prev) ? [...prev, item] : [item]));
        }
      });
      FilterImagesAndVideos(filesArray, setImages, setVideos);
      const fileArray = Array.from(e.target.files)?.map((file) =>
        URL.createObjectURL(file)
      );
      setSelectedVideos((prevVideos) => prevVideos.concat(fileArray));
      setVideoCounter((prev) => prev + fileArray.length);
      Array.from(e.target.files)?.map((file) => URL.revokeObjectURL(file));
    }
  };

  console.log(images, videos, "IMVID");

  const renderVideos = (source) => {
    return source?.map((video) => {
      return (
        <div className="flex">
          <video
            controls
            src={video}
            key={video}
            type="video/mp4"
            className="flex"
          />
        </div>
      );
    });
  };

  const renderPhotos = (source) => {
    return source?.map((photo) => {
      return (
        <img
          src={photo}
          key={photo}
          alt="Rendering Media Images"
          width="150px"
          className=" "
        />
      );
    });
  };
  return (
    <section className=" w-full h-screen font-dm-sans overflow-x-hidden overflow-y-scroll relative space-y-4">
      {showPopUp && (
        <AddLocationPopUp
          instituteDetails={instituteDetails}
          showPopUpState={[showPopUp, setShowPopUp]}
          locationValuesState={[locationValues, setLocationValues]}
        />
      )}
      {showPopUp1 && (
        <FacultyPopup
          activeFaculty={activeFaculty}
          showPopUpState1={[showPopUp1, setShowPopUp1]}
          valuesState={[facultyValues, setFacultyValues]}
          fileSrcState={[fileSrcFaculty, setFileSrcFaculty]}
          title="Add faculty"
        />
      )}

      {showEditPopUp && (
        <EditAddPopup
          activeFaculty={activeFaculty}
          showPopUpState1={[showEditPopUp, setShowEditPopUp]}
          valuesState={[facultyValues, setFacultyValues]}
          fileSrcState={[fileSrcFaculty, setFileSrcFaculty]}
          title="Edit"
        />
      )}
      {showPopUp2 && (
        <AddAchievementPopup
          showDropDown={[isDropDown6, setIsDropDown6]}
          showPopUpState1={[showPopUp2, setShowPopUp2]}
          valuesState={[achievementValues, setAchievementValues]}
          fileSrcState={[fileSrcAchievment, setFileSrcAchievment]}
          title="Add achievement"
          name3="Describe your achievement"
          className="hidden"
        />
      )}
      {viewAllPhoto && (
        <div
          className=" absolute   h-max  "
          style={{ background: "rgba(0, 0, 0, 0.3)" }}
        >
          <div className="flex flex-wrap justify-center relative w-screen overflow-x-scroll  h-max gap-10  p-20 pb-20 pt-20 lg:pl-10">
            <AiFillCloseCircle
              className="text-violet absolute right-10 top-0 mr-16 mt-8 text-3xl"
              onClick={() => {
                setViewAllPhoto(!viewAllPhoto);
                setIsDropDown4(!isDropDown4);
              }}
            />
            {renderPhotos(selectedImages)}{" "}
          </div>
        </div>
      )}
      {viewAllVideo && (
        <div
          className=" absolute w-screen  h-max   "
          style={{ background: "rgba(0, 0, 0, 0.3)" }}
        >
          <div className="flex flex-wrap justify-center  h-max gap-10 p-20  pt-20 lg:pl-10">
            <AiFillCloseCircle
              className="text-violet absolute right-10 top-0 mr-16 mt-8 text-3xl"
              onClick={() => {
                setViewAllVideo(!viewAllVideo);
                setIsDropDown4(!isDropDown4);
              }}
            />
            {renderVideos(selectedVideos)}{" "}
          </div>
        </div>
      )}

      <div className="py-5">
        {/* section-1 */}
        <section className="  w-full px-5 space-y-4 lg:space-y-0 lg:px-12 mb-6">
          <div className="heading mb-5">
            <h1 className="text-2xl font-bold ">My Profile</h1>
          </div>
          <div className="flex">
            <DropdownSelector
              title="Basic Details"
              isDropDown1State={[isDropDown1, setIsDropDown1]}
              className=""
            />

            {isDisable ? (
              <button
                className="  text-white w-20 rounded-full p-1  ml-auto"
                style={{ background: "#4C4C4C" }}
                onClick={() => {
                  setIsDisable(false);
                }}
              >
                {" "}
                Edit{" "}
              </button>
            ) : (
              <button
                className="  text-white w-20 rounded-full p-1  ml-auto"
                style={{ background: "#4C4C4C" }}
                onClick={() => {
                  setIsDisable(true);
                  // console.log(instituteName)
                  axios
                    .patch(
                      `${host}/institute`,
                      {
                        id: window.localStorage.getItem("INSTITUTE_ID"),
                        updates: {
                          name: instituteName,
                        },
                      },
                      {
                        headers: {
                          "Access-Control-Allow-Origin": "*",
                          Authorization: `Bearer ${window.localStorage.getItem(
                            "ACCESS_TOKEN"
                          )}`,
                        },
                      }
                    )
                    .catch((err) => {
                      console.error(err);
                    });
                }}
              >
                {" "}
                Save{" "}
              </button>
            )}
          </div>

          {isDropDown1 && (
            <Fragment>
              <div className="flex flex-col    lg:flex-row lg:space-x-10">
                <CustomInputField
                  inputState={[instituteName, setInstituteName]}
                  description={instituteName}
                  className=" lg:w-96 shrink  mb-4 lg:mb-0"
                  disableState={[isDisable, setIsDisable]}
                  name="Institute Name"
                />
                <CustomInputField
                  inputState={[instituteMobile, setInstituteMobile]}
                  description={instituteDetails.phonenumber}
                  className="lg:w-96 shrink"
                  disableState={[isDisable, setIsDisable]}
                  name="Contact No."
                />
              </div>
              <CustomInputField
                inputState={[instituteDescription, setInstituteDescription]}
                description={instituteDetails.description}
                className=" lg:w-9/12 shrink"
                disableState={[isDisable, setIsDisable]}
                name="Overview"
              />
              <div className="flex flex-col  lg:flex-row lg:space-x-10">
                <CustomInputField
                  inputState={[instituteEmail, setInstituteEmail]}
                  description={instituteDetails.email}
                  className=" lg:w-96 shrink mb-4 lg:mb-0"
                  disableState={[isDisable, setIsDisable]}
                  name="Institute email"
                />
                {/* <CustomInputField
                  description='XYZ_institute.co.in'
                  className='lg:w-96 shrink'
                  disableState={[isDisable, setIsDisable]}
                  name='Institute website'
                /> */}
              </div>
              <CustomInputField
                description={classMode}
                className="lg:w-96 shrink"
                disableState={[isDisable, setIsDisable]}
                name="Type of Institute"
              />
              <div className="flex items-center flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
                <div className=" flex w-full flex-col space-y-2 ">
                  <p className="w-fit">Opening Time</p>
                  {openingTimeError.length > 0 && (
                    <p className="w-full text-right text-xs text-red">
                      {openingTimeError}
                    </p>
                  )}
                  <input
                    type="time"
                    value={openingTime}
                    onChange={(e) => {
                      e.preventDefault();
                      setOpeningTime(e.target.value);
                      setOpeningTimeError("");
                    }}
                    className={`select-none form-select   marker:block w-full px-4 py-2 text-base font-normal text-slate bg-white bg-clip-padding bg-no-repeat border-2 border-solid ${
                      openingTimeError.length === 0
                        ? "border-light-gray"
                        : "border-red"
                    } rounded-xl shadow-md first-letter:transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
                  />
                </div>
                <div className=" flex w-full flex-col space-y-2">
                  <p className="w-fit">Closing Time</p>
                  {closingTimeError.length > 0 && (
                    <p className="w-full text-right text-xs text-red">
                      {closingTimeError}
                    </p>
                  )}
                  <input
                    type="time"
                    value={closingTime}
                    onChange={(e) => {
                      e.preventDefault();
                      setClosingTime(e.target.value);
                      setClosingTimeError("");
                    }}
                    className={`select-none form-select   marker:block w-full px-4 py-2 text-base font-normal text-slate bg-white bg-clip-padding bg-no-repeat border-2 border-solid ${
                      closingTimeError.length === 0
                        ? "border-light-gray"
                        : "border-red"
                    } rounded-xl shadow-md first-letter:transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
                  />
                </div>
              </div>
            </Fragment>
          )}
        </section>

        {/* section-2 */}
        <section className="  w-full px-6 space-y-4 lg:space-y-0 lg:px-12   mb-6">
          <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0">
            <DropdownSelector
              title="Manage locations"
              isDropDown1State={[isDropDown2, setIsDropDown2]}
            />
            <button
              className="bg-violet text-white w-32  rounded-full p-1 lg:ml-auto"
              onClick={() => {
                setShowPopUp(!showPopUp);
                setIsDropDown1(false);
                setIsDropDown2(false);
                setIsDropDown3(false);
                setIsDropDown4(false);
                setIsDropDown5(false);
                setIsDropDown6(false);
                setIsDropDown7(false);
              }}
            >
              + Add location
            </button>
          </div>
          {isDropDown2 && (
            <Fragment>
              <div className="flex flex-col space-y-2   ">
                {locationValues?.map((element, index) => (
                  <div className="shrink w-full lg:w-10/12 px-6 py-2  shadow-md rounded-xl text-base font-normal text-slate bg-white bg-clip-padding bg-no-repeat border-2 border-solid border-light-gray first-letter:transition ease-in-out m-0">
                    <p className="font-bold text-xl">Location {index + 1}</p>
                    <p className=" font-bold">
                      Line1:{" "}
                      <span className="font-normal">{element.line1}</span>
                    </p>
                    <p className=" font-bold">
                      Line2:{" "}
                      <span className="font-normal">{element.line2}</span>
                    </p>
                    <p className=" font-bold">
                      City: <span className="font-normal">{element.city}</span>
                    </p>
                    <p className=" font-bold">
                      Area: <span className="font-normal">{element.area}</span>
                    </p>
                    <p className=" font-bold">
                      State:{" "}
                      <span className="font-normal">{element.state}</span>
                    </p>
                    <p className=" font-bold">
                      Pincode:{" "}
                      <span className="font-normal">{element.pincode}</span>
                    </p>
                  </div>
                ))}
              </div>{" "}
            </Fragment>
          )}
        </section>

        {/* section-3  */}

        <section className="  w-full px-6 space-y-4 lg:space-y-0 lg:px-12   mb-6">
          <div className="flex">
            <DropdownSelector
              title="Your Services"
              isDropDown1State={[isDropDown8, setIsDropDown8]}
              className=""
            />
            {isDisable1 ? (
              <button
                className="  text-white w-20 rounded-full p-1  ml-auto"
                style={{ background: "#4C4C4C" }}
                onClick={() => {
                  setIsDisable1(false);
                }}
              >
                {" "}
                Edit{" "}
              </button>
            ) : (
              <button
                className="  text-white w-20 rounded-full p-1  ml-auto"
                style={{ background: "#4C4C4C" }}
                onClick={() => {
                  setIsDisable1(true);
                }}
              >
                {" "}
                Save{" "}
              </button>
            )}
          </div>
          {isDropDown8 && (
            <>
              <CategorySelect
                categories={[
                  "Junior Secondary School (Class 6-10th)",
                  "Senior Secondary School (Class 11-12th)",
                  "Competitive Exams",
                  "Skill Based Courses",
                  "Graduation",
                  "Post Graduation",
                ]}
                selectedState={[instituteDomain, setInstituteDomain]}
                placeholderText="Select your domain"
                errorState={[instituteDomainError, setInstituteDomainError]}
              />

              {instituteDomain.includes(
                "Junior Secondary School (Class 6-10th)"
              ) && (
                <React.Fragment>
                  <h2 className="text-lg font-medium text-slate my-4">
                    Junior Secondary School (Class 6-10th)
                  </h2>
                  <CategorySelect
                    placeholderText={"Select Board"}
                    categories={[
                      "CBSE",
                      "ICSE",
                      "NIOS",
                      "UP State Board",
                      "West Bengal State Board",
                      "Tamilnadu State Board",
                      "Maharashtra State Board",
                      "Other",
                    ]}
                    selectedState={[boardsJrSchool, setBoardsJrSchool]}
                    errorState={[boardsJrSchoolError, setBoardsJrSchoolError]}
                  />
                  <CategorySelect
                    categories={[
                      "Class 6",
                      "Class 7",
                      "Class 8",
                      "Class 9",
                      "Class 10",
                    ]}
                    selectedState={[classesJrSchool, setClassesJrSchool]}
                    placeholderText="Select class"
                    errorState={[classesJrSchoolError, setClassesJrSchoolError]}
                  />
                  <CategorySelect
                    categories={[
                      "English ",
                      "Hindi ",
                      "Maths ",
                      "Science ",
                      "Social Studies ",
                      "Computer Science",
                      "Chemistry",
                      "Physics",
                      "Other ",
                    ]}
                    selectedState={[subjectsJrSchool, setSubjectsJrSchool]}
                    placeholderText="Select subjects as per classes"
                    errorState={[
                      subjectsJrSchoolError,
                      setSubjectsJrSchoolError,
                    ]}
                  />
                </React.Fragment>
              )}
              {instituteDomain.includes(
                "Senior Secondary School (Class 11-12th)"
              ) && (
                <React.Fragment>
                  <h2 className="text-lg font-medium text-slate my-4">
                    Senior Secondary School (Class 11-12th)
                  </h2>
                  <CategorySelect
                    placeholderText={"Select Board"}
                    categories={[
                      "CBSE",
                      "ICSE",
                      "NIOS",
                      "UP State Board",
                      "West Bengal State Board",
                      "Tamilnadu State Board",
                      "Maharashtra State Board",
                      "Other",
                    ]}
                    selectedState={[boardsSrSchool, setBoardsSrSchool]}
                    errorState={[boardsSrSchoolError, setBoardsSrSchoolError]}
                  />
                  <CategorySelect
                    categories={[
                      "Science",
                      "Commerce",
                      "Arts/Humanities",
                      "Vocational",
                    ]}
                    selectedState={[streamsSrSchool, setStreamsSrSchool]}
                    placeholderText="Select Streams"
                    errorState={[streamsSrSchoolError, setStreamsSrSchoolError]}
                  />
                  <CategorySelect
                    categories={getSubjectsFromStreams(streamsSrSchool)}
                    selectedState={[subjectsSrSchool, setSubjectsSrSchool]}
                    placeholderText="Select subjects as per streams"
                    errorState={[
                      subjectsSrSchoolError,
                      setSubjectsSrSchoolError,
                    ]}
                  />
                </React.Fragment>
              )}
              {instituteDomain.includes("Competitive Exams") && (
                <React.Fragment>
                  <h2 className="text-lg font-medium text-slate my-4">
                    For Competitive Exams
                  </h2>
                  <CategorySelect
                    categories={[
                      "UPSC",
                      "Defence Services",
                      "Law",
                      "Fashion & Design",
                      "Medical",
                      "Engineering ",
                      "Railways ",
                    ]}
                    selectedState={[
                      fieldsCompetitiveExams,
                      setFieldsCompetitiveExams,
                    ]}
                    placeholderText="Select your field"
                    errorState={[
                      fieldsCompetitiveExamsError,
                      setFieldsCompetitiveExamsError,
                    ]}
                  />
                  <CategorySelect
                    categories={getExamsFromFields(fieldsCompetitiveExams)}
                    selectedState={[
                      examsCompetitiveExams,
                      setExamsCompetitiveExams,
                    ]}
                    placeholderText="Select exams as per fields"
                    errorState={[
                      examsCompetitiveExamsError,
                      setExamsCompetitiveExamsError,
                    ]}
                  />
                </React.Fragment>
              )}
              {instituteDomain.includes("Skill Based Courses") && (
                <React.Fragment>
                  <h2 className="text-lg font-medium text-slate my-4">
                    Skill Based Courses
                  </h2>
                  <CategorySelect
                    categories={[
                      "Designing ",
                      "Marketing ",
                      "Photography ",
                      "Animation and VFX",
                      "Leadership & Management Training ",
                      "Public Speaking ",
                      "Computer Science",
                      "Digital Marketing ",
                      "Other",
                    ]}
                    selectedState={[skills, setSkills]}
                    placeholderText="Please enter the skills you provide classes for "
                    errorState={[skillsError, setSkillsError]}
                  />
                </React.Fragment>
              )}
              {instituteDomain.includes("Graduation") && (
                <React.Fragment>
                  <h2 className="text-lg font-medium text-slate my-4">
                    Graduation
                  </h2>
                  <CategorySelect
                    categories={["B.Des ", "BBA "]}
                    selectedState={[majors, setMajors]}
                    placeholderText="Select Major "
                    errorState={[majorsError, setMajorsError]}
                  />
                  <CategorySelect
                    categories={["UX Design ", "Product Design ", "UI Design "]}
                    selectedState={[graduationFields, setGraduationFields]}
                    placeholderText="Select Field "
                    errorState={[
                      graduationFieldsError,
                      setGraduationFieldsError,
                    ]}
                  />
                </React.Fragment>
              )}
              {instituteDomain.includes("Post Graduation") && (
                <React.Fragment>
                  <h2 className="text-lg font-medium text-slate my-4">
                    Post Graduation
                  </h2>
                  <CategorySelect
                    categories={["M.Des ", "MBA "]}
                    selectedState={[postMajors, setPostMajors]}
                    placeholderText="Select Major "
                    errorState={[postMajorsError, setPostMajorsError]}
                  />
                  <CategorySelect
                    categories={["UX Design ", "Product Design ", "UI Design "]}
                    selectedState={[
                      postGraduationFields,
                      setPostGraduationFields,
                    ]}
                    placeholderText="Select Field "
                    errorState={[
                      postGraduationFieldsError,
                      setPostGraduationFieldsError,
                    ]}
                  />
                </React.Fragment>
              )}
            </>
          )}
        </section>

        {/* section-8  */}

        <section className="  w-full px-6 space-y-4 lg:space-y-0 lg:px-12   mb-6">
          <div className="flex">
            <DropdownSelector
              title="Owner Details"
              isDropDown1State={[isDropDown3, setIsDropDown3]}
              className=""
            />
            {isDisable1 ? (
              <button
                className="  text-white w-20 rounded-full p-1  ml-auto"
                style={{ background: "#4C4C4C" }}
                onClick={() => {
                  setIsDisable1(false);
                }}
              >
                {" "}
                Edit{" "}
              </button>
            ) : (
              <button
                className="  text-white w-20 rounded-full p-1  ml-auto"
                style={{ background: "#4C4C4C" }}
                onClick={() => {
                  setIsDisable1(true);
                }}
              >
                {" "}
                Save{" "}
              </button>
            )}
          </div>
          {isDropDown3 && (
            <Fragment>
              <div className="flex flex-col   lg:flex-row lg:space-x-10">
                <CustomInputField
                  description={instituteDetails?.owner?.name}
                  className=" lg:w-96 shrink  mb-4 lg:mb-0 "
                  disableState={[isDisable, setIsDisable]}
                  name="Owner Name"
                />
                <CustomInputField
                  description={instituteDetails?.owner?.phonenumber}
                  className="lg:w-96 shrink"
                  disableState={[isDisable, setIsDisable]}
                  name="Contact No."
                />
              </div>
              <CustomInputField
                description={instituteDetails?.owner?.email}
                className="lg:w-96 shrink"
                disableState={[isDisable, setIsDisable]}
                name="Owner email"
              />
            </Fragment>
          )}
        </section>

        {/* section-4  */}
        <section className="  w-full px-6 space-y-4 lg:space-y-0 lg:px-12   mb-6">
          <div className="flex lg:mb-6 ">
            <DropdownSelector
              title="Manage Media"
              isDropDown1State={[isDropDown4, setIsDropDown4]}
              className=""
            />
            {isDisable3 ? (
              <button
                className="  text-white w-20 rounded-full p-1  ml-auto"
                style={{ background: "#4C4C4C" }}
                onClick={() => {
                  setIsDisable3(false);
                }}
              >
                {" "}
                Edit{" "}
              </button>
            ) : (
              <button
                className="  text-white w-20 rounded-full p-1  ml-auto"
                style={{ background: "#4C4C4C" }}
                onClick={() => {
                  setIsDisable3(!isDisable3);

                  const formBody = new FormData();
                  formBody.append(
                    "id",
                    window.localStorage.getItem("INSTITUTE_ID")
                  );
                  formBody.append("updates", JSON.stringify({}));

                  for (let i = 0; i < images.length; i++) {
                    formBody.append("images", images[i]);
                  }

                  for (let i = 0; i < videos.length; i++) {
                    formBody.append("videos", videos[i]);
                  }

                  axios
                    .patch(`${host}/institute/update`, formBody, {
                      headers: {
                        "Access-Control-Allow-Origin": "*",
                        Authorization: `Bearer ${window.localStorage.getItem(
                          "ACCESS_TOKEN"
                        )}`,
                      },
                    })
                    .then((res) => {
                      console.log(res);
                      setIsDisable3(true);
                    })
                    .catch((err) => console.log(err));
                }}
              >
                Save
              </button>
            )}
          </div>
          <div className="space-y-10">
            {isDropDown4 && (
              <MediaManager />
              // <Fragment>

              //   <div className='flex flex-col sm:w-10/12 w-full  lg:flex-row lg:space-x-10 '>
              //     <div className='sm:w-5/12 w-full  px-6 py-2  mb-6 lg:mb-0     shadow-md rounded-xl text-base font-normal text-slate bg-white bg-clip-padding bg-no-repeat border-2 border-solid border-light-gray first-letter:transition ease-in-out m-0'>
              //       <h1 className='font-bold text-lg text-slate  py-4'>
              //         Cover Video
              //       </h1>
              //       <div className='border h-28 w-full lg:my-3 relative rounded-lg'>
              //         <MdAddPhotoAlternate
              //           className='text-3xl   mb-auto'
              //           style={{
              //             position: 'absolute',
              //             transform: 'translate(-50%,-50%)',
              //             top: '50%',
              //             left: '50%',
              //           }}
              //           onClick={uploadFiles}
              //         />
              //         <input
              //           type='file'
              //           multiple
              //           id='myFile'
              //           name='filename'
              //           className='hidden'
              //           onChange={videoChangeHandle}
              //           accept='video/*'
              //         />
              //       </div>

              //       <p className='text-center py-3 text-lg'>
              //         This would be considered as <br /> Institute’s demo video{' '}
              //       </p>
              //     </div>
              //     <div className=' px-6 py-2 w-full  mb-6 lg:mb-0  shadow-md rounded-xl text-base font-normal text-slate bg-white bg-clip-padding bg-no-repeat border-2 border-solid border-light-gray '>
              //       <div className=' flex space-x-3   '>
              //         <div className=' grid grid-cols-2 lg:grid-cols-3  gap-10   py-4 '>
              //           {videos?.map((item, key) => {
              //             if (key < 5)
              //               return (
              //                 <div className='flex items-center space-x-2'>
              //                   <video
              //                     controls
              //                     src={
              //                       typeof item === 'string'
              //                         ? item
              //                         : URL.createObjectURL(item)
              //                     }
              //                     key={key}
              //                     type='video/mp4'
              //                     className='relative'
              //                   />
              //                 </div>
              //               )

              //             if (key === 5)
              //               return (
              //                 <div key={key} className='relative'>
              //                   <video
              //                     controls
              //                     src={item}
              //                     type='video/mp4'
              //                     className='relative'
              //                   />

              //                   <p
              //                     className={`font-bold text-white text-xl md:text-3xl ${
              //                       videoCounter > 5 ? '' : 'hidden'
              //                     }`}
              //                     onClick={() => {
              //                       setViewAllPhoto(true)
              //                       setIsDropDown4(!isDropDown4)
              //                     }}
              //                     style={{
              //                       position: 'absolute',
              //                       left: '50%',
              //                       top: '50%',
              //                       transform: 'translate(-50%, -50%)',
              //                     }}
              //                   >
              //                     {videoCounter > 6
              //                       ? `+ ${videoCounter - 6}`
              //                       : ''}
              //                   </p>
              //                 </div>
              //               )
              //           })}
              //         </div>
              //       </div>
              //     </div>
              //   </div>

              //   <div className='flex flex-col sm:w-10/12 w-full  lg:flex-row lg:space-x-10 lg:mt-10'>
              //     <div className='sm:w-5/12 w-full px-6 py-2  mb-6 lg:mb-0 shadow-md rounded-xl text-base font-normal text-slate bg-white bg-clip-padding bg-no-repeat border-2 border-solid border-light-gray first-letter:transition ease-in-out m-0'>
              //       <h1 className='font-bold text-lg text-slate  py-4'>
              //         Cover Images
              //       </h1>
              //       <div className='border h-28 w-full lg:my-3 relative rounded-lg'>
              //         <MdAddPhotoAlternate
              //           className='text-3xl   mb-auto'
              //           style={{
              //             position: 'absolute',
              //             transform: 'translate(-50%,-50%)',
              //             top: '50%',
              //             left: '50%',
              //           }}
              //           onClick={uploadFiles1}
              //         />
              //         <input
              //           type='file'
              //           multiple
              //           id='myFile1'
              //           name='filename'
              //           className='hidden'
              //           onChange={imageHandleChange}
              //         />
              //       </div>

              //       <p className='text-center py-3 text-lg'>
              //         This would be considered as <br /> Institute’s Images
              //       </p>
              //     </div>
              //     <div className='w-full h-auto px-6    z-0 shadow-md rounded-xl text-base font-normal text-slate bg-white border-2 border-solid border-light-gray  m-0'>
              //       <div className=' grid grid-cols-2 lg:grid-cols-3    gap-10 py-4'>
              //         {selectedImages?.map((item, key) => {
              //           if (key < 5)
              //             return (
              //               <img
              //                 src={item}
              //                 key={key}
              //                 alt='Media Preview Images'
              //                 className='relative'
              //               />
              //             )
              //           if (key === 5)
              //             return (
              //               <div key={key} className='relative'>
              //                 <img
              //                   src={item}
              //                   alt='Media Preview Images'
              //                   className='relative'
              //                 />

              //                 <p
              //                   className={`font-bold text-white text-xl md:text-3xl ${
              //                     imageCounter > 5 ? '' : 'hidden'
              //                   }`}
              //                   onClick={() => {
              //                     setViewAllPhoto(true)
              //                     setIsDropDown4(!isDropDown4)
              //                   }}
              //                   style={{
              //                     position: 'absolute',
              //                     left: '50%',
              //                     top: '50%',
              //                     transform: 'translate(-50%, -50%)',
              //                     marginRight: '-50%',
              //                   }}
              //                 >
              //                   {imageCounter > 6 ? `+${imageCounter - 6}` : ''}
              //                 </p>
              //               </div>
              //             )
              //         })}
              //       </div>
              //     </div>
              //   </div>
              // </Fragment>
            )}
          </div>
        </section>

        {/* section-5  */}

        <section className="  w-full px-6 space-y-4 lg:space-y-0 lg:px-12   mb-6">
          <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:mb-10">
            <DropdownSelector
              title="Faculty"
              isDropDown1State={[isDropDown5, setIsDropDown5]}
            />
            <button
              className="bg-violet text-white w-32  rounded-full p-1 lg:ml-auto"
              onClick={() => {
                setShowPopUp1(!showPopUp);

                setIsDropDown1(false);
                setIsDropDown2(false);
                setIsDropDown3(false);
                setIsDropDown4(false);
                setIsDropDown5(false);
                setIsDropDown6(false);
                setIsDropDown7(false);
              }}
            >
              + Add Faculty
            </button>
          </div>
          {isDropDown5 && (
            <div className="grid sm:grid-cols-2 gap-10 ">
              {facultyValues?.map((element, index) => (
                <div
                  key={index}
                  className="shrink w-full px-6 py-2  shadow-md rounded-xl text-base font-normal text-slate bg-white bg-clip-padding bg-no-repeat border-2 border-solid border-light-gray first-letter:transition ease-in-out m-0"
                >
                  <div className="flex items-center ">
                    <img
                      src={`${element.src}`}
                      className="rounded-full w-8 h-8 lg:w-10 lg:h-10"
                      alt=""
                    />
                    <div className="flex flex-col ml-2 lg:ml-4 ">
                      <input
                        type="text"
                        className="text-sm lg:text-lg font-bold focus:outline-none"
                        defaultValue={element.name}
                      />
                      <p
                        className="text-xs lg:text-sm"
                        style={{ color: "#A4A4A4" }}
                      >
                        {element.qualification}
                      </p>
                    </div>
                    <button
                      className="  text-white w-20 rounded-full p-1  ml-auto"
                      style={{ background: "#4C4C4C" }}
                      onClick={() => {
                        setIsDisable2(false);
                        setShowEditPopUp(true);
                        setActiveFaculty(element);
                      }}
                    >
                      {" "}
                      Edit{" "}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="  w-full px-6 space-y-4 lg:space-y-0 lg:px-12   mb-6">
          <div className="flex flex-col lg:flex-row justify-between space-y-3 lg:space-y-0 lg:mb-10 ">
            <DropdownSelector
              title="Achievements"
              isDropDown1State={[isDropDown6, setIsDropDown6]}
            />
            <button
              className="bg-violet text-white w-44  rounded-full p-1 "
              onClick={() => {
                setShowPopUp2(!showPopUp);
                setIsDropDown1(false);
                setIsDropDown2(false);
                setIsDropDown3(false);
                setIsDropDown4(false);
                setIsDropDown5(false);
                setIsDropDown6(false);
                setIsDropDown7(false);
              }}
            >
              + Add Achievement
            </button>
          </div>
          {isDropDown6 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 z-0 ">
              {achievementValues?.map((element, index) => (
                <div key={index} className="relative">
                  <img
                    src={`${element.src}`}
                    alt=""
                    height="15rem"
                    className="w-72 rounded-lg h-full relative "
                  />

                  <div className="absolute bottom-0 px-5 text-white ">
                    <div className="flex space-x-3 items-center justify-start w-full text-white">
                      <p className="text-xs">{element.views} views</p>
                      <p className="items-start">.</p>
                      <p className="text-xs">{element.timestamp}</p>
                    </div>

                    <hr className="w-64 mb-3" />

                    <div className="flex  space-x-3 ">
                      <div className="flex bg-black w-20 items-center     space-x-3 rounded-full p-1">
                        <IoRocketSharp
                          className="text-violet p-1 w-7 h-7  rounded-full cursor-pointer"
                          style={{ backgroundColor: "white" }}
                        />
                        <p className="text-white text-sm">{element.boosts}</p>
                      </div>
                      <div className="flex items-center">
                        <TiMessage className="text-3xl" />
                        <p className="">{element.comments}</p>
                      </div>
                    </div>
                    <p className=" w-64 mb-3 ">{element.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="  w-full px-6 space-y-4 lg:space-y-0 lg:px-12   mb-6">
          <div className="flex">
            <DropdownSelector
              title="Banking details"
              isDropDown1State={[isDropDown7, setIsDropDown7]}
            />
            {isDisable3 ? (
              <button
                className="  text-white w-20 rounded-full p-1  ml-auto"
                style={{ background: "#4C4C4C" }}
                onClick={() => {
                  setIsDisable3(false);
                }}
              >
                {" "}
                Edit{" "}
              </button>
            ) : (
              <button
                className="  text-white w-20 rounded-full p-1  ml-auto"
                style={{ background: "#4C4C4C" }}
                onClick={() => {
                  setIsDisable3(true);
                }}
              >
                {" "}
                Save{" "}
              </button>
            )}
          </div>
          {isDropDown7 && (
            <Fragment>
              <div className="flex flex-col   lg:flex-row lg:space-x-10">
                <CustomInputField
                  description=""
                  className=" lg:w-96 shrink  mb-4 lg:mb-0"
                  disableState={[isDisable, setIsDisable]}
                  name="Bank Account No"
                />
                <CustomInputField
                  description=" "
                  className="lg:w-96 shrink"
                  disableState={[isDisable, setIsDisable]}
                  name="Name of the Bank"
                />
              </div>
              <div className="flex flex-col   lg:flex-row lg:space-x-10">
                <CustomInputField
                  description=""
                  className=" lg:w-96 shrink  mb-4 lg:mb-0 "
                  disableState={[isDisable, setIsDisable]}
                  name="IFSC Code"
                />
                <CustomInputField
                  description=""
                  className="lg:w-96 shrink"
                  disableState={[isDisable, setIsDisable]}
                  name="GST No."
                />
              </div>
              <div className="flex flex-col   lg:flex-row lg:space-x-10">
                <CustomInputField
                  description=""
                  className=" lg:w-96 shrink  mb-4 lg:mb-0 "
                  disableState={[isDisable, setIsDisable]}
                  name="Account Holder Name"
                />
                <CustomInputField
                  description=""
                  className="lg:w-96 shrink"
                  disableState={[isDisable, setIsDisable]}
                  name="Branch"
                />
              </div>
            </Fragment>
          )}
          <>
            <div className="flex items-center justify-between">
              <DropdownSelector
                title="Document Submission"
                isDropDown1State={[isDropDown8, setIsDropDown8]}
              />
              {true ? (
                <button
                  className="  text-white w-20 rounded-full p-1  ml-auto"
                  style={{ background: "#4C4C4C" }}
                  onClick={() => {
                    setIsDisable1(false);
                  }}
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                <button
                  className="  text-white w-20 rounded-full p-1  ml-auto"
                  style={{ background: "#4C4C4C" }}
                  onClick={() => {
                    setIsDisable1(true);
                  }}
                >
                  {" "}
                  Save{" "}
                </button>
              )}
            </div>
            {isDropDown8 && <>{<DocumentSubmission />}</>}
          </>
        </section>
      </div>
    </section>
  );
};

export default MyProfile;
