import React from 'react'
import { Link } from 'react-router-dom'
import { titleToUrl } from '../../../../components/utils'

const SliderCard = ({ currentValue, className }) => {
  return (
    <Link
      to={`/search/${titleToUrl(currentValue.title)}`}
      key={currentValue.id}
      className={`slider-card overflow-hidden rounded-2xl hover:scale-110 duration-300 transition-all ${className}`}
      style={{
        boxShadow: '0px 0px 31.2346px -6.24691px rgba(125, 35, 224, 0.15)',
      }}
    >
      <div className=''>
        <img className='h-28' src={currentValue.src} alt='' />
        <p className='font-dm-sans text-center p-2 my-2 text-light-black text-lg font-bold'>
          {currentValue.title}
        </p>
      </div>
    </Link>
  )
}

export default SliderCard
