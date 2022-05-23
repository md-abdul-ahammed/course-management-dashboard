import ColumnGroup from "antd/lib/table/ColumnGroup";
import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import AddCategoryModal from "../AdminModal/AddCategoryModal/AddCategoryModal";
import AddSubCategoryModal from "../AdminModal/AddSubCategoryModal/AddSubCategoryModal";
import { DeleteIcon, RemoveIcon } from "./icons/icons";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

const categories = [
  {
    name: "Medical",
    img: `https://image.shutterstock.com/image-photo/green-leaves-plant-growing-tropical-600w-1458117611.jpg`,
    subCategory: [],
  },
  {
    name: "Academics",
    img: `https://image.shutterstock.com/image-photo/green-leaves-plant-growing-tropical-600w-1458117611.jpg`,
    subCategory: [],
  },
  {
    name: "Engineering",
    img: `https://image.shutterstock.com/image-photo/green-leaves-plant-growing-tropical-600w-1458117611.jpg`,
    subCategory: [],
  },
  {
    name: "Photography",
    img: `https://image.shutterstock.com/image-photo/green-leaves-plant-growing-tropical-600w-1458117611.jpg`,
    subCategory: [
      {
        name: "Digital Photography",
        img: `https://image.shutterstock.com/image-photo/green-leaves-plant-growing-tropical-600w-1458117611.jpg`,
      },
      {
        name: "Landscape Photography",
        img: `https://image.shutterstock.com/image-photo/green-leaves-plant-growing-tropical-600w-1458117611.jpg`,
      },
      {
        name: "Digital Photography",
        img: `https://image.shutterstock.com/image-photo/green-leaves-plant-growing-tropical-600w-1458117611.jpg`,
      },
      {
        name: "Digital Photography",
        img: `https://image.shutterstock.com/image-photo/green-leaves-plant-growing-tropical-600w-1458117611.jpg`,
      },
      {
        name: "Digital Photography",
        img: `https://image.shutterstock.com/image-photo/green-leaves-plant-growing-tropical-600w-1458117611.jpg`,
      },
      {
        name: "Digital Photography",
        img: `https://image.shutterstock.com/image-photo/green-leaves-plant-growing-tropical-600w-1458117611.jpg`,
      },
      {
        name: "Digital Photography",
        img: `https://image.shutterstock.com/image-photo/green-leaves-plant-growing-tropical-600w-1458117611.jpg`,
      },
    ],
  },
  {
    name: "Photography",
    img: `https://image.shutterstock.com/image-photo/green-leaves-plant-growing-tropical-600w-1458117611.jpg`,
    subCategory: [
      {
        name: "Digital Photography",
        img: `https://image.shutterstock.com/image-photo/green-leaves-plant-growing-tropical-600w-1458117611.jpg`,
      },
      {
        name: "Landscape Photography",
        img: `https://image.shutterstock.com/image-photo/green-leaves-plant-growing-tropical-600w-1458117611.jpg`,
      },
      {
        name: "Digital Photography",
        img: `https://image.shutterstock.com/image-photo/green-leaves-plant-growing-tropical-600w-1458117611.jpg`,
      },
      {
        name: "Digital Photography",
        img: `https://image.shutterstock.com/image-photo/green-leaves-plant-growing-tropical-600w-1458117611.jpg`,
      },
      {
        name: "Digital Photography",
        img: `https://image.shutterstock.com/image-photo/green-leaves-plant-growing-tropical-600w-1458117611.jpg`,
      },
      {
        name: "Digital Photography",
        img: `https://image.shutterstock.com/image-photo/green-leaves-plant-growing-tropical-600w-1458117611.jpg`,
      },
      {
        name: "Digital Photography",
        img: `https://image.shutterstock.com/image-photo/green-leaves-plant-growing-tropical-600w-1458117611.jpg`,
      },
    ],
  },
];

