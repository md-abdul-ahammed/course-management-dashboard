import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useClickOutside } from '../../../../components/hooks/useClickOutside'
import { isEmpty, titleToUrl } from '../../../../components/utils'
import {
  fetchCourses,
  selectCourse,
} from '../../../../redux/slices/courseSlice'
import {
  fetchInstitutes,
  institutesSelector,
} from '../../../../redux/slices/instituteSlice'
import { host } from '../../../../util/constant/constant'
import Scroll from './scroll'
import SearchList from './searchList'

function Search({ style, className, placeholder }) {
  const [searchField, setSearchField] = useState('')
  const [searchShow, setSearchShow] = useState(false)
  const [searchData, setSearchData] = useState([])
  const dispatch = useDispatch()
  const { institutes } = useSelector(institutesSelector)
  const { courses } = useSelector(selectCourse)
  const filteredItems =
    searchField.length > 0 &&
    searchData.filter((item) => {
      return item.name.toLowerCase().includes(searchField.toLowerCase())
    })

  useEffect(() => {
    dispatch(fetchInstitutes())
    dispatch(fetchCourses())
  }, [])

  useEffect(() => {
    const courseData = courses.map(({ id, name, ratings, images }, idx) => {
      return {
        id,
        name,
        rating: ratings,
        type: 'course',
        url: `/course/${titleToUrl(name)}`,
        img: images,
      }
    })
    const instituteData = institutes.map(
      ({ id, name, rating, images }, idx) => {
        return {
          id,
          name,
          rating,
          type: 'institute',
          url: `/institute/${titleToUrl(name)}`,
          img: images,
        }
      }
    )
    if (!isEmpty(courseData) && !isEmpty(instituteData)) {
      setSearchData([...instituteData, ...courseData])
    }
  }, [courses, institutes])

  useEffect(() => {
    const interval = setInterval(() => {
      if (!filteredItems.length) {
        setSearchShow(false)
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [filteredItems])

  const navigate = useNavigate()

  const handleChange = (e) => {
    setSearchField(e.target.value)
    if (e.target.value.length > 0) {
      setSearchShow(true)
    }
  }

  let domNode = useClickOutside(() => {
    setSearchShow(false)
  })

  return (
    <form
      onSubmit={() => navigate(`/search/category/${searchField}`)}
      ref={domNode}
      style={style}
      className={className}
    >
      <input
        onClick={() => setSearchShow(true)}
        className='w-full h-full z-10 outline-none'
        type='search'
        onChange={handleChange}
        placeholder={placeholder}
      />
      <div>
        {searchShow ? (
          filteredItems.length > 0 ? (
            <Scroll
              style={{
                height: '44vh',
                boxShadow: '0px 4px 15px rgba(125, 35, 224, 0.2)',
              }}
              className='overflow-y-scroll'
            >
              {' '}
              <SearchList filteredItems={filteredItems} />{' '}
            </Scroll>
          ) : (
            <Scroll>
              <div className='flex justify-center items-center my-8 '>
                No matched Courses or Institutions
              </div>
            </Scroll>
          )
        ) : (
          ''
        )}
      </div>
    </form>
  )
}

export default Search
