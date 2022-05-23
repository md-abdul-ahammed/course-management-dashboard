import React from 'react'

import Faq from './FAQ'
import CategoryFooter from './category-footer'
import Footer from '../../components/Footer'
import CourseBanner from './course-banner'
import OstellOffer from './ostello-offers'
import PopularCourse from './popular-courses'
import TopLocations from './top-locations'
import Header from './header'

import { Container, Divider } from './index.styled'
import Categories from './categories'
import TopNav from './top-navbar'
import BottomBar from '../../components/layout/BottomBar'
import Platforms from '../CoursePage/Platforms'

const Courses = () => {
  return (
    <Container>
      <Header />

      <TopNav />

      <Divider />

      <PopularCourse />

      <Divider />

      <Categories />

      <Divider />

      <CourseBanner />

      <Divider />

      <TopLocations />

      <Divider />

      <OstellOffer />

      <Divider />

      <Faq />

      <Divider />

      <Platforms />

      {/* <CategoryFooter /> */}

      <Footer className='hidden md:block lg:block' />

      <BottomBar />
    </Container>
  )
}

export default Courses
