import React from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

const SearchHead = ({ onClick, currentValue }) => {
  return (
    <div className='flex items-center justify-between' onClick={onClick}>
      <div className='flex items-center'>
        <IoLocationOutline className='text-violet text-2xl md:ml-4 mr-2' />
        <div className='font-dm-sans md:text-xl text-sm text-light-black w-full truncate'>
          <input
            type='text'
            className='w-full outline-none'
            placeholder='Search location here'
          />
        </div>
      </div>
      <div className='md:ml-4 mr-2'>
        {currentValue ? <BsChevronUp /> : <BsChevronDown />}
      </div>
    </div>
  )
}

export default SearchHead
