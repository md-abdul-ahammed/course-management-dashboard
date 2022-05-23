import React from 'react'
import Button from '../../../components/button/index'
import './style.css'

const PaymentButton = ({ total, content, icon }) => {
  return (
    <div className='payment-btn flex items-center justify-between sticky bottom-0 p-3 md:p-0 mt-1 md:mt-0 md:static w-full mx-0'>
      <div className='w-4/12 mt-5 flex md:hidden flex-col mr-5 font-color-one capitalize'>
        total{' '}
        <div className='flex items-center'>
          {' '}
          <img src={icon} className='w-4 h-4 inline mr-2' alt='' />
          <div className='font-medium text-lg'>{total}</div>
        </div>{' '}
      </div>
      <Button
        content={content}
        className='radius capitalize text-lg md:text-xl w-9/12 md:w-full md:mt-1'
      />
    </div>
  )
}

export default PaymentButton
