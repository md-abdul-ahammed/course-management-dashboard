import React, { useState, useEffect } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export const CategorySideNav = ({ categoryState, dropDownClose }) => {
  const [isDropDown3, setIsDropDown3] = dropDownClose;
  const [categoryCheck, setCategoryCheck] = useState([]);
  const [isExpand1, setIsExpand1] = useState(false);
  const [isExpand2, setIsExpand2] = useState(false);
  const [isExpand3, setIsExpand3] = useState(false);
  const [isExpand4, setIsExpand4] = useState(false);
  const [isExpand5, setIsExpand5] = useState(false);
  const [isExpand6, setIsExpand6] = useState(false);
  const [isExpand7, setIsExpand7] = useState(false);

  const [categorySelected, setCategorySelected] = categoryState;

  return (
    <>
      <div className="lg:flex hidden bg-white rounded-xl shadow-lg ">
        <div
          className="space-y-7 py-4 w-full lg:w-60 flex flex-col cursor-pointer px-5 lg:px-0 lg:items-center text-[#757575]"
          style={{ backgroundColor: "rgba(226, 206, 248, 0.2)" }}
        >
          <h1
            className="text-xl"
            onClick={() => {
              setIsExpand7(false);
              setIsExpand6(false);
              setIsExpand5(false);
              setIsExpand4(false);
              setIsExpand3(false);
              setIsExpand2(false);
              setIsExpand1(false);
              setIsExpand6(false);
              setCategorySelected("Academics");
              setIsDropDown3(!isDropDown3);
            }}
          >
            Academics
          </h1>
          <h1
            className="text-xl"
            onClick={() => {
              setIsExpand7(false);
              setIsExpand6(false);
              setIsExpand5(false);
              setIsExpand4(false);
              setIsExpand3(false);
              setIsExpand2(false);
              setIsExpand1(false);
              setIsExpand6(false);
              setCategorySelected("Engineering");
              setIsDropDown3(!isDropDown3);
            }}
          >
            Engineering
          </h1>
          <h1
            className="text-xl"
            onClick={() => {
              setIsExpand7(false);
              setIsExpand6(false);
              setIsExpand5(false);
              setIsExpand4(false);
              setIsExpand3(false);
              setIsExpand2(false);
              setIsExpand1(false);
              setIsExpand6(false);
              setCategorySelected("Medical");
              setIsDropDown3(!isDropDown3);
            }}
          >
            Medical
          </h1>

          <h1
            className="text-xl"
            onClick={() => {
              setIsExpand1(false);
              setIsExpand2(false);
              setIsExpand3(false);
              setIsExpand4(false);
              setIsExpand5(false);
              setIsExpand6(false);
              setIsExpand7(false);
              setCategorySelected("Graduation");
            }}
          >
            Graduation
          </h1>
          <h1
            className="text-xl"
            onClick={() => {
              setIsExpand1(false);
              setIsExpand2(false);
              setIsExpand3(false);
              setIsExpand4(false);
              setIsExpand5(false);
              setIsExpand6(false);
              setIsExpand7(false);
              setCategorySelected("Post Graduation");
            }}
          >
            Post Graduation
          </h1>
          <h1
            className="text-xl"
            onClick={() => {
              setIsExpand1(true);
              setIsExpand2(false);
              setIsExpand3(false);
              setIsExpand4(false);
              setIsExpand5(false);
              setIsExpand6(false);
              setIsExpand7(false);
              setCategorySelected("Photography");
            }}
          >
            Photography
          </h1>

          <h1
            className="text-xl"
            onClick={() => {
              setIsExpand2(true);
              setIsExpand3(false);
              setIsExpand1(false);
              setIsExpand4(false);
              setIsExpand5(false);
              setIsExpand6(false);
              setIsExpand7(false);
              setCategorySelected("Business");
            }}
          >
            Business
          </h1>
          <h1
            className="text-xl"
            onClick={() => {
              setIsExpand3(true);
              setIsExpand2(false);
              setIsExpand1(false);
              setIsExpand4(false);
              setIsExpand5(false);
              setIsExpand6(false);
              setIsExpand7(false);
              setCategorySelected("IT & Software");
            }}
          >
            IT & Software
          </h1>
          <h1
            className="text-xl"
            onClick={() => {
              setIsExpand4(true);
              setIsExpand3(false);
              setIsExpand2(false);
              setIsExpand1(false);
              setIsExpand5(false);
              setIsExpand6(false);
              setIsExpand7(false);
              setCategorySelected("Design");
            }}
          >
            Design
          </h1>
          <h1
            className="text-xl"
            onClick={() => {
              setIsExpand5(true);
              setIsExpand4(false);
              setIsExpand3(false);
              setIsExpand2(false);
              setIsExpand1(false);
              setIsExpand6(false);
              setIsExpand7(false);
              setCategorySelected("Marketing");
            }}
          >
            Marketing
          </h1>
          <h1
            className="text-xl"
            onClick={() => {
              setIsExpand6(true);
              setIsExpand5(false);
              setIsExpand4(false);
              setIsExpand3(false);
              setIsExpand2(false);
              setIsExpand1(false);
              setIsExpand7(false);
              setCategorySelected("Development");
            }}
          >
            Development
          </h1>
          <h1
            className="text-xl"
            onClick={() => {
              setIsExpand7(true);
              setIsExpand6(false);
              setIsExpand5(false);
              setIsExpand4(false);
              setIsExpand3(false);
              setIsExpand2(false);
              setIsExpand1(false);
              setCategorySelected("Other Skills");
              setIsExpand6(false);
            }}
          >
            Other Skills
          </h1>
        </div>

        {isExpand1 && <PhotographyDropDown />}
        {isExpand2 && <BusinessDropDown />}
        {isExpand3 && <ItDropDown />}
        {isExpand4 && <DesignDropDown />}
        {isExpand5 && <MarketingDropDown />}
        {isExpand6 && <DevelopmentDropDown />}
        {isExpand7 && <OtherSkillsDropDown />}
      </div>

      {/*  Mobile DropDown */}

      <div className=" lg:hidden ">
        <div
          className="space-y-7 py-4 w-full flex flex-col cursor-pointer px-5 lg:px-0 lg:items-center text-[#757575]"
          style={{ backgroundColor: "rgba(226, 206, 248, 0.2)" }}
        >
          <h1
            className="text-xl"
            onClick={() => {
              setIsExpand7(false);
              setIsExpand6(false);
              setIsExpand5(false);
              setIsExpand4(false);
              setIsExpand3(false);
              setIsExpand2(false);
              setIsExpand1(false);
              setIsExpand6(false);
              setCategorySelected("Academics");
              setIsDropDown3(!isDropDown3);
            }}
          >
            Academics
          </h1>

          <h1
            className="text-xl"
            onClick={() => {
              setIsExpand7(false);
              setIsExpand6(false);
              setIsExpand5(false);
              setIsExpand4(false);
              setIsExpand3(false);
              setIsExpand2(false);
              setIsExpand1(false);
              setIsExpand6(false);
              setCategorySelected("Engineering");
              setIsDropDown3(!isDropDown3);
            }}
          >
            Engineering
          </h1>
          <h1
            className="text-xl"
            onClick={() => {
              setIsExpand7(false);
              setIsExpand6(false);
              setIsExpand5(false);
              setIsExpand4(false);
              setIsExpand3(false);
              setIsExpand2(false);
              setIsExpand1(false);
              setIsExpand6(false);
              setCategorySelected("Medical");
              setIsDropDown3(!isDropDown3);
            }}
          >
            Medical
          </h1>

          <div
            className="flex"
            onClick={() => {
              setIsExpand1(!isExpand1);
              setIsExpand2(false);
              setIsExpand3(false);
              setIsExpand4(false);
              setIsExpand5(false);
              setIsExpand6(false);
              setIsExpand7(false);
              setCategorySelected("Photography");
            }}
          >
            <h1 className="text-xl">Photography</h1>
            <MdKeyboardArrowDown
              className={`text-2xl ${isExpand1 ? "hidden" : "flex"} ml-auto`}
            />
            <MdKeyboardArrowUp
              className={`text-2xl ${isExpand1 ? "flex" : "hidden"} ml-auto`}
            />{" "}
          </div>
          {isExpand1 && <PhotographyDropDown />}

          <div
            className="flex"
            onClick={() => {
              setIsExpand1(false);
              setIsExpand2(!isExpand2);
              setIsExpand3(false);
              setIsExpand4(false);
              setIsExpand5(false);
              setIsExpand6(false);
              setIsExpand7(false);
              setCategorySelected("Business");
            }}
          >
            {" "}
            <h1 className="text-xl">Business</h1>
            <MdKeyboardArrowDown
              className={`text-2xl ${isExpand2 ? "hidden" : "flex"} ml-auto`}
            />
            <MdKeyboardArrowUp
              className={`text-2xl ${isExpand2 ? "flex" : "hidden"} ml-auto`}
            />{" "}
          </div>
          {isExpand2 && <BusinessDropDown />}

          <div
            className="flex"
            onClick={() => {
              setIsExpand1(false);
              setIsExpand2(false);
              setIsExpand3(!isExpand3);
              setIsExpand4(false);
              setIsExpand5(false);
              setIsExpand6(false);
              setIsExpand7(false);
              setCategorySelected("IT & Software");
            }}
          >
            {" "}
            <h1 className="text-xl">IT & Software</h1>
            <MdKeyboardArrowDown
              className={`text-2xl ${isExpand3 ? "hidden" : "flex"} ml-auto`}
            />
            <MdKeyboardArrowUp
              className={`text-2xl ${isExpand3 ? "flex" : "hidden"} ml-auto`}
            />{" "}
          </div>

          {isExpand3 && <ItDropDown />}

          <div
            className="flex"
            onClick={() => {
              setIsExpand1(false);
              setIsExpand2(false);
              setIsExpand3(false);
              setIsExpand4(!isExpand4);
              setIsExpand5(false);
              setIsExpand6(false);
              setIsExpand7(false);
              setCategorySelected("Design");
            }}
          >
            {" "}
            <h1 className="text-xl">Design</h1>
            <MdKeyboardArrowDown
              className={`text-2xl ${isExpand4 ? "hidden" : "flex"} ml-auto`}
            />
            <MdKeyboardArrowUp
              className={`text-2xl ${isExpand4 ? "flex" : "hidden"} ml-auto`}
            />{" "}
          </div>
          {isExpand4 && <DesignDropDown />}

          <div
            className="flex"
            onClick={() => {
              setIsExpand1(false);
              setIsExpand2(false);
              setIsExpand3(false);
              setIsExpand4(false);
              setIsExpand5(!isExpand5);
              setIsExpand6(false);
              setIsExpand7(false);
              setCategorySelected("Marketing");
            }}
          >
            <h1 className="text-xl">Marketing</h1>
            <MdKeyboardArrowDown
              className={`text-2xl ${isExpand5 ? "hidden" : "flex"} ml-auto`}
            />
            <MdKeyboardArrowUp
              className={`text-2xl ${isExpand5 ? "flex" : "hidden"} ml-auto`}
            />{" "}
          </div>
          {isExpand5 && <MarketingDropDown />}

          <div
            className="flex"
            onClick={() => {
              setIsExpand1(false);
              setIsExpand2(false);
              setIsExpand3(false);
              setIsExpand4(false);
              setIsExpand5(false);
              setIsExpand6(!isExpand6);
              setIsExpand7(false);
              setCategorySelected("Development");
            }}
          >
            {" "}
            <h1 className="text-xl">Development</h1>
            <MdKeyboardArrowDown
              className={`text-2xl ${isExpand6 ? "hidden" : "flex"} ml-auto`}
            />
            <MdKeyboardArrowUp
              className={`text-2xl ${isExpand6 ? "flex" : "hidden"} ml-auto`}
            />{" "}
          </div>
          {isExpand6 && <DevelopmentDropDown />}

          <div
            className="flex"
            onClick={() => {
              setIsExpand1(false);
              setIsExpand2(false);
              setIsExpand3(false);
              setIsExpand4(false);
              setIsExpand5(false);
              setIsExpand6(false);
              setIsExpand7(!isExpand7);
              setCategorySelected("Other Skills");
            }}
          >
            {" "}
            <h1 className="text-xl">Other Skills</h1>
            <MdKeyboardArrowDown
              className={`text-2xl ${isExpand7 ? "hidden" : "flex"} ml-auto`}
            />
            <MdKeyboardArrowUp
              className={`text-2xl ${isExpand7 ? "flex" : "hidden"} ml-auto`}
            />{" "}
          </div>
          {isExpand7 && <OtherSkillsDropDown />}
        </div>
      </div>
    </>
  );
};

