import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillRightCircle } from "react-icons/ai";
import shareIcon from "../../assets/share.png";

import ShareCard from "../UI/ShareCard";

const BlogPostCard = ({
  id,
  src,
  alt,
  postDate,
  read,
  title,
  initialtext,
  blogLink,
  authorSrc,
  authorAlt,
  authorName
}) => {
  const [share, setShare] = useState(false);

  return (
    <div
      className=" p-6 lg:p-4   lg:w-96 h-full   rounded-3xl mx-auto  "
      key={id}
      style={{ boxShadow: "0px 0px 40px -15px rgba(125, 35, 224, 0.25)" }}
    >
      <div className="relative">
        <div
          className="w-10 h-10 bg-white rounded-full z-1 absolute right-10 top-5 cursor-pointer"
          onClick={() => {
            setShare(!share);
          }}
        >
          <img
            src={shareIcon}
            alt="share"
            className=" m-auto mt-2 w-5 h-5 z-1 "
          />
          {share && <ShareCard />}
        </div>
        <img src={src} alt={alt} className="rounded-lg z-10" />
      </div>
      <div className="flex px-1 text-medium-white text-sm mt-2">
        <p className="flex">
          {postDate} <span className="px-2">|</span>{" "}
          <span className="">{`${read} min read`}</span>
        </p>
      </div>
      <h1 className="px-1 text-lg w-full font-bold">{title}</h1>
      <div className="flex px-1 py-3">
        {/* <img
          src={authorSrc}
          alt={authorAlt}
          className="w-10 h-10  rounded-full"
        />
        <p className="justify-center items-center flex px-4 text-lg text-medium-white">
        //   {authorName}
        // </p> */}
        <p className="">
          {initialtext}
          {/* <span className="">
            <Link to={`${blogLink}`}>
              <h2 className="  font-semibold text-violet  flex  cursor-pointer">
                Read more
              </h2>
            </Link>
          </span> */}
        </p>
      </div>
    </div>
  );
};

export default BlogPostCard;
