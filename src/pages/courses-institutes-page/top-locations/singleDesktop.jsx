import React from 'react'
import { Link } from 'react-router-dom'
import { BsChevronRight } from 'react-icons/bs'
import Data from './data'
import './style.css'

const SingleDesktop = ({ className }) => {
  return (
    <div
      className={`main mx-auto w-10/12 flex justify-center items-center z-20 flex-wrap ${className}`}
    >
      <>
        {Data.map((d) => (
          <Link
            to={`/search/locations/${d.title}`}
            key={d.id}
            className='font-dm-sans single text-black bg-white flex items-center justify-between rounded-xl px-4 py-5 mb-2 mx-8'
          >
            <div className='w-64 whitespace-nowrap overflow-ellipsis overflow-hidden text-light-black text-md xl:text-lg'>
              {d.title}
            </div>
            <span>
              <BsChevronRight />
            </span>
          </Link>
        ))}
      </>
    </div>
  )
}

export default SingleDesktop