// Dropdowns

export const PhotographyDropDown = ({}) => {
  const handleChange = (e) => {
    const { name, checked } = e.target;
    console.log(name, checked);
  };

  const [photographyCheckValue, setPhotographyCheckValue] = useState([]);

  console.log(photographyCheckValue);
  return (
    <div
      className="bg-white px-5 py-3 text-[#939393] space-y-5"
      onChange={(e) => {
        console.log(e);
        if (e.target.checked) {
          photographyCheckValue.push(e.target.name);
        } else {
          photographyCheckValue.pop(e.target.checked);
        }
        console.log(photographyCheckValue);

        window.localStorage.setItem(
          "Photography_Checked",
          JSON.stringify(photographyCheckValue)
        );
      }}
    >
      <div className="flex items-center space-x-3">
        <input type="checkbox" name="Digital" className="text-lg lg:text-xl" />{" "}
        <label for="Digital" className="text-lg lg:text-xl">
          Digital Photography
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          name="Landscape"
          className="text-lg lg:text-xl"
        />{" "}
        <label for="Landscape" className="text-lg lg:text-xl">
          Landscape Photography
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <input type="checkbox" name="Portrait" className="text-lg lg:text-xl" />{" "}
        <label for="Portrait" className="text-lg lg:text-xl">
          Portrait Photography
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          name="Commercial"
          className="text-lg lg:text-xl"
        />{" "}
        <label for="Commercial" className="text-lg lg:text-xl">
          Commercial Photography
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <input type="checkbox" name="Video" className="text-lg lg:text-xl" />{" "}
        <label for="Video" className="text-lg lg:text-xl">
          Video Editing
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <input type="checkbox" name="Photo" className="text-lg lg:text-xl" />{" "}
        <label for="Photo" className="text-lg lg:text-xl">
          Photo Editing
        </label>
      </div>
    </div>
  );
};

