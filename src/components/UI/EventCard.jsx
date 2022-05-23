import React, { useState } from "react";
import { AiOutlineShareAlt } from "react-icons/ai";
import ShareCard from "./ShareCard";
import { BsFillPlayFill } from "react-icons/bs";

const EventCard = ({
  id,
  src,
  alt,
  postDate,
  read,
  title,
  authorSrc,
  authorAlt,
  authorName
}) => {
  const [share, setShare] = useState(false);

  return (
    <div
      className=" lg:w-12/12 h-full shadow-lg shadow-light-white rounded-3xl mx-auto    "
      key={id}
      style={{ boxShadow: "0px 0px 45px -8px rgba(125, 35, 224, 0.25)" }}
    >
      <div className="relative ">
        <img src={src} alt={alt} className="rounded-lg w-full z-10 m-auto " />{" "}
        <div
          className="w-full top-0 rounded-lg h-full absolute "
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            backgroundSize: "100vw 200vh"
          }}
        />
        <button className="play_btn bg-white w-14 h-14 lg:w-20 lg:h-20  rounded-full ">
          <BsFillPlayFill className="text-violet w-6 h-6 lg:w-9 lg:h-10 m-4 lg:m-6 " />
        </button>
        <div
          className="w-12 h-12 bg-violet rounded-full z-1 absolute right-6 top-5 cursor-pointer   "
          onClick={() => {
            setShare(!share);
          }}
        >
          <AiOutlineShareAlt className=" mx-auto m-2 w-7 h-7 z-1 text-white  " />
          {share && <ShareCard />}
        </div>
      </div>
      <div className="flex px-1 text-medium-white text-sm mt-2 px-6 lg:px-4 ">
        <p className="flex">
          {postDate} <span className="px-2">|</span>{" "}
          <span className="">{`${read} min read`}</span>
        </p>
      </div>
      <h1 className="px-1 text-lg font-bold px-6 lg:px-4">{title}</h1>
      <div className="flex px-1 py-3 px-6 lg:px-4">
        <img
          src={authorSrc}
          alt={authorAlt}
          className="w-10 h-10  rounded-full"
        />
        <p className="justify-center items-center flex px-4 text-lg text-medium-white">
          {authorName}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
