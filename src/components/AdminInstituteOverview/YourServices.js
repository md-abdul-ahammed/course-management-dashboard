import React, { useState } from "react";
import CategorySelect from "../../components/CategorySelect";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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

const YourServices = () => {
  const [aadharfile, setaadharFile] = useState(null);
  const [addressfile, setaddressfile] = useState(null);
  const [registrationfile, setregistrationfile] = useState(null);
  const { adminSingleInstitute } = useSelector(
    (state) => state.adminInstitutes
  );

  const { services } = adminSingleInstitute;

  const {
    boardsSrSchool: defaultBoardsSrSchool,
    instituteDomain: defaultInstituteDomain,
    boardsJrSchool: defaultBoardsJrSchool,
    classesJrSchool: defaultClassesJrSchool,
    subjectsJrSchool: defaultSubjectsJrSchool,
    streamsSrSchool: defaultStreamsSrSchool,
    subjectsSrSchool: defaultSubjectsSrSchool,
    fieldsCompetitiveExams: defaultFieldsCompetitiveExams,
    examsCompetitiveExams: defaultExamsCompetitiveExams,
    skills: defaultSkills,
    majors: defaultMajors,
    graduationFields: defaultGraduationFields,
    postMajors: defaultPostMajors,
    postGraduationFields: defaultPostGraduationFields,
  } = JSON.parse(services);

  const initialMerchantDetails = {
    page2: {
      instituteDomain: [...defaultInstituteDomain],
      boardsJrSchool: [...defaultBoardsJrSchool],
      classesJrSchool: [...defaultClassesJrSchool],
      subjectsJrSchool: [...defaultSubjectsJrSchool],
      boardsSrSchool: [...defaultBoardsSrSchool],
      streamsSrSchool: [...defaultStreamsSrSchool],
      subjectsSrSchool: [...defaultSubjectsSrSchool],
      fieldsCompetitiveExams: [...defaultFieldsCompetitiveExams],
      examsCompetitiveExams: [...defaultExamsCompetitiveExams],
      skills: [...defaultSkills],
      majors: [...defaultMajors],
      graduationFields: [...defaultGraduationFields],
      postMajors: [...defaultPostMajors],
      postGraduationFields: [...defaultPostGraduationFields],
    },
  };

  const [merchantDetails, setMerchantDetails] = useState(
    initialMerchantDetails
  );

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
  const navigate = useNavigate();

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

  return (
    <div className="text-left w-full">
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
    </div>
  );
};

export default YourServices;