export const BusinessDropDown = () => {
  const [businessValues, setBusinessValues] = useState([]);
  const handleChange = (e) => {
    const { name, checked } = e.target;
    console.log(name, checked);
  };

  return (
    <div
      className="bg-white px-5 py-3 text-[#939393] space-y-5"
      onChange={(e) => {
        console.log(e);
        if (e.target.checked) {
          businessValues.push(e.target.name);
        } else {
          businessValues.pop(e.target.checked);
        }
        console.log(businessValues);

        window.localStorage.setItem(
          "Business_Checked",
          JSON.stringify(businessValues)
        );
      }}
    >
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          id="Digital"
          name="Management"
          className="text-lg lg:text-xl"
        />{" "}
        <label for="Management" className="text-lg lg:text-xl">
          {" "}
          Management
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <input type="checkbox" name="Business" className="text-lg lg:text-xl" />{" "}
        <label for="Business" className="text-lg lg:text-xl">
          Business Strategy
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          name="Operations"
          className="text-lg lg:text-xl"
        />{" "}
        <label for="Operations" className="text-lg lg:text-xl">
          Operations
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <input type="checkbox" name="Human" className="text-lg lg:text-xl" />{" "}
        <label for="Human" className="text-lg lg:text-xl">
          Human Resources
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <input type="checkbox" name="Business" className="text-lg lg:text-xl" />{" "}
        <label for="Business" className="text-lg lg:text-xl">
          Business Law
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          name="E-commerce"
          className="text-lg lg:text-xl"
        />{" "}
        <label for="E-commerce" className="text-lg lg:text-xl">
          E-commerce
        </label>
      </div>
    </div>
  );
};

