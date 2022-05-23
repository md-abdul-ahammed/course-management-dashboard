import { RightOutlined } from '@ant-design/icons'
import Carousel from 'react-elastic-carousel'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DemoCard } from '../../courses-institutes-page/popular-courses/data'
import axios from 'axios'
import { host } from '../../../util/constant/constant'
import CourseCard from '../../courses-institutes-page/popular-courses/CourseCard'
import { useDispatch, useSelector } from 'react-redux'
import { selectCourse, fetchCourses } from '../../../redux/slices/courseSlice'
import { institutesSelector } from '../../../redux/slices/instituteSlice'
import { isEmpty } from '../../../components/utils'

export default function CourseSection() {
  const { courses } = useSelector(selectCourse)
  const { currentInstitute } = useSelector(institutesSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCourses())
  }, [dispatch])
  const navigate = useNavigate()
  return (
    <div
      name='Courses'
      className='xl:px-10 px-5 sm:px-0 py-10 container  mx-auto'
    >
      {!isEmpty(courses) && (
        <section className='mb-20 md:mx-10 '>
          <div className='flex justify-between items-center  mb-10'>
            <h1 className='md:text-4xl text-3xl font-medium'>
              Similar Courses
            </h1>
            <button className='px-4 py-2 w-[157px] text-xl ring-1 md:flex justify-between items-center ring-[#7D23E0] text-[#7D23E0] rounded-lg active:opacity-75 hidden '>
              <p>View more</p>
              <RightOutlined className='text-[#7D23E0] text-lg' />
            </button>
          </div>
          <div className='md:flex  md:justify-start  my-16 lg:my-20 flex-col justify-center items-center lg:flex-row  lg:space-x-12 hidden'>
            {courses?.map((item) => (
              <CourseCard {...item} />
            ))}
          </div>
          <div className='md:hidden'>
            <Carousel
              renderPagination={({ pages, activePage, onClick }) => {
                return (
                  <div className='flex items-center space-x-2 mt-2'>
                    {pages?.map((page) => {
                      return (
                        <div
                          className={`cursor-pointer  h-2 rounded-lg transition-all duration-300 ease-in-out ${
                            activePage === page
                              ? 'bg-violet w-28 '
                              : 'bg-gray/20 w-6'
                          }`}
                          key={page}
                          onClick={() => onClick(page)}
                        />
                      )
                    })}
                  </div>
                )
              }}
              showArrows={false}
              itemsToShow={1}
              className='md:hidden '
            >
              {courses.map((item, i) => (
                <CourseCard key={item.id} {...item} />
              ))}
            </Carousel>
          </div>
          <button
            // onClick={() => navigate('/viewMoreCourse')}//
            className='my-10 px-4 py-2 w-[150px] text-xl ring-1  mx-auto flex justify-between items-center ring-[#7D23E0] text-[#7D23E0] rounded-lg active:opacity-75 md:hidden '
          >
            <p>View more</p>
            <RightOutlined className='text-[#7D23E0] text-lg' />
          </button>
        </section>
      )}

      {!isEmpty(currentInstitute.courses) && (
        <section className='md:mx-10'>
          <div className='flex justify-between items-center mb-10 '>
            <h1 className='md:text-3xl text-3xl font-medium '>
              Other Courses by
              {currentInstitute?.name}
              {/* XYZ <br className='lg:hidden' /> Design Academy */}
            </h1>
            <button className='px-4 py-2 w-[157px] text-xl ring-1 md:flex justify-between items-center ring-[#7D23E0] text-[#7D23E0] rounded-lg active:opacity-75 hidden'>
              <p>View more</p>
              <RightOutlined className='text-[#7D23E0] text-lg' />
            </button>
          </div>
          <div className='md:flex  md:  my-16 lg:my-20 flex-col justify-start items-center lg:flex-row  lg:space-x-12 hidden'>
            {currentInstitute?.courses?.map((item) => (
              <CourseCard
                key={item.id}
                institute={currentInstitute}
                {...item}
              />
            ))}
          </div>
          <div className='md:hidden'>
            <Carousel
              renderPagination={({ pages, activePage, onClick }) => {
                return (
                  <div className='flex items-center space-x-2 mt-2'>
                    {pages.map((page) => {
                      return (
                        <div
                          className={`cursor-pointer  h-2 rounded-lg transition-all duration-500 ease-in-out ${
                            activePage === page
                              ? 'bg-violet w-28 '
                              : 'bg-gray/20 w-6'
                          }`}
                          key={page}
                          onClick={() => onClick(page)}
                        />
                      )
                    })}
                  </div>
                )
              }}
              showArrows={false}
              itemsToShow={1}
              className='md:hidden'
            >
              {currentInstitute?.courses?.map((item) => (
                <CourseCard {...item} />
              ))}
            </Carousel>
          </div>
          <button
            onClick={() => navigate('/viewMoreCourse')}
            className='my-10 px-4 py-2 w-[150px] text-xl ring-1  mx-auto flex justify-between items-center ring-[#7D23E0] text-[#7D23E0] rounded-lg active:opacity-75 md:hidden '
          >
            <p>View more</p>
            <RightOutlined className='text-[#7D23E0] text-lg ' />
          </button>
        </section>
      )}
    </div>
  )
}
