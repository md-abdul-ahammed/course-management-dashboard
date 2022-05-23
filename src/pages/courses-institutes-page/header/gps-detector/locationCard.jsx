import { ClockCircleOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import { MdGpsFixed } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { authSelector } from '../../../../redux/slices/authSlice'
import GeoLocation from './GeoLocation'

const Location = () => {
  const [detect, setDetect] = useState(false)
  const { userLocation } = useSelector(authSelector)
  useEffect(() => {
    if (userLocation?.loaded) {
      setDetect(false)
    }
  }, [userLocation])

  console.log(userLocation)
  return (
    <div
      style={{ boxShadow: '0px 2px 40px rgba(125, 35, 224, 0.15)' }}
      className='absolute w-full flex flex-col  justify-center px-5  bg-white z-50 rounded-xl  divide-y-[.5px] divide-light-slate space-y-2 py-5'
    >
      {detect && <GeoLocation />}
      <div className='flex items-start '>
        <MdGpsFixed className='text-violet lg:text-2xl text-xl mr-3 mt-1' />
        <div
          className=' active:opacity-60 cursor-pointer'
          onClick={() => setDetect(true)}
        >
          <p className='text-violet font-dm-sans lg:text-xl'>
            Detect current location
          </p>
          <p style={{ color: '#AFAFAF' }} className='lg:text-lg'>
            Using GPS
          </p>
        </div>
      </div>
      <div>
        <p className='lg:text-xl  text-md text-gray'>Recent Locations</p>
        <div className='w-full divide-y-[.5px] space-y-2 divide-light-slate/10 font-medium text-gray bg-white'>
          <div className='flex items-center  space-x-5 lg:text-lg  lg:py-2 py-1 lg:ml-10 cursor-pointer'>
            <ClockCircleOutlined />
            <p>Saket, New Delhi</p>
          </div>
          <div className='flex items-center  space-x-5 lg:text-lg  lg:py-2 py-1 lg:ml-10 cursor-pointer'>
            <ClockCircleOutlined />
            <p>Hyderabad</p>
          </div>{' '}
          <div className='flex items-center  space-x-5 lg:text-lg  lg:py-2 py-1 lg:ml-10 cursor-pointer'>
            <ClockCircleOutlined />
            <p>Bangalore,India</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location
