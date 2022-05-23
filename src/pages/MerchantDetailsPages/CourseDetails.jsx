import axios from "axios";
import React, { useState } from "react";

import { host } from "../../util/constant/constant";
import CategorySelect from "../../components/CategorySelect";
import { useSelector } from "react-redux";
import { merchantSelector } from "../../redux/slices/merchantSlice";

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

const CourseDetails = ({ merchantDetailsState, pageState }) => {
  const [, setPage] = pageState;

  const [merchantDetails, setMerchantDetails] = merchantDetailsState;
  const [instituteDomain, setInstituteDomain] = useState(
    merchantDetails.page2.instituteDomain
  );

  const [boardsJrSchool, setBoardsJrSchool] = useState(
    merchantDetails.page2.boardsJrSchool
  );
  const [classesJrSchool, setClassesJrSchool] = useState(
    merchantDetails.page2.classesJrSchool
  );
  const [subjectsJrSchool, setSubjectsJrSchool] = useState(
    merchantDetails.page2.subjectsJrSchool
  );

  const [boardsSrSchool, setBoardsSrSchool] = useState(
    merchantDetails.page2.boardsSrSchool
  );
  const [streamsSrSchool, setStreamsSrSchool] = useState(
    merchantDetails.page2.streamsSrSchool
  );
  const [subjectsSrSchool, setSubjectsSrSchool] = useState(
    merchantDetails.page2.subjectsSrSchool
  );

  const [majors, setMajors] = useState(merchantDetails.page2.majors);
  const [graduationFields, setGraduationFields] = useState(
    merchantDetails.page2.graduationFields
  );

  const [postMajors, setPostMajors] = useState(
    merchantDetails.page2.postMajors
  );
  const [postGraduationFields, setPostGraduationFields] = useState(
    merchantDetails.page2.postGraduationFields
  );

  const [fieldsCompetitiveExams, setFieldsCompetitiveExams] = useState(
    merchantDetails.page2.fieldsCompetitiveExams
  );
  const [examsCompetitiveExams, setExamsCompetitiveExams] = useState(
    merchantDetails.page2.examsCompetitiveExams
  );
  const [skills, setSkills] = useState(merchantDetails.page2.skills);

  const isJrSchoolValid = () =>
    !instituteDomain.includes("Junior Secondary School (Class 6-10th)") ||
    (boardsJrSchool.length > 0 &&
      classesJrSchool.length > 0 &&
      subjectsJrSchool.length > 0);

  const isSrSchoolValid = () =>
    !instituteDomain.includes("Senior Secondary School (Class 11-12th)") ||
    (boardsSrSchool.length > 0 &&
      streamsSrSchool.length > 0 &&
      subjectsSrSchool.length > 0);

  const isGraduationValid = () =>
    !instituteDomain.includes("Graduation") ||
    (boardsSrSchool.length > 0 &&
      majors.length > 0 &&
      graduationFields.length > 0);

  const isPostGraduationValid = () =>
    !instituteDomain.includes("Post Graduation") ||
    (boardsSrSchool.length > 0 &&
      postMajors.length > 0 &&
      postGraduationFields.length > 0);

  const isCompetitiveExamsValid = () =>
    !instituteDomain.includes("Competitive Exams") ||
    (fieldsCompetitiveExams.length > 0 && examsCompetitiveExams.length > 0);

  const isSkillBasedValid = () =>
    !instituteDomain.includes("Skill Based") || skills.length > 0;

  const saveIsError = () =>
    !isJrSchoolValid() ||
    !isSrSchoolValid() ||
    !isCompetitiveExamsValid() ||
    !isSkillBasedValid() ||
    !isGraduationValid() ||
    !isPostGraduationValid() ||
    instituteDomain.length <= 0;

  const [instituteDomainError, setInstituteDomainError] = useState("");
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
  const [formattedData, setFormattedData] = useState({});

  const formatData = () => {
    const temp = [];

    instituteDomain.forEach((item) => {
      if (item === "Junior Secondary School (Class 6-10th)") {
        let tempObj = {
          domainName: "Junior Secondary School (Class 6-10th)",
          boards: boardsJrSchool,
          classes: classesJrSchool,
          subjects: subjectsJrSchool,
        };

        temp.push(tempObj);
      }

      if (item === "Senior Secondary School (Class 11-12th)") {
        let tempObj = {
          domainName: "Senior Secondary School (Class 11-12th)",
          boards: boardsSrSchool,
          streams: streamsSrSchool,
          subjectsForStreams,
          subjects: subjectsSrSchool,
        };
        temp.push(tempObj);
      }
      if (item === "Competitive Exams") {
        let tempObj = {
          domainName: "Competitive Exams",
          fields: fieldsCompetitiveExams,
          examsPerFields: fieldsCompetitiveExams,
        };
        temp.push(tempObj);
      }
      if (item === "Skill Based Courses") {
        let tempObj = {
          domainName: "Skill Based Courses",
          skills,
        };
        temp.push(tempObj);
      }
      if (item === "Graduation") {
        let tempObj = {
          domainName: "Graduation",
          majors,
          fields: graduationFields,
        };
        temp.push(tempObj);
      }
      if (item === "Post Graduation") {
        let tempObj = {
          domainName: "Post Graduation",
          majors: postMajors,
          fields: postGraduationFields,
        };
        temp.push(tempObj);
      }
    });

    setFormattedData(temp);
  };
  const { instituteInformation } = useSelector(merchantSelector);
  let mode = instituteInformation.classmode;

  const handleSave = (e) => {
    e.preventDefault();

    if (instituteDomain.length === 0)
      setInstituteDomainError("Please select institute category");
    if (
      instituteDomain.includes("Junior Secondary School (Class 6-10th)") &&
      boardsJrSchool.length === 0
    )
      setBoardsJrSchoolError("Please select boards");
    if (
      instituteDomain.includes("Junior Secondary School (Class 6-10th)") &&
      classesJrSchool.length === 0
    )
      setClassesJrSchoolError("Please select classes");
    if (
      instituteDomain.includes("Junior Secondary School (Class 6-10th)") &&
      subjectsJrSchool.length === 0
    )
      setSubjectsJrSchoolError("Please select subjects as per classes");
    if (
      instituteDomain.includes("Senior Secondary School (Class 11-12th)") &&
      boardsSrSchool.length === 0
    )
      setBoardsSrSchoolError("Please select boards");
    if (
      instituteDomain.includes("Senior Secondary School (Class 11-12th)") &&
      streamsSrSchool.length === 0
    )
      setStreamsSrSchoolError("Please select streams");
    if (
      instituteDomain.includes("Senior Secondary School (Class 11-12th)") &&
      subjectsSrSchool.length === 0
    )
      setSubjectsSrSchoolError("Please select subjects as per streams");

    if (instituteDomain.includes("Graduation") && majors.length === 0)
      setMajorsError("Please select majors");
    if (instituteDomain.includes("Graduation") && graduationFields.length === 0)
      setGraduationFieldsError("Please select fields");

    if (instituteDomain.includes("Post Graduation") && postMajors.length === 0)
      setPostMajorsError("Please select majors");
    if (
      instituteDomain.includes("Post Graduation") &&
      postGraduationFields.length === 0
    )
      setPostGraduationFieldsError("Please select fields");
    if (
      instituteDomain.includes("Competitive Exams") &&
      fieldsCompetitiveExams.length === 0
    )
      setFieldsCompetitiveExamsError("Please select categories");
    if (
      instituteDomain.includes("Competitive Exams") &&
      examsCompetitiveExams.length === 0
    )
      setExamsCompetitiveExamsError("Please select exams");
    if (instituteDomain.includes("Skill Based Courses") && skills.length === 0)
      setSkillsError("Please select skills");

    if (saveIsError()) {
      alert("Please fill all the fields");
      return;
    }

    formatData();

    setMerchantDetails({
      ...merchantDetails,
      page2: {
        ...merchantDetails.page2,
        instituteDomain: instituteDomain,
        boardsJrSchool: boardsJrSchool,
        classesJrSchool: classesJrSchool,
        subjectsJrSchool: subjectsJrSchool,
        boardsSrSchool: boardsSrSchool,
        streamsSrSchool: streamsSrSchool,
        subjectsSrSchool: subjectsSrSchool,
        fieldsCompetitiveExams: fieldsCompetitiveExams,
        examsCompetitiveExams: examsCompetitiveExams,
        skills: skills,
        majors: majors,
        graduationFields: graduationFields,
        postMajors: postMajors,
        postGraduationFields: postGraduationFields,
      },
    });

    const body = {
      name: instituteInformation.instituteName,
      description: instituteInformation.description,
      establishedyear: instituteInformation.instituteStart,
      workinghours: instituteInformation.workingtime,
      phonenumber: parseInt(merchantDetails.page1.mobileNumber),
      email: merchantDetails.page1.ownerEmail,
      address: {
        line1: instituteInformation.addressLine1,
        line2: instituteInformation.addressLine2,
        pincode: parseInt(instituteInformation.pincode),
        area: instituteInformation.area,
        city: instituteInformation.city,
        state: instituteInformation.state,
        country: instituteInformation.country,
      },
      classmode: (() => {
        if (mode.includes("hybrid")) return 1;
        else if (mode.includes("online")) return 2;
        else if (mode.includes("offline")) return 3;
      })(),
      ownerId: window.localStorage.getItem("OWNER_ID"),
      coursecategories: merchantDetails.page2.instituteDomain,
      services: formattedData,
    };

    axios
      .post(`${host}/institute/`, body, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${window.localStorage.getItem(
            "ACCESS_TOKEN"
          )}`,
        },
      })
      .then(() => {
        axios
          .get(
            `${host}/users/id?id=${window.localStorage.getItem("OWNER_ID")}`,
            {
              headers: {
                Authorization: `Bearer ${window.localStorage.getItem(
                  "ACCESS_TOKEN"
                )}`,
              },
            }
          )
          .then((res) => {
            window.localStorage.setItem(
              "INSTITUTE_ID",
              res.data.message.institute.id
            );

            setPage(3);
            // navigate('/merchant/details/success')
          })
          .catch((err) => err);
      })
      .catch((err) => err);
  };

  return (
    <form className="text-left w-full" onSubmit={(e) => e.preventDefault()}>
      <div className="space-y-2 mb-4">
        <h1 className="text-xl font-medium text-slate">Services you offer</h1>
        <div className="h-1 w-36 bg-violet"></div>
        <p className="text-ghost text-xs">
          Let’s organise the services you offer to make it easy for students to
          enroll
        </p>
      </div>
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
      {instituteDomain.includes("Junior Secondary School (Class 6-10th)") && (
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
            errorState={[subjectsJrSchoolError, setSubjectsJrSchoolError]}
          />
        </React.Fragment>
      )}
      {instituteDomain.includes("Senior Secondary School (Class 11-12th)") && (
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
            errorState={[subjectsSrSchoolError, setSubjectsSrSchoolError]}
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
            selectedState={[fieldsCompetitiveExams, setFieldsCompetitiveExams]}
            placeholderText="Select your field"
            errorState={[
              fieldsCompetitiveExamsError,
              setFieldsCompetitiveExamsError,
            ]}
          />
          <CategorySelect
            categories={getExamsFromFields(fieldsCompetitiveExams)}
            selectedState={[examsCompetitiveExams, setExamsCompetitiveExams]}
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
          <h2 className="text-lg font-medium text-slate my-4">Graduation</h2>
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
            errorState={[graduationFieldsError, setGraduationFieldsError]}
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
            selectedState={[postGraduationFields, setPostGraduationFields]}
            placeholderText="Select Field "
            errorState={[
              postGraduationFieldsError,
              setPostGraduationFieldsError,
            ]}
          />
        </React.Fragment>
      )}

      <div className="w-full flex items-center justify-center">
        <button
          onClick={(e) => handleSave(e)}
          className="my-2 transition-all hover:-translate-y-1 border-2 bg-[#9766CD] shadow-md hover:shadow-lg rounded-full px-10 py-3 text-white font-medium"
        >
          Save & Submit
        </button>
      </div>
    </form>
  );
};

export default CourseDetails;
