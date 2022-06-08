import React from "react";
import { Link } from "react-router-dom";
import blogImage from "../../util/assets/images/blog.png";
import { host } from "../../util/constant/constant";
import { makeDateFormat } from "../../util/util";

const BlogCard = ({ data }) => {
  const { title, image, description, readtime, timestamp, id } = data;

  const blogDate = makeDateFormat(timestamp);

  return (
    <div className="p-4 bg-white min-h-full rounded-[2.5rem] shadow-md">
      <div className="flex flex-col">
        <img src={image.url} alt="" />
        <p className="text-[14px] pt-3 text-[#A0A0A0]">
          {blogDate} <span className="mx-1">l</span> {readtime} read
        </p>
        <Link
          to={`/adminDashboard/blogs/editBlog/${id}`}
          className=" text-[22px] py-2 font-semibold leading-[30px] "
        >
          {title}
        </Link>
        <p className="text-[#414141] text-[18px]">
          {description.substr(0, 95)}
          {description.length > 96 && (
            <span>
              ...{" "}
              <span className="ml-1 text-[#7D23E0] text-[18px] leading-[30px] font-bold">
                Read More
              </span>
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
