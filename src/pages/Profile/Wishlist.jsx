import React, { useState } from 'react';
import { AiOutlinePlus, AiFillStar } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlineShareAlt } from "react-icons/ai";
import image from '../../../src/assets/merchantDashboard/Accountancy/Kazi Mohammad Fahad Kibria.png'
import ShareModal from '../../components/Profile/ShareModal';
import NoData from '../../components/Profile/NoData';

const Wishlist = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

    const data = [
      //  { idx:1, courseImage : image, name : 'XYZ Design Academy', category: 'Ux Design', rating: '3', totalRating: '22420', effectiveprice:'599', grossprice: '1500'},
      //  { idx:2, courseImage : image, name : 'XYZ Design Academy', category: 'Ux Design', rating: '3', totalRating: '22420', effectiveprice:'599', grossprice: '1500'},
      //  { idx:3, courseImage : image, name : 'XYZ Design Academy', category: 'Ux Design', rating: '3', totalRating: '22420', effectiveprice:'599', grossprice: '1500'},
      //  { idx:4, courseImage : image, name : 'XYZ Design Academy', category: 'Ux Design', rating: '3', totalRating: '22420', effectiveprice:'599', grossprice: '1500'},
      //  { idx:5, courseImage : image, name : 'XYZ Design Academy', category: 'Ux Design', rating: '3', totalRating: '22420', effectiveprice:'599', grossprice: '1500'},
      //  { idx:1, courseImage : image, name : 'XYZ Design Academy', category: 'Ux Design', rating: '3', totalRating: '22420', effectiveprice:'599', grossprice: '1500'},
      //  { idx:2, courseImage : image, name : 'XYZ Design Academy', category: 'Ux Design', rating: '3', totalRating: '22420', effectiveprice:'599', grossprice: '1500'},
      //  { idx:3, courseImage : image, name : 'XYZ Design Academy', category: 'Ux Design', rating: '3', totalRating: '22420', effectiveprice:'599', grossprice: '1500'},
      //  { idx:4, courseImage : image, name : 'XYZ Design Academy', category: 'Ux Design', rating: '3', totalRating: '22420', effectiveprice:'599', grossprice: '1500'},
      //  { idx:5, courseImage : image, name : 'XYZ Design Academy', category: 'Ux Design', rating: '3', totalRating: '22420', effectiveprice:'599', grossprice: '1500'},
    ]

    function handleDelete(idx) {
  
        
      }

    return (
    <div className='h-full p-5 mb-16'>
<div>
          <div className="heading my-2 ">
           <p className='text-2xl font-bold '>Wishlist</p>
        </div>

        {data.length > 0 ? (
        <div className="w-full  grid lg:grid-cols-4 gap-4  lg:py-6   lg:m-0">
          {data.map((course, idx) => (
            <CourseCard handleOpen={handleOpen} course={course} handleDelete={handleDelete} idx={idx} />
          ))}
        </div>
      ) : (
        <NoData text={`You haven’t wishlisted anything yet.`}></NoData>
      )}

      <ShareModal open={open} setOpen={setOpen} ></ShareModal>
</div>
    </div>
    );
};

export default Wishlist;

export const CourseCard = (props) => {
    const { course, handleDelete, idx, handleOpen } = props;
  
    return (
      <div className="bg-white w-12/12 rounded-3xl shadow-lg   m-auto lg:m-0">
        <div className="relative z-0">
          <RiDeleteBinLine
            className="absolute cursor-pointer w-7 h-7 z-10 p-1 bg-white mr-2 lg:mr-4 lg:top-4 top-2 right-0 rounded-full text-[#E46060]"
            onClick={() => {
              handleDelete(idx);
            }}
          />
          <img src={image} alt="" className="w-full rounded-t-3xl " />
        </div>
  
        <div className="flex items-center px-3 py-3">
          <div className="">
            <p className=" text-base">{course?.institute?.name}</p>
            <p className="text-sm font-bold">{course?.name}</p>

            <div className='flex items-center mt-3'>
            <div
            className="flex items-center rounded-lg  text-white  px-2 lg:mr-2"
            style={{ backgroundColor: "#FFD130" }}
          >
            <p className="lg:text-xl">{course?.rating}</p>
            <AiFillStar />
          </div>
          <p className='text-ghost/80 ml-2'>{`(${course.ratingcount})`}</p>
            </div>
          </div>
          <div
            className=" rounded-full  shadow-lg  ml-auto p-2  cursor-pointer"
            style={{ backgroundColor: "white" }}
          >
            <AiOutlineShareAlt onClick={() => handleOpen()} className='text-2xl' />
          </div>
        </div>
  
        <div className="pb-3 px-3 flex items-center">
            <p className="text-2xl font-bold">Rs. {course.effectiveprice}</p>
            <p
              className="line-through ml-3"
              style={{ color: "#E46060", textDecorationLine: "line-through" }}
            >
              Rs.{course.grossprice}
            </p>
        </div>
      </div>
    );
  };