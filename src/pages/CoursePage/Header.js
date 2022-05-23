import React, { useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import {
  ArrowRightOutlined,
  CloseCircleOutlined,
  HeartFilled,
  HeartOutlined,
  PlayCircleFilled,
  RightOutlined,
  ShareAltOutlined,
  StarFilled,
} from '@ant-design/icons'
import time from '../../assets/images/icons/time.png'
import emiIcon from '../../assets/images/icons/emi.png'
import locationIcon from '../../assets/images/icons/location.svg'
import certified from '../../assets/images/icons/certified.png'
import modeIcon from '../../assets/images/icons/mode_violet.svg'
import toast from 'react-hot-toast'
import offlineIndicator from '../../assets/images/icons/offlineIndicator.svg'
import onlineIndicator from '../../assets/images/icons/onlineIndicator.svg'
import hybridIndicator from '../../assets/images/icons/hybridIndicator.svg'
import videoImage from '../../assets/images/v-image.png'
import { Link, useNavigate } from 'react-router-dom'
import { BiShareAlt } from 'react-icons/bi'
import Carousel from 'react-elastic-carousel'
import imgProto from '../../assets/images/icons/img.svg'
import SharePopup from '../../components/UI/SharePopup'
import { useDispatch, useSelector } from 'react-redux'
import { selectCourse } from '../../redux/slices/courseSlice'
import { appHost, isEmpty, titleToUrl } from '../../components/utils'
import ReactPlayer from 'react-player'

export default function Header() {
  const [isActiveHeart, setHeart] = useState(false)
  const [courseMode, setCourseMode] = useState('online')
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { currentCourse } = useSelector(selectCourse)

  const {
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
  } = currentCourse

  // const { line1, line2, state, country } = institute?.locations?.[0]

  const modeToType = (mode, isLowerCase = false) => {
    if (mode === 1) {
      return isLowerCase ? 'online' : 'Online'
    } else if (mode === 2) {
      return isLowerCase ? 'offline' : 'Offline'
    } else if (mode === 3) {
      return isLowerCase ? 'hybrid' : 'Hybrid'
    }
  }

  return (
    <div name='Header' className=' '>
      <div className='bg-[#6E3DA5]  '>
        <div className=' px-3 sm:px-20 container mx-auto  text-white lg:flex flex-row-reverse justify-between md:py-10'>
          <section className='lg:w-5/12'>
            <Carousel
              itemsToShow={1}
              showArrows={false}
              renderPagination={({ pages, activePage, onClick }) => {
                return (
                  <div className='flex items-center space-x-2 '>
                    {pages?.map((page) => {
                      const isActivePage = activePage === page
                      return (
                        <div
                          className={`cursor-pointer  h-2 rounded-lg my-5 transition-all duration-500 ease-in-out ${
                            isActivePage ? 'bg-white w-28 ' : 'bg-gray/20 w-6'
                          }`}
                          key={page}
                          onClick={() => onClick(page)}
                          active={isActivePage}
                        />
                      )
                    })}
                  </div>
                )
              }}
            >
              {videos.map((item, i) => (
                <div
                  key={i}
                  className='video_container w-full md:w-[600px]   mx-2'
                >
                  <div className=''>
                    <div className='border relative border-white rounded-xl overflow-hidden h-fit'>
                      <ReactPlayer
                        playing
                        width='100%'
                        light={item?.url || item?.thumbnail?.url}
                        controls
                        playIcon={
                          <PlayCircleFilled className=' text-5xl cursor-pointer active:opacity-75' />
                        }
                        url={item?.url || item?.video?.url}
                      />
                      <div className=' group absolute top-5 right-5 md:top-10 md:right-10 p-3 bg-white flex rounded-lg gap-2 transition-all ease-in-out duration-300  cursor-pointer'>
                        <img src={imgProto} className='' alt='' />
                        <p
                          onClick={() =>
                            navigate(
                              '/content-gallery/course/' +
                                titleToUrl(currentCourse.name)
                            )
                          }
                          className='text-[#414141] hidden group-hover:block   '
                        >
                          See more
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {isEmpty(videos) && (
                <>
                  {[1].map((item, i) => (
                    <div key={i} className='video_container   mx-2'>
                      <div className='relative'>
                        <img
                          src={videoImage}
                          className=' w-full xl:w-[700px] '
                          alt=''
                        />
                        <PlayCircleFilled className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-7xl  text-5xl cursor-pointer active:opacity-75' />
                        <div className=' group absolute top-5 right-5 md:top-10 md:right-10 p-3 bg-white flex rounded-lg gap-2 transition-all ease-in-out duration-300  cursor-pointer'>
                          <img src={imgProto} className='' alt='' />
                          <p
                            onClick={() =>
                              navigate(
                                '/content-gallery/institute/' +
                                  titleToUrl(currentInstitute.name)
                              )
                            }
                            className='text-[#414141] hidden group-hover:block   '
                          >
                            See more
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </Carousel>
          </section>
          <div className='lg:w-6/12'>
            <section className=' my-1 cursor-pointer'>
              {/* <div className='flex items-center font-bold space-x-2 my-1'>
                <img
                  src={
                    mode === 1
                      ? onlineIndicator
                      : mode === 2
                      ? offlineIndicator
                      : hybridIndicator
                  }
                  alt=''
                />
                <p className=' uppercase xl:text-xl '>
                  {modeToType(mode)}
                  Course
                </p>
              </div> */}
              <p className=' text-3xl xl:text-5xl lg:text-4xl font-semibold '>
                {/* The Complete Digital <br /> Marketing Course */}
                {name}
              </p>
              <p className='text-md mt-3 xl:text-lg'>
                {description}
                {/* Master Digital Marketing Strategy, Social Media <br />
                Marketing,SEO,YouTube,Email,Facebook Marketing Analytics & More! */}
              </p>
            </section>

            <section className='statistics mt-10 xl:mb-8 mb-4'>
              <>
                <div className='info flex items-center sm:justify-between  space-x-5 '>
                  <div className='flex space-x-2 items-center'>
                    <div className=' rating flex xl:space-x-2 justify-between items-center bg-[#FFD130] px-2 py-1  md:text-xl text-sm rounded-md font-bold'>
                      <p className=''>{ratings || 0}</p>
                      <StarFilled />
                    </div>
                    <p className='lg:text-xl text-sm'>
                      {studentsenrolled} students enrolled
                    </p>
                  </div>
                  <div className='actions flex space-x-5 md:text-2xl'>
                    {isActiveHeart ? (
                      <HeartFilled
                        onClick={() => setHeart(!isActiveHeart)}
                        className={`flex   w-6 h-6 md:h-10 md:w-10 rounded-full shadow-sm  items-center justify-center cursor-pointer  text-red md:ring-2 ring-1 ring-white text-sm md:text-2xl `}
                      />
                    ) : (
                      <HeartOutlined
                        onClick={() => {
                          setHeart(!isActiveHeart)
                          toast.success('Added to Wishlist')
                        }}
                        className={`flex items-center text-sm  text-white   w-6 h-6 md:h-10 md:w-10 rounded-full shadow-sm justify-center cursor-pointer   md:ring-2 ring-1 ring-white md:text-2xl`}
                      />
                    )}
                    <BiShareAlt
                      onClick={() => setOpen(true)}
                      className='active:opacity-80 flex items-center text-sm  text-white   w-6 h-6 md:h-10 md:w-10 rounded-full shadow-sm justify-center cursor-pointer   md:ring-2 ring-1 ring-white md:text-2xl p-1'
                    />
                  </div>
                </div>
              </>
              <SharePopup
                TextToCopy={`${appHost}/course/${titleToUrl(
                  currentCourse.name
                )}`}
                open={open}
                onClose={() => setOpen(false)}
              />
            </section>

            <div className='border-b-0 border-l-0 border-r-0 border-2 border-dashed w-full my-5 hidden md:block' />
            <section className='  md:flex justify-between pb-[100px] '>
              <div className=' flex flex-col gap-2'>
                <div className='border-b-0 border-l-0 border-r-0 border-2 border-dashed w-full my-2  md:hidden' />
                <p className='2xl:text-3xl text-2xl   md:text-left'>
                  {institute.name}
                </p>
                <div className='flex space-x-2  '>
                  <img className=' h-6 mt-2' src={locationIcon} alt='' />
                  <p className=' text-md sm:text-lg  '>
                    {/* {line1},{line2}, {state}, {country} */}
                    {/* 273/2, Shahabad Mohammadpur,
                    <br /> Vasant Kunj, New Delhi-110061 */}
                    {/* {Object.keys(JSON.parse(institute.location)).map(
                      (item, i) => (
                        <span key={i}>
                       
                          {item}
                          {Object.keys(JSON.parse(institute.location))
                            .length !== i && <span>,</span>}
                        </span>
                      )
                    )} */}
                  </p>
                </div>
              </div>
              <Link
                to={`/institute/${titleToUrl(currentCourse.institute.name)}`}
                className=' w-fit  px-3 py-1 border border-white rounded-md flex space-x-2 h-fit justify-center items-center cursor-pointer active:opacity-75 my-5 text-white'
              >
                <p className='text-lg whitespace-nowrap'>View Institute</p>

                <ArrowRightOutlined className='text-md w-[20px] h-[20px] flex justify-center items-center ring-1 ring-white rounded-full' />
              </Link>
            </section>
          </div>
        </div>
      </div>

      <section className=' xl:max-w-[1100px]  Card flex justify-evenly text-[#414141]  p-10 md:p-5 rounded-3xl lg:flex-row flex-col shadow-[#7ab1dc]/20 shadow-lg bg-white mx-5   lg:space-x-5  -mt-[80px] mb-10 xl:mx-auto md:mx-10'>
        <div className=' px-2 py-1 flex flex-col items-center font-medium justify-center  '>
          <p className='text-xl xl:text-2xl font-bold  mb-3'>{duration}</p>
          <div className='flex items-center space-x-1'>
            <img className='w-4' src={time} alt='' />
            <p className='text-lg '>Duration</p>
          </div>
        </div>

        <div className=' lg:hidden border-2 my-3 border-[#7A81DC] lg:border-none border-dashed border-t-0 border-l-0 border-r-0  h-2 w-[100%] ' />

        <div className='px-2 py-1 flex flex-col items-center text-center font-medium   justify-center '>
          <p className='text-xl xl:text-2xl font-bold  mb-3'>
            {modeToType(mode)} Course
          </p>
          <div className='flex items-center space-x-1'>
            <img className='w-4' src={modeIcon} alt='' />
            <p className='text-lg  '>Mode</p>
          </div>
        </div>

        <div className=' lg:hidden border-2 my-3 border-[#7A81DC] lg:border-none border-dashed border-t-0 border-l-0 border-r-0  h-2 w-[100%] ' />

        <div className='px-2 py-1 flex font-medium flex-col items-center   justify-center '>
          <p className='text-xl xl:text-2xl font-bold  mb-3'>Rs.150/month</p>
          <div className='flex items-center space-x-1'>
            <img className='w-4' src={emiIcon} alt='' />
            <p className='text-lg '>EMI Options</p>
          </div>

          <div className=' lg:hidden border-2 my-3 border-[#7A81DC] lg:border-none border-dashed border-t-0 border-l-0 border-r-0  h-2 w-[100%]  ' />
        </div>
        <div className='text-center flex items-center flex-col my-auto '>
          <p className='text-2xl font-bold text-[#414141]'>
            Rs. {effectiveprice}
          </p>
          <del className=' text-red/70 text-xl'>Rs.{grossprice}</del>
        </div>
        <div className='flex flex-col justify-center my-5'>
          <Link
            to={`/payment/${titleToUrl(name)}`}
            className=' px-10 py-3 mx-auto bg-[#7D23E0] rounded-md mb-3 text-white active:opacity-80 text-xl lg:text-2xl '
          >
            Buy Now
          </Link>
          <div className='text-md text-center flex md-block justify-center space-x-2 md-text-sm'>
            <p>
              <sup>*</sup>15-Day Money-Back Guarantee
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
