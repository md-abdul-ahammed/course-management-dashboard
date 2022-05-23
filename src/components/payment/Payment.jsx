import React from 'react'

import Navbar from './components/navabr/Navbar'
// import './App.css'
import PaymentOptions from './section/payment_options'
import PaymentDetails from './section/paymnet_details'

function Payment() {
  return (
    <div className='mb-8'>
      <Navbar />
      <div className='max-w-full w-11/12 md:w-10/12 mx-auto container pt-16'>
        <h2 className='text-2xl md:text-3xl mb-4 mt-9 md:mt-2 capitalize font-semibold font-color-one font-semibold'>
          choose a payment method
        </h2>

        <div className='grid gap-5 md:grid-cols-12'>
          <div className='md:col-span-12 lg:col-span-8'>
            <PaymentOptions />
          </div>

          <div className='md:col-span-12 lg:col-span-4 '>
            <PaymentDetails />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
