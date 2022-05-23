import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Engineering = () => {
  const [isDropDown21, setIsDropDown21] = useState(false);
  const [isDropDown12, setIsDropDown12] = useState(false);
  return (
    <div
      className="lg:flex lg:py-5 gap-3 "
      onChange={(e) => {
        console.log(e);
        //   if (e.target.checked) {
        //     selectEnggExam.push(e.target.name);
        //   } else {
        //     selectEnggExam.pop(e.target.checked);
        //   }
        //   console.log(selectEnggExam);

        //   window.localStorage.setItem(
        //     "selectEngg_Checked",
        //     JSON.stringify(selectEnggExam)
        //   );
      }}
    >
      <div className="relative">
        <div
          className="flex items-center  lg:w-52  rounded-lg text-lg px-3 py-2 border cursor-pointer "
          onClick={() => {
            setIsDropDown21(!isDropDown21);
            setIsDropDown12(false);
          }}
        >
          <input
            type="text"
            className="text-slate px-8 focus:outline-none cursor-pointer  lg:w-32 bg-white"
            placeholder="Exam"
            disabled
          />
          <MdKeyboardArrowDown
            className={`text-2xl ${isDropDown21 ? "hidden" : "flex"}`}
          />
          <MdKeyboardArrowUp
            className={`text-2xl ${isDropDown21 ? "flex" : "hidden"}`}
          />
        </div>
        <div className="block lg:absolute ">
          {isDropDown21 && (
            <div
              className="bg-white w-full m-auto rounded-lg  py-3 flex-col text-[#939393] px-5 space-y-5"
              style={{
                boxShadow: "0px 2px 40px rgba(125, 35, 224, 0.15)"
              }}
            >
              <div className="flex items-center space-x-3">
                <input type="checkbox" name="JEE" className="text-xl" />{" "}
                <label for="JEE" className="text-xl">
                  JEE Mains
                </label>
              </div>
              <div className="flex items-center space-x-3">
                <input type="checkbox" name="Advanced" className="text-xl" />{" "}
                <label for="Advanced" className="text-xl">
                  JEE Advanced
                </label>
              </div>
              <div className="flex items-center space-x-3">
                <input type="checkbox" name="GATE" className="text-xl" />{" "}
                <label for="GATE" className="text-xl">
                  GATE
                </label>
              </div>
              <div className="flex items-center space-x-3">
                <input type="checkbox" name="NATA" className="text-xl" />{" "}
                <label for="NATA" className="text-xl">
                  NATA
                </label>
              </div>
              <div className="flex items-center space-x-3">
                <input type="checkbox" name="DUET" className="text-xl" />{" "}
                <label for="DUET" className="text-xl">
                  DUET
                </label>
              </div>
              <div className="flex items-center space-x-3">
                <input type="checkbox" name="AMET" className="text-xl" />{" "}
                <label for="AMET" className="text-xl">
                  AMET
                </label>
              </div>
              <div className="flex items-center space-x-3">
                <input type="checkbox" name="CIPET" className="text-xl" />{" "}
                <label for="CIPET" className="text-xl">
                  CIPET JEE
                </label>
              </div>
              <div className="flex items-center space-x-3">
                <input type="checkbox" name="IMU" className="text-xl" />{" "}
                <label for="IMU" className="text-xl">
                  IMU CET
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Engineering;
