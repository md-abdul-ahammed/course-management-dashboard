import React from 'react'
import { Link } from 'react-router-dom'
import { titleToUrl } from '../../../../components/utils'

const CategoryCard = ({ currentValue, className }) => {
  return (
    <Link
      to={`/search/${titleToUrl(currentValue.title)}`}
      key={currentValue.id}
      className={`normal-card overflow-hidden rounded-3xl hover:scale-110 transition-all duration-300 ${className}`}
      style={{
        boxShadow: '0px 0px 31.2346px -6.24691px rgba(125, 35, 224, 0.15)',
      }}
    >
      <img style={{ height: '160px' }} src={currentValue.src} />
      <p className='text-center p-2 my-2 text-light-black md:text-lg font-bold font-dm-sans'>
        {currentValue.title}
      </p>
    </Link>
  )
}

export default CategoryCard
