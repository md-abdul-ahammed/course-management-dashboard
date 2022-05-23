import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import LogoWithTitle from '../../assets/logo_title.svg'
import { AiFillLeftCircle } from 'react-icons/ai'
import { HiOutlineMail, HiOutlineShieldCheck } from 'react-icons/hi'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate, Navigate } from 'react-router-dom'
import axios from 'axios'
import { host } from '../../util/constant/constant'

const MerchantLogin = () => {
  const [isPassShown, setIsPassShown] = useState(true)
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const handleEmail = (e) => {
    e.preventDefault()
    setEmail(e.target.value)
  }
  const [password, setPassword] = useState('')
  const handlePassword = (e) => {
    e.preventDefault()
    setPassword(e.target.value)
  }
  const [errorText, setErrorText] = useState('')
  const [isLoggedInAlready] = useState(
    window.localStorage.getItem('ACCESS_TOKEN') !== null
  )

  const handleLogin = (e) => {
    e.preventDefault()
    axios
      .post(
        `${host}/users/login/`,
        {
          email: email,
          password: password,
        },
        {
          'Access-Control-Allow-Origin': '*',
        }
      )

      .then((res) => {
        window.localStorage.setItem(
          'ACCESS_TOKEN',
          res.data.message['access_token']
        )
        window.localStorage.setItem(
          'REFRESH_TOKEN',
          res.data.message['refresh_token']
        )

        fetch(`${host}/users?email=${email}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem(
              'ACCESS_TOKEN'
            )}`,
          },
        })
          .then((res) => res.json())
          .then((res) => {
            window.localStorage.setItem('OWNER_ID', res.message.id)
            console.log(res.message.usertype)

            if (res.message.usertype === 1) navigate('/adminDashboard/overview')
            else if (res.message.usertype === 2) {
              if (res.message.institute === null) navigate('/merchant/details')
              else {
                window.localStorage.setItem(
                  'INSTITUTE_ID',
                  res.message.institute.id
                )

                if (res.message.institute.approval === 1)
                  navigate('/merchant/dashboard')
                else navigate('/merchant/details/success')
              }
            }
          })
          .catch((err) => console.log(err))
      })
      .catch((err) => {
        console.log(err)
        setErrorText('Error logging in!')
      })
  }

  useEffect(() => {
    if (window.localStorage.getItem('OWNER_ID') !== null) {
      fetch(`${host}/users/id?id=${window.localStorage.getItem('OWNER_ID')}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem(
            'ACCESS_TOKEN'
          )}`,
        },
      }).catch((err) => console.log(err))
    }
  }, [])

  return (
    <main className='w-screen h-screen m-0 p-0 overflow-x-hidden overflow-y-hidden flex  font-dm-sans'>
      <section className='bg-gradient-to-r from-lavender via-turquoise to-cyan h-full w-1/2 hidden lg:flex justify-center items-center'>
        <Link to={'/'}>
          <img src={LogoWithTitle} alt='Ostello Logo' className='w-auto h-20' />
        </Link>
      </section>
      <section className='h-screen overflow-y-auto w-full lg:w-1/2 lg:min-w-[700px] flex flex-col justify-start items-center lg:py-6 lg:px-24'>
        <div className='hidden lg:block mr-auto '>
          <span onClick={() => navigate(-1)}>
            <AiFillLeftCircle className='text-violet text-4xl' />
          </span>
        </div>

        <nav className='lg:hidden flex items-center justify-between w-full px-6 py-4'>
          <button
            onClick={() => navigate(-1)}
            className='text-gray py-4 space-x-2 flex items-center'
          >
            <IoIosArrowBack />
            <p className=''>Back</p>
          </button>

          <div className='flex-1'></div>
          <img src={LogoWithTitle} alt='Ostello Logo' className='w-auto h-8' />
        </nav>

        <div className='flex flex-col py-6 px-6 lg:px-16 items-center justify-center h-full w-full lg:shadow-2xl lg:shadow-lavender lg:rounded-2xl '>
          <h1 className='font-bold text-2xl text-center '>
            Log into your Institute Panel
          </h1>
          <form onSubmit={(e) => e.preventDefault()} className=''>
            <div className='space-y-6 mt-12'>
              <div className=''>
                <div className='flex'>
                  <div className='flex-1'></div>
                  {errorText.length > 0 && (
                    <div className='text-xs text-red'>{errorText}</div>
                  )}
                </div>
                <div className='flex space-x-2 items-center py-3 px-4 shadow-md rounded-xl border border-light-gray  text-xl'>
                  <div className=''>
                    <HiOutlineMail className='text-slate text-2xl' />
                  </div>
                  <input
                    type='email'
                    placeholder='Email'
                    className='flex-1 text-base focus:outline-none focus:border-0'
                    value={email}
                    onChange={(e) => handleEmail(e)}
                  />
                </div>
              </div>
              <div className=''>
                <div className='flex space-x-2 items-center py-2  px-4 shadow-md rounded-xl border border-light-gray  text-xl'>
                  <div className=''>
                    <HiOutlineShieldCheck className='text-slate text-2xl' />
                  </div>
                  <input
                    onClick={() => setIsPassShown(true)}
                    onBlur={() => setIsPassShown(false)}
                    type={isPassShown ? 'text' : 'password'}
                    placeholder='Password'
                    className='text-base flex-1 w-48 focus:outline-none focus:border-0'
                    value={password}
                    onChange={(e) => handlePassword(e)}
                  />
                  <button
                    className={`px-2 py-1 font-medium flex justify-center items-center lg:space-x-2 rounded-2xl text-black`}
                    onClick={() => setIsPassShown(!isPassShown)}
                  >
                    {isPassShown ? (
                      <React.Fragment>
                        <BsEyeSlash className='text-slate text-2xl' />
                        {/* <span className="text-slate hidden lg:block">Hide</span> */}
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <BsEye className=' text-2xl text-slate' />
                        {/* <span className="text-slate hidden lg:block">Show</span> */}
                      </React.Fragment>
                    )}
                  </button>
                </div>
              </div>

              <button
                className='text-[#333333] text-md hover:underline'
                onClick={() => navigate('/forgot')}
              >
                Forgot your password ?
              </button>
            </div>
            <div className='flex justify-center mt-12'>
              <button
                onClick={(e) => handleLogin(e)}
                className=' bg-lavender hover:bg-violet  transition-all hover:-translate-y-1 shadow-lg px-12 lg:px-20 py-2 py-2 rounded-xl font-medium text-lg text-white'
              >
                Proceed
              </button>
            </div>
            <div className='flex flex-col lg:flex-row justify-center items-center space-x-2 lg:py-2 '>
              <p className='font-medium text-sm mt-8 mb-2 lg:mt-0 lg:mb-0 '>
                New to Ostello ? {'   '}
              </p>
              <button className='' onClick={() => navigate('/merchant/signup')}>
                <div className='  rounded-full text-sm text-violet'>
                  Register your institute
                </div>
              </button>
            </div>
          </form>
          <Link
            to={`/login`}
            className='border-violet rounded-lg border-2 px-4 py-1 text-lg text-violet my-16 hover:opacity-80'
          >
            <p>Are you a student ?</p>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default MerchantLogin
