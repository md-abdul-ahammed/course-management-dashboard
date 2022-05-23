import React, { useState } from "react";

const CourseSubject = ({ subjectValues }) => {
  const [selectSubjectValues, setSelectSubjectValues] = useState([]);
  return (
    <div
      className="mt-3 h-auto px-5 rounded-lg py-3 "
      onChange={(e) => {
        if (e.target.checked) {
          selectSubjectValues.push(e.target.name);
        } else {
          selectSubjectValues.pop(e.target.checked);
        }

        window.localStorage.setItem(
          "selectSubject_Checked",
          JSON.stringify(selectSubjectValues)
        );
      }}
    >
      <div className="lg:float-left w-80">
        <div className="flex  items-center space-x-5 ">
          <input type="checkbox" name="Upper" className="text-xl" />{" "}
          <label for="Upper" className="text-xl">
            Upper Primary
          </label>
        </div>
        <div className="flex flex-col items-start py-5 space-y-3  px-10">
          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="English" className="text-xl" />{" "}
            <label for="English" className="text-lg">
              English
            </label>
          </div>
          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="Hindi" className="text-xl" />{" "}
            <label for="Hindi" className="text-lg">
              Hindi
            </label>{" "}
          </div>
          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="Maths" className="text-xl" />{" "}
            <label for="Maths" className="text-lg">
              Maths
            </label>
          </div>
          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="Science" className="text-xl" />{" "}
            <label for="Science" className="text-lg">
              Science
            </label>
          </div>

          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="Social" className="text-xl" />{" "}
            <label for="Social" className="text-lg">
              Social Studies
            </label>
          </div>
          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="Computer" className="text-xl" />{" "}
            <label for="Computer" className="text-lg">
              Computer Science
            </label>
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex  items-center space-x-5 ">
          <input type="checkbox" name="High" className="text-xl" />{" "}
          <label for="High" className="text-xl">
            High School
          </label>
        </div>
        <div className="flex flex-col items-start py-5 space-y-3  px-10">
          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="English" className="text-xl" />{" "}
            <label for="English" className="text-lg">
              English
            </label>
          </div>
          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="Hindi" className="text-xl" />{" "}
            <label for="Hindi" className="text-lg">
              Hindi
            </label>{" "}
          </div>
          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="Maths" className="text-xl" />{" "}
            <label for="Maths" className="text-lg">
              Maths
            </label>
          </div>
          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="Physics" className="text-xl" />{" "}
            <label for="Physics" className="text-lg">
              Physics
            </label>
          </div>

          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="Chemistry" className="text-xl" />{" "}
            <label for="Chemistry" className="text-lg">
              Chemistry
            </label>
          </div>
          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="Biology" className="text-xl" />{" "}
            <label for="Biology" className="text-lg">
              Biology
            </label>
          </div>
          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="Social" className="text-xl" />{" "}
            <label for="Social" className="text-lg">
              Social Studies
            </label>
          </div>
          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="Computer" className="text-xl" />{" "}
            <label for="Computer" className="text-lg">
              Computer Science
            </label>
          </div>
        </div>
      </div>
      <hr className="text-[#DDDDDD]" />

      <div className="lg:float-left w-80 py-5">
        <div className="flex  items-center space-x-5 ">
          <input type="checkbox" name="Science" className="text-xl" />{" "}
          <label for="Science" className="text-xl">
            Science
          </label>
        </div>
        <div className="flex flex-col items-start py-5 space-y-3  px-10">
          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="English" className="text-xl" />{" "}
            <label for="English" className="text-lg">
              English
            </label>
          </div>
          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="Chemistry" className="text-xl" />{" "}
            <label for="Chemistry" className="text-lg">
              Chemistry
            </label>{" "}
          </div>
          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="Physics" className="text-xl" />{" "}
            <label for="Physics" className="text-lg">
              Physics
            </label>
          </div>
          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="Biology" className="text-xl" />{" "}
            <label for="Biology" className="text-lg">
              Biology
            </label>
          </div>

          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="Maths" className="text-xl" />{" "}
            <label for="Maths" className="text-lg">
              Maths
            </label>
          </div>
          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="Botany" className="text-xl" />{" "}
            <label for="Botany" className="text-lg">
              Botany
            </label>
          </div>
          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="Zoology" className="text-xl" />{" "}
            <label for="Zoology" className="text-lg">
              Zoology
            </label>
          </div>
          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="IP" className="text-xl" />{" "}
            <label for="IP" className="text-lg">
              IP
            </label>
          </div>

          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="Computer" className="text-xl" />{" "}
            <label for="Computer" className="text-lg">
              Computer Science
            </label>
          </div>
          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="Java" className="text-xl" />{" "}
            <label for="Java" className="text-lg">
              Java
            </label>
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="flex  items-center space-x-5 ">
          <input type="checkbox" name="Commerce" className="text-xl" />{" "}
          <label for="Commerce" className="text-xl">
            Commerce
          </label>
        </div>
        <div className="flex flex-col items-start py-5 space-y-3  px-10">
          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="English" className="text-xl" />{" "}
            <label for="English" className="text-lg">
              English
            </label>
          </div>
          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="Accounts" className="text-xl" />{" "}
            <label for="Accounts" className="text-lg">
              Accounts
            </label>{" "}
          </div>
          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="Economics" className="text-xl" />{" "}
            <label for="Economics" className="text-lg">
              Economics
            </label>
          </div>
          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="Business" className="text-xl" />{" "}
            <label for="Business" className="text-lg">
              Business Studies
            </label>
          </div>

          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="Mathematics" className="text-xl" />{" "}
            <label for="Mathematics" className="text-lg">
              Mathematics
            </label>
          </div>
          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="Statistics" className="text-xl" />{" "}
            <label for="Statistics" className="text-lg">
              Statistics
            </label>
          </div>
          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="IP" className="text-xl" />{" "}
            <label for="IP" className="text-lg">
              IP
            </label>
          </div>
          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="Computer" className="text-xl" />{" "}
            <label for="Computer" className="text-lg">
              Computer Science
            </label>
          </div>
          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="Java" className="text-xl" />{" "}
            <label for="Java" className="text-lg">
              Java
            </label>
          </div>
        </div>
      </div>

      <hr className="text-[#DDDDDD] w-full" />

      <div className="lg:float-left w-80 py-5">
        <div className="flex  items-center space-x-5 ">
          <input type="checkbox" name="Arts/Humanities" className="text-xl" />{" "}
          <label for="Arts/Humanities" className="text-xl">
            Arts/Humanities
          </label>
        </div>
        <div className="flex flex-col items-start py-5 space-y-3  px-10">
          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="Economics" className="text-xl" />{" "}
            <label for="Economics" className="text-lg">
              Economics
            </label>
          </div>
          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="History" className="text-xl" />{" "}
            <label for="History" className="text-lg">
              History
            </label>{" "}
          </div>
          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="Geography" className="text-xl" />{" "}
            <label for="Geography" className="text-lg">
              Geography
            </label>
          </div>
          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="Philosophy" className="text-xl" />{" "}
            <label for="Philosophy" className="text-lg">
              Philosophy
            </label>
          </div>

          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="Sociology" className="text-xl" />{" "}
            <label for="Sociology" className="text-lg">
              Sociology
            </label>
          </div>
          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="Anthropology" className="text-xl" />{" "}
            <label for="Anthropology" className="text-lg">
              Anthropology
            </label>
          </div>
          <div className="flex items-center space-x-5 ">
            <input
              type="checkbox"
              name="Political Science"
              className="text-xl"
            />{" "}
            <label for="Political Science" className="text-lg">
              Political Science
            </label>
          </div>
          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="Journalism" className="text-xl" />{" "}
            <label for="Journalism" className="text-lg">
              Journalism
            </label>
          </div>

          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="English" className="text-xl" />{" "}
            <label for="English" className="text-lg">
              English
            </label>
          </div>
          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="Law" className="text-xl" />{" "}
            <label for="Law" className="text-lg">
              Law
            </label>
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="flex  items-center space-x-5 ">
          <input type="checkbox" name="Commerce" className="text-xl" />{" "}
          <label for="Commerce" className="text-xl">
            Vocational
          </label>
        </div>
        <div className="flex flex-col items-start py-5 space-y-3  px-10">
          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="Banking" className="text-xl" />{" "}
            <label for="Banking" className="text-lg">
              Banking
            </label>
          </div>
          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="Accountancy" className="text-xl" />{" "}
            <label for="Accountancy" className="text-lg">
              Accountancy & Auditing
            </label>{" "}
          </div>
          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="Fabrication" className="text-xl" />{" "}
            <label for="Fabrication" className="text-lg">
              Fabrication Technology
            </label>
          </div>
          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="Marketing" className="text-xl" />{" "}
            <label for="Marketing" className="text-lg">
              Marketing & Salesmanship
            </label>
          </div>

          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="Horticulture" className="text-xl" />{" "}
            <label for="Horticulture" className="text-lg">
              Horticulture
            </label>
          </div>
          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="Food" className="text-xl" />{" "}
            <label for="Food" className="text-lg">
              Food Service & Management
            </label>
          </div>
          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="Life" className="text-xl" />{" "}
            <label for="Life" className="text-lg">
              Life Insurance
            </label>
          </div>
          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="Library" className="text-xl" />{" "}
            <label for="Library" className="text-lg">
              Library Management
            </label>
          </div>
          <div className="flex items-center space-x-5 ">
            <input type="checkbox" name="Financial" className="text-xl" />{" "}
            <label for="Financial" className="text-lg">
              Financial Market Management
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSubject;
