import React, { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsPlus } from "react-icons/bs";
import AddFilterModal from "../AdminModal/AddFilterModal/AddFilterModal";
import { RemoveIcon } from "./icons/icons";
import MobileEditFilters from "./MobileEditFilters";

const filters = [
  {
    name: "Category",
    subCategory: [
      {
        name: "Academics",
        subOptions: [],
      },
      {
        name: "Academics",
        subOptions: [],
      },
      {
        name: "Academics",
        subOptions: [],
      },
    ],
  },
  {
    name: "Class",
    subCategory: [
      {
        name: "Nursery",
        subOptions: [],
      },
      {
        name: "Nursery",
        subOptions: [],
      },
      {
        name: "Nursery",
        subOptions: [],
      },
      {
        name: "Nursery",
        subOptions: [],
      },
    ],
  },
  {
    name: "Subjects",
    subCategory: [
      {
        name: "Preprimary",
        subOptions: ["english", "hindi", "maths"],
      },
      {
        name: "Primary",
        subOptions: ["me", "&", "u"],
      },
      {
        name: "Nursery",
        subOptions: [],
      },
      {
        name: "Nursery",
        subOptions: [],
      },
    ],
  },
];

const EditFilters = () => {
  const [showAddfiltersModal, setShowAddFiltersModal] = useState(false);
  const [showSubCat, setShowSubCat] = useState(0);
  const [showSubOptions, setShowSubOptions] = useState(0);
  const [userDestination, setUserDestination] = useState(null);
  const [addSubCategory, setAddSubCategory] = useState([
    { subCategoryName: "" },
    { subCategoryName: "" },
    { subCategoryName: "" },
    { subCategoryName: "" },
    { subCategoryName: "" },
  ]);
  const [remove, setRemove] = useState(true);

  return (
    <>
      <div className="md:px-8 md:block hidden px-2 text-[#414141]">
        <div className="flex mb-5 justify-between">
          <div className="text-xl font-bold">Filters</div>
          {remove ? (
            <button
              onClick={() => setRemove(false)}
              className="text-[14px] flex items-center px-5 py-1 rounded-full text-white bg-[#4C4C4C]"
            >
              <BiEditAlt className="scale-125 mr-2" /> Edit
            </button>
          ) : (
            <button
              onClick={() => setRemove(true)}
              className=" bg-[#8D8D8D] px-5 py-1 font-medium text-white rounded-full"
            >
              Cancel
            </button>
          )}
        </div>
        <div className="flex">
          <div className="w-[280px] h-fit bg-white border border-[#C8C8C8]">
            <div class="grid grid-cols-1 divide-[#C8C8C8] divide-y">
              {filters.map((data, i) => (
                <div
                  key={i}
                  onClick={() => setShowSubCat(i)}
                  className={` ${
                    showSubCat === i && "text-[#7D23E0]"
                  } flex cursor-pointer px-5 items-center font-medium py-1 justify-between`}
                >
                  <div className="text-lg">{data.name}</div>
                  {!remove ? (
                    <RemoveIcon />
                  ) : (
                    <MdKeyboardArrowRight className="scale-150" />
                  )}
                </div>
              ))}
              <div className="flex items-center justify-center">
                <div
                  onClick={() => {
                    setShowAddFiltersModal(true);
                    setUserDestination(1);
                  }}
                  className="my-1 px-3 py-1 text-[#868686] cursor-pointer rounded-lg w-full mx-2 flex justify-center items-center bg-[#E7E7E7] "
                >
                  Add More <BsPlus className="scale-125" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[280px] h-fit ml-[-1px] bg-white border border-[#C8C8C8]">
            <div class="grid grid-cols-1 divide-[#C8C8C8] divide-y">
              {filters[showSubCat]?.subCategory.map((data, i) => (
                <div
                  key={i}
                  className={` ${
                    showSubOptions === i &&
                    filters[showSubCat].subCategory[showSubOptions].subOptions
                      .length !== 0 &&
                    "text-[#7D23E0]"
                  } flex cursor-pointer px-5 items-center font-medium py-1 justify-between`}
                  onClick={() =>
                    data?.subOptions?.length !== 0
                      ? setShowSubOptions(i)
                      : false
                  }
                >
                  <div className="text-lg">{data.name}</div>
                  {!remove ? (
                    <RemoveIcon />
                  ) : (
                    <>
                      {data?.subOptions?.length ? (
                        <MdKeyboardArrowRight className="scale-150" />
                      ) : null}
                    </>
                  )}
                </div>
              ))}
              <div className="flex items-center justify-center">
                <div
                  onClick={() => {
                    setShowAddFiltersModal(true);
                    setUserDestination(2);
                  }}
                  className="my-1 px-3 py-1 text-[#868686] cursor-pointer rounded-lg w-full mx-2 flex justify-center items-center bg-[#E7E7E7] "
                >
                  Add More <BsPlus className="scale-125" />
                </div>
              </div>
            </div>
          </div>
          {filters[showSubCat].subCategory[showSubOptions].subOptions.length !==
            0 && (
            <div className="w-[280px] h-fit ml-[-1px] bg-white border border-[#C8C8C8]">
              <div class="grid grid-cols-1 divide-[#C8C8C8] divide-y">
                {filters[showSubCat].subCategory[
                  showSubOptions
                ].subOptions?.map((option, i) => (
                  <div
                    key={i}
                    className="flex cursor-pointer px-5 items-center font-medium py-1 justify-between"
                  >
                    <div className="text-lg">{option}</div>
                    <div>{!remove && <RemoveIcon />}</div>
                  </div>
                ))}
                <div className="flex items-center justify-center">
                  <div
                    onClick={() => {
                      setShowAddFiltersModal(true);
                      setUserDestination(2);
                    }}
                    className="my-1 px-3 py-1 text-[#868686] cursor-pointer rounded-lg w-full mx-2 flex justify-center items-center bg-[#E7E7E7] "
                  >
                    Add More <BsPlus className="scale-125" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {showAddfiltersModal && (
          <AddFilterModal
            userDestination={userDestination}
            subCategoryState={[addSubCategory, setAddSubCategory]}
            setShowAddFiltersModal={setShowAddFiltersModal}
          />
        )}
      </div>

      <div className="md:hidden block">
        <MobileEditFilters />
      </div>
    </>
  );
};

export default EditFilters;