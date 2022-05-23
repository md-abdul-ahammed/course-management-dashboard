import React, { useEffect, useState } from "react";
import AddImageIcon from "../AddImageIcon/AddImageIcon";
import PageHeader from "../PageHeader/PageHeader";
import CrossIcon from "../CrossIcon/CrossIcon";
import { useDispatch } from "react-redux";
import {
  adminAddBlog,
  blogPreviewData,
} from "../../redux/slices/adminBlogSlice";
import { useNavigate } from "react-router-dom";
import { readingTime } from "../../util/util";

const AddBlog = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      blogPreviewData({
        title,
        image: selectedImage,
        desc,
      })
    );
  }, [dispatch, title, selectedImage, desc]);

  const onSelectFile = (e) => {
    const selectedFiles = e.target.files[0];
    setImage(selectedFiles);
    setSelectedImage(URL.createObjectURL(selectedFiles));
  };

  const handleAddBlog = () => {
    if (!title || !selectedImage || !desc) {
      setError("Please Fill The All Required Field");
      return;
    }
    setError("");

    const readTime = readingTime(desc).toString();

    const myForm = new FormData();
    myForm.append("title", title);
    myForm.append("category", "Movie");
    myForm.append("description", desc);
    myForm.append("readtime", `${readTime} minutes`);
    myForm.append("image", image);
    dispatch(adminAddBlog(myForm));
    navigate("/adminDashboard/blogs/activeBlogs");
  };

  return (
    <div>
      <PageHeader title={"Create Blog"} actionName={"Preview"} />
      <div className="px-[30px] pt-4 pb-16 ">
        <div className="flex flex-col space-y-3">
          {error && <div className="text-red">{error}</div>}
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="w-full py-2 outline-none px-6 bg-[#FAFAFA] border-2 border-[#A4A4A4] placeholder:text-[#A8A8A8]  text-[#414141] rounded-lg"
            placeholder="Enter blog title*"
          />
          <select className="w-full px-6 bg-[#FAFAFA] py-2 outline-none  border-2 border-[#A4A4A4] placeholder:text-[#A8A8A8]  text-[#414141] rounded-lg">
            <option value="volvo">Choose A Category </option>
          </select>
          <div className="relative w-full p-3 border-2 text-[#A8A8A8] h-[280px] overflow-hidden rounded-lg border-[#A4A4A4]">
            <label>
              {!selectedImage ? (
                <div className="h-full">
                  <p className="h-[10%]">Add cover image*</p>
                  <div className="h-[90%] flex justify-center items-center flex-col">
                    <AddImageIcon />
                    <p className="text-[20px]">Add Image</p>
                  </div>
                  <input
                    onChange={onSelectFile}
                    accept="image/*"
                    type="file"
                    className="hidden"
                  />
                </div>
              ) : (
                <div>
                  <img
                    className="w-full h-[252px] shadow-sm rounded-3xl object-cover"
                    src={selectedImage}
                    alt=""
                  />
                </div>
              )}
            </label>
            {selectedImage && (
              <button
                className="absolute top-6 w-[30px] right-6 "
                onClick={() => setSelectedImage(null)}
              >
                <CrossIcon className="w-full" />
              </button>
            )}
          </div>
          <textarea
            className="w-full px-6 bg-[#FAFAFA] py-1 outline-none border-2 border-[#A4A4A4] placeholder:text-[#A8A8A8]  text-[#414141] rounded-lg"
            placeholder="Enter Description Here*"
            onChange={(e) => setDesc(e.target.value)}
            rows="10"
          ></textarea>
          <div className="flex justify-center mt-5 space-x-5">
            <button
              onClick={handleAddBlog}
              className="px-12 font-bold rounded-lg py-2 text-white bg-[#7D23E0]"
            >
              Confirm
            </button>
            <button className="px-12 font-bold rounded-lg py-2 text-white bg-[#E46060]">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
