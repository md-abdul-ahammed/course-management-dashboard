import React, { useState } from 'react'
import stats from '../../assets/images/icons/statistics.png'
import connection from '../../assets/images/icons/connecion.png'
import message from '../../assets/images/icons/message.svg'
import poster from '../../assets/images/icons/poster.png'
import like from '../../assets/images/icons/like.png'
import Container from '../../components/layout/Container'

export default function CourseOverview() {
  const [readMore, setReadMore] = useState(false)
  const keyPoints = [
    {
      title: '22.5 hours on-demand videos and recording',
      icon: stats,
    },
    {
      title: '8 downloadable resources',
      icon: connection,
    },
    {
      title: 'Full lifetime access of the recordings',
      icon: message,
    },
    {
      title: 'Get full time access of the recordings',
      icon: poster,
    },
    {
      title: 'Get an authorized certified of completion',
      icon: like,
    },
  ]
  return (
    <Container
      name='Overview'
      className=' container mx-auto course_overview grid grid-cols-1 place-items-center md:grid-cols-2 md:gap-10 
         py-10 xl:px-20 px-10 items-center text-[#414141]'
    >
      <div className='text-justify  '>
        <h1 className='lg:text-5xl text-3xl  text-rights font-semibold lg:mb-10'>
          Course Overview
        </h1>
        <div className={'text-xl  text-justify lg:block hidden '}>
          <p className='mb-3'>
            With over 20 hours of training, quizzes and practical steps you can
            follow - this is one of the most comprehensive digital marketing
            courses available. We'll cover SEO, YouTube Marketing, Facebook
            Marketing, Google Adwords, Google Analytics and more! The course is
            hugely interactive with projects, checklists & actionable lectures
            built into every section.
          </p>
          <p className='mb-3'>
            Learn step by step how to market a business online from scratch
            across all the major marketing channels. Follow the steps on screen
            to get results at work, for own business or for your digital
            marketing clients.
          </p>
          <p className='mb-3'>
            By the end of this course, you will be confidently implementing
            marketing strategies across the major online marketing channels. All
            the strategies, tips and tools recommended are either free or very
            cost effective.
          </p>
        </div>
        <div className='text-lg lg:hidden my-10'>
          <p>
            With over 20 hours of training, quizzes and practical steps you can
            follow - this is one of the most comprehensive digital marketing
            courses available.{' '}
            <span
              onClick={() => setReadMore(true)}
              className={
                'text-[#7D23E0] cursor-pointer ' + (readMore ? 'hidden' : null)
              }
            >
              Read More
            </span>
            {readMore && (
              <span>
                We'll cover SEO, YouTube Marketing, Facebook Marketing, Google
                Adwords, Google Analytics and more! The course is hugely
                interactive with projects, checklists & actionable lectures
                built into every section.
              </span>
            )}
            <span
              onClick={() => setReadMore(false)}
              className={
                'text-[#7D23E0] cursor-pointer ' + (readMore ? null : 'hidden')
              }
            >
              Read Less
            </span>
          </p>
        </div>
      </div>
      <div className='lg:px-10 py-5 p-5 ring-2 ring-[#7178D3] rounded-xl h-fit  font-medium  w-fit'>
        <h1 className='text-3xl pb-5'>Key Highlights</h1>
        <div className='space-y-5'>
          {keyPoints.map((item, i) => (
            <div key={i} className='flex items-center space-x-5 my-2'>
              <img className='w-6 h-6' src={item.icon} alt='' />
              <p className='md:text-lg'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
