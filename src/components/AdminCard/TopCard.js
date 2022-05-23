import React from "react";
import dollar from "../../util/assets/images/dollar.png";
import avatar from "../../util/assets/images/avatar.png";
import time from "../../util/assets/images/time.png";
import work from "../../util/assets/images/Work.png";

const TopCard = ({ data }) => {
  return (
    <div className="flex items-center gap-x-3 bg-white px-5 py-5 rounded-lg">
      <div
        className={`w-12 h-12 rounded-full 
              ${data.icon === dollar && "bg-[#f4f8ff]"}
              ${data.icon === time && "bg-[#f0efff]"} 
              ${data.icon === avatar && "bg-[#fdf3f0]"} 
              ${data.icon === work && "bg-[#eeeeff]"} 
              flex justify-center items-center`}
      >
        <img src={data.icon} alt="" />
      </div>
      <div>
        <p className="text-xl font-extrabold text-[22px]">{data.quantity}</p>
        <p className="capitalize text-{14px}">{data.title}</p>
      </div>
    </div>
  );
};

export default TopCard;
