import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
const FAQ = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col w-full ">
      <div className="flex py-4">
        <div className="flex-1 px-2  text-base lg:text-xl">{question}</div>
        <button
          className="w-8 h-8 aspect-square flex justify-center items-center"
          onClick={() => setExpanded(!expanded)}
        >
          <AiOutlinePlus size={24} />
        </button>
      </div>
      <div
        className={`mr-8 flex transition-all duration-200  ${
          expanded ? "h-fit mb-4" : "h-0"
        } overflow-y-hidden px-2 lg:pt-8 `}
      >
        <p className="text-sm lg:text-lg bg-light-gray">{answer}</p>
      </div>
      <div className="flex">
        <div className="h-[2px] bg-ghost w-full mr-8 "></div>
        <div className="w-8 h-[1px]"></div>
      </div>
    </div>
  );
};

export default FAQ;
