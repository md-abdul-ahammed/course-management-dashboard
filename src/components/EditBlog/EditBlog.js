import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  adminUpdateBlog,
  blogPreviewData,
  fetchAdminBlog,
} from "../../redux/slices/adminBlogSlice";
import { readingTime } from "../../util/util";
import AddImageIcon from "../AddImageIcon/AddImageIcon";
import CrossIcon from "../CrossIcon/CrossIcon";
import PageHeader from "../PageHeader/PageHeader";

const EditBlog = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { blogId } = useParams();

  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { adminBlog } = useSelector((state) => state.adminBlogs);
  const { title, description, imgurl } = adminBlog;
  const [desc, setDesc] = useState(description);
  const [blogTitle, setBlogTitle] = useState(title);
  const [blogImage, setBlogImage] = useState(imgurl);
  const navigate = useNavigate();

  console.log(blogImage);

  useEffect(() => {
    dispatch(
      blogPreviewData({
        title: blogTitle,
        image: selectedImage,
        desc,
      })
    );
  }, [blogTitle, blogImage, desc, dispatch, selectedImage]);

  const onSelectFile = (e) => {
    const selectedFiles = e.target.files[0];
    setBlogImage(selectedFiles);
    setSelectedImage(URL.createObjectURL(selectedFiles));
  };

  useEffect(() => {
    dispatch(fetchAdminBlog(blogId));
  }, [dispatch, blogId]);

  const handleEditBlog = () => {
    if (!blogTitle || !desc) {
      setError("Please Fill The All Required Field");
      return;
    }
    setError("");
    const readTime = readingTime(desc).toString();
    const updates = JSON.stringify({
      title: blogTitle,
      description: desc,
      readtime: `${readTime} minutes`,
    });

    const myForm = new FormData();
    myForm.append("id", blogId);
    myForm.append("updates", updates);
    myForm.append("image", blogImage);
    dispatch(adminUpdateBlog(myForm));
    navigate("/adminDashboard/blogs/activeBlogs");
  };

  return (
    <div>
      <PageHeader title={"Edit Blog"} actionName={"Preview"} />
      <div className="px-[30px] pt-4 pb-16 ">
        <div className="flex flex-col space-y-3">
          {error && <div className="text-red">{error}</div>}
          <input
            defaultValue={title}
            key={title}
            onChange={(e) => setBlogTitle(e.target.value)}
            type="text"
            className="w-full px-6 bg-[#FAFAFA] border-2 border-[#A4A4A4] placeholder:text-[#A8A8A8]  text-[#414141] rounded-lg"
            placeholder="Enter blog title*"
          />
          <select className="w-full px-6 bg-[#FAFAFA]  border-2 border-[#A4A4A4] placeholder:text-[#A8A8A8]  text-[#414141] rounded-lg">
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
            defaultValue={description}
            key={description}
            className="w-full px-6 bg-[#FAFAFA] border-2 border-[#A4A4A4] placeholder:text-[#A8A8A8]  text-[#414141] rounded-lg"
            placeholder="Enter Description Here*"
            onChange={(e) => setDesc(e.target.value)}
            rows="10"
          ></textarea>
          <div className="flex justify-center mt-5 space-x-5">
            <button
              onClick={handleEditBlog}
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

export default EditBlog;
