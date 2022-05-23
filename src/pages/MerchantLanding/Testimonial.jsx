import React from 'react'
import Carousel from 'react-elastic-carousel'
import TestimonialCard from './TestimonialCard'

export default function Testimonial() {
  return (
    <section className='   flex flex-col items-center lg:py-24  px-5 pt-5 mb-14 lg:pt-0  xl:px-32   lg:mb-10'>
      <h1 className='text-2xl lg:text-4xl xl:text-5xl font-bold text-center text-violet lg:mb-16 mb-10'>
        Why
        <span className='text-slate'> do our partners love us?</span>
      </h1>
      <Carousel
        showArrows={false}
        renderPagination={({ pages, activePage, onClick }) => {
          return (
            <div className='flex items-center space-x-2 mt-8'>
              {pages.map((page) => {
                return (
                  <div
                    className={`cursor-pointer  h-3 rounded-lg transition-all duration-500 ease-in-out  ${
                      activePage === page ? 'bg-violet w-40 ' : 'bg-gray/20 w-6'
                    }`}
                    key={page}
                    onClick={() => onClick(page)}
                  />
                )
              })}
            </div>
          )
        }}
      >
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </Carousel>
    </section>
  )
}
