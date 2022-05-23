import React, { useEffect, useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavHeader from '../../components/NavHeader'
import LandingVector1 from '../../assets/vectors/merchantLanding1.png'
import { BsArrowRightShort } from 'react-icons/bs'
import BackgroundGradient from '../../assets/background/landing_gradient.png'
import LandingVector21 from '../../assets/vectors/merchantLanding2_1.png'
import LandingVector22 from '../../assets/vectors/merchantLanding2_2.png'
import LandingVector23 from '../../assets/vectors/merchantLanding2_3.png'
import LandingVector24 from '../../assets/vectors/merchantLanding2_4.png'
import Footer from '../../components/Footer'
import FAQ from './FAQ'
import Testimonial from './Testimonial'
import DesktopBackgroundVector from '../../assets/background/circles.png'
import MobileBackgroundVector from '../../assets/background/merchant_mobileFooterSvg1.png'
import ReactPlayer from 'react-player'
import { useDispatch, useSelector } from 'react-redux'
import {
  authSelector,
  getInstituteDetails,
  getUser,
} from '../../redux/slices/authSlice'
import { isEmpty } from '../../components/utils'

const MerchantLanding = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { instituteDetails, userData, isAuthenticated } =
    useSelector(authSelector)

  useEffect(() => {
    dispatch(getInstituteDetails())
    dispatch(getUser())
  }, [])

  useEffect(() => {
    if (isAuthenticated && userData.usertype === 2) {
      if (instituteDetails.approval === 4) {
        navigate('/merchant/details/success')
      }
      if (instituteDetails.approval === 1) {
        navigate('/merchant/dashboard')
      }
    }
  }, [instituteDetails, userData, isAuthenticated])

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
      <NavHeader type='merchant' isForm={true} />
      <main className='pt-6'>
        {/* Section 1 */}
        <section className='px-[31px] lg:px-28 h-fit flex flex-col-reverse lg:flex-row items-center lg:py-24 lg:gap-20'>
          <div className='first-letter:flex lg:px-6 flex-col items-start w-full lg:w-3/5 space-y-3  lg:space-y-6 lg:mr-12'>
            <h1 className='text-slate font-bold text-2xl lg:text-4xl xl:text-5xl leading-8 md:mr-0 xl:leading-snug'>
              Market your courses <br /> with
              <span className='text-violet'> Ostello! </span>
            </h1>
            <h3 className='text-medium-slate lg:text-xl xl:text-base text-sm w-72 lg:w-full py-3 lg:py-0 '>
              Partner with Ostello to reach thousands of students{' '}
              <br className='hidden lg:flex' /> across India and grow your
              reach.
            </h3>

            <div className='flex  lg:w-full justify-center lg:justify-start lg:py-6'>
              <Link
                to='/merchant/signup'
                className='rounded-lg lg:rounded-xl bg-violet text-white flex items-center space-x-3 mt-2 lg:mt-0 px-8  py-2 xl:py-2'
              >
                <p className='text-base lg:text-xl font-medium'>
                  Start Selling
                </p>
                <BsArrowRightShort className='text-white' size={32} />
              </Link>
            </div>
          </div>
          <img
            loading='lazy'
            src={LandingVector1}
            alt=''
            className=' w-3/4 md:w-3/5 lg:w-1/3 lg:h-auto mb-3 xl:mr-10  lg:mb-0'
          />
        </section>

        {/* Section 2 */}
        <section className='lg:items-center py-12 px-6 lg:px-32 flex flex-col lg:space-y-0  relative '>
          <h1 className='text-2xl lg:text-4xl  font-bold w-full  text-center lg:text-left lg:px-4 py-8 mb-6 lg:mb-6'>
            <span className='text-violet'>Why </span>join hands with{' '}
            <br className='lg:hidden' /> Ostello?
          </h1>
          <div className='grid  grid-cols-2 xl:grid-cols-4 gap-y-14 gap-x-6 lg:gap-20 lg:pt-16 lg:justify-center lg:items-center'>
            <div className='flex flex-col  items-center '>
              <img
                loading='lazy'
                src={LandingVector21}
                alt=''
                className='w-24 pb-5 lg:pb-12 lg:w-72 xl:w-52  '
              />
              <p className='text-base lg:text-xl text-center font-medium lg:font-bold  text-slate lg:pb-2'>
                Increased Visibility
              </p>
              <p className='text-xs lg:text-lg text-center font-medium text-ghost  w-[135px] lg:w-72 '>
                A platform for increasing your visibility to students
              </p>
            </div>
            <div className='flex flex-col   space-y-2 justify-center items-center'>
              <img
                loading='lazy'
                src={LandingVector22}
                alt=''
                className=' w-12  lg:w-32 xl:w-24  '
              />
              <p className='text-base lg:text-xl text-center font-medium lg:font-bold  text-slate'>
                National Reach
              </p>
              <p className='text-xs lg:text-lg text-center w-32 lg:w-52 text-ghost'>
                Reach out to students around the country
              </p>
            </div>
            <div className='flex flex-col lg:space items-center'>
              <img
                loading='lazy'
                src={LandingVector23}
                alt=''
                className=' w-32 pb-3 lg:pb-14 lg:w-full '
              />
              <p className='text-base lg:text-xl text-center font-medium lg:font-bold text-slate w-max'>
                Create your own URL
              </p>
              <p className='text-xs lg:text-lg text-center text-ghost w-32 lg:w-72 '>
                Create a unique URL for easily listing your Institute
              </p>
            </div>
            <div className='flex flex-col  items-center'>
              <img
                loading='lazy'
                src={LandingVector24}
                alt=''
                className='w-28 -mt-2 lg:-mt-6  pb-4 lg:pb-12 lg:w-full'
              />
              <p className='text-base lg:text-xl text-center font-medium lg:font-bold  text-slate'>
                Secure Payments
              </p>
              <p className='text-xs lg:text-lg text-center text-ghost w-32 lg:w-52'>
                Simple and secure payment methods
              </p>
            </div>
          </div>
        </section>

        <section className='flex flex-colitems-center lg:items-center justify-center'>
          <div className='hidden lg:flex my-32'>
            <ReactPlayer
              url={
                'https://videostreamingstorage.s3.ap-south-1.amazonaws.com/howWeHelpDesktop.m4v'
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
                'https://videostreamingstorage.s3.ap-south-1.amazonaws.com/howWeHelpMobile.m4v'
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

        <section className='my-12 px-6 lg:px-[calc(100vw/12)] py-12 h-fit bg-gradient-to-r from-vizard text-desc-gray via-cyan to-turquoise flex flex-col items-center lg:py-10'>
          <h1 className='text-[24px] font-bold py-1 lg:hidden text-center'>
            Numbers that <span className='text-violet'>Matter</span>
          </h1>
          <h2 className='text-sm py-1 text-center lg:hidden'>
            Growing each and everyday at lightening speed
          </h2>
          <div className='flex flex-col lg:flex-row items-center mt-5 lg:mt-0 justify-between w-full h-full'>
            <div className='flex flex-col space-y-1 items-center my-6 px-6 justify-center'>
              {/* <p className="text-[40px] lg:text-4xl xl:text-5xl text-violet font-bold">
                10000+
              </p> */}
              <CounterAnimation start={1000} end={10000} timer={40} />
              <p className='xl:text-lg font-medium pt-1'>Students Registered</p>
            </div>
            <div className='hidden lg:block w-[2px] py-14 bg-white'></div>
            <div className='flex flex-col space-y-1 items-center my-6 px-6 justify-center'>
              {/* <p className="text-[40px] lg:text-4xl xl:text-5xl  text-violet font-bold">
                500+
              </p> */}
              <CounterAnimation start={0} end={500} timer={50} />
              <p className='xl:text-lg font-medium pt-1'>Institutes onboard</p>
            </div>
            <div className='hidden lg:block w-[2px] py-14 bg-white'></div>

            <div className='flex flex-col space-y-1 items-center my-6 px-6 justify-center'>
              {/* <p className="text-[40px] lg:text-4xl xl:text-5xl  text-violet font-bold">
                200+
              </p> */}
              <CounterAnimation start={0} end={200} timer={40} />
              <p className='text-slate xl:text-lg font-medium pt-1'>
                Reach in schools
              </p>
            </div>
            <div className='hidden lg:block w-[2px] py-14 bg-white'></div>

            <div className='flex flex-col space-y-1  items-center mt-6 lg:my-6 px-6 justify-center '>
              {/* <p className="text-[40px] lg:text-4xl xl:text-5xl  text-violet font-bold">
                1000+
              </p> */}
              <CounterAnimation start={0} end={1000} timer={30} />
              <p className='text-slate xl:text-lg font-medium pt-1'>
                Reach in Colleges
              </p>
            </div>
          </div>
        </section>

        <section className='lg:items-center py-8 lg:py-12 px-6 lg:px-[calc(100vw/12)] flex flex-col lg:space-y-0  relative lg:mb-20'>
          <h1 className='text-start lg:text-center text-[22px]  lg:text-4xl xl:text-5xl font-bold text-slate lg:py-10 lg:mb-5'>
            Frequently asked <span className='text-violet'>Questions</span>
          </h1>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-2  lg:gap-y-6 py-8'>
            <FAQ
              question='Why should you partner with Ostello?'
              answer='Ostello enables you to get 60% more revenue, 10x new Students and boost your brand visibility by providing insights to improve your business.'
            />
            <FAQ
              question='How to promote my institute?   '
              answer='You can enhance your growth on Ostello by promoting your courses directly to the interested students by just sharing your Ostello’s web page link.'
            />
            <FAQ
              question='How to list my course?'
              answer='On completing the registration, you will have access to the Ostello Merchant Panel.'
            />
            <FAQ
              question='I have a good functioning website for my institute, why should I use Ostello’s platform?
              '
              answer='You can use your & Ostello’s Platform for simultaneously to increase your market & the main principle of Ostello is to help you reach the right students. Your courses will be presented to those who are looking for it and help you scale in Pan India level.'
            />
            <FAQ
              question='What all documents are required for registering on online course selling? 
              '
              answer='Registration for online ordering requires:
              a: Institute Registration Certificate (application no. if certificate is not present)
              b: Aadhar Card
              c: GST certificate (if applicable)'
            />
            <FAQ
              question='What will Ostello charge me for creating a page on its platform?
              '
              answer='Creating a Institute page on Ostello is free of cost. You can maintain your page by replying to reviews and do a lot more without any charges.'
            />
          </div>
        </section>

        <section className=''>
          <Testimonial />
        </section>
      </main>

      <div
        className='h-[450px] w-screen bg-violet px-6 py-10 flex flex-col justify-between items-center space-y-7 pb-16'
        style={{
          position: 'relative',
        }}
      >
        <div
          className='hidden lg:block'
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            backgroundImage: `url(${DesktopBackgroundVector})`,
            zIndex: '0',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div
          className='block lg:hidden mt-0'
          style={{
            position: 'absolute',
            top: '-27px',
            left: 0,
            height: '450px',
            width: '100vw',
            backgroundImage: `url(${MobileBackgroundVector})`,
            zIndex: '0',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <h1 className='text-3xl text-slate font-bold text-center '>
          <p className='text-white text-3xl  lg:text-5xl lg:w-2/3 text-center m-auto  leading-8 lg:leading-snug '>
            Accelerate your business with Ostello!
          </p>
        </h1>

        <p className='text-white text-center text-sm lg:text-xl w-72 lg:w-1/2 '>
          Now, market your courses to students across the nation.{' '}
          <br className='hidden lg:flex' />
          Register your institute, add course details, and boost your sales.
        </p>

        {/* <Link to='/merchant/signup'>
          <p className='text-base lg:text-2xl hidden lg:flex '>Start Selling</p>{' '}
          <p className='text-base  lg:text-2xl  lg:hidden '>Sign up</p>
          <BsArrowRightShort size={32} className='' />
        </Link> */}

        <Link
          to='/merchant/signup'
          className=' flex file:rounded rounded-md lg:rounded-xl  bg-white text-violet font-bold    justify-center items-center w-44 h-8 lg:w-72 lg:h-16 lg:space-x-3 z-[999] transition-all duration-300 ease-in-out hover:scale-[1.05] '
        >
          <p className='text-base lg:text-2xl hidden lg:flex '>Start Selling</p>{' '}
          <p className='text-base  lg:text-2xl  lg:hidden '>Sign up</p>
          <BsArrowRightShort size={32} className='' />
        </Link>
      </div>

      <Footer />
    </div>
  )
}

export default MerchantLanding

export const CounterAnimation = ({
  start = 0,
  end,
  timer = 50,
  className = '',
}) => {
  const [value, setValue] = useState(null)
  const ref = useRef(value)

  const inc = end / 200

  const updateCounterState = () => {
    if (ref.current < end) {
      const result = Math.ceil(ref.current + inc)
      if (result > end) return setValue(end)
      setValue(result)
      ref.current = result
    }
    setTimeout(updateCounterState, timer)
  }

  useEffect(() => {
    let isMounted = true
    if (isMounted) {
      updateCounterState()
    }
    return () => (isMounted = false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [end, start])

  return (
    <div
      className={`${className} text-[40px] lg:text-4xl xl:text-5xl text-violet font-bold`}
    >{`${value}+`}</div>
  )
}
