import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import {
  Link,
  Navigate,
  useNavigate,
  useNavigationType,
} from 'react-router-dom'
import { BsArrowRightShort } from 'react-icons/bs'

import Footer from '../../components/Footer'
import NavHeader from '../../components/NavHeader'
import AppStoreBadge from '../../assets/graphics/appStoreBadge.png'
import LandingVector1 from '../../assets/vectors/landingVector1.png'
import LandingVector4 from '../../assets/vectors/landingVector4.png'
import LandingVector5 from '../../assets/vectors/landingVector5.png'
import Rec1 from '../../assets/vectors/rec1.png'
import Rec2 from '../../assets/vectors/rec2.png'
import Rec3 from '../../assets/vectors/rec3.png'
import LandingVector6 from '../../assets/vectors/mobile_Landing.png'
import PlayStoreBadge from '../../assets/graphics/playStoreBadge.png'
import Std_Explore1 from '../../assets/vectors/std_exploreVector1.png'
import Std_Explore2 from '../../assets/vectors/std_exploreVector2.png'
import Std_Explore3 from '../../assets/vectors/std_exploreVector3.png'
import BackgroundGradient from '../../assets/background/landing_gradient.png'
import MobileBackgroundVector from '../../assets/background/merchant_mobileFooterSvg1.png'
import Platforms from '../CoursePage/Platforms'
import { useDispatch, useSelector } from 'react-redux'
import { authSelector, getUser } from '../../redux/slices/authSlice'
import { isEmpty } from '../../components/utils'

