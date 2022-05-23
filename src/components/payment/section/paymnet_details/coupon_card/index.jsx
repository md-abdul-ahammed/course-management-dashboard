import React from 'react'
import { RiCoupon3Line } from 'react-icons/ri'
import { BiChevronRight } from 'react-icons/bi'

import './style.css'
const CouponCard = (props) => {
  return (
    <button
      onClick={props.handleActive}
      className='coupon w-full mt-6 shadow radius px-7 py-4 text-xl font-bold'
    >
      <div className='flex justify-between'>
        <div className='text-lg'>
          <RiCoupon3Line className='inline mr-1 mb-1 text-2xl' />
          Use coupons
        </div>
        <BiChevronRight className='inline mr-1 mt-1 text-2xl' />
      </div>
    </button>
  )
}

export default CouponCard
