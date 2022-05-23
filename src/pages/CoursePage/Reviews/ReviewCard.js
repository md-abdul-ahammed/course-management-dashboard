import {
  CloseCircleOutlined,
  CommentOutlined,
  DeleteOutlined,
  EditOutlined,
  LikeFilled,
  LikeOutlined,
  MoreOutlined,
  ShareAltOutlined,
  StarFilled,
} from '@ant-design/icons'
import { Rate } from 'antd'
import moment from 'moment'
import React, { useState } from 'react'
import c1 from '../../../assets/images/c1.png'
import c2 from '../../../assets/images/c2.png'
import c3 from '../../../assets/images/c3.png'
import c4 from '../../../assets/images/c4.png'
import { BiCommentDetail } from 'react-icons/bi'
import reviewImg from '../../../assets/images/reviewImg.png'
import bigVid from '../../../assets/images/bigVid.png'
import bigPic from '../../../assets/images/bigPic.png'
import deepika from '../../../assets/images/deepika.png'
import tarun from '../../../assets/images/tarun.png'
import playIcon from '../../../assets/images/icons/playIcon.svg'
import { IoIosRocket } from 'react-icons/io'
import MoreOption from '../../../components/MoreOption'
import { Rating } from '@mui/material'
import Modal from '../../../components/Modal/Modal'
import imgProto from '../../../assets/images/icons/img.svg'
import user from '../../../assets/images/icons/user.svg'