const EditCategories = () => {
  const [remove, setRemove] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showSubCategoryModal, setShowSubCategoryModal] = useState(false);
  const [subCategoryName, setSubCategoryName] = useState("");
  const [selectedSubCategoryImg, setSelectedSubCategoryImg] = useState(null);
  const [categoryIndex, setCategoryIndex] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [showDetailsIndex, setShowDetailsIndex] = useState(null);

  return (
    <>
      <div className="md:block hidden">
        <div className="border w-full rounded-lg border-[#DFE0EB]">
          <div className="flex text-[#414141] font-medium text-lg">
            <div className="border-r w-[220px] border-[#DFE0EB]">
              <div className="flex px-3 mb pb-6 pt-2 space-x-3 items-center">
                <div>Categories</div>
                <div
                  onClick={() => setShowCategoryModal(true)}
                  className="bg-[#7D23E0] shadow-lg cursor-pointer w-[25px] h-[25px] text-white flex items-center justify-center rounded-full"
                >
                  <MdAdd className="text-[#fff] scale-125" />
                </div>
              </div>
            </div>
            <div className="px-3 w-full pb-6 pt-2">
              <div className="flex justify-between">
                <div>Sub-categories</div>
                {remove ? (
                  <button
                    onClick={() => setRemove(false)}
                    className=" bg-[#8D8D8D] px-5 py-1 font-medium text-white rounded-full"
                  >
                    Cancel
                  </button>
                ) : (
                  <button
                    onClick={() => setRemove(true)}
                    className=" bg-[#7D23E0] items-center font-medium px-5 py-1 text-white rounded-full flex"
                  >
                    <DeleteIcon className="mr-2" />
                    Delete
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 divide-y divide-[#DFE0EB]">
            {categories.map((category, i) => (
              <div key={i} className="flex">
                <div className="border-r w-[219px] pt-2 pb-24 flex justify-center border-[#DFE0EB]">
                  <div
                    className={` w-[132px] flex justify-center items-center bg-gradient-to-tr from-black to-[#6e6363] relative min-h-[32px] rounded-lg font-bold  `}
                  >
                    <div className="py-2 text-center text-white">
                      {category.name}
                    </div>
                    <img
                      src={category.img}
                      className="h-full mix-blend-overlay top-0 left-0 w-full object-cover absolute "
                      alt=""
                    />
                    {remove && (
                      <button className="absolute top-[-7px] right-[-7px]">
                        <RemoveIcon />
                      </button>
                    )}
                  </div>
                </div>
                <div className="w-full pt-2">
                  <div className="flex mx-4 flex-wrap">
                    {category?.subCategory?.map((sub, index) => (
                      <div
                        key={index}
                        className={` w-[132px] flex justify-center items-center bg-gradient-to-tr mb-4 mr-3 from-black to-[#6e6363] relative min-h-[32px] rounded-lg font-bold  `}
                      >
                        <div className="text-center text-white">{sub.name}</div>
                        <img
                          src={sub.img}
                          className="h-full mix-blend-overlay top-0 left-0 w-full object-cover absolute "
                          alt=""
                        />
                        {remove && (
                          <button className="absolute top-[-7px] right-[-7px]">
                            <RemoveIcon />
                          </button>
                        )}
                      </div>
                    ))}
                    <button className="w-[132px] mb-4 mr-3 bg-[#7D23E0] rounded-lg font-bold text-white px-5 min-h-[42px]">
                      <div
                        onClick={() => {
                          setCategoryIndex(i);
                          setShowSubCategoryModal(true);
                        }}
                        className="flex justify-center items-center"
                      >
                        <MdAdd className="text-[#fff]" />
                        Add
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="md:hidden block">
        <div className="flex justify-between items-center">
          <div className="text-lg font-medium">Edit Categories</div>
          <div className="flex items-center space-x-3">
            {!remove && (
              <div
                onClick={() => setShowCategoryModal(true)}
                className="bg-[#7D23E0] shadow-lg cursor-pointer w-[32px] h-[32px] text-white flex items-center justify-center rounded-full"
              >
                <MdAdd className="text-[#fff] scale-150 " />
              </div>
            )}
            {remove ? (
              <button
                onClick={() => setRemove(false)}
                className=" bg-[#8D8D8D] px-5 py-1 font-medium text-white rounded-full"
              >
                Cancel
              </button>
            ) : (
              <button
                onClick={() => setRemove(true)}
                className=" bg-[red] p-1 text-white rounded-full"
              >
                <DeleteIcon />
              </button>
            )}
          </div>
        </div>
        <div className="bg-white mt-5">
          <div className="grid grid-cols-1 divide-[#DFE0EB] divide-y">
            {categories.map((category, i) => (
              <div key={i} className="flex flex-col">
                <div className="flex justify-between items-center px-3">
                  <div className="w-[219px] py-2">
                    <div
                      className={` w-[132px] flex justify-center items-center bg-gradient-to-tr from-black to-[#6e6363] relative min-h-[32px] rounded-lg font-bold  `}
                    >
                      <div className="py-2 text-center text-white">
                        {category.name}
                      </div>
                      <img
                        src={category.img}
                        className="h-full mix-blend-overlay top-0 left-0 w-full object-cover absolute "
                        alt=""
                      />
                      {remove && (
                        <button className="absolute top-[-7px] right-[-7px]">
                          <RemoveIcon />
                        </button>
                      )}
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      setShowDetails(!showDetails);
                      setShowDetailsIndex(i);
                    }}
                    className="text-xl"
                  >
                    {showDetails && showDetailsIndex === i ? (
                      <MdKeyboardArrowDown className="scale-125" />
                    ) : (
                      <MdKeyboardArrowRight className="scale-125" />
                    )}
                  </div>
                </div>
                {showDetails && showDetailsIndex === i && (
                  <div className="w-full py-2">
                    <div className="font-bold px-3 mb-3 text-[#9D9D9D]">
                      Sub-category
                    </div>
                    <div className="flex mx-3 flex-wrap">
                      {category?.subCategory?.map((sub, index) => (
                        <div
                          key={index}
                          className={` w-[132px] flex justify-center items-center bg-gradient-to-tr mb-4 mr-3 from-black to-[#6e6363] relative min-h-[32px] rounded-lg font-bold  `}
                        >
                          <div className="text-center text-white">
                            {sub.name}
                          </div>
                          <img
                            src={sub.img}
                            className="h-full mix-blend-overlay top-0 left-0 w-full object-cover absolute "
                            alt=""
                          />
                          {remove && (
                            <button className="absolute top-[-7px] right-[-7px]">
                              <RemoveIcon />
                            </button>
                          )}
                        </div>
                      ))}
                      <button className="w-[132px] mb-4 mr-3 bg-[#7D23E0] rounded-lg font-bold text-white px-5 min-h-[42px]">
                        <div
                          onClick={() => {
                            setCategoryIndex(i);
                            setShowSubCategoryModal(true);
                          }}
                          className="flex justify-center items-center"
                        >
                          <MdAdd className="text-[#fff]" />
                          Add
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {showCategoryModal && (
        <AddCategoryModal
          categories={categories}
          categoryState={[categoryName, setCategoryName]}
          imageState={[selectedImage, setSelectedImage]}
          setShowCategoryModal={setShowCategoryModal}
        />
      )}
      {showSubCategoryModal && (
        <AddSubCategoryModal
          categories={categories}
          categoryIndex={categoryIndex}
          subCategoryState={[subCategoryName, setSubCategoryName]}
          imageState={[selectedSubCategoryImg, setSelectedSubCategoryImg]}
          setShowSubCategoryModal={setShowSubCategoryModal}
        />
      )}
    </>
  );
};

export default EditCategories;
