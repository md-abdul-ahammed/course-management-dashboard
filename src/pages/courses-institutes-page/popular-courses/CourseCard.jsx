import { HeartFilled, HeartOutlined } from '@ant-design/icons'
import { useState } from 'react'
import Data from './data'
import { BsArrowRightCircle } from 'react-icons/bs'

import {
  AiOutlineRise,
  AiFillStar,
  AiOutlineShareAlt,
  AiOutlineHeart,
} from 'react-icons/ai'
import { IoCashOutline } from 'react-icons/io5'
import { RiTimerLine } from 'react-icons/ri'
import UiUx from '../../../assets/courses_institutions/popular-courses/UI-UX.svg'
import SharePopup from '../../../components/UI/SharePopup'
import { Link, useNavigate } from 'react-router-dom'
import { host } from '../../../util/constant/constant'
import { appHost, titleToUrl } from '../../../components/utils'
import offlineIndicator from '../../../assets/images/icons/offlineIndicator.svg'
import onlineIndicator from '../../../assets/images/icons/onlineIndicator.svg'
import hybridIndicator from '../../../assets/images/icons/hybridIndicator.svg'
import { Badge } from 'antd'
const LikeIcon = <AiOutlineHeart />
const ShareIcon = <AiOutlineShareAlt />
const StarIcon = <AiFillStar />
const EmiIcon = <IoCashOutline />
const ArrowIcon = <AiOutlineRise />
const TimerIcon = <RiTimerLine />

// Need to understand...

// grossprice: number
// discountprice: number
// minimumprice: number
// effectiveprice: number

// approval === 1 === approved

