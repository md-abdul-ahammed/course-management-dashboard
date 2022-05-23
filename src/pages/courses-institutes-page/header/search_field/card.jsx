import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
const Card = ({ currentValue }) => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate(currentValue.url)}
      style={{ borderBottom: '1px solid #E8E8E8' }}
      key={currentValue.id}
      className='flex bg-white p-2 cursor-pointer'
    >
      <img
        src={currentValue.img}
        className='w-[100px]'
        alt={currentValue.name}
      />
      <div className='ml-2'>
        <h4 className='text-lg text-light-black'>{currentValue.name}</h4>
        <div style={{ color: '#939393' }} className='text-base mb-2'>
          {currentValue.type}
        </div>
        <div
          className='flex justify-center items-center w-fit space-x-2 text-white font-semibold'
          style={{
            backgroundColor: '#1CC24B',
            borderRadius: '6px',
            padding: '2px 6px',
          }}
        >
          <span>{currentValue.rate || 0}</span>
          <span>
            <AiFillStar />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card
