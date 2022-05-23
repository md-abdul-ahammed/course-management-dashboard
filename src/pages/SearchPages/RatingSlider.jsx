import { Slider } from 'antd'
import React, { useState } from 'react'

export default function RatingSlider({ onChange }) {
  const [value, setValue] = useState(null)
  const marks = {
    0: 'Any',
    1: '1.0',
    2: '2.0',
    3: '3.0',
    4: '4.0',
    5: '5.0',
  }
  const [rating, setRating] = useState(null)
  return (
    <div className=' sm:w-[300px] rounded-lg '>
      <div className=' px-10 py-5 rounded-lg bg-white '>
        <Slider
          onChange={(v) => {
            setValue(v)
            onChange(v)
          }}
          // onAfterChange={() => {
          //   onChange(value)
          // }}
          min={0}
          max={5}
          className='flex flex-col'
          // tooltipVisible={false}
          trackStyle={{ background: '#7d23e0' }}
          handleStyle={{ background: '#7d23e0' }}
          marks={marks}
          defaultValue={value}
        />
      </div>
      <div className='flex p-2  rounded-lg justify-between border  border-b-0 border-l-0  border-r-0 border-gray/10  bg-white '>
        <button
          onClick={() => {
            setRating(null)
            onChange(rating)
          }}
          className='text-violet text-sm px-8 py-1 font-medium'
        >
          Clear All
        </button>

        <button
          onClick={() => {
            onChange(rating)
          }}
          className='bg-violet text-white px-8 py-1 rounded-md '
        >
          Apply
        </button>
      </div>
    </div>
  )
}
