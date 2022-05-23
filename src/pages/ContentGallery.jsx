import { CloseCircleOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import obj from '../assets/images/objects/obj.png'
import obj1 from '../assets/images/objects/obj1.png'
import obj2 from '../assets/images/objects/obj2.png'
import obj3 from '../assets/images/objects/obj3.png'
import obj4 from '../assets/images/objects/obj4.png'
import obj5 from '../assets/images/objects/obj5.png'
import obj6 from '../assets/images/objects/obj6.png'
import Container from '../components/layout/Container'
import LoadingSpinner from '../components/layout/LoadingSpinner'
import { isEmpty, isEmptyObj, titleToUrl } from '../components/utils'
import {
  fetchCourses,
  selectCourse,
  setCurrentCourse,
} from '../redux/slices/courseSlice'
import {
  fetchInstitutes,
  institutesSelector,
  setCurrentInstitute,
} from '../redux/slices/instituteSlice'
import Error404 from './Error404'

export default function ContentGallery() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const [images, setImages] = useState([...[obj2, obj2, obj2]])
  const [videos, setVideos] = useState([])
  const { instituteId, courseId } = useParams()
  const { institutes, currentInstitute } = useSelector(institutesSelector)
  const { courses, currentCourse } = useSelector(selectCourse)
  useEffect(() => {
    institutes?.forEach((item) => {
      if (titleToUrl(item.name) === instituteId) {
        setLoading(false)
        dispatch(setCurrentInstitute(item))
        return
      }

      setLoading(false)
    })

    courses?.forEach((item) => {
      if (titleToUrl(item.name) === courseId) {
        setLoading(false)
        dispatch(setCurrentCourse(item))
        return
      }

      setLoading(false)
    })
  }, [dispatch, instituteId, courseId, courses, institutes])

  useEffect(() => {
    dispatch(fetchInstitutes())
    dispatch(fetchCourses())
  }, [])

  useEffect(() => {
    if (!isEmpty(currentCourse.images || currentCourse.videos)) {
      setImages(currentCourse.images)
      setVideos(currentCourse.videos)
    }
    if (!isEmpty(currentInstitute.images || currentInstitute.videos)) {
      setImages(currentInstitute.images)
      setVideos(currentInstitute.videos)
    }
  }, [currentCourse, currentInstitute])

  if (!loading && isEmptyObj(currentInstitute)) return <Error404 />
  if (loading) return <LoadingSpinner />

  console.log(images, videos)

  return (
    <div>
      <Container className={'relative m-20 mx'}>
        <div className=' grid grid-cols-1 md:grid-cols-2  place-items-stretch  gap-2'>
          {images.map((item, i) => (
            <img
              className=' object-cover mx-10 md:mx-0 md:h-[400px] '
              key={i}
              src={item}
              alt=''
            />
          ))}
        </div>
        <CloseCircleOutlined
          onClick={() => navigate(-1)}
          className='absolute -top-10 right-10  text-xl text-[#7D23E0]'
        />
      </Container>
    </div>
  )
}
