import React from 'react'
import PaymentCard from '../../../../components/paymentCard'
import SecureConnection from '../../../../components/secure_connection'
import './style.css'
import '../../../../App.css'

const CardInputField = () => {
  return (
    <PaymentCard className={'payment-card'}>
      <div className='font-color-one mb-4'>Name on card</div>
      <input
        type='text'
        placeholder='Name on card'
        className='p-5 w-full input-bg'
      />

      <div className='font-color-one mt-9 mb-4'>Card Number</div>
      <input
        type='number'
        placeholder='xxxx xxxx xxxx xxxx'
        className='p-6 w-full input-bg'
      />

      <div className='flex flex-col md:flex-row'>
        <div className='w-full'>
          <div className='font-color-one mt-9 mb-4'>Expiry Date</div>
          <input
            type='text'
            placeholder='MM/YY'
            className='p-6 w-full input-bg'
          />
        </div>
        <div className='w-full'>
          <div className='font-color-one mt-9 mb-4'>Security Code</div>
          <input
            type='password'
            placeholder='CVV/CVC'
            className='p-6 w-full input-bg ml-2'
          />
        </div>
      </div>

      <input type='checkbox' className='mr-3 mt-9 w-5 h-5' />
      <span for='checkbox' className='font-color-one'>
        Remember this card
      </span>

      <SecureConnection />
    </PaymentCard>
  )
}

export default CardInputField
