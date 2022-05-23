import React, { useState, useEffect } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  addCoursePrice,
  addCourseSelector
} from "../../redux/slices/AddCourseSlice";

const CoursePriceAndCoupens = ({ proceedState4 }) => {
  // const { coursePrice } = useSelector(addCourseSelector)(
  //   "coursePrice from redux",
  //   coursePrice
  // );
  const [proceed5, setProceed5] = proceedState4;
  const [isDropDown1, setIsDropDown1] = useState(false);

  const [grossPrice, setGrossPrice] = useState("");
  const [discPrice, setDiscPrice] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [effPrice, setEffPrice] = useState("");
  const [emiPrice, setEmiPrice] = useState("");

  const [grossPriceError, setGrossPriceError] = useState("");
  const [discPriceError, setDiscPriceError] = useState("");
  const [minPriceError, setMinPriceError] = useState("");
  const [effPriceError, setEffPriceError] = useState("");
  const [emiPriceError, setEmiPriceError] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    let grossValue = window.localStorage.getItem("gross_price");
    let discValue = window.localStorage.getItem("Disc_price");
    let minValue = window.localStorage.getItem("min_price");
    let effValue = window.localStorage.getItem("eff_price");
    let emiValue = window.localStorage.getItem("emi_price");

    setGrossPrice(grossValue);
    setDiscPrice(discValue);
    setMinPrice(minValue);
    setEffPrice(effValue);
    setEmiPrice(emiValue)
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let grossPriceValue = e.target[0].value;
    let discPriceValue = e.target[1].value;
    let minimumPriceValue = e.target[2].value;
    let effectivePriceValue = e.target[3].value(e);
    let emiPriceValue = e.target[0].value;

    if (grossPriceValue === "") {
      setGrossPriceError("GrossPrice is required");
    } else {
      setGrossPriceError("");
      window.localStorage.setItem("gross_price", grossPriceValue);
    }

    if (emiPriceValue === "") {
      setEmiPriceError("GrossPrice is required");
    } else {
      setEmiPriceError("");
      window.localStorage.setItem("emi_price", emiPriceValue);
    }

    if (discPriceValue === "") {
      setDiscPriceError("Discount Price is required");
    } else {
      setDiscPriceError("");
      window.localStorage.setItem("Disc_price", discPriceValue);
    }
    if (minimumPriceValue === "") {
      setMinPriceError("Minimum  Price is required");
    } else {
      setMinPriceError("");
      window.localStorage.setItem("min_price", minimumPriceValue);
    }
    if (effectivePriceValue === "") {
      setEffPriceError("Effective Price is required");
    } else {
      setEffPriceError("");
      window.localStorage.setItem("eff_price", effectivePriceValue);
    }
    if (
      effectivePriceValue === "" ||
      minimumPriceValue === "" ||
      discPriceValue === "" ||
      grossPriceValue === "" ||
      emiPriceValue === ""
    ) {
      alert("Please fill all the fields");
    } else {
      setProceed5(true);
      dispatch(
        addCoursePrice({
          grossPriceValue,
          minimumPriceValue,
          discPriceValue,
          effectivePriceValue,
          emiPriceValue
        })
      );
    }
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="bg-white rounded-lg lg:p-8 my-5 lg:w-11/12  lg:mr-20"
    >
      <h1 className="text-2xl w-full space-x-2 hidden lg:flex items-center  py-4 pb-2  font-dm-sans font-bold">
        Set a price
      </h1>
      
      <div className="flex flex-col lg:flex-row gap-5 mb-5 lg:mb-0 lg:gap-16 mt-5">
      <div>
      <h1 className="text-[#A8A8A8] pb-3">Gross Price *</h1>
      <div
        className={` px-4 py-2 mb-3 lg:w-44 rounded-lg text-base items-center font-normal text-slate flex bg-clip-padding bg-no-repeat border-2 border-solid ${
          grossPriceError.length > 0 ? "border-red " : "border-[#A4A4A4]  "
        } first-letter:transition ease-in-out m-0`}
      >
        <p className="border-r px-2 lg:px-1">Rs. </p>
        <input
          type="text"
          className="text-slate text-lg px-3 bg-transparent  placeholder-ghost w-full focus:outline-none"
          defaultValue={grossPrice}
          placeholder="0000"
        />
      </div>
      <h1 className="text-violet pb-4 text-sm">
        *The base price of the course
      </h1>
      </div>
      
      <div>
      <h1 className="text-[#A8A8A8] pb-3">Set EMI Price * (per month)</h1>
      <div
        className={` px-4 py-2 mb-3 lg:w-44 rounded-lg text-base items-center font-normal text-slate flex bg-clip-padding bg-no-repeat border-2 border-solid ${
          emiPriceError.length > 0 ? "border-red " : "border-[#A4A4A4]  "
        } first-letter:transition ease-in-out m-0`}
      >
        <p className="border-r px-2 lg:px-1">Rs. </p>
        <input
          type="text"
          className="text-slate text-lg px-3 bg-transparent  placeholder-ghost w-full focus:outline-none"
          defaultValue={emiPrice}
          placeholder="0000"
        />
      </div>
      <h1 className="text-violet pb-4 text-sm">
        *The EMI price of the user
      </h1>
      </div>
      </div>

      <h1 className="text-[#A8A8A8] pb-3">Discount Price</h1>
      <div
        className={` px-4 py-2 mb-3 lg:w-44 rounded-lg text-base items-center font-normal text-slate flex bg-clip-padding bg-no-repeat border-2 border-solid ${
          discPriceError.length > 0 ? "border-red " : "border-[#A4A4A4]  "
        }  first-letter:transition ease-in-out m-0`}
      >
        <p className="border-r px-2 lg:px-1">Rs. </p>
        <input
          type="text"
          className="text-slate text-lg px-3 bg-transparent  placeholder-ghost w-full focus:outline-none"
          defaultValue={discPrice}
          placeholder="0000"
        />
      </div>
      <h1 className="text-violet text-sm">
        *The maximum discount offered on course
      </h1>

      <div className="flex flex-col lg:flex-row gap-5 mb-5 lg:mb-0 lg:gap-16 mt-5">
        <div className="">
          <h1 className="text-[#A8A8A8] pb-3">Minimum Price</h1>
          <div
            className={` px-4 py-2 mb-3 lg:w-44 rounded-lg text-base items-center font-normal text-slate flex bg-clip-padding bg-no-repeat border-2 border-solid ${
              minPriceError.length > 0 ? "border-red " : "border-[#A4A4A4]  "
            }  first-letter:transition ease-in-out m-0`}
          >
            <p className="border-r px-2 lg:px-1">Rs. </p>
            <input
              type="text"
              className="text-slate text-lg px-3 bg-transparent  placeholder-ghost w-full focus:outline-none"
              defaultValue={minPrice}
              placeholder="0000"
            />
          </div>
          <h1 className="text-sm text-violet">
            *This is to help you get more sales
          </h1>
        </div>

        <div className="">
          <h1 className="text-[#A8A8A8] pb-3">Effective Price (Final Price)</h1>
          <div
            className={` px-4 py-2 mb-3 lg:w-44 rounded-lg text-base items-center font-normal text-slate flex bg-clip-padding bg-no-repeat border-2 border-solid ${
              effPriceError.length > 0 ? "border-red " : "border-[#A4A4A4]  "
            }  first-letter:transition ease-in-out m-0`}
          >
            <p className="border-r px-2 lg:px-1">Rs. </p>
            <input
              type="text"
              className="text-slate text-lg px-3 bg-transparent  placeholder-ghost w-full focus:outline-none"
              defaultValue={effPrice}
              placeholder="0000"
            />
          </div>
          <h1 className="text-violet text-sm">
            *The effective price after discount
          </h1>
        </div>
      </div>

      <h1 className="text-2xl w-full space-x-2 hidden lg:flex items-center  py-7   font-dm-sans font-bold">
        Add Coupons
      </h1>

      <div
        className={`border border-violet  px-3 lg:hidden rounded-lg  flex items-center my-3 ${
          isDropDown1 ? "bg-violet" : "bg-white"
        } `}
        onClick={() => [setIsDropDown1(!isDropDown1)]}
      >
        <h1
          className={`text-lg  w-full space-x-2 flex items-center  py-3  font-dm-sans font-medium ${
            isDropDown1 ? "text-white" : ""
          }`}
        >
          Add Coupons
        </h1>
        <MdKeyboardArrowDown
          className={`text-2xl ${isDropDown1 ? "hidden" : "flex"} lg:hidden`}
        />
        <MdKeyboardArrowUp
          className={`text-2xl lg:hidden ${
            isDropDown1 ? "flex text-white" : "hidden"
          }`}
        />
      </div>

      <div
        className={`${
          isDropDown1 ? "grid " : "hidden lg:grid"
        }  lg:grid-cols-2 gap-7`}
      >
        <CouponCard />
        <CouponCard />
        <CouponCard />
        <CouponCard />
        <CouponCard />
        <CouponCard />
      </div>
      <div className="hidden lg:flex py-5 justify-end">
        <button className="text-white bg-violet w-44 py-3 rounded-lg ">
          Save and Continue
        </button>
      </div>
    </form>
  );
};

