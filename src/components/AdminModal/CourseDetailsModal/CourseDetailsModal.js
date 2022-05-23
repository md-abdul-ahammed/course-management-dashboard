import React, { useState } from "react";
import CourseImage from "../../../util/assets/images/courses-image.png";
import CourseVideo from "../../../util/assets/images/courses-video.png";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { Link } from "react-router-dom";

const allData = [
  {
    title: "Part 1 - Course introduction",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.",
  },
  {
    title: "Part 2 - Digital Marketing tools",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.",
  },
  {
    title: "Part 3 - Market Research ",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.",
  },
  {
    title: "Part 4 - Search engine optimization",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.",
  },
  {
    title: "Part 5 - Marketing ethics  ",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.",
  },
  {
    title: "Part 6 - Conclusion",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.",
  },
];

const CourseDetailsModal = ({ setShowModal, course }) => {
  console.log(course);
  const [open, setOpen] = useState(null);
  const [show, setShow] = useState(false);

  const showCourse = (index) => {
    if (open === index) {
      if (!show) {
        setShow(true);
      } else {
        setShow(false);
      }
      return;
    }
    setOpen(index);
    setShow(true);
  };
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative lg:w-[50%] md:w-[70%] w-[90%] w mb-6 mx-auto max-w-6xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between py-3 px-5 rounded-t">
              <div className="text-[26px] leading-[47px] font-medium">
                Course Details
              </div>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className=" bg-white border border-[#7D23E0] rounded-full p-4 flex justify-center items-center h-6 w-6 text-2xl text-[#7D23E0] outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative px-6 h-[60vh] overflow-y-auto scrollbar-hide flex-auto">
              <div className="mb-4">
                <p className="text-[#767676] text-[14px] font-medium uppercase">
                  Course name
                </p>
                <p className="text-[#414141] text-[18px] font-medium">
                  {course.name}
                </p>
              </div>
              <div className="mb-4">
                <p className="text-[#767676] text-[14px] font-medium uppercase">
                  Course Description
                </p>
                <p className="text-[#414141] text-[18px] font-medium">
                  {course.description}
                </p>
              </div>
              <div className="mb-4">
                <p className="text-[#767676] text-[14px] font-medium uppercase">
                  Course duration
                </p>
                <p className="text-[#414141] text-[18px] font-medium">
                  {course.duration}
                </p>
              </div>
              <div className="mb-4">
                <p className="text-[#767676] text-[14px] font-medium uppercase">
                  Mode of Course
                </p>
                <p className="text-[#414141] text-[18px] font-medium">
                  {course.classtype === 1
                    ? "Hybrid"
                    : course.classtype === 2
                    ? "Online"
                    : "Offline"}
                </p>
              </div>
              <div className="mb-4">
                <p className="text-[#414141] text-[14px] font-medium uppercase">
                  Course category
                </p>
                <div className="text-[#414141] flex flex-wrap gap-x-4 gap-y-2 mt-2 text-[17px]">
                  <button className="py-2 px-3 rounded-lg border-2 border-[#A4A4A4]">
                    UI design
                  </button>
                  <button className="py-2 px-3 rounded-lg border-2 border-[#A4A4A4]">
                    Web Design
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-[#414141] text-[14px] font-medium uppercase">
                  IMAGES
                </p>
                <div className="mt-2 border-2 border-[#A4A4A4] rounded-lg md:p-4 p-1 w-fit md:max-w-[73%] max-w-[100%]">
                  <div className="flex md:gap-4 gap-2 justify-start flex-wrap">
                    {course.images.map((image, i) => (
                      <img
                        key={i}
                        className="md:w-fit w-[60px] h-[60px]"
                        src={image.url}
                        alt=""
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-[#414141] text-[14px] font-medium uppercase">
                  Videos
                </p>
                <div className="mt-2 border-2 border-[#A4A4A4] rounded-lg md:p-4 p-1 w-fit md:max-w-[73%] max-w-[100%]">
                  <div className="flex md:gap-4 gap-2 justify-start flex-wrap">
                    {course.videos.map((video, i) => (
                      <video
                        key={i}
                        src={video.url}
                        className="md:w-[202px] w-[48%]"
                        controls
                      ></video>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-[#414141] text-[14px] font-medium uppercase">
                  Course highlights
                </p>
                <div className="text-[#414141] flex flex-wrap gap-x-4 gap-y-2 mt-2 text-[17px]">
                  {JSON.parse(course.highlights).map((highlight, i) => (
                    <button
                      key={i}
                      className="py-2 px-3 rounded-lg border-2 border-[#A4A4A4]"
                    >
                      {highlight}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <p className="text-[#414141] text-[14px] font-medium uppercase">
                  Course objectives
                </p>
                <div className="text-[#414141] flex flex-wrap gap-x-4 gap-y-2 mt-2 text-[17px]">
                  {JSON.parse(course.objectives).map((objective, i) => (
                    <button
                      key={i}
                      className="py-2 px-3 rounded-lg border-2 border-[#A4A4A4]"
                    >
                      {objective}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <p className="text-[#767676] text-[14px] font-medium uppercase">
                  One line description
                </p>
                <p className="text-[#414141] text-[18px] font-medium">
                  The Institute is in parallel with Indian values
                </p>
              </div>
              <div className="mb-4">
                <p className="text-[#767676] text-[14px] font-medium uppercase">
                  Course contents
                </p>
                <div className="text-[#414141] text-[18px] font-medium">
                  {/* accordian add here */}
                  <div className="bg-white">
                    {allData.map((data, index) => (
                      <div key={index}>
                        <div
                          key={index}
                          className="md:px-6 px-3 bg-[#F0F0F0] rounded-lg mt-5  py-2"
                        >
                          <div
                            onClick={() => showCourse(index)}
                            className="flex justify-start cursor-pointer md:gap-x-5 gap-x-2 items-center"
                          >
                            {open === index && show ? (
                              <MdOutlineKeyboardArrowUp className="text-[26px] cursor-pointer text-[#414141] bg-[#F0F0F0] rounded-full" />
                            ) : (
                              <MdOutlineKeyboardArrowDown className="text-[26px] cursor-pointer text-[#414141] bg-[#F0F0F0] rounded-full" />
                            )}
                            <div className="text-[#414141] text-[16px]  md:text-[18px]">
                              {data.title}
                            </div>
                          </div>
                        </div>
                        {open === index && show && (
                          <div className="border bg-white p-5 mt-3 font-normal text-[#616161] text-[15px] rounded-lg">
                            {data.description}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-[#767676] text-[14px] font-medium uppercase">
                  Course Price
                </p>
                <p className="text-[#414141] text-[18px] font-medium">
                  Rs. 41998
                </p>
              </div>
              <div className="mb-4">
                <p className="text-[#767676] text-[14px] font-medium uppercase">
                  Coupons
                </p>
                <div className="border border-[#A4A4A4]  p-5 mt-3 md:w-[73%] w-full rounded-lg">
                  <h3 className="uppercase text-[22px] text-[#414141] font-semibold">
                    Freshers
                  </h3>
                  <p className="text-[#7D23E0] font-semibold">
                    Get 20% Off Upto Rs. 1,500
                  </p>
                  <div className="border-t border-dashed mt-6 pt-4 font-normal text-[14px] text-[#B3B3B3]">
                    Valid on total value of items worth Rs. 5,000
                  </div>
                </div>
                <div className="border border-[#A4A4A4]  p-5 mt-3 md:w-[73%] w-full rounded-lg">
                  <h3 className="uppercase text-[22px] text-[#414141] font-semibold">
                    Freshers
                  </h3>
                  <p className="text-[#7D23E0] font-semibold">
                    Get 20% Off Upto Rs. 1,500
                  </p>
                  <div className="border-t border-dashed mt-6 pt-4 font-normal text-[14px] text-[#B3B3B3]">
                    Valid on total value of items worth Rs. 5,000
                  </div>
                </div>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-between p-6 border-solid border-slate-200 rounded-b">
              <button className="border bg-[#7D23E0] md:px-8 px-4 py-2 md:py-3 font-bold rounded-lg text-white">
                Accept
              </button>
              <button className="border bg-[#E46060] md:px-8 px-4 py-2 md:py-3 font-bold rounded-lg text-white">
                Decline
              </button>
              <Link
                to={`/adminEditCourse/${course.id}/2`}
                className="border bg-[#F0F0F0] md:px-8 px-4 py-2 md:py-3 font-bold rounded-lg text-[#414141]"
              >
                Edit
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed !mt-0 inset-0 z-40 bg-black"></div>
    </>
  );
};

export default CourseDetailsModal;