function HomeLanding() {
  const { userData } = useSelector(authSelector)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  useEffect(() => {
    document.title = 'Ostello India - Onestop shop for Academic Needs'
  }, [])

  const [viewPort, setViewPort] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  })

  useEffect(() => {
    const handleResize = (e) => {
      setViewPort({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      })
    }
    window.addEventListener('resize', handleResize)
  })

  let isLoggedIn = !isEmpty(window.localStorage.getItem('ACCESS_TOKEN'))
  const userType = userData.usertype

  useEffect(() => {
    if (isLoggedIn) {
      userType === 1
        ? navigate('/adminDashboard')
        : userType === 2
        ? navigate('/merchant/dashboard')
        : userType === 3 && navigate('/courses_institutes')
    }
  }, [userType, isLoggedIn, navigate])

  return (
    <div
      className='font-dm-sans w-screen min-h-screen'
      style={
        viewPort.width > 768
          ? {
              backgroundImage: `url(${BackgroundGradient})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100vw 120vh',
              backgroundPosition: '50% 0%',
            }
          : {}
      }
    >
      <NavHeader />

      <main className='md:py-6 '>
        <section className=' h-fit flex px-7  flex-col-reverse lg:flex-row items-center justify-center lg:py-16 lg:mb-20'>
          <div className='first-letter:flex flex-col items-start w-full  space-y-4 lg:space-y-6   lg:pl-32 flex-wrap '>
            <h1 className='text-light-black -z-0  font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl  '>
              Own your
              <span className='text-violet '> Career!</span>
            </h1>

            <h3 className='text-[#717171] text-sm lg:text-lg w-72  md:w-max lg:pr-10 '>
              We are a one-stop destination for all your <br /> career needs.
            </h3>

            <div className='flex w-full  justify-center lg:justify-start lg:pt-6   '>
              <Link
                to='/courses_institutes'
                className='rounded-xl  bg-violet text-white flex items-center space-x-3 px-12 py-2 lg:px-7 lg:py-3 xl:py-3 transition-transform duration-500 ease-in-out hover:shadow-3xl hover:scale-[1.1]  '
              >
                <p className='text-xl xl:text-2xl font-medium m-0'>
                  Get Started
                </p>
                <BsArrowRightShort className='text-white' size={32} />
              </Link>
            </div>
          </div>
          <img
            src={LandingVector1}
            alt=''
            className='md:w-3/4 lg:w-3/6  xl:mr-20  mb-6 lg:mb-0 '
          />
        </section>

        <section className='lg:items-center pt-20 lg:pt-0 lg:py-10 px-6 lg:px-20 xl:px-36 flex flex-col -z-0 lg:space-y-0 relative'>
          <div className='w-full lg:mb-12'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold w-full  text-center text-light-black'>
              Explore, Connect & <span className='text-violet'>Grow</span>
            </h1>

            <div className='w-full lg:w-[80vw] xl:w-full px-6 lg:py-12 -z-0 relative mt-[23px] lg:mt-[40px] flex lg:flex-row flex-col justify-center items-center lg:gap-20 xl:gap-40'>
              <div
                className='flex flex-col  justify-evenly items-center w-42 px-10 pb-8 lg:px-0 md:w-[320px] md:h-[280px] drop-shadow-lg mb-8 lg:mb-0'
                style={{
                  backgroundColor: '#D2EFFF',
                  borderRadius: '50px',
                }}
              >
                <img
                  src={Std_Explore1}
                  alt='Explore Vector'
                  className='w-32 h-32 md:w-[180px] md:h-[180px]'
                />

                <h2 className='text-light-black w-36 lg:w-max text-sm lg:text-lg text-center font-medium'>
                  Locate the top <br /> institutes in your area
                </h2>
              </div>

              <div
                className='flex flex-col justify-evenly items-center w-42 py-8 px-8 lg:px-0 md:w-[320px] md:h-[280px] drop-shadow-lg mb-8 lg:mb-0'
                style={{
                  backgroundColor: '#D2EFFF',
                  borderRadius: '50px',
                }}
              >
                <img
                  src={Std_Explore2}
                  alt='Explore Vector'
                  className='w-32 h-28 md:w-[180px] md:h-[180px]'
                />

                <h2 className='text-light-black w-40 lg:w-48 xl:w-52  text-sm lg:text-lg text-center font-medium'>
                  Join our community <br className='hidden lg:flex' /> and make
                  a difference
                </h2>
              </div>

              <div
                className='flex flex-col justify-evenly items-center w-42 py-6 px-8 lg:px-0 md:w-[320px] md:h-[280px] drop-shadow-lg mb-2 lg:mb-0'
                style={{
                  backgroundColor: '#D2EFFF',
                  borderRadius: '50px',
                }}
              >
                <img
                  src={Std_Explore3}
                  alt='Explore Vector'
                  className='w-32 h-32 md:w-[160px] md:h-[150px]'
                />

                <h2 className='text-light-black w-40 lg:w-52 text-sm lg:text-lg text-center font-medium'>
                  Achieve desired educational outcomes
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section className=' px-5 pt-14 lg:pt-0 lg:px-32 rounded-3xl'>
          <div
            className=' h-full px-6   rounded-3xl bg-gradient-to-b from-vizard  via-cyan to-turquoise lg:bg-gradient-to-r flex flex-col items-center '
            style={{
              boxShadow:
                'inset -20px -20px 50px rgba(0, 112, 171, 0.25), inset 20px 20px 50px rgba(255, 255, 255, 0.4) ',
            }}
          >
            <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-light-black mt-10'>
              Experience immersive learning!
            </h1>

            <div className='w-full flex flex-col-reverse lg:flex-row lg:space-x- lg:space-y-10 xl:space-y-0'>
              <div className='w-full'>
                <img
                  src={LandingVector4}
                  alt=''
                  className='w-full md:w-3/5 lg:w-full md:m-auto lg:m-0  '
                />
              </div>

              <div className='flex flex-col mb-6 mt-6 justify-center   w-full text-desc-gray'>
                <p className='font-medium text-lg md:text-xl  text-center lg:text-left mb-4'>
                  <span className='text-xl md:text-2xl  text-violet font-bold'>
                    Build
                  </span>{' '}
                  your educational network
                </p>

                <p className='font-medium text-lg text-center lg:text-left md:text-xl mb-4'>
                  <span className='text-xl md:text-2xl  text-violet font-bold'>
                    Connect
                  </span>{' '}
                  with your peers to learn from their journeys
                </p>

                <p className='font-medium text-lg text-center lg:text-left  md:text-xl   mb-4'>
                  <span className='text-xl md:text-2xl  text-violet font-bold'>
                    Learn
                  </span>{' '}
                  upskill and grow
                </p>

                <a
                  href='https://chat.whatsapp.com/K2TxCrG5ySo4ryBufzBIqO'
                  target='_blank'
                  rel='noreferrer'
                  className='w-80 hidden lg:block mt-6 lg:w-64 text-xl py-5 lg:py-3  text-center lg:mb-10 xl:mb-0 rounded-2xl bg-violet text-white font-medium transition-transform duration-500 ease-in-out hover:shadow-3xl hover:scale-[1.1]   '
                >
                  Join Community
                </a>
              </div>
            </div>

            <a
              href='https://chat.whatsapp.com/K2TxCrG5ySo4ryBufzBIqO'
              target='_blank'
              rel='noreferrer'
              className='lg:hidden px-8 py-3 text-xl rounded-lg bg-violet text-white text-center font-medium mt-10 mb-10 hover:scale-[1.1] duration-500 transition-all ease-in-out hover:shadow-4xl'
            >
              Join Community
            </a>
          </div>
        </section>

        <section className='flex flex-col items-center lg:items-center justify-center'>
          <div className='hidden lg:flex mt-16'>
            <ReactPlayer
              url={
                'https://videostreamingstorage.s3.ap-south-1.amazonaws.com/howWeWorkDesktop.m4v'
              }
              playing
              loop
              muted
              width={'90vw'}
              height={'60vh'}
              playsinline
              controls={false}
            />
          </div>

          <div className='lg:hidden my-8'>
            <ReactPlayer
              url={
                'https://videostreamingstorage.s3.ap-south-1.amazonaws.com/howWeWorkMobile.m4v'
              }
              playing
              loop
              muted
              width={'100vw'}
              height={'70vh'}
              playsinline
              className='max-w-screen-2xl'
              controls={false}
            />
          </div>
        </section>

        <section className='mb-16 2xl:my-28 px-6 lg:px-36 py-12 h-fit bg-gradient-to-r from-vizard  via-cyan to-turquoise flex flex-col lg:flex-row items-center lg:py-16'>
          <div className='first-letter:flex flex-col items-start w-full  space-y-6 z-10'>
            <h1 className='text-desc-gray font-bold text-center lg:text-left text-3xl lg:text-4xl xl:w-4/5  xl:text-5xl xl:leading-tight'>
              Connect with us and <br />
              skyrocket your <br className='hidden lg:flex' />
              <span className='text-violet'>Business!</span>
            </h1>

            <h3 className='text-md lg:text-xl w-full text-center lg:text-left'>
              Solutions aimed at ensuring your institution's success.{' '}
              <br className='hidden lg:flex' /> Market your courses to thousands
              of students across the nation.
            </h3>

            <div className='flex w-full pt-6 lg:pt-14  justify-center lg:justify-start'>
              <Link
                to='/merchant'
                className='rounded-2xl bg-violet text-lg text-white flex items-center space-x-2 px-8 py-3 lg:px-10 lg:py-3  transition-transform duration-500 ease-in-out hover:shadow-3xl hover:scale-[1.1]   '
              >
                <p className='text-2xl font-medium'>List your Institute</p>
              </Link>
            </div>
          </div>

          <img
            src={LandingVector5}
            alt=''
            className=' md:w-3/5 lg:w-2/4 lg:h-auto  lg:-mr-32 mt-6 lg:mb-0 flex justify-end items-end'
          />
        </section>

        <section className='py-10 lg:mb-20  pt-0  lg:px-20  space-y-6 lg:space-y-0  '>
          <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold w-full  text-center  text-violet lg:mb-20'>
            Recognised<span className='text-light-black'> by</span>
          </h1>
          <div className='flex flex-col lg:flex-row px-10  justify-center items-center  gap-20'>
            <div className='w-full lg:w-80 m-auto lg:m-0 relative h-64'>
              <img
                src={Rec1}
                alt='Recongnised by Startups India'
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
                className='z-10 px-10'
              />
              <div
                className=' h-full px-6   rounded-3xl bg-gradient-to-b from-vizard  via-cyan to-turquoise lg:bg-gradient-to-r flex flex-col items-center z-0 '
                style={{
                  boxShadow:
                    'inset -20px -20px 50px rgba(0, 112, 171, 0.25), inset 20px 20px 50px rgba(255, 255, 255, 0.4) ',
                }}
              ></div>
            </div>
            <div className='w-full lg:w-96  relative h-80'>
              <img
                src={Rec2}
                alt='Recongnised by Startups India'
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '30%',
                  transform: 'translate(-50%, -50%)',
                }}
                className='z-10 px-10'
              />
              <p
                className='w-full lg:text-xl mt-5 text-center'
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '60%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                Incubated at Atal Bihari Vajpayee <br /> Innovation lab
                Jharkhand
              </p>
              <div
                className=' h-full px-6   rounded-3xl bg-gradient-to-b from-vizard  via-cyan to-turquoise lg:bg-gradient-to-r flex flex-col items-center z-0 '
                style={{
                  boxShadow:
                    'inset -20px -20px 50px rgba(0, 112, 171, 0.25), inset 20px 20px 50px rgba(255, 255, 255, 0.4) ',
                }}
              ></div>
            </div>
            <div className='w-full lg:w-80 relative h-64'>
              <img
                src={Rec3}
                alt='Recongnised by Startups India'
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
                className='z-10 px-10'
              />
              <div
                className=' h-full px-6   rounded-3xl bg-gradient-to-b from-vizard  via-cyan to-turquoise lg:bg-gradient-to-r flex flex-col items-center z-0 '
                style={{
                  boxShadow:
                    'inset -20px -20px 50px rgba(0, 112, 171, 0.25), inset 20px 20px 50px rgba(255, 255, 255, 0.4) ',
                }}
              ></div>
            </div>
          </div>
        </section>
      </main>

      <Platforms />

      <div
        style={{
          position: 'relative',
        }}
        className='bg-violet w-screen lg:hidden flex flex-col items-center'
      >
        <div
          className='font-dm-sans w-full lg:flex'
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            backgroundImage: `url(${MobileBackgroundVector})`,
            zIndex: '0',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 1,
          }}
          className='bg-transparent px-6  py-16 lg:hidden flex flex-col items-center space-y-6'
        >
          <h1 className='text-3xl text-slate font-bold text-center px-4'>
            <p className='text-white'>
              Consider your options and choose with Ostello!
            </p>
          </h1>

          <p className='text-white text-center text-lg py-10'>
            Ostello assists students to connect with course providers and
            institutes. Sign up and make the best decision for your academics!
          </p>

          <Link
            to={'/merchant/signup'}
            className='rounded-xl bg-white text-violet font-medium text-xl w-fit flex items-center space-x-3 z-50  py-2  px-12 scale-x-[1.1] transition-all duration-300 ease-in-out hover:shadow-3xl'
          >
            <p className=''>Register Now</p>
            <BsArrowRightShort size={32} />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <Footer />
    </div>
  )
}

export default HomeLanding
