import React from 'react'
import { BsChevronLeft } from 'react-icons/bs'

import './style.css'
import Data from './data'

const AvailableCoupon = (props) => {
  return (
    <div className='available_coupon shadow rounded-3xl px-7 py-4 mt-6'>
      <button
        onClick={props.handleActive}
        className=' flex items-center border-0 font-bold'
      >
        <BsChevronLeft className='mr-3 font-color-one' />{' '}
        <span className='font-color-two'>Coupons for you</span>
      </button>

      <div className='enter_coupon flex justify-between mt-3'>
        <input
          type='text'
          placeholder='Enter coupon code'
          className='outline-none'
        />
        <button className='border-0 font-color-two uppercase text-lg'>
          apply
        </button>
      </div>

      <h3 className='text-xl font-color-one font-medium p-2 my-3'>
        Available coupons
      </h3>

      <div className='overflow-y-scroll h-96'>
        {Data.map((d) => (
          <div key={d.id} className='my-2 shadow p-3'>
            <p className='font-color-one text-lg md:text-xl'>{d.desc}</p>
            <p className='text-base subtitle'>{d.subTitle}</p>
            <div className='flex items-center justify-between mt-4'>
              <div className='coupon_name font-color-two text-xl uppercase px-4'>
                {d.couponName}
              </div>
              <button className='border-0 font-color-two uppercase text-base'>
                apply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AvailableCoupon
