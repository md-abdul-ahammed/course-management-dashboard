import { DownOutlined, UpOutlined } from '@ant-design/icons'
import React, { useState, useEffect, useRef } from 'react'

import Footer from '../../components/Footer'
import PageBreadcrumb from '../../components/PageBreadcrumb'
import CategoryFooter from '../courses-institutes-page/category-footer'
import CourseCard from '../courses-institutes-page/popular-courses/CourseCard'

import FilterBar from './FilterBar'
import InstituteCarousel from './InstituteCarousel'

import SearchNav from './SearchNav'
import TopSearchBar from '../../components/layout/TopSearchBar'
import SkillCard from './SkillCard'
import { host } from '../../util/constant/constant'
import { DemoCard } from '../courses-institutes-page/popular-courses/data'
import Container from '../../components/layout/Container'

import { useParams } from 'react-router-dom'
import BottomBar from '../../components/layout/BottomBar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCourses, selectCourse } from '../../redux/slices/courseSlice'
import {
  fetchInstitutes,
  institutesSelector,
} from '../../redux/slices/instituteSlice'
import Platforms from '../CoursePage/Platforms'
import { selectSearch } from '../../redux/slices/SearchSlice'
import { isEmpty } from '../../components/utils'

export default function SearchPage() {
  const [isViewMore, setIsViewMore] = useState(false)
  const [itemCount, setItemCount] = useState(15)
  const { filters, filteredCourses } = useSelector(selectSearch)

  return (
    <div className=' '>
      <TopSearchBar />
      <SearchNav />
      <PageBreadcrumb />
      <InstituteCarousel hidden={filters.category === null} />
      <FilterBar />
      <Container className='px-0'>
        <div className='mb-10 mx-5 '>
          {/* <h1 className='text-2xl sm:text-4xl my-10'>Institutes near you</h1> */}
          <div className='grid lg:grid-cols-3 gap-5 place-items-center my-10'>
            {filteredCourses?.map((item, i) => (
              <CourseCard key={item.id} {...item} />
            ))}
          </div>
          <div
            onClick={() => {
              const itemHandler = () => {
                if (isViewMore) {
                  setItemCount(30)
                } else {
                  setItemCount(15)
                }
              }
              itemHandler()

              setIsViewMore(!isViewMore)
            }}
            className='text-xl text-violet flex items-center space-x-2 cursor-pointer justify-center'
          >
            <p>{isViewMore ? 'View Less' : 'View More'}</p>
            {isViewMore ? (
              <UpOutlined className='flex items-center text-sm' />
            ) : (
              <DownOutlined className='flex items-center text-sm' />
            )}
          </div>
        </div>
      </Container>

      <Platforms />
      <Footer />
      <BottomBar />
    </div>
  )
}
