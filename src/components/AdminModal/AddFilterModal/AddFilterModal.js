import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";
const AddFilterModal = ({
  setShowAddFiltersModal,
  categories,
  subCategoryState,
  userDestination,
}) => {
  const [error, setError] = useState("");
  const [addSubCategory, setAddSubCategory] = subCategoryState;

  const handleCategoryAdd = () => {
    setAddSubCategory([...addSubCategory, { subCategoryName: "" }]);
  };

  const handleSubCategoryChange = (e, i) => {
    const { name, value } = e.target;
    const list = [...addSubCategory];
    list[i][name] = value;
    setAddSubCategory(list);
  };

  const handleOnSubmit = () => {
    console.log(selectedImage);
    console.log(categoryName);
    if (!selectedImage || !categoryName) {
      setError("Please Fill The All Required Field");
      return;
    }
    setError("");
    const data = {
      name: categoryName,
      img: selectedImage,
      subCategory: [],
    };
    categories.unshift(data);
    setSelectedImage(null);
    setShowAddFiltersModal(false);
  };
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-[27%] w mb-6 mx-auto max-w-6xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className=" py-3 px-5 rounded-t">
              <div className="flex items-start justify-between">
                <div className="text-[22px] text-[#7D23E0] leading-[47px] font-medium">
                  {userDestination === 1 ? "Add Filters" : "Add Sub-category"}
                </div>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => {
                    setShowAddFiltersModal(false);
                  }}
                >
                  <span className=" bg-white border border-[#7D23E0] rounded-full p-4 flex justify-center items-center h-6 w-6 text-2xl text-[#7D23E0] outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              {error && <div className="text-[14px] text-red">{error}</div>}
            </div>
            {/*body*/}
            <div className="relative px-6 h-[50vh] overflow-y-auto scrollbar-hide flex-auto">
              <div className="flex flex-col">
                {userDestination === 1 && (
                  <>
                    <input
                      onChange={(e) => setCategoryName(e.target.value)}
                      className="py-2 px-3 my-2 outline outline-1 rounded-lg outline-[#000]"
                      type="text"
                      placeholder="Category Name"
                    />
                    <div className="text-[22px] text-[#7D23E0] leading-[47px] font-medium">
                      Add Sub-filters
                    </div>
                  </>
                )}
                {addSubCategory.map((subCat, i) => (
                  <div key={i}>
                    <input
                      className="py-2 px-3 my-2 w-full outline outline-1 rounded-lg outline-[#000]"
                      type="text"
                      name="subCategoryName"
                      id="subCategoryName"
                      value={subCat.subCategoryName}
                      onChange={(e) => handleSubCategoryChange(e, i)}
                      placeholder={`Sub-${
                        userDestination === 1 ? "filters" : "category"
                      } ${i + 1}`}
                    />
                    {addSubCategory.length - 1 === i && (
                      <div
                        onClick={handleCategoryAdd}
                        className=" text-[#868686] cursor-pointer mb-3 mt-2 rounded-lg py-2 flex justify-center items-center bg-[#E7E7E7] "
                      >
                        Add More <BsPlus className="scale-125" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/*footer*/}
            <div className="p-5 border-solid border-slate-200 rounded-b">
              <button
                onClick={() => handleOnSubmit()}
                className="border  bg-[#7D23E0] w-full md:px-12 py-2 px-4 md:py-3 font-bold rounded-lg text-white"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed !mt-0 inset-0 z-40 bg-black"></div>
    </>
  );
};

export default AddFilterModal;
