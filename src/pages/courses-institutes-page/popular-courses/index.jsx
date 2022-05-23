import React, { useEffect, useRef } from 'react'
import SingleCard from './SingleCard'
import { Container } from './index.styled'
import Carousel from 'react-elastic-carousel'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCourses, selectCourse } from '../../../redux/slices/courseSlice'
import CourseCard from './CourseCard'
import { isEmpty } from '../../../components/utils'

const PopularCourse = () => {
  const carouselRef = useRef(null)
  const { courses } = useSelector(selectCourse)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCourses())
  }, [dispatch])

  console.log(carouselRef)

  return (
    <Container className='custom overflow-x-hidden'>
      <h2 className='font-dm-sans font-medium mb-10 ml-5 md:ml-0 text-2xl md:text-5xl text-left md:text-center'>
        Popular Courses
      </h2>

      {!isEmpty(courses) && (
        <Carousel
          ref={carouselRef}
          showArrows={false}
          showEmptySlots={false}
          renderPagination={false}
          breakPoints={[
            { width: 200, itemsToShow: 1 },
            { width: 350, itemsToShow: 1 },
            { width: 768, itemsToShow: 2 },
            { width: 900, itemsToShow: 3 },
          ]}
        >
          {courses.map((item) => (
            <div className=''>
              <CourseCard {...item} />
            </div>
          ))}
        </Carousel>
      )}
    </Container>
  )
}

export default PopularCourse
