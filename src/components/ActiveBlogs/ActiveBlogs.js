import React, { useEffect } from "react";
import BlogCard from "../AdminCard/BlogCard";
import PageHeader from "../PageHeader/PageHeader";
import DeleteIcon from "../DeleteIcon/DeleteIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  adminDeleteBlog,
  fetchAdminBlogs,
} from "../../redux/slices/adminBlogSlice";
import Loader from "../Loader/Loader";

const ActiveBlogs = () => {
  const dispatch = useDispatch();

  const { adminBlogs, loading, isDeleted, isAddedNewBlog } = useSelector(
    (state) => state.adminBlogs
  );

  const handleDelete = (id) => {
    dispatch(adminDeleteBlog(id));
  };

  useEffect(() => {
    dispatch(fetchAdminBlogs());
  }, [dispatch, isAddedNewBlog, isDeleted]);

  return (
    <div>
      <PageHeader
        title={"Active Blogs"}
        actionName={"Add Blog"}
        route={"/adminDashboard/blogs/addBlog"}
      />
      {adminBlogs.length === 0 ? (
        <div className="py-8 mx-10 w-4/6 font-medium bg-white flex justify-center">
          No active blogs are available now
        </div>
      ) : (
        <>
          {loading ? (
            <Loader />
          ) : (
            <div className="px-[30px] pt-4 pb-16">
              <div className="grid gap-10 md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
                {adminBlogs?.map((data, index) => (
                  <div key={index} className="relative">
                    <BlogCard data={data} />
                    <div
                      onClick={() => handleDelete(data.id)}
                      className="absolute top-8 right-8 bg-white p-2.5 shadow-lg cursor-pointer rounded-full"
                    >
                      <DeleteIcon />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ActiveBlogs;