export const ItDropDown = () => {
  const [itcheckValues, setItcheckValues] = useState([]);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    console.log(name, checked);
  };

  return (
    <div
      className="bg-white px-5 py-3 text-[#939393] space-y-5"
      onChange={(e) => {
        console.log(e);
        if (e.target.checked) {
          itcheckValues.push(e.target.name);
        } else {
          itcheckValues.pop(e.target.checked);
        }
        console.log(itcheckValues);

        window.localStorage.setItem(
          "It_Checked",
          JSON.stringify(itcheckValues)
        );
      }}
    >
      <div className="flex items-center space-x-3">
        <input type="checkbox" name="It" className="text-lg lg:text-xl" />{" "}
        <label for="It" className="text-lg lg:text-xl">
          {" "}
          IT Certifications
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <input type="checkbox" name="Network" className="text-lg lg:text-xl" />{" "}
        <label for="Network" className="text-lg lg:text-xl">
          Network & Security
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <input type="checkbox" name="Hardware" className="text-lg lg:text-xl" />{" "}
        <label for="Hardware" className="text-lg lg:text-xl">
          Hardware
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <input type="checkbox" name="OS" className="text-lg lg:text-xl" />{" "}
        <label for="OS" className="text-lg lg:text-xl">
          OS & Servers
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <input type="checkbox" name="Others" className="text-lg lg:text-xl" />{" "}
        <label for="Others" className="text-lg lg:text-xl">
          Others
        </label>
      </div>
    </div>
  );
};

