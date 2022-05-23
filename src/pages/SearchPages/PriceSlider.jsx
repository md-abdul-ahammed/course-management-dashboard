import { Slider } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDebounce } from 'react-use'

export default function PriceSlider({ onChange }) {
  const marks = {
    0: '₹0',
    10000: '₹10,000+',
  }
  const [price, setPrice] = useState([10, 10000])

  return (
    <div className=' sm:w-[300px]  rounded-lg '>
      <div className='px-10 py-5  '>
        <Slider
          onAfterChange={() => onChange(price)}
          min={0}
          max={10000}
          onChange={(e) => {
            setPrice(e)
          }}
          value={price}
          range={{ draggableTrack: true }}
          tipFormatter={(value) => {
            return `₹ ${value}`
          }}
          className='flex flex-col z-[100]'
          trackStyle={{ background: '#7d23e0' }}
          marks={marks}
        />
      </div>
      <div className='flex p-2  rounded-lg justify-between border  border-b-0 border-l-0  border-r-0 border-gray/10   '>
        <button
          onClick={() => {
            setPrice(null)
            onChange(null)
          }}
          className='text-violet text-sm px-8 py-1 font-medium'
        >
          Clear All
        </button>

        <button
          onClick={() => {
            setPrice(price)
            onChange(price)
          }}
          className='bg-violet text-white px-8 py-1 rounded-md '
        >
          Apply
        </button>
      </div>
    </div>
  )
}