export default CoursePriceAndCoupens;

export const CouponCard = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      className={` px-4 py-2   rounded-lg text-base items-center font-normal text-slate  bg-clip-padding bg-no-repeat border ${
        isSelected ? "bg-violet border-violet" : "border-[#A4A4A4] bg-white "
      }  first-letter:transition ease-in-out m-0`}
      onClick={() => {
        setIsSelected(!isSelected);
      }}
    >
      <div className="">
        <h1
          className={`${isSelected ? "text-white" : ""} text-2xl font-medium`}
        >
          Freshers
        </h1>
        <h1
          className={`${
            isSelected ? "text-white" : "text-violet"
          } text-lg  font-medium`}
        >
          Get 20% Off Upto Rs. 1,500
        </h1>
      </div>
      <hr className="my-2 text-light-white" />

      <div className=" flex items-center ">
        <h2
          className={`${isSelected ? "text-white" : "text-[#B3B3B3]"}  text-xs`}
        >
          Valid on total value of items worth Rs. 5,000
        </h2>
        <button
          type="button"
          className={`${
            isSelected ? "text-white" : "text-violet"
          } text- ml-auto text-sm font-medium`}
        >{`${isSelected ? "REMOVE" : "SELECT"}`}</button>
      </div>
    </div>
  );
};
