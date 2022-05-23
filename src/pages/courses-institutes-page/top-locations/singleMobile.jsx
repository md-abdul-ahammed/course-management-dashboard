import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsChevronRight, BsChevronUp, BsChevronDown } from 'react-icons/bs'
import Data from './data'
import './style.css'

const SHOW_BY_DEFAULT = 5

const SingleMobile = ({ className }) => {
  const [open, setOpen] = useState(false)
  const visibleOptions = open ? Data.length : SHOW_BY_DEFAULT

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <div
      className={`main mx-auto w-11/12 flex justify-center items-center z-20 flex-wrap ${className}`}
    >
      <>
        {Data.slice(0, visibleOptions).map((d) => (
          <Link
            to={`/search/locations/${d.title}`}
            key={d.id}
            className='text-light-black single bg-white flex items-center justify-between rounded-xl p-4 mb-2'
          >
            <div className=' whitespace-nowrap overflow-ellipsis overflow-hidden w-64'>
              {d.title}
            </div>
            <span>
              <BsChevronRight />
            </span>
          </Link>
        ))}

        {Data.length > SHOW_BY_DEFAULT && (
          <div
            onClick={handleOpen}
            className='cursor-pointer flex justify-center items-center text-violet font-medium '
          >
            <div>{!open ? 'View More' : 'View Less'}</div>
            <span className='ml-1'>
              {!open ? <BsChevronDown /> : <BsChevronUp />}
            </span>
          </div>
        )}
      </>
    </div>
  )
}

export default SingleMobile