export const DesignDropDown = () => {
  const [designCheckValue, setDesignCheckValue] = useState([]);

  return (
    <div
      className="bg-white px-5 py-3 text-[#939393] space-y-5"
      onChange={(e) => {
        console.log(e);
        if (e.target.checked) {
          designCheckValue.push(e.target.name);
        } else {
          designCheckValue.pop(e.target.checked);
        }
        console.log(designCheckValue);

        window.localStorage.setItem(
          "Design_Checked",
          JSON.stringify(designCheckValue)
        );
      }}
    >
      <div className="flex items-center space-x-3">
        <input type="checkbox" name="Graphic" className="text-lg lg:text-xl" />{" "}
        <label for="Graphic" className="text-lg lg:text-xl">
          {" "}
          Graphic Design{" "}
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <input type="checkbox" name="UX" className="text-lg lg:text-xl" />{" "}
        <label for="UX" className="text-lg lg:text-xl">
          UX Design
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <input type="checkbox" name="Interior" className="text-lg lg:text-xl" />{" "}
        <label for="Interior" className="text-lg lg:text-xl">
          Interior Design
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <input type="checkbox" name="Fashion" className="text-lg lg:text-xl" />{" "}
        <label for="Fashion" className="text-lg lg:text-xl">
          Fashion Design
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          name="Architectural"
          className="text-lg lg:text-xl"
        />{" "}
        <label for="Architectural" className="text-lg lg:text-xl">
          Architectural Design
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <input type="checkbox" name="Web" className="text-lg lg:text-xl" />{" "}
        <label for="Web" className="text-lg lg:text-xl">
          Web Design
        </label>
      </div>
    </div>
  );
};

export const MarketingDropDown = () => {
  const [markerCheckValues, setMarkerCheckValues] = useState([]);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    console.log(name, checked);
  };
  return (
    <div
      className="bg-white px-5 py-3 text-[#939393] space-y-5"
      onChange={(e) => {
        console.log(e);
        if (e.target.checked) {
          markerCheckValues.push(e.target.name);
        } else {
          markerCheckValues.pop(e.target.checked);
        }
        console.log(markerCheckValues);

        window.localStorage.setItem(
          "Market_Checked",
          JSON.stringify(markerCheckValues)
        );
      }}
    >
      <div className="flex items-center space-x-3">
        <input type="checkbox" name="Digital" className="text-lg lg:text-xl" />{" "}
        <label for="Digital" className="text-lg lg:text-xl">
          {" "}
          Digital Marketing{" "}
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <input type="checkbox" name="Branding" className="text-lg lg:text-xl" />{" "}
        <label for="Branding" className="text-lg lg:text-xl">
          Branding
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <input type="checkbox" name="Public" className="text-lg lg:text-xl" />{" "}
        <label for="Public" className="text-lg lg:text-xl">
          Public Relations
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <input type="checkbox" name="Product" className="text-lg lg:text-xl" />{" "}
        <label for="Product" className="text-lg lg:text-xl">
          Product Marketing
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          name="Marketing"
          className="text-lg lg:text-xl"
        />{" "}
        <label for="Marketing" className="text-lg lg:text-xl">
          Marketing Fundamentals
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <input type="checkbox" name="Content" className="text-lg lg:text-xl" />{" "}
        <label for="Content" className="text-lg lg:text-xl">
          Content Marketing
        </label>
      </div>
    </div>
  );
};

