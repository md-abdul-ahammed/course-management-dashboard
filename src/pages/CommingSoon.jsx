import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import NavHeader from '../components/NavHeader'
import LogoWithTitle from '../assets/logo_title.svg'
import BackgroundGradient from '../assets/background/landing_gradient.png'
import TextBackground2 from '../assets/background/commingsoongradient2.png'
import BackgroundCircle from '../assets/background/commingsoonbackground.png'
import { logout } from './Auth/Login'

const CommingSoon = ({
  isAuth = window.localStorage.getItem('ACCESS_TOKEN') !== null,
}) => {
  const [viewPort, setViewPort] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  })
  const [showMark, setShowMark] = useState(false)
  const [email, setEmail] = useState('second')
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
              backgroundSize: '100vw 90vh',
              backgroundPosition: '50% 0%',
            }
          : {}
      }
    >
      <div className='flex py-5 px-10'>
        <Link to='/'>
          <img
            src={LogoWithTitle}
            alt='logo'
            className='w-auto hidden lg:block h-4 lg:h-6 xl:h-10 pr-6 xl:pr-0'
          />
        </Link>
        {/* <Link to="/">
          <img
            src={LogoWithTitle}
            alt="logo"
            className="w-auto hidden lg:block h-4 lg:h-6 xl:h-10 pr-6 xl:pr-0"
          />
        </Link> */}
        {!isAuth ? (
          <React.Fragment>
            <div className='lg:flex ml-auto hidden   space-x-10  '>
              {' '}
              <Link to={'/signup'}>
                <button
                  className='lg:w-20 xl:w-28 xl:h-10 py-1 border-2 rounded text-base font-medium  text-violet hover:bg-violet hover:text-white   border-violet '
                  onClick={() => {}}
                >
                  Sign Up
                </button>
              </Link>
              <Link to={'/login'}>
                <button className='lg:w-20 xl:w-32 xl:h-10 py-1 border-2 border-violet rounded bg-violet shadow-md'>
                  <p className='font-medium text-base text-white'>Login</p>
                </button>
              </Link>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <button className='bg-violet shadow-md px-6 py-1 rounded-xl flex space-x-2 items-center'>
              <div className='w-8 h-8 rounded-full  bg-lavender'></div>
              <p className='text-base text-white font-medium'>My Profile</p>
            </button>
            <button
              className='px-6 py-1 border-2  shadow-md rounded-lg border-violet'
              onClick={() => {
                // window.localStorage.removeItem("ACCESS_TOKEN");
                // window.localStorage.removeItem("OWNER_ID");
                // window.location.reload();
                logout()
              }}
            >
              <p className='font-medium text-base text-violet'>Logout</p>
            </button>
          </React.Fragment>
        )}
      </div>

      <img
        src={BackgroundCircle}
        alt=' '
        className='absolute w-11/12 hidden lg:block  right-10'
      />

      <div className='lg:hidden'>
        <NavHeader className='' />
      </div>

      <img
        src={TextBackground2}
        alt=''
        className='mx-auto w-4/5 lg:w-6/12 pt-14 lg:pt-20  lg:py-3'
      />

      <p className='text-center hidden lg:block '>
        Still Confused about your future? Don't worry!
        <br /> Ostello is working to help you UPSKILL yourself & make the right
        career choice.
      </p>

      <div className=''>
        <div className='relative  py-10  lg:py-16'>
          <h1 className='text-violet text-2xl lg:text-3xl font-bold text-center lg:py-2'>
            Stay upto date.
          </h1>
          <p className='text-base lg:text-lg text-center'>
            Don’t miss out future blogs.
          </p>

          <div className='flex flex-col m-auto space-y-5 lg:space-y-0  lg:relative py-8   lg:w-max'>
            <input
              type='email'
              className='h-12 mt-2 lg:mt-0  px-4  rounded-lg w-72  xl:w-[480px] border-2 border-violet m-auto lg:m-0  '
              placeholder='type your email here'
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              required
            />

            <button
              onFocus={() => {
                email.length > 1 && email.includes('@')
                  ? setShowMark(true)
                  : setShowMark(false)
              }}
              className={
                (showMark && email.length > 1 && email.includes('@')
                  ? 'bg-green lg:bg-green '
                  : 'bg-blue lg:bg-violet  ') +
                ' text-white lg:absolute  lg:right-0 text-md   rounded-md mt-  p-3 w-40 m-auto  lg:w-40      '
              }
            >
              {showMark && email.length > 1 && email.includes('@')
                ? '✔'
                : 'Register'}
            </button>
            {showMark && email.length > 1 && email.includes('@') ? (
              <p className='text-white'>Thanks For Subscribing Newsletter</p>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommingSoon
