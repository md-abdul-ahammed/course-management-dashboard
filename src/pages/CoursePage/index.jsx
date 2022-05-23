import React, { useEffect, useState } from 'react'
import {
  FileOutlined,
  FormOutlined,
  IdcardOutlined,
  QuestionCircleOutlined,
  StarOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons'
import PageWrapper from '../../components/layout/PageWrapper'
import Navbar from '../../components/layout/Navbar'
import Header from './Header'
import CourseOverview from './CourseOverview'
import Objectives from './Objectives'
import Syllabus from './Syllabus'
import Faculty from './Faculty'
import OfferSection from './OfferSection'
import Reviews from './Reviews/Reviews'
import ReferCourse from './ReferCourse'
import FAQ from './FAQ'
import Platforms from './Platforms'
import ShareCourse from './ShareCourse'
import CourseSection from './CourseSection/CourseSection'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectCourse,
  fetchCourses,
  setCurrentCourse,
} from '../../redux/slices/courseSlice'
import { useNavigate, useParams } from 'react-router-dom'
import { isEmptyObj, titleToUrl } from '../../components/utils'
import Error404 from '../Error404'
import LoadingSpinner from '../../components/layout/LoadingSpinner'
import {
  fetchInstitutes,
  institutesSelector,
  setCurrentInstitute,
} from '../../redux/slices/instituteSlice'
const iconStyle = `flex items-center text-2xl `
const links = [
  {
    title: 'Overview',
    icon: <UnorderedListOutlined className={iconStyle} />,
  },
  {
    title: 'Objectives',
    icon: <FormOutlined className={iconStyle} />,
  },
  {
    title: 'Syllabus',
    icon: <FileOutlined className={iconStyle} />,
  },
  {
    title: 'Faculty',
    icon: <IdcardOutlined className={iconStyle} />,
  },
  {
    title: 'Reviews',
    icon: <StarOutlined className={iconStyle} />,
  },
  {
    title: 'FAQ',
    icon: <QuestionCircleOutlined className={iconStyle} />,
  },
]

export default function CoursePage() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const { courseId } = useParams()
  const { courses, currentCourse } = useSelector(selectCourse)
  // const { institutes } = useSelector( institutesSelector );

  useEffect(() => {
    if (!courses.length) {
      dispatch(fetchCourses())
      // dispatch(fetchInstitutes())
    }
    courses.forEach((item) => {
      // console.log(titleToUrl(item.name) === courseId)
      if (titleToUrl(item.name) === courseId) {
        setLoading(false)
        dispatch(setCurrentCourse(item))
        dispatch(setCurrentInstitute(item.institute))
        return
      }
      setLoading(false)
    })
  }, [dispatch, courseId, courses])
  // console.log(currentCourse, 'course')

  if (loading) return <LoadingSpinner />
  if (!loading && isEmptyObj(currentCourse)) return <Error404 />
  const faqs = currentCourse.faqs
  console.log(Array.isArray(faqs) ? faqs : [faqs])

  return (
    <>
      <Navbar primaryBG='#6E3DA5' links={links} />
      <PageWrapper>
        <>
          <Header />

          <CourseOverview />
          <Objectives />
          <Syllabus />
          <Faculty faculties={[currentCourse.faculty]} />
          <OfferSection />
          <Reviews />
          <ReferCourse />
          <FAQ faqs={Array.isArray(faqs) ? faqs : [faqs]} />
          <CourseSection />
          <ShareCourse />
          <Platforms />
        </>
      </PageWrapper>
    </>
  )
}
