import React, { useState } from 'react'

import CouponCard from './coupon_card'
import AvailableCoupon from './coupon_card/available_coupons'
import MoneyDetails from './money_details'
import PaymentButton from './payment_button'
import XyzCard from './product_details'
import Referral from './referral_code'
import './style.css'
import Rubee from '../../assets/RubeeGray.svg'

const PaymentDetails = () => {
  const [active, setActive] = useState(false)
  const handleActive = () => {
    setActive(!active)
  }
  return (
    <div className='h-screen'>
      <div className='my-2 text-lg font-bold font-color-one capitalize md:hidden'>
        order details
      </div>
      {active ? (
        <AvailableCoupon handleActive={handleActive} />
      ) : (
        <>
          <XyzCard />
          <Referral />
          <CouponCard handleActive={handleActive} />
          <MoneyDetails />
        </>
      )}
      <PaymentButton total={`33`} icon={Rubee} content='complete payment' />
    </div>
  )
}

export default PaymentDetails
