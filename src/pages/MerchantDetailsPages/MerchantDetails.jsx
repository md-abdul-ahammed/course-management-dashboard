import React, { useState, useEffect } from 'react'
import { FaUniversity, FaPhoneAlt, FaBook } from 'react-icons/fa'
import NavHeader from '../../components/NavHeader'
import InstituteInformation from './InstituteInformation'
import ContactInformation from './ContactInformation'
import CourseDetails from './CourseDetails'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
import { merchantSelector } from '../../redux/slices/merchantSlice'

import { useDispatch, useSelector } from 'react-redux'
import { LeftOutlined } from '@ant-design/icons'
import { Button, DatePicker, Steps } from 'antd'
import { authSelector, getInstituteDetails } from '../../redux/slices/authSlice'
import Finished from './Finished'
import { isElement } from 'react-dom/test-utils'
import { isEmpty } from '../../components/utils'
import Protect from '../../components/Auth/Protect'
const MerchantDetails = () => {
  const dispatch = useDispatch()

  const [page, setPage] = useState(0)

  const { instituteDetails } = useSelector(authSelector)

  const navigate = useNavigate()
  const [progress, setProgress] = useState(0)
  const { instituteInformation, contactInformation, courseDetails } =
    useSelector(merchantSelector)
  useEffect(() => {
    dispatch(getInstituteDetails())
  }, [])

  const {
    instituteName,
    description,
    instituteStart,
    addressLine1,
    addressLine2,
    pincode,
    area,
    city,
    state,
    country,
  } = instituteInformation

  const { mobileNumber, ownerName, ownerEmail, ownerMobileNumber } =
    contactInformation

  const initialMerchantDetails = {
    page0: {
      instituteName,
      description,
      instituteStart,
      merchantCategory: [],
      addressLine1,
      addressLine2,
      pincode,
      area,
      city,
      state,
      country,
      openingTime: '',
      closingTime: '',
    },
    page1: {
      mobileNumber,
      landlineNumber: '',
      ownerName,
      ownerEmail,
      ownerMobileNumber,
    },
    page2: {
      instituteDomain: [],
      boardsJrSchool: [],
      classesJrSchool: [],
      subjectsJrSchool: [],
      boardsSrSchool: [],
      streamsSrSchool: [],
      subjectsSrSchool: [],
      fieldsCompetitiveExams: [],
      examsCompetitiveExams: [],
      skills: [],
      majors: [],
      graduationFields: [],
      postMajors: [],
      postGraduationFields: [],
    },
  }
  const [merchantDetails, setMerchantDetails] = useState(initialMerchantDetails)

  useEffect(() => {
    if (window.localStorage.getItem('PAGE') !== null)
      setPage(Number.parseInt(window.localStorage.getItem('PAGE')))
    else setPage(0)
  }, [])

  const { isAuthenticated, loading } = useSelector(authSelector)

  console.log(isAuthenticated, 'authStatus')

  useEffect(() => {
    if (isEmpty(window.localStorage.getItem('ACCESS_TOKEN'))) {
      navigate('/merchant/')
    }
  }, [])

  return (
    <>
      <main className='w-screen h-screen m-0 p-0 overflow-y-auto overflow-x-hidden  font-dm-sans bg-white merchant-details-bg'>
        <NavHeader className='' type='merchant' isForm={false} />
        <section className='text-center w-full flex flex-col items-center pt-6 pb-16'>
          <h1 className='text-3xl font-bold hidden lg:block'>
            Skyrocket your business with Ostello
          </h1>
          <h2 className='text-violet font-medium text-lg hidden lg:block mt-2'>
            Join Hands with us and get 3x More Growth
          </h2>
          <header className='lg:w-3/5 space-y-2 px-4 mt-6 lg:mt-12'>
            <>
              <div className='flex  px-2  space-x-2 mb-8'>
                <LeftOutlined
                  onClick={() => navigate(-1)}
                  className='flex items-center w-fit h-fit mt-1'
                />
                <p className='text-left'>
                  {' '}
                  Fill this information to complete your sign up process
                </p>
              </div>
              <Steps
                s
                size='small'
                direction='horizontal'
                current={page}
                responsive={false}
                onChange={(v) => {
                  if (instituteDetails.approval === 1) {
                    setPage(v)
                    return
                  }
                  if (isEmpty(instituteDetails)) {
                    setPage(0)
                  }
                  if (!isEmpty(instituteDetails) && (v === 0 || v === 1)) {
                    setPage(v)
                  }
                  if (
                    !isEmpty(instituteDetails) &&
                    !isEmpty(contactInformation) &&
                    (v === 0 || v === 1 || v === 2)
                  ) {
                    setPage(v)
                  }
                }}
                className='lg:hidden w-screen
              px-5  sm:w-[600px] '
              >
                <Steps.Step title={'Institute'} />
                <Steps.Step title={'Contact'} />
                <Steps.Step title={'Course '} />
              </Steps>
            </>
            <div className='hidden lg:block'>
              <div className='grid grid-cols-3 w-full'>
                <button
                  className='w-full text-lg font-medium px-2 flex flex-col items-center space-y-2 lg:space-y-0'
                  onClick={() => {
                    if (progress >= 0) setPage(0)
                  }}
                >
                  <div className='lg:hidden'>
                    <FaUniversity size={24} className='text-primary' />
                  </div>
                  <p className=''>
                    Institute{' '}
                    <span className='hidden lg:inline'> Information </span>
                  </p>
                </button>
                <button
                  className='w-full text-lg font-medium px-2 flex flex-col items-center space-y-2 lg:space-y-0'
                  onClick={() => {
                    if (progress >= 1) setPage(1)
                  }}
                >
                  <div className='lg:hidden'>
                    <FaPhoneAlt size={24} className='text-primary' />
                  </div>
                  <p className=''>
                    Contact{' '}
                    <span className='hidden lg:inline'> Information </span>
                  </p>
                </button>
                <button
                  className='w-full text-lg font-medium px-2 flex flex-col items-center space-y-2 lg:space-y-0'
                  onClick={() => {
                    if (progress >= 2) setPage(2)
                  }}
                >
                  <div className='lg:hidden'>
                    <FaBook size={24} className='text-primary' />
                  </div>
                  <p className=''>
                    Course <span className='hidden lg:inline'> Details </span>
                  </p>
                </button>
              </div>
            </div>
            <div className='lg:flex w-full hidden'>
              <div
                className={` transition-all duration-200 h-1 ${
                  page === 0 && 'w-0'
                } ${page === 1 && 'w-1/3'}  ${page === 2 && 'w-2/3'} `}
              ></div>
              <div className={`h-1 px-4 lg:px-8 w-1/3`}>
                <div className='bg-violet h-full w-full'></div>
              </div>
              <div
                className={`transition-all duration-200 h-1 ${
                  page === 0 && 'w-2/3'
                } ${page === 1 && 'w-1/3'} ${page === 2 && 'w-0'} `}
              ></div>
            </div>
          </header>

          <div className='h-fit bg-white rounded-2xl w-full lg:w-4/6 px-6 lg:px-12 py-2 lg:py-12 mt-4'>
            {page === 0 && (
              <InstituteInformation
                merchantDetailsState={[merchantDetails, setMerchantDetails]}
                pageState={[page, setPage]}
                progressState={[progress, setProgress]}
              />
            )}
            {page === 1 && (
              <ContactInformation
                merchantDetailsState={[merchantDetails, setMerchantDetails]}
                pageState={[page, setPage]}
                progressState={[progress, setProgress]}
              />
            )}
            {page === 2 && (
              <CourseDetails
                merchantDetailsState={[merchantDetails, setMerchantDetails]}
                pageState={[page, setPage]}
                progressState={[progress, setProgress]}
              />
            )}
            {page === 3 && navigate('/merchant/details/success')}
          </div>
        </section>
        <Footer className='' />
      </main>
    </>
  )
}

export default MerchantDetails