export default function CourseCard({
  approval,
  category,
  description,
  effectiveprice,
  discoutprice,
  duration,
  emi,
  faculty,
  faqs,
  grossprice,
  highlights,
  id,
  images,
  institute,
  minimumprice,
  mode,
  name,
  objetives,
  ratings,
  ratingCount,
  requestApproval,
  studentsenrolled,
  syllabus,
  videos,
  classtype,
  promode,
}) {
  const [isLiked, setIsLiked] = useState(false)
  const [open, setOpen] = useState(false)
  const imageURL = images?.[0].url
  const style = {
    color: '#767676',
    margin: '4px 0',
  }

  const getClassType = (num) => {
    if (num === 1) {
      return 'Online'
    }
    if (num === 2) {
      return 'Offline'
    }
    if (num === 3) {
      return 'Hybrid'
    }
  }

  return (
    <>
      {promode ? (
        <Badge.Ribbon
          className='mt-3 '
          color='volcano'
          placement='start'
          text='PRO'
        >
          <div
            key={id}
            className='single-card rounded-3xl mb-12 relative w-[300px] sm:min-w-[320px] max-w-[350px]  transition-all duration-300 ease-in-out  shadow-4xl  lg:h-[400px] hover:shadow-[#7D23E0]/20  hover:shadow-3xl hover:scale-110  mx-2 '
          >
            <Link className='relative ' to={`/course/${titleToUrl(name)}`}>
              <img
                src={imageURL}
                alt={name}
                className='w-full h-[160px] rounded-t-3xl object-cover'
              />
              <div
                style={{
                  backdropFilter: 'blur(20px)',
                  background: 'rgba(0, 0, 0, 0.4)',
                }}
                className='absolute bottom-0 w-full flex bg-black/40 bg:blur-xl'
              >
                <p className='ml-auto px-2 flex space-x-2 text-white '>
                  {
                    <img
                      src={
                        classtype === 1
                          ? onlineIndicator
                          : classtype === 2
                          ? offlineIndicator
                          : hybridIndicator
                      }
                      alt=''
                    />
                  }
                  <span>{getClassType(classtype)}</span>
                </p>
              </div>
            </Link>
            <div
              onClick={(e) => {
                setIsLiked(!isLiked)
              }}
              style={{
                color: '#767676',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
              }}
              className={`lg:text-2xl text-2xl h-10 w-10   absolute top-2 right-0  bg-white flex items-center justify-center rounded-full active:opacity-75 cursor-pointer  ${
                isLiked && 'text-red'
              }`}
            >
              {isLiked ? (
                <HeartFilled className='text-red flex items-center ' />
              ) : (
                <HeartOutlined className='flex items-center' />
              )}
            </div>
            <div className='px-5 py-4'>
              <div className='flex justify-between items-center'>
                <div>
                  <Link to={`/institute/${titleToUrl(institute?.name)}`}>
                    <h4
                      style={style}
                      className='font-medium text-xl md:text-2xl hover:opacity-70 cursor-pointer truncate'
                    >
                      {institute?.name}
                    </h4>
                  </Link>
                  <Link to={`/course/${titleToUrl(name)}`}>
                    <h5 className='font-semibold text-base hover:opacity-70 cursor-pointer truncate '>
                      {name}
                    </h5>
                  </Link>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setOpen(true)
                  }}
                  className='rounded-full  text-lg md:text-2xl p-2 shadow-4xl hover:shadow-violet transition-all duration-300 ease-linear'
                >
                  {ShareIcon}
                </button>
              </div>
              <SharePopup
                TextToCopy={`${appHost}/course/${titleToUrl(name)}`}
                open={open}
                onClose={() => setOpen(false)}
              />
              <div className='md:flex items-center hidden'>
                {' '}
                <span style={{ color: '#44DDFF' }} className='mr-2'>
                  {TimerIcon}
                </span>
                <span style={style}>{duration}</span>
              </div>
              <div className='md:flex items-center hidden'>
                {' '}
                <span className='mr-2 bg-violet text-white rounded-full'>
                  {ArrowIcon}
                </span>{' '}
                <span style={style}>
                  {studentsenrolled || 0}+ Students joined recently
                </span>
              </div>
              <div className='flex justify-between'>
                <div className='hidden md:flex items-center'>
                  <span style={{ color: '#0D9F1C' }} className='mr-2'>
                    {EmiIcon}
                  </span>
                  <span style={style}> Emi {emi}</span>
                </div>
                <div className='flex items-center'>
                  <div
                    className='flex items-center text-white rounded-md  px-2 font-semibold  my-2 md:mt-0 text-xl '
                    style={{ backgroundColor: '#FFD130' }}
                  >
                    <span className='mr-1'>{ratings || 0}</span>
                    <span>{StarIcon}</span>
                  </div>
                  <span
                    className='block md:hidden ml-3 text-sm '
                    style={{ color: '#BDBDBD' }}
                  >
                    {ratingCount || 0}
                  </span>
                </div>
              </div>
              <div className='flex justify-between items-center'>
                <div className='flex flex-row md:flex-col items-center md:block '>
                  <p className='text-light-black font-semibold text-xl md:text-2xl mr-2 md:mr-0 '>
                    Rs. {effectiveprice}
                  </p>
                  <span className='text-base'>
                    <p
                      className='line-through text-xs '
                      style={{ color: '#E46060' }}
                    >
                      Rs. {grossprice}
                    </p>
                  </span>
                </div>
                <Link
                  to={`/course/${titleToUrl(name)}`}
                  className='items-center text-violet text-lg space-x-2 md:flex active:opacity-75 hidden'
                >
                  <span>view details </span>
                  <BsArrowRightCircle className='flex items-center' />
                </Link>
              </div>
            </div>
          </div>
        </Badge.Ribbon>
      ) : (
        <div
          key={id}
          className='single-card rounded-3xl mb-12 relative w-[300px] sm:min-w-[320px] max-w-[350px] mx-2 transition-all duration-300 ease-in-out  shadow-4xl  lg:h-[400px] hover:shadow-[#7D23E0]/20  hover:shadow-3xl hover:scale-110 '
        >
          <Link className='relative ' to={`/course/${titleToUrl(name)}`}>
            <img
              src={imageURL}
              alt={name}
              className='w-full h-[160px] rounded-t-3xl object-cover'
            />
            <div
              style={{
                backdropFilter: 'blur(20px)',
                background: 'rgba(0, 0, 0, 0.4)',
              }}
              className='absolute bottom-0 w-full flex bg-black/40 bg:blur-xl'
            >
              <p className='ml-auto px-2 flex space-x-2 text-white '>
                {
                  <img
                    src={
                      classtype === 1
                        ? onlineIndicator
                        : classtype === 2
                        ? offlineIndicator
                        : hybridIndicator
                    }
                    alt=''
                  />
                }
                <span>{getClassType(classtype)}</span>
              </p>
            </div>
          </Link>
          <div
            onClick={(e) => {
              setIsLiked(!isLiked)
            }}
            style={{
              color: '#767676',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
            }}
            className={`lg:text-2xl text-2xl h-10 w-10   absolute top-2 right-0 mr-4 mt-4 bg-white flex items-center justify-center rounded-full active:opacity-75 cursor-pointer  ${
              isLiked && 'text-red'
            }`}
          >
            {isLiked ? (
              <HeartFilled className='text-red flex items-center ' />
            ) : (
              <HeartOutlined className='flex items-center' />
            )}
          </div>
          <div className='px-5 py-4'>
            <div className='flex justify-between items-center'>
              <div>
                <Link to={`/institute/${titleToUrl(institute?.name)}`}>
                  <h4
                    style={style}
                    className='font-medium text-xl md:text-2xl hover:opacity-70 cursor-pointer truncate'
                  >
                    {institute?.name}
                  </h4>
                </Link>
                <Link to={`/course/${titleToUrl(name)}`}>
                  <h5 className='font-semibold text-base hover:opacity-70 cursor-pointer truncate '>
                    {name}
                  </h5>
                </Link>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setOpen(true)
                }}
                className='rounded-full  text-lg md:text-2xl p-2 shadow-4xl hover:shadow-violet transition-all duration-300 ease-linear'
              >
                {ShareIcon}
              </button>
            </div>
            <SharePopup
              TextToCopy={`${appHost}/course/${titleToUrl(name)}`}
              open={open}
              onClose={() => setOpen(false)}
            />
            <div className='md:flex items-center hidden'>
              {' '}
              <span style={{ color: '#44DDFF' }} className='mr-2'>
                {TimerIcon}
              </span>
              <span style={style}>{duration}</span>
            </div>
            <div className='md:flex items-center hidden'>
              {' '}
              <span className='mr-2 bg-violet text-white rounded-full'>
                {ArrowIcon}
              </span>{' '}
              <span style={style}>
                {studentsenrolled || 0}+ Students joined recently
              </span>
            </div>
            <div className='flex justify-between'>
              <div className='hidden md:flex items-center'>
                <span style={{ color: '#0D9F1C' }} className='mr-2'>
                  {EmiIcon}
                </span>
                <span style={style}> Emi {emi}</span>
              </div>
              <div className='flex items-center'>
                <div
                  className='flex items-center text-white rounded-md  px-2 font-semibold  my-2 md:mt-0 text-xl '
                  style={{ backgroundColor: '#FFD130' }}
                >
                  <span className='mr-1'>{ratings || 0}</span>
                  <span>{StarIcon}</span>
                </div>
                <span
                  className='block md:hidden ml-3 text-sm '
                  style={{ color: '#BDBDBD' }}
                >
                  {ratingCount || 0}
                </span>
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <div className='flex flex-row md:flex-col items-center md:block '>
                <p className='text-light-black font-semibold text-xl md:text-2xl mr-2 md:mr-0 '>
                  Rs. {effectiveprice}
                </p>
                <span className='text-base'>
                  <p
                    className='line-through text-xs '
                    style={{ color: '#E46060' }}
                  >
                    Rs. {grossprice}
                  </p>
                </span>
              </div>
              <Link
                to={`/course/${titleToUrl(name)}`}
                className='items-center text-violet text-lg space-x-2 md:flex active:opacity-75 hidden'
              >
                <span>view details </span>
                <BsArrowRightCircle className='flex items-center' />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
