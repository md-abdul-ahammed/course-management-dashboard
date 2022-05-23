import React, { useEffect, useState } from 'react'
import {
  AppstoreOutlined,
  GiftOutlined,
  IdcardOutlined,
  MergeCellsOutlined,
  NotificationOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { BsAward } from 'react-icons/bs'
import Navbar from '../../components/layout/Navbar'
import PageWrapper from '../../components/layout/PageWrapper'
import InstituteHeader from './InstituteHeader'
import AboutUs from './AboutUs'
import Achievements from './Achivements'
import CourseSection from '../CoursePage/CourseSection/CourseSection'
import Faculty from '../CoursePage/Faculty'
import Reviews from '../CoursePage/Reviews/Reviews'
import ShareCourse from '../CoursePage/ShareCourse'
import Platforms from '../CoursePage/Platforms'
import { Outlet, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchInstitutes,
  institutesSelector,
  setCurrentInstitute,
} from '../../redux/slices/instituteSlice'
import { isEmptyObj, titleToUrl } from '../../components/utils'
import { setCurrentCourse } from '../../redux/slices/courseSlice'
import LoadingSpinner from '../../components/layout/LoadingSpinner'
import Error404 from '../Error404'
import ReferCourse from '../CoursePage/ReferCourse'

const iconStyle = `flex items-center text-2xl `
const links = [
  {
    title: 'About Us',
    icon: <TeamOutlined className={iconStyle} />,
  },
  {
    title: 'Categories',
    icon: <AppstoreOutlined className={iconStyle} />,
  },
  {
    title: 'Achievements',
    icon: <BsAward className={iconStyle} />,
  },
  {
    title: 'Courses',
    icon: <IdcardOutlined className={iconStyle} />,
  },
  {
    title: 'Faculty',
    icon: <UserOutlined className={iconStyle} />,
  },
  {
    title: 'Reviews',
    icon: <NotificationOutlined className={iconStyle} />,
  },
]
export default function InstitutePage() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const { instituteId } = useParams()
  const { institutes, currentInstitute } = useSelector(institutesSelector)

  useEffect(() => {
    if (!institutes.length) {
      dispatch(fetchInstitutes())
      return
    }
    institutes.forEach((item) => {
      // console.log(titleToUrl(item.name), instituteId)
      if (titleToUrl(item.name) === instituteId) {
        setLoading(false)
        dispatch(setCurrentInstitute(item))
        return
      }
      setLoading(false)
    })
  }, [dispatch, instituteId, institutes])

  if (loading) return <LoadingSpinner />
  if (!loading && isEmptyObj(currentInstitute)) return <Error404 />
  console.log(currentInstitute, 'institute')
  return (
    <>
      <Outlet />
      <Navbar links={links} primaryBG='#282828' />
      <PageWrapper>
        <>
          <InstituteHeader />
          <AboutUs institute={currentInstitute} />
          <Achievements institute={currentInstitute} />
          <CourseSection />
          <Faculty faculties={currentInstitute.faculties} />
          <Reviews />
          <ReferCourse />
          <Platforms />
        </>
      </PageWrapper>
    </>
  )
}
