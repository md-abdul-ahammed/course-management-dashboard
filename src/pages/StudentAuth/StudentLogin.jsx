import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LogoWithTitle from '../../assets/logo_title.svg'
import { IoIosArrowBack } from 'react-icons/io'
import { AiFillCloseCircle } from 'react-icons/ai'
import PhoneInput from 'react-phone-number-input'
import OTPInput from 'otp-input-react'
import { AiFillLeftCircle } from 'react-icons/ai'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { HiOutlineMail, HiOutlineShieldCheck } from 'react-icons/hi'
import { AiOutlineCheckCircle, AiFillCheckCircle } from 'react-icons/ai'

import LoginVector from '../../assets/studentSignup/vectorLog1.png'
import LoginVector1 from '../../assets/studentSignup/vectorLog2.png'
import 'react-phone-number-input/style.css'
import InputFieldPP from '../../components/SidePopup/InputFieldPP'
import {
  hasMin8,
  hasNumber,
  hasSpecialChar,
  hasUppercase,
  phoneNumberToNumber,
} from '../../components/utils'
import axios from 'axios'
import { host } from '../../util/constant/constant'

const StudentLogin = () => {
  const [currentStep, setCurrentStep] = useState('signInPhone') //'signInPhone , signInEmail , otpPhone , otpEmail
  const [isPhoneVerified, setIsPhoneVerified] = useState(false)
  const [errorText, setErrorText] = useState(initialErrorText)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [otpSent, setOtpSent] = useState(false)
  const [phoneVerified, setPhoneVerified] = useState(false)

  const [proceed, setProceed] = useState(false)
  const [isDisable, setIsDisable] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  console.log(otpSent)

  return (
    <>
      <main className='w-screen h-screen m-0 p-0 overflow-x-hidden overflow-y-hidden  font-dm-sans'>
        <section className=' hidden lg:flex  '>
          <Link to={`/`}>
            <img
              src={LogoWithTitle}
              alt='logo'
              className='w-80 mt-2 h-10  flex flex-row-reverse fixed'
            />
          </Link>
        </section>
        <section className='h-screen overflow-y-auto w-full  flex flex-col lg:flex-row justify-start items-center lg:py-6 lg:px-12'>
          <nav className='lg:hidden flex items-center justify-between w-full px-6 py-4'>
            <Link to='/'>
              <button className='text-gray py-4 space-x-2 flex items-center'>
                <IoIosArrowBack />
                <p className=''>Back</p>
              </button>
            </Link>
            <div className='flex-1'></div>
            <img
              src={LogoWithTitle}
              alt='Ostello Logo'
              className='w-auto h-8'
            />
          </nav>
          <img
            src={LoginVector}
            alt=''
            className={`hidden  ${
              proceed ? 'lg:hidden' : 'lg:flex'
            }  mx-auto w-6/12 justify-start items-start`}
          />
          <img
            src={LoginVector1}
            alt=''
            className={`hidden  ${
              proceed ? 'lg:flex' : 'lg:hidden'
            }  mx-auto w-6/12 justify-start items-start`}
          />

          <div className='flex flex-col justify-between   lg:mr-0  py-6 px-6  h-full w-full  xl:w-2/5 lg:shadow-2xl lg:shadow-lavender lg:rounded-2xl'>
            <div>
              <div className='text-violet justify-end  hidden lg:flex text-3xl'>
                <Link to={'/'}>
                  <AiFillCloseCircle />
                </Link>
              </div>
              <div className='lg:px-12 lg:py-10'>
                <h1 className='text-violet font-bold text-4xl '>
                  {currentStep === 'signInPhone'
                    ? 'Sign In'
                    : currentStep === 'otpPhone'
                    ? 'Enter OTP'
                    : currentStep === 'signInEmail'
                    ? 'Sign In'
                    : null}
                </h1>
                {currentStep.includes('otp') &&
                  'We have sent an OTP to your registered phone number'}

                {currentStep === 'signInPhone' && (
                  <span className='flex space-x-1 py-2  text-xl'>
                    <p className=''>or</p>
                    <Link
                      to={'/student-sign-up'}
                      className='text-violet px-1  border-b-2 border-dashed'
                    >
                      {' '}
                      create your account
                    </Link>
                  </span>
                )}

                <form onSubmit={(e) => e.preventDefault()} className=' mt-10'>
                  <VerifyOTP
                    currentStepState={[currentStep, setCurrentStep]}
                    otpState={[otpSent, setOtpSent]}
                    phoneVerifyState={[isPhoneVerified, setIsPhoneVerified]}
                    errorState={[errorText, setErrorText]}
                    phoneNumberState={[phoneNumber, setPhoneNumber]}
                    proceed={[otpSent, setOtpSent]}
                    phoneVerifiedState={[phoneVerified, setPhoneVerified]}
                  />
                </form>
              </div>
            </div>
            <div className='flex flex-col space-y-5'>
              <Link
                to={`/merchant/login`}
                className='border-violet rounded-lg border-2 px-4 py-1 text-lg text-violet   hover:opacity-80 w-fit mx-auto '
              >
                <p>Are you an institute ?</p>
              </Link>
              {currentStep.toLowerCase().includes('otp') && (
                <p className='text-center'>
                  Having trouble? please contact{' '}
                  <span className='text-violet'>
                    <a href='mailto:support@ostello.co.in'>
                      support@ostello.co.in
                    </a>
                  </span>{' '}
                  for further support
                </p>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default StudentLogin

const initialErrorText = {
  color: '',
  phone: '',
  email: '',
  otp: '',
  password: '',
}
export const VerifyOTP = ({
  phoneVerifyState,
  errorState,
  phoneNumberState,
  phoneVerifiedState,
  otpState,
  currentStepState,
}) => {
  const [phoneNumber, setPhoneNumber] = phoneNumberState
  const [email, setEmail] = useState('')
  const [, setIsPhoneVerified] = phoneVerifyState
  const [errorText, setErrorText] = errorState
  const [, setShowError] = useState(false)
  const [value, setValue] = useState('+91')
  const [, setPhoneVerified] = phoneVerifiedState

  const handlePhoneNumber = (e) => {
    const normalizedPhoneNumber = (value, previousValue) => {
      if (!value) return value
      const currentValue = value.replace(/[^\d]/g, '')
      const cvLength = currentValue.length

      if (!previousValue || value.length !== previousValue.length) {
        setErrorText(initialErrorText)
        if (cvLength < 4) return currentValue
        else if (cvLength <= 7)
          return `${currentValue.slice(0, 3)} ${currentValue.slice(3)}`
        else return `${currentValue.slice(0, 5)} ${currentValue.slice(5, 10)}`
      }
    }

    e.preventDefault()
    setPhoneNumber(normalizedPhoneNumber(e.target.value, phoneNumber))
  }

  const [otp, setOtp] = useState('')
  const [otpSent, setOtpSent] = otpState
  const [otpSec, setOtpSec] = useState(30)
  const [otpSentOnce, setOtpSentOnce] = useState(false)
  const [currentStep, setCurrentStep] = currentStepState

  const navigate = useNavigate()

  const handleOTPSend = (e) => {
    e.preventDefault()

    if (
      currentStep.toLowerCase().includes('phone') &&
      `${phoneNumberToNumber(phoneNumber)}`.length < 10
    ) {
      setErrorText({
        color: 'red',
        phone: `Enter a valid ${
          currentStep.toLowerCase().includes('email') ? 'email' : 'phone number'
        }`,
      })
      return
    }
    if (
      currentStep.toLowerCase().includes('phone') &&
      `${phoneNumberToNumber(phoneNumber)}`.length < 10
    ) {
      setErrorText({
        color: 'red',
        phone: `Enter a valid ${
          currentStep.toLowerCase().includes('email') ? 'email' : 'phone number'
        }`,
      })
      return
    }

    setOtpSent(true)
    setOtpSec(30)
    if (!otpSentOnce) {
      axios({
        method: 'get',
        url: `${host}/auth/otp/generate`,
        params: {
          phonenumber: phoneNumberToNumber(phoneNumber),
        },
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
        .then((res) => {
          setErrorText({ ...errorText, color: 'green', otp: res.data.message })
          setOtpSentOnce(false)
        })
        .catch((err) => {
          console.log(err)
          setErrorText({ ...errorText, color: 'red', otp: err.data.error })
        })
    } else {
      axios({
        method: 'get',
        url: `${host}/auth/otp/resend`,
        params: {
          phonenumber: phoneNumberToNumber(phoneNumber),
          retrytype: 'string',
        },
      })
        .then((res) => {
          setErrorText({ ...errorText, color: 'green', otp: res.data.message })
          setOtpSentOnce(true)
        })
        .catch((err) => {
          console.log(err)
          setErrorText({
            ...errorText,
            color: 'red',
            otp: err.data.error,
          })
        })
    }
  }

  const handleOTPVerify = (e) => {
    e.preventDefault()
    axios({
      method: 'get',
      url: `${host}/auth/otp/verify`,
      params: {
        phonenumber: phoneNumberToNumber(phoneNumber),
        otp: otp,
      },
    })
      .then((res) => {
        const error = JSON.stringify(res.data.error)
        setErrorText({
          ...errorText,
          color: 'green',
          otp: res.data.message,
        })
        setIsPhoneVerified(true)
        !error && setPhoneVerified(true)
        navigate('/courses_institutes')

        // axios
        //   .get(`${host}/users?phonenumber=${phoneNumberToNumber(phoneNumber)}`)
        //   .then((res) => {
        //     if (res.data.id)
        //   })
        //   .catch((err) => {
        //     console.error(err)

        //     navigate('/login')
        //   })
      })
      .catch((err) => {
        console.log(err)

        setErrorText({
          ...errorText,
          color: 'red',
          otp: err.data.error,
        })
        setShowError(true)
      })
  }

  useEffect(() => {
    let timer = null
    if (otpSent) {
      timer = setTimeout(() => {
        setOtpSec((s) => s - 1)
        if (otpSec <= 1) {
          setOtpSent(true)
          clearInterval(timer)
        }
      }, 1000)
    }
    return () => clearTimeout(timer)
  })

  return (
    <div className='space-y-4 mt-6'>
      <div className=''>
        <div className='flex'>
          <div className='flex-1'></div>
          <p className={`text-${errorText.color}`}>{errorText.phone}</p>
        </div>

        {currentStep === 'signInPhone' ? (
          <div className=' flex space-x-2 items-center py-1 mb-6 lg:mb-5 px-4 shadow-md rounded-xl text-xl'>
            <PhoneInput
              className='w-10   '
              placeholder='Enter your mobile number'
              defaultCountry='IN'
              value={value}
              onChange={setValue}
              international
            />
            <p className='py-2 text-base'>{value}</p>
            <p className='px-2 text-medium-white text-3xl'>|</p>
            <input
              onKeyDown={(evt) =>
                ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()
              }
              type='text'
              placeholder='Enter your Phone No '
              className='flex-1 focus:outline-none focus:border-0  text-base '
              onChange={(e) => handlePhoneNumber(e)}
              value={phoneNumber}
            />
          </div>
        ) : (
          currentStep === 'signInEmail' && (
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              className='h-10 border border-gray rounded-lg w-full mb-10 mt-6 p-2'
              placeholder='Email address'
            />
          )
        )}

        <div className=''>
          <div className='flex-1'></div>
          <p
            className={`text-${errorText.color} flex justify-center items-center m-auto`}
          >
            {otpSent && errorText.otp}
          </p>
        </div>

        {otpSent ? (
          <div>
            <div className='flex justify-between items-center space-x-2 py-4 px-4 text-xl'>
              <OTPInput
                inputClassName='border-2 border-grey-border text-xl rounded '
                className='items-center m-auto '
                value={otp}
                onChange={setOtp}
                autoFocus
                OTPLength={4}
                otpType='number'
                disabled={false}
              />
            </div>
            <p
              onClick={() => setOtpSent(false)}
              className='text-violet cursor-pointer'
            >
              Change{' '}
              {currentStep.toLowerCase().includes('email') ? (
                <span onClick={() => setCurrentStep('signInEmail')}>
                  email ID ?
                </span>
              ) : currentStep.toLowerCase().includes('phone') ? (
                <span onClick={() => setCurrentStep('signInPhone')}>
                  phone number ?
                </span>
              ) : null}
            </p>
          </div>
        ) : (
          ''
        )}

        {otpSent && otpSec < 1 && (
          <button
            className={`  px-10 lg:py-2 m-auto py-1 text-base flex justify-center items-center lg:space-x-2  `}
            onClick={(e) => handleOTPSend(e)}
          >
            <p className=' font-bold' style={{ color: '#A7A7A7' }}>
              Resend OTP
            </p>
          </button>
        )}

        {otpSent && otpSec !== 30 && otpSec !== 0 && otpSec > 0 && (
          <p className='text-gray text-sm flex justify-center items-center  m-auto mb-3'>
            Resend OTP in <span className='font-medium pl-2'> {otpSec}</span>s
          </p>
        )}

        {otpSent ? (
          <button
            className='border-2 px-10 lg:py-2 m-auto py-1 text-base flex justify-center items-center lg:space-x-2 rounded-lg bg-violet border-violet text-white'
            onClick={(e) => handleOTPVerify(e)}
          >
            Verify OTP
          </button>
        ) : (
          <div className='flex items-center justify-between '>
            <button
              className={` border-2 px-5   py-1 text-base flex justify-center items-center lg:space-x-2 rounded-lg bg-violet border-violet text-white `}
              onClick={(e) => {
                handleOTPSend(e)
                setCurrentStep('otpPhone')
              }}
            >
              <p className='text-white'>Send OTP</p>
            </button>
            {/* {currentStep === 'signInPhone' ? (
              <p
                onClick={() => setCurrentStep('signInEmail')}
                className='text-violet border border-dashed border-t-0 border-l-0 border-r-0 text-lg cursor-pointer  '
              >
                Continue with email
              </p>
            ) : currentStep === 'signInEmail' ? (
              <p
                onClick={() => setCurrentStep('signInPhone')}
                className='text-violet border border-dashed border-t-0 border-l-0 border-r-0 text-lg cursor-pointer  '
              >
                Continue with phone number
              </p>
            ) : null} */}
          </div>
        )}
      </div>
    </div>
  )
}
