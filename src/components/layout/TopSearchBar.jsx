import React, { useEffect, useRef, useState } from 'react'
import { Container } from '../../pages/courses-institutes-page/top-navbar/index.styled'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoLocationOutline } from 'react-icons/io5'
// import Search from '../header/search_field/search'
// import GpsDetector from '../header/gps-detector'

import { DownOutlined, UpOutlined } from '@ant-design/icons'
import { Affix } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCourses, selectCourse } from '../../redux/slices/courseSlice'
import {
  fetchInstitutes,
  institutesSelector,
} from '../../redux/slices/instituteSlice'
import { isEmpty, titleToUrl } from '../utils'
import { Card } from '../../pages/SearchPages/SearchField'

const SearchIcon = <AiOutlineSearch />
const LocationIcon = <IoLocationOutline />

const TopNavData = [
  {
    id: 1,
    type: 'location',
    icon: LocationIcon,
    content: '',
    placeholderText: 'Choose location',
  },
  {
    id: 2,
    type: 'search',
    icon: SearchIcon,
    content: '',
    placeholderText: 'Search for courses,institutes',
  },
]

export default function TopSearchBar() {
  const [clicked, setClicked] = useState(1)

  const handleToggle = (id) => {
    if (clicked === id) {
      return setClicked(1)
    }
    setClicked(id)
  }

  return (
    <Affix>
      <div className=' flex  justify-between space-x-2 top-0 bg-white  p-3 w-full sm:hidden'>
        {TopNavData.map((d, i) => (
          <Tabs
            key={i}
            currentValue={d}
            onToggle={() => handleToggle(d.id)}
            active={clicked === d.id}
          />
        ))}
      </div>
    </Affix>
  )
}

const Tabs = ({ currentValue, onToggle, active }) => {
  const { icon, type, id, placeholderText, content } = currentValue
  const [isOpened, setIsOpened] = useState(false)
  const inputRef = useRef({})

  const [isLocationOpen, setIsLocationOpen] = useState(false)
  const searchRef = useRef(null)
  const [searchField, setSearchField] = useState('')
  const [searchShow, setSearchShow] = useState(false)
  const [searchData, setSearchData] = useState([])
  const dispatch = useDispatch()
  const { institutes } = useSelector(institutesSelector)
  const { courses } = useSelector(selectCourse)
  const filteredItems =
    searchField.length > 1 &&
    searchData.filter((item) => {
      return item.name.toLowerCase().includes(searchField.toLowerCase())
    })

  useEffect(() => {
    isEmpty(institutes) && dispatch(fetchInstitutes())
    isEmpty(courses) && dispatch(fetchCourses())
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

  const handleChange = (e) => {
    setSearchField(e.target.value)
    if (e.target.value.length > 0) {
      setSearchShow(true)
    }
  }
  const Scroll = ({ style, children, className }) => {
    return (
      <div
        style={style}
        className={`${className} w-full absolute left-0 mt-5 rounded-xl bg-white`}
      >
        {children}
      </div>
    )
  }

  useEffect(() => {
    inputRef.current.autoFocus = true
  }, [])
  return (
    <div
      className={
        active
          ? 'relative w-full  flex  items-center border border-violet  rounded-full p-2  space-x-1 transition-all duration-700 ease-in border-opacity-40 '
          : 'border-violet border-opacity-40 flex items-center border rounded-full p-2 space-x-1  '
      }
      key={id}
    >
      <div
        onClick={onToggle}
        className={`text-violet text-2xl rounded-full ${
          id === 2 && active && 'order-2 pl-3'
        }`}
      >
        {icon}
      </div>

      <input
        ref={type === 'search' ? searchRef : inputRef}
        onClick={() => {
          setIsOpened(!isOpened)
          type === 'search' && setSearchShow(true)
        }}
        autoFocus={true}
        className={` outline-none
            border-none
            w-full
            placeholder:text-sm
            focus:bg-none
             transition-all duration-1000 ease-in
            autofill:bg-transparent ${!active && 'hidden'}`}
        placeholder={placeholderText}
        name={type}
        defaultValue={content}
        onChange={(e) => console.log(e.target.value, type)}
      />
      {type === 'search' && (
        <div>
          {searchShow ? (
            filteredItems.length > 0 ? (
              <Scroll
                style={{
                  boxShadow: '0px 4px 15px rgba(125, 35, 224, 0.2)',
                }}
                className='overflow-y-scroll z-10 max-h-[44vh]'
              >
                {' '}
                {filteredItems.map((item, index) => (
                  <Card key={index} currentValue={item} />
                ))}
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
      )}
      {type === 'location' && active && (
        <>
          {isOpened ? (
            <UpOutlined className=' absolute right-5' />
          ) : (
            <DownOutlined className=' absolute right-5' />
          )}
        </>
      )}
    </div>
  )
}