export default function ReviewCard({
  review = {
    quotes:
      " This course is definitely above expectations so far. I didn't expect to get so much insight into the briefing and the communication between UX Designer and a client.",
    ratings: 5,
  },
}) {
  const [open, setOpen] = useState(false)
  const [activeModal, setActiveModal] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isViewComment, setViewComment] = useState(false)
  const [isUpvoted, setIsUpvoted] = useState(false)
  const [isSelected, setIsSelected] = useState(review.ratings)
  const [activeContent, setActiveContent] = useState({})

  const reviewClassHandler = (item) => {
    let classes =
      'shadow-lg px-2  w-fit h-fit  flex items-center space-x-1 justify-center rounded-lg cursor-pointer border border-[#D7D7D7] '
    if (isSelected === 1 && item === 1) {
      classes += 'text-white  bg-red_deep'
    } else if (isSelected === 2 && item <= 2) {
      classes += ' bg-light_red border-light_red'
      if (item < 2) {
        classes += ' text-light_red'
      } else {
        classes += ' text-white'
      }
    } else if (isSelected === 3 && item <= 3) {
      if (item < 3) {
        classes += ' text-light_red'
      } else {
        classes += ' text-white'
      }
      classes += ' bg-light_yellow border-light_yellow'
    } else if (isSelected === 4 && item <= 4) {
      if (item < 4) {
        classes += ' text-light_green'
      } else {
        classes += ' text-white'
      }
      classes += ' bg-light_green border-light_green'
    } else if (isSelected === 5 && item <= 5) {
      if (item < 5) {
        classes += ' text-deep_green'
      } else {
        classes += ' text-white'
      }
      classes += ' bg-deep_green border-deep_green'
    } else {
      return classes
    }
    return classes
  }
  const contents = [
    {
      thumbnail: c1,
      url: '',
      type: 'img',
      content: bigPic,
    },
    {
      thumbnail: c2,
      url: '',
      type: 'img',
      content: bigPic,
    },
    {
      thumbnail: c3,
      url: '',
      type: 'video',
      content: bigVid,
    },
    {
      thumbnail: c4,
      url: '',
      type: 'video',
      content: bigVid,
    },
  ]
  const comments = [
    {
      userName: 'Tarun',
      userPic: tarun,
      date: Date.now(),
      comment: 'Great work Deepika, keep it up!',
    },
    {
      userName: 'Deepika',
      userPic: deepika,
      date: Date.now(),
      comment: 'Thank you, Tarun.',
    },
    {
      userName: 'Deepika',
      userPic: deepika,
      date: Date.now(),
      comment: 'Thank you, Tarun.',
    },
    {
      userName: 'Deepika',
      userPic: deepika,
      date: Date.now(),
      comment: 'Thank you, Tarun.',
    },
  ]
  return (
    <div className={`relative m-10 max-w-[600px] min-w-[300px] `}>
      <div
        className={`  shadow-[#7ab1dc]/20 shadow-3xl px-6 py-4 rounded-lg flex flex-col space-y-5   ${
          isViewComment && 'rounded-b-none '
        }`}
        // onClick={() => setViewComment(false)}
      >
        <div className='flex md:items-center justify-between'>
          <div className='flex items-center md:space-x-5 space-x-2'>
            <img className='w-12 h-12' src={reviewImg} alt='' />

            <div className='font-semibold '>
              <h1 className='xl:text-xl text-[#414141]'>Neena Sharma</h1>
              <div>
                <p className='xl:text-md text-gray'>
                  {moment(Date.now()).format('MMMM , YYYY')}
                </p>
                <Rating
                  value={5}
                  disabled
                  className='text-sm md:hidden text-yellow'
                />
              </div>
            </div>
          </div>
          <div className='flex space-x-5 items-center'>
            <Rate
              value={5}
              disabled
              className=' md:text-md text-xs hidden md:block'
            />

            <MoreOption className={'text-xl'}>
              <div
                onClick={() => {
                  setOpen(true)
                  setActiveModal(1)
                }}
                className='flex space-x-2  items-center  hover:opacity-80 p-2 '
              >
                <EditOutlined className='flex items-center' />
                <p>Edit</p>
              </div>
              <div className='flex space-x-2 items-center  hover:opacity-80 p-2'>
                <DeleteOutlined className='flex items-center' />
                <p>Delete</p>
              </div>
            </MoreOption>
          </div>
        </div>

        <div className='flex flex-col  my-2 text-gray font-medium '>
          <p className='xl:text-xl text-lg'>
            {review.quotes}{' '}
            <span className=' text-[#7D23E0] cursor-pointer  text-lg'>
              Show More
            </span>
          </p>
        </div>
        <div className='flex items-center no-scrollbar space-x-2 overflow-scroll   '>
          {contents.slice(0, 5).map((item, i) => (
            <div key={i} className='relative cursor-pointer'>
              <img
                className='w-[80px]'
                onClick={() => {
                  setIsModalOpen(true)
                  setActiveContent(item)
                }}
                src={item.thumbnail}
                alt=''
              />
              {item.type === 'video' && (
                <div className='w-7 h-7 absolute flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-white rounded-full '>
                  <img
                    onClick={() => {
                      setIsModalOpen(true)
                      setActiveContent(item)
                    }}
                    src={playIcon}
                    className='hover:scale-110 cursor-pointer'
                    alt=''
                  />
                </div>
              )}
              <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className='relative m-10 bg-white'>
                  <img
                    src={activeContent.content}
                    alt=''
                    className='h-full w-full'
                  />
                  {activeContent.type === 'video' && (
                    <div className='w-20 h-20 absolute flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-white rounded-full '>
                      <img
                        onClick={() => {
                          setIsModalOpen(true)
                          setActiveContent(item)
                        }}
                        src={playIcon}
                        className='h-10  ml-2 hover:scale-110 cursor-pointer'
                        alt=''
                      />
                    </div>
                  )}

                  <CloseCircleOutlined
                    onClick={() => setIsModalOpen(false)}
                    className='text-xl text-white absolute -top-10 -right-10'
                  />
                </div>
              </Modal>
            </div>
          ))}
        </div>

        <div
          className={` flex sm:justify-center justify-between  sm:space-x-10 md:hidden text-gray-400 font-medium `}
        >
          <div
            onClick={() => setIsUpvoted((prev) => !prev)}
            className='flex space-x-2  items-center text-lg cursor-pointer w-[100px]'
          >
            {isUpvoted ? (
              <LikeFilled className='text-2xl flex items-center text-[#7D23E0]' />
            ) : (
              <LikeOutlined className='text-2xl flex items-center' />
            )}
            <span className=''>{isUpvoted ? '120K' : 'Upvote'}</span>
          </div>
          <div className='flex space-x-2  items-center text-lg cursor-pointer'>
            <ShareAltOutlined className='text-2xl flex items-center' />
            <span className=''>Share</span>
          </div>
          <div
            onClick={() => setViewComment((prev) => !prev)}
            className='  flex space-x-2  items-center text-lg cursor-pointer '
          >
            <BiCommentDetail className='text-2xl flex items-center' />
            <span className=''>{comments.length}</span>
          </div>
        </div>

        <div className='relative select-none hidden md:block '>
          <div className='  flex sm:justify-between font-semibold text-gray'>
            <div className='  flex sm:justify-center justify-between  sm:space-x-10'>
              <div
                onClick={() => setIsUpvoted((prev) => !prev)}
                className='flex space-x-2  items-center text-lg cursor-pointer w-[100px]'
              >
                {isUpvoted ? (
                  <LikeFilled className='xl:text-2xl flex items-center text-[#7D23E0]' />
                ) : (
                  <LikeOutlined className='xl:text-2xl flex items-center' />
                )}
                <span className=''>{isUpvoted ? '120K' : 'Upvote'}</span>
              </div>
              <div className='flex space-x-2  items-center text-lg cursor-pointer'>
                <ShareAltOutlined className='text-2xl flex items-center' />
                <span className=''>Share</span>
              </div>
            </div>
            <div
              onClick={() => setViewComment((prev) => !prev)}
              className='  md:flex space-x-2 text-[#7D23E0]  items-center text-lg cursor-pointer '
            >
              <BiCommentDetail className='text-2xl flex items-center' />
              <span className=''>
                <span className='xl:inline hidden'>View </span>Comments
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=''>
        {isViewComment && (
          <div
            className={`pb-5 space-y-5 w-full shadow-lg shadow-gray/90 px-6  rounded-lg flex flex-col bg-white z-[999] rounded-t-none md:absolute  `}
          >
            <p className='xl:text-2xl text-xl'>Comments</p>
            <div className=' overflow-y-scroll no-scrollbar space-y-5 h-[250px]'>
              {comments.map((item, i) => (
                <div className='space-x-5 flex items-start font-semibold text-[#414141]'>
                  <img
                    className='xl:w-12 xl:h-12 w-8'
                    src={item.userPic}
                    alt=''
                  />

                  <div className='bg-gray/10  px-4 py-2 w-full rounded-lg'>
                    <h1 className='xl:text-xl text-lg '>{item.userName}</h1>
                    <span className='text-gray sm:text-md text-xs'>
                      {moment(item.date).format('DD MMM YYYY')}
                    </span>
                    <p className='pt-2 xl:text-lg font-medium text-sm'>
                      {item.comment}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className=' text-gray-400 text-lg font-semibold space-y-2'>
              <div className='flex space-x-5'>
                <div className='rounded-xl bg-gray/20 flex space-x-2 items-center justify-center px-2 py-1  h-fit '>
                  <div className='w-6 h-6 flex items-center justify-center bg-white rounded-full '>
                    <IoIosRocket className='text-[#7D23E0]' />
                  </div>
                  <span>120</span>
                </div>
                <div className='flex items-center justify-center space-x-2'>
                  <BiCommentDetail className='text-xl' />
                  <span>{comments.length}</span>
                </div>
              </div>
              <div className='flex sm:space-x-5 space-x-2 border border-1 border-gray/20 md:px-5 px-2 py-2 rounded-lg text-sm sm:text-md'>
                <img
                  className='xl:w-12 xl:h-12 w-8 h-8'
                  src={comments[0].userPic}
                  alt=''
                />
                <input
                  type='text'
                  className='outline-none border-none focus:outline-none focus:border-none w-full'
                  placeholder='Type your comment..'
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <Modal open={open} setOpen={setOpen}>
        {activeModal === 1 ? (
          <div className=' bg-white p-4 rounded-lg'>
            <div className='flex justify-between text-2xl items-center'>
              <span className=''>Edit Review</span>
              <CloseCircleOutlined
                className='cursor-pointer'
                onClick={() => setOpen(false)}
              />
            </div>
            <div className='flex space-x-2 py-5 text-[#D7D7D7] select-none  justify-center md:justify-start'>
              {[1, 2, 3, 4, 5].map((item, i) => (
                <div
                  key={i}
                  className={reviewClassHandler(item)}
                  onClick={() => setIsSelected(item)}
                >
                  <p className='text-lg font-bold'>{item}</p>
                  <StarFilled className='text-lg mb-1' />
                </div>
              ))}
            </div>

            <div className='flex flex-col space-y-2 '>
              <p>Add Photos/videos</p>
              <div
                className='
                    w-[100%] h-[154px] md:h-[277px] border border-gray flex items-center justify-center rounded-md cursor-pointer
                    '
              >
                <img className='w-[30px] h-[30px] ' src={imgProto} alt='' />
              </div>
              <div className='flex h-[93px] p-2 space-x-2 border border-gray rounded-md'>
                <img className='w-[25px] h-[25px] ' src={user} alt='' />
                <textarea
                  defaultValue={review.quotes}
                  onChange={(e) => (review.quotes = e.target.value)}
                  placeholder='Write your Review'
                  className='border-none outline-none active:outline-none active:border-none w-full resize-none'
                />
              </div>
              <button
                onClick={() => setActiveModal(2)}
                className='font-lg px-2 py-1 ml-auto  text-white bg-[#7D23E0] rounded-sm active:opacity-75'
              >
                Update Review
              </button>
            </div>
          </div>
        ) : activeModal === 2 ? (
          <div className='bg-white  flex flex-col items-center md:gap-10 space-y-5 md:space-y-0 md:w-[400px] mx-auto  p-8 rounded-xl'>
            <p className='md:text-2xl text-xl text-center'>
              <span className='text-[#7D23E0]'>Updating</span> the review done !
            </p>
            <button
              className='bg-[#7D23E0] text-white md:text-xl text-lg rounded-md px-5 py-1'
              onClick={() => {
                setOpen(false)
                setActiveModal(0)
              }}
            >
              Close
            </button>
          </div>
        ) : null}
      </Modal>
    </div>
  )
}
