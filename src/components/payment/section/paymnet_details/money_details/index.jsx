import React from 'react'
import Data from './data'
import './style.css'

const MoneyDetails = () => {
  return (
    <div className='w-full mt-6 radius shadow px-7 py-4'>
      {Data.map((d) => (
        <div className='flex justify-between' key={d.id}>
          <div
            className={
              d.title === 'Coupon'
                ? 'font-color-two font-medium'
                : 'regular mt-1 font-medium' && d.title === 'Discount'
                ? 'discount font-medium'
                : 'regular mt-1 font-medium' && d.title === 'Total'
                ? 'font-color-one text-2xl mt-5 font-medium'
                : 'regular mt-1 font-medium'
            }
          >
            {d.title}
          </div>
          <div
            className={
              d.title === 'Coupon'
                ? 'font-color-two font-medium'
                : 'regular mt-1 font-medium' && d.title === 'Discount'
                ? 'discount font-medium'
                : 'regular mt-1 font-medium' && d.title === 'Total'
                ? 'font-color-one text-2xl mt-5 font-medium'
                : 'regular mt-1 font-medium'
            }
          >
            {' '}
            {d.icon} {d.price}
          </div>
        </div>
      ))}
    </div>
  )
}

export default MoneyDetails
