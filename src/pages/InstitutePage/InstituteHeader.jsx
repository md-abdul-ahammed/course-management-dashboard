import React, { useEffect, useState } from 'react'

import {
  HeartFilled,
  HeartOutlined,
  PlayCircleFilled,
  ShareAltOutlined,
  StarFilled,
} from '@ant-design/icons'

import toast from 'react-hot-toast'
import Carousel from 'react-elastic-carousel'
import videoImage from '../../assets/images/videoImg.png'
import locationIcon from '../../assets/images/icons/location.svg'
import { useNavigate } from 'react-router-dom'
import SharePopup from '../../components/UI/SharePopup'
import imgProto from '../../assets/images/icons/img.svg'
import { useDispatch, useSelector } from 'react-redux'
import { selectCourse } from '../../redux/slices/courseSlice'
import { institutesSelector } from '../../redux/slices/instituteSlice'
import { appHost, isEmpty, titleToUrl } from '../../components/utils'
import ReactPlayer from 'react-player'

export default function InstituteHeader() {
  const [isActiveHeart, setHeart] = useState(false)
  const [videos, setVideos] = useState([])
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const { currentInstitute } = useSelector(institutesSelector)
  const [loadInactive, setLoadInactive] = useState(false)

  useEffect(() => {
    if (!isEmpty(currentInstitute.videos)) {
      setVideos(currentInstitute.videos)
      return
    }

    if (!isEmpty(currentInstitute.updatedRequest.videos) && loadInactive) {
      console.log('a')
      setVideos(currentInstitute.updatedRequest.videos)
    }
  }, [currentInstitute, loadInactive])
  console.log(videos, 'videos')
  const { line1, line2, state, country } = currentInstitute?.locations[0]
  return (
    <div name='Header' className=' '>
      <div className='bg-[#282828] py-5 md:py-20 '>
        <div className=' px-3 sm:px-20 container mx-auto  text-white lg:flex  flex-row-reverse justify-between '>
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
                        light={item.thumbnail.url}
                        controls
                        playIcon={
                          <PlayCircleFilled className=' text-5xl cursor-pointer active:opacity-75' />
                        }
                        url={item.video.url}
                      />
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
            <section className=' my-1 cursor-pointer  '>
              <div className=' text-3xl xl:text-6xl lg:text-4xl flex flex-col  font-semibold md:space-y-5'>
                <span>{currentInstitute.name} </span>
                {/* {
                  <span>
                    For {JSON.parse(currentInstitute.coursecategories)?.[0]}
                  </span>
                } */}
              </div>
              <p className='text-sm mt-3 xl:text-lg text-[#d8d8d8]'>
                Hybrid . Offline Timings : 11:30 AM to 9:30 PM{' '}
              </p>
            </section>
            <div className='border-b-0 border-l-0 border-r-0 border-2 border-dashed w-full my-5 hidden md:block' />

            <section className='  md:flex justify-between  text-[#d8d8d8] '>
              <div className=' flex flex-col gap-2'>
                <div className='border-b-0 border-l-0 border-r-0 border-2 border-dashed w-full my-2  md:hidden' />
                <div className='flex space-x-2 items-center '>
                  <img className=' md:h-8 mt-2' src={locationIcon} alt='' />
                  <p className=' md:text-lg  '>
                    {/* 273/2, Shahabad Mohammadpur, Vasant <br /> Kunj, New
                    Delhi-110061 */}
                    {line1},{line2},{state},{country}
                  </p>
                </div>
              </div>
            </section>

            <section className='statistics mt-10 xl:mb-8 mb-4 '>
              <>
                <div className='info flex items-center sm:justify-between  space-x-5 '>
                  <div className='flex space-x-2 items-center'>
                    <div className=' rating flex xl:space-x-2 justify-between items-center bg-[#FFD130] px-2 py-1  md:text-xl text-sm rounded-md font-bold'>
                      <p className=''>{currentInstitute.rating}</p>
                      <StarFilled />
                    </div>
                    <p className=' md:text-lg text-[#d8d8d8]'>
                      {0} students enrolled
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

                    <ShareAltOutlined
                      onClick={() => setOpen(true)}
                      className='active:opacity-80 flex items-center text-sm  text-white   w-6 h-6 md:h-10 md:w-10 rounded-full shadow-sm justify-center cursor-pointer   md:ring-2 ring-1 ring-white md:text-2xl r'
                    />
                  </div>
                  <SharePopup
                    TextToCopy={`${appHost}/institute/${titleToUrl(
                      currentInstitute.name
                    )}`}
                    open={open}
                    onClose={() => setOpen(false)}
                  />
                </div>
              </>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
