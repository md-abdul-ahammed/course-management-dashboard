import { CloseOutlined, LeftCircleFilled } from '@ant-design/icons'
import { Divider } from 'antd'
import React, { useEffect, useRef, useState } from 'react'

import { Data, skills } from './Data'
import Dropdown from './Dropdown'
import GroupCheckbox from './GroupCheckbox'
import GroupRadio from './GroupRadio'
import PriceSlider from './PriceSlider'
import RatingSlider from './RatingSlider'
import SkillCard from './SkillCard'
import { useDispatch, useSelector } from 'react-redux'
import {
  clearFilters,
  selectSearch,
  setBoard,
  setCategory,
  setClass,
  setClassType,
  setDuration,
  setExam,
  setFilteredCourses,
  setMode,
  setPrice,
  setRating,
  setSkill,
  setSortBy,
} from '../../redux/slices/SearchSlice'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { isEmpty } from '../../components/utils'
import {
  fetchInstitutes,
  institutesSelector,
} from '../../redux/slices/instituteSlice'
import { fetchCourses, selectCourse } from '../../redux/slices/courseSlice'

export default function FilterBar() {
  const dispatch = useDispatch()

  const [active, setActive] = useState('')
  const { filters } = useSelector(selectSearch)
  const { courses } = useSelector(selectCourse)
  const { institutes } = useSelector(institutesSelector)
  const [courseData, setCourseData] = useState([])

  useEffect(() => {
    isEmpty(courses) && dispatch(fetchCourses())
    isEmpty(institutes) && dispatch(fetchInstitutes())
  }, [dispatch])

  useEffect(() => {
    if (!isEmpty(courses)) {
      let parsedCourses = courses.map((item) => {
        return {
          ...item,
          category: JSON.parse(item.category),
        }
      })
      setCourseData(parsedCourses)
      dispatch(setFilteredCourses(parsedCourses))
    }
  }, [courses])

  const ApplyFilters = () => {
    let {
      classType,
      category,
      // duration,
      // sortBy,
      rating,
      price,
      classes,
      subjects,
      board,
      exam,
      skill,
    } = filters
    if (isEmpty(courseData)) {
      return
    }

    let updatedData = courseData

    // If category changed >>
    if (!isEmpty(category)) {
      updatedData = updatedData = updatedData.filter((item) => {
        return Object.keys(item.category)[0] === category
      })
    }

    // If rating changed
    if (!isEmpty(rating)) {
      updatedData = updatedData.filter((item) => item.rating <= rating)
    }

    if (!isEmpty(classType)) {
      let classTypeCode =
        classType === 'Online' ? 1 : classType === 'Offline' ? 2 : 3
      updatedData = updatedData.filter(
        (item) => item.classtype === classTypeCode
      )
    }

    // If price changed
    if (!isEmpty(price)) {
      const minPrice = price[0]
      const maxPrice = price[1]

      console.log(price)
      updatedData = updatedData.filter(
        (item) =>
          item.effectiveprice >= minPrice && item.effectiveprice <= maxPrice
      )
    }

    // If class changed
    if (!isEmpty(classes)) {
      updatedData = updatedData.filter((item) => {
        const categoryName = Object.keys(item.category)[0]
        const courseClasses = item.category[categoryName].classes
        return !isEmpty(
          courseClasses.find((inner1) =>
            classes?.find((inner2) => inner2.includes(inner1))
          )
        )
      })
    }
    if (!isEmpty(exam)) {
      updatedData = updatedData.filter((item) => {
        const categoryName = Object.keys(item.category)[0]
        const courseExam = item.category[categoryName].exam
        return !isEmpty(
          courseExam.find((inner1) =>
            exam?.find((inner2) => inner2.includes(inner1))
          )
        )
      })
    }

    if (!isEmpty(subjects)) {
      updatedData = updatedData.filter(
        (item) =>
          item.category.classes.find((inner1) =>
            subjects.find((inner2) => inner1 === inner2)
          ).length > 0
      )
    }

    if (!isEmpty(board)) {
      updatedData = updatedData.filter((item) => {
        let categoryName = Object.keys(item.category)[0]
        return !isEmpty(
          item.category[categoryName].board.find(
            (innerItem) => innerItem === board
          )
        )
      })
    }
    console.log(updatedData, 'updated')
    dispatch(setFilteredCourses(updatedData))
  }
  useEffect(() => {
    ApplyFilters()
  }, [filters])

  let activeCategory = filters.category || 'Category'
  return (
    <div className='px-10'>
      <>
        <>
          <div className='flex items-center overflow-x-scroll no-scrollbar  select-none '>
            <>
              <Dropdown
                isSelectOption={true}
                className={''}
                onChange={(e) => {
                  dispatch(clearFilters(courseData))
                  dispatch(setCategory(e))
                }}
                placeholderText={filters.category || 'Category'}
                primaryVariant={true}
                options={Data.categories}
              />
            </>

            <Divider type='vertical ' className=' bg-gray h-8' />

            {activeCategory === 'academics' && (
              <>
                <>
                  <Dropdown placeholderText={'Class'}>
                    <GroupCheckbox
                      onChange={(v) => dispatch(setClass(v))}
                      options={Data.classNames}
                    />
                  </Dropdown>
                </>

                <>
                  <Dropdown placeholderText={'Subjects'}>
                    <div className=' p-4 rounded-md mb-5 '>
                      <div className='flex '>
                        {Data.subjects.slice(0, 2).map((item, i) => (
                          <GroupCheckbox
                            key={i}
                            groupTitle={item.subjectType}
                            dropdownEffect={false}
                            options={item.subjectList}
                          />
                        ))}
                      </div>
                      <Divider type='horizontal' />
                      <div className='flex '>
                        {Data.subjects.slice(2, 4).map((item, i) => (
                          <GroupCheckbox
                            key={i}
                            groupTitle={item.subjectType}
                            dropdownEffect={false}
                            options={item.subjectList}
                          />
                        ))}
                      </div>
                      <Divider type='horizontal' />
                      <div className='flex '>
                        {Data.subjects.slice(4, 6).map((item, i) => (
                          <GroupCheckbox
                            key={i}
                            groupTitle={item.subjectType}
                            dropdownEffect={false}
                            options={item.subjectList}
                          />
                        ))}
                      </div>
                    </div>
                  </Dropdown>{' '}
                </>
                <>
                  <Dropdown placeholderText={'Board'}>
                    <GroupRadio
                      onChange={(e) => dispatch(setBoard(e))}
                      options={Data.board}
                    />
                  </Dropdown>
                </>
              </>
            )}
            {activeCategory === 'engineering' && (
              <>
                <>
                  <Dropdown placeholderText={'Exam'}>
                    <GroupCheckbox
                      onChange={(v) => dispatch(setExam(v))}
                      options={Data.engineeringExam}
                    />
                  </Dropdown>
                </>
              </>
            )}
            {activeCategory === 'medical' && (
              <>
                <>
                  <Dropdown placeholderText={'Exam'}>
                    <GroupCheckbox
                      onChange={(v) => dispatch(setExam(v))}
                      options={Data.medicalExam}
                    />
                  </Dropdown>
                </>
              </>
            )}
            <>
              <Dropdown placeholderText={'Class Type'}>
                <GroupRadio
                  onChange={(e) => dispatch(setClassType(e))}
                  options={Data.mode}
                />
              </Dropdown>
            </>
            <>
              <Dropdown placeholderText={'Duration'}>
                <GroupRadio
                  onChange={(e) => dispatch(setDuration(e))}
                  options={Data.duration}
                />
              </Dropdown>
            </>

            <>
              <Dropdown placeholderText={'Sort By'}>
                <GroupRadio
                  onChange={(e) => dispatch(setSortBy(e))}
                  options={Data.sortBy}
                />
              </Dropdown>
            </>
            <>
              <Dropdown placeholderText={'Rating'}>
                <RatingSlider
                  onChange={(e) => {
                    dispatch(setRating(e))
                    console.log(e)
                  }}
                />
              </Dropdown>
            </>
            <>
              <Dropdown placeholderText={'Price'}>
                <PriceSlider onChange={(e) => dispatch(setPrice(e))} />
              </Dropdown>
            </>
            <Dropdown placeholderText={'Offers'} />

            <CloseOutlined
              onClick={() => dispatch(clearFilters())}
              className='flex sm:text-xl mx-5 text-violet cursor-pointer rounded-full ring-1 p-1 ring-violet hover:bg-violet hover:text-white '
            />
          </div>
        </>
      </>

      {activeCategory === 'other-skills' && (
        <Splide
          options={{
            arrows: false,
            pagination: false,
            perPage: 10,
            // perMove: 1,
            // type: 'loop',
            breakpoints: {
              550: {
                perPage: 3,
              },
              700: {
                perPage: 4,
              },
              900: {
                perPage: 5,
              },
              1200: {
                perPage: 7,
              },
              1400: {
                perPage: 6,
              },
            },
            // speed: 100,
            interval: 1000,
            pauseOnFocus: true,
            autoplay: false,
            pauseOnHover: false,
            resetProgress: false,
          }}
        >
          {skills.map((item, i) => (
            <SplideSlide className='mr-20'>
              <SkillCard
                onClick={() => {
                  setActive((prv) => (prv === item.title ? '' : item.title))
                  dispatch(setSkill(active))
                }}
                isActive={active === item.title}
                {...item}
                key={i}
              />
            </SplideSlide>
          ))}
        </Splide>
      )}
    </div>
  )
}
