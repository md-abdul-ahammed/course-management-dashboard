import React from 'react'
import { Link } from 'react-router-dom'
import Btn from './Btn'

const BannerCard = ({ currentValue }) => {
  return (
    <div key={currentValue.id} className='course-bg h-full rounded-2xl mx-5'>
      <div
        style={{
          zIndex: '1',
        }}
        className=' absolute bottom-0 top-0 left-0 right-0 bg-[rgba(0,0,0,0.4)]'
      ></div>
      <div className='text-center  py-10' style={{ zIndex: '2' }}>
        <h3 className='text-white font-semibold text-3xl md:text-4xl lg:text-6xl my-4'>
          {currentValue.title}
        </h3>
        <p className='text-white font-medium text-xl md:text-3xl w-60 mb-5 mx-auto leading-5'>
          {currentValue.desc}
        </p>
        <Link to={'/merchant/signup'}>
          <Btn title='Register Now' />
        </Link>
      </div>
    </div>
  )
}

export default BannerCard