export const DevelopmentDropDown = () => {
  const [developmentCheckValues, setDevelopmentCheckValues] = useState([]);
  const handleChange = (e) => {
    const { name, checked } = e.target;
    console.log(name, checked);
  };

  return (
    <div
      className="bg-white px-5 py-3 text-[#939393] space-y-5"
      onChange={(e) => {
        console.log(e);
        if (e.target.checked) {
          developmentCheckValues.push(e.target.name);
        } else {
          developmentCheckValues.pop(e.target.checked);
        }
        console.log(developmentCheckValues);

        window.localStorage.setItem(
          "Development_Checked",
          JSON.stringify(developmentCheckValues)
        );
      }}
    >
      <div className="flex items-center space-x-3">
        <input type="checkbox" name="Web" className="text-lg lg:text-xl" />{" "}
        <label for="Web" className="text-lg lg:text-xl">
          {" "}
          Web Development{" "}
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <input type="checkbox" name="Data" className="text-lg lg:text-xl" />{" "}
        <label for="Data" className="text-lg lg:text-xl">
          Data Science
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          name="Programming"
          className="text-lg lg:text-xl"
        />{" "}
        <label for="Programming" className="text-lg lg:text-xl">
          Programming Languages
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <input type="checkbox" name="Game" className="text-lg lg:text-xl" />{" "}
        <label for="Game" className="text-lg lg:text-xl">
          Game Development
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <input type="checkbox" name="No-code" className="text-lg lg:text-xl" />{" "}
        <label for="No-code" className="text-lg lg:text-xl">
          No-code Development
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <input type="checkbox" name="Content" className="text-lg lg:text-xl" />{" "}
        <label for="Content" className="text-lg lg:text-xl">
          Mobile Development
        </label>
      </div>
    </div>
  );
};

export const OtherSkillsDropDown = () => {
  const [otherSkillsCheckValues, setOtherSkillsCheckValues] = useState([]);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    console.log(name, checked);
  };

  return (
    <div
      className="bg-white px-5 py-3 text-[#939393] space-y-5"
      onChange={(e) => {
        console.log(e);
        if (e.target.checked) {
          otherSkillsCheckValues.push(e.target.name);
        } else {
          otherSkillsCheckValues.pop(e.target.checked);
        }
        console.log(otherSkillsCheckValues);

        window.localStorage.setItem(
          "OtherSkills_Checked",
          JSON.stringify(otherSkillsCheckValues)
        );
      }}
    >
      <div className="flex items-center space-x-3">
        <input type="checkbox" name="Finance" className="text-lg lg:text-xl" />{" "}
        <label for="Finance" className="text-lg lg:text-xl">
          {" "}
          Finance & Accounting{" "}
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <input type="checkbox" name="Personal" className="text-lg lg:text-xl" />{" "}
        <label for="Personal" className="text-lg lg:text-xl">
          Personal Development
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          name="Lifestyle"
          className="text-lg lg:text-xl"
        />{" "}
        <label for="Lifestyle" className="text-lg lg:text-xl">
          Lifestyle
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <input type="checkbox" name="Health" className="text-lg lg:text-xl" />{" "}
        <label for="Health" className="text-lg lg:text-xl">
          Health & Fitness
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <input type="checkbox" name="Music" className="text-lg lg:text-xl" />{" "}
        <label for="Music" className="text-lg lg:text-xl">
          Music
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <input type="checkbox" name="Language" className="text-lg lg:text-xl" />{" "}
        <label for="Language" className="text-lg lg:text-xl">
          Language Learning
        </label>
      </div>
    </div>
  );
};
