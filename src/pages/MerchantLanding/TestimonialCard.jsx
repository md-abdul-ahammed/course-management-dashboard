import React, { useState } from 'react'
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'
import TempImage from '../../assets/deen_bandhu.png'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'

const TestimonialCard = () => {
  const testimonials = [
    {
      src: TempImage,
      name: 'Deen Bandhu Tewary',
      description:
        'Partnering with Ostello has made it so easy to reach the right students. On top of that the team here has been so helpful! They are always there with quick replies or new ideas on how we can better promote our courses .',
    },
  ]

  const [current, setCurrent] = useState(testimonials[0])

  return (
    <div className='mx-2'>
      <div
        className='  px-5  rounded-[46px] bg-gradient-to-r from-vizard  via-cyan to-turquoise lg:bg-gradient-to-r flex flex-col items-center  py-10 lg:py-12   '
        style={{
          boxShadow:
            'inset -20px -20px 50px rgba(0, 112, 171, 0.25), inset 20px 20px 50px rgba(255, 255, 255, 0.4',
        }}
      >
        <div className='flex flex-col-reverse lg:flex-row h-full '>
          <div className='lg:w-1/2 flex justify-center lg:justify-end items-center'>
            <img
              loading='lazy'
              src={current.src}
              alt=''
              className='xl:max-w-[420px]  w-auto mb-16 lg:mb-0 xl:mr-20 rounded-full '
            />
          </div>
          <div className='flex-col-reverse  lg:flex-col flex  lg:ml-16 lg:w-1/2 '>
            <h2 className='text-xl lg:text-4xl text-center lg:text-left font-bold text-violet mb-7 lg:mt-10 lg:mb-3 mt-5'>
              {current.name}
            </h2>

            <div className='flex'>
              <RiDoubleQuotesL
                size={100}
                className='text-black  block h-fit w-fit  text-xl '
              />
              <p className='  md:text-xl'>
                <span></span> {current.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
