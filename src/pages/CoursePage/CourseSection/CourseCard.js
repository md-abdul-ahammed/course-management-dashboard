import {
  ArrowRightOutlined,
  CloseCircleOutlined,
  HeartFilled,
  HeartOutlined,
  RiseOutlined,
  ShareAltOutlined,
  StarFilled,
} from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import courseImg from '../../../assets/images/courseImg.png'
import money from '../../../assets/images/icons/money.svg'
import stopwatch from '../../../assets/images/icons/stopwatch.svg'
import SharePopup from '../../../components/UI/SharePopup'

export default function CourseCard() {
  const [open, setOpen] = useState(false)
  const [isActiveHeart, setHeart] = useState(false)
  return (
    <div className=' max-w-[350px] relative  rounded-3xl m-4  shadow-3xl'>
      <div className='relative'>
        <img src={courseImg} className='w-[100%] rounded-2xl  ' alt='' />
        <div className='flex items-center justify-center  space-x-1 px-2 sm:py-1 text-md text-white  font-bold bg-light_yellow rounded-lg md:hidden absolute right-5 bottom-[10px] '>
          <p>3.0</p>
          <StarFilled />
        </div>
      </div>
      <div className='flex text-xl  w-8 h-8 md:h-12 md:w-12 rounded-full shadow-sm absolute right-5 top-5  items-center justify-center cursor-pointer   ring-2 ring-white md:text-3xl bg-white'>
        {isActiveHeart ? (
          <HeartFilled
            onClick={() => setHeart(!isActiveHeart)}
            className={` text-red flex items-center`}
          />
        ) : (
          <HeartOutlined
            onClick={() => setHeart(!isActiveHeart)}
            className={` text-gray flex items-center `}
          />
        )}
      </div>

      <div className=' relative p-5 flex flex-col space-y-3 bg-[#fffff]'>
        <div className=' flex  justify-between '>
          <div>
            <p className='xl:text-2xl text-lg  text-[#767676]'>
              XYZ Design Academy
            </p>
            <p className='md:text-lg text-md font-bold'>UX Design Program</p>
          </div>
          <SharePopup open={open} onClose={() => setOpen(false)} />
        </div>

        <div className='flex justify-between md:flex-col space-x-5 md:space-x-0 md:space-y-5'>
          <div className='flex items-end justify-between '>
            <div>
              <div className='flex flex-col space-y-2 font-medium text-[#767676]'>
                <div className='flex  items-center space-x-2'>
                  <img className='-mx-1' src={stopwatch} alt='' />
                  <p className='text-md font-bold'>3 months</p>
                </div>
                <div className='md:flex items-center space-x-2 hidden '>
                  <RiseOutlined className='text-white bg-[#7D23E0] rounded-full p-[1px]' />

                  <p className='text-md font-bold'>
                    80+ Students joined recently
                  </p>
                </div>
                <div className='flex items-center space-x-2'>
                  <img src={money} alt='' />
                  <p className='text-md font-bold'>EMI Available</p>
                </div>
              </div>
            </div>
            <div className='md:flex items-center justify-center  space-x-1 px-2  lg:text-xl text-white  font-bold bg-yellow-400 rounded-lg hidden '>
              <p>3.0</p>
              <StarFilled />
            </div>
          </div>

          <div className='flex justify-between items-center '>
            <div>
              <p
                className=' lg:text-2xl text-md
               font-semibold'
              >
                Rs. 599
              </p>
              <p className='lg:text-md text-red-400 text-right lg:text-left text-xs font-bold'>
                <del>Rs.1500</del>
              </p>
            </div>
            <div className='md:flex space-x-2 items-center text-md font-bold cursor-pointer active:opacity-75 select-none hidden'>
              <p>View Details</p>

              <ArrowRightOutlined className='h-5 w-5 flex items-center justify-center rounded-full ring-2 ring-[#7D23E0] text-[#7D23E0] text-md font-bold ' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
