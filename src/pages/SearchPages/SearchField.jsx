import { DownOutlined, UpOutlined } from '@ant-design/icons'
import React, { useEffect, useRef, useState } from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import { FiSearch } from 'react-icons/fi'
import { Divider, Input } from 'antd'
import { AiFillStar } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { isEmpty, titleToUrl } from '../../components/utils'
import {
  fetchInstitutes,
  institutesSelector,
} from '../../redux/slices/instituteSlice'
import { fetchCourses, selectCourse } from '../../redux/slices/courseSlice'
import { useDispatch, useSelector } from 'react-redux'
export default function SearchField({ style, className, children }) {
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

  return (
    <div
      style={style}
      className={` ${className} relative cursor-pointer select-none flex items-center space-x-2 bg-gray/10 px-4 py-2 rounded-md`}
    >
      <div
        onClick={() => setIsLocationOpen(!isLocationOpen)}
        className='flex items-center space-x-2 '
      >
        <IoLocationOutline
          style={{ color: 'violet' }}
          className='text-xl text-violet '
        />
        <p className=' whitespace-nowrap'>New Delhi</p>
        <div>
          {isLocationOpen ? (
            <UpOutlined className='flex items-center' />
          ) : (
            <DownOutlined className='flex items-center' />
          )}
        </div>
        {/* <div className='absolute bottom-0 left-0'>
          <p>Chennai</p>
          <p> Calcutta</p>
          <p> Rajsthan</p>
        </div> */}
      </div>
      <Divider type='vertical' />
      <div className='flex space-x-2 w-[300px] items-center '>
        <FiSearch className='text-xl text-violet' />
        <input
          ref={searchRef}
          onClick={() => setSearchShow(true)}
          onChange={handleChange}
          // onBlur={() => setSearchShow(false)}
          type='text'
          className='outline-none border-none text-md w-full  placeholder:text-sm bg-transparent'
          placeholder='Search for Institutes ,course or a subject'
        />
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
      </div>
    </div>
  )
}

export const Card = ({ currentValue }) => {
  const img = currentValue.img?.[0]?.url
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate(currentValue.url)}
      style={{ borderBottom: '1px solid #E8E8E8' }}
      key={currentValue.id}
      className='flex bg-white p-2 cursor-pointer'
    >
      <img src={img} className='w-[100px]' alt={currentValue.name} />
      <div className='ml-2'>
        <h4 className='text-lg text-light-black'>{currentValue.name}</h4>
        <div style={{ color: '#939393' }} className='text-base mb-2'>
          {currentValue.type}
        </div>
        <div
          className='flex justify-center items-center w-fit space-x-2 text-white font-semibold'
          style={{
            backgroundColor: '#1CC24B',
            borderRadius: '6px',
            padding: '2px 6px',
          }}
        >
          <span>{currentValue.rate || 0}</span>
          <span>
            <AiFillStar />
          </span>
        </div>
      </div>
    </div>
  )
}
