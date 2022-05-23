import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//images
import Logo from '../../../../assets/logo_title.svg'
import SignInImg from '../../../../assets/courses_institutions/sign-in/signIn.svg'
import SigninEmailImg from '../../../../assets/courses_institutions/sign-in/signin-email.svg'
import OTPImg from '../../../../assets/courses_institutions/sign-up/OTP.svg'
import ChangenumberImg from '../../../../assets/courses_institutions/sign-up/change-number.svg'
//components
import BottomNavabr from '../../mobile-bottom-navbar'
import SignInField from './sign-in-proceeds/signInNumber'
import SignInEmail from './sign-in-proceeds/SignInEmail'
import OTP from './sign-in-proceeds/OTPNumber'
import ChangeNumber from './sign-in-proceeds/changeMobileNumber'
import ChangeEmail from './sign-in-proceeds/changeEmail'
import OTPEmail from './sign-in-proceeds/OtpEmail'
//styled components
import { Container } from './index.styled'
import Panel from '../sub-components/panel'
import BottomBar from '../../../../components/layout/BottomBar'

const SignIn = () => {
  const [active, setActive] = useState('main')
  const [mobilenumber, setmobilenumber] = useState()
  const [email, setEmail] = useState()

  const handleEmail = (val) => {
    setEmail(val)
  }

  const handleMobileNumber = (val) => {
    setmobilenumber(val)
  }

  const handleActive = (val) => {
    setActive(val)
  }

  console.log(active)
  return (
    <>
      <div className='py-3 shadow-reverse bg-cloud md:bg-white w-full inline-block'>
        <Link to='/'>
          <img className='w-40 ml-4 md:ml-16 md:mt-2' src={Logo} alt='logo' />
        </Link>
      </div>
      <Container className='flex items-center md:justify-evenly flex-col md:flex-row'>
        <div>
          {active === 'main' && (
            <img
              className='hidden md:block mr-8'
              src={SignInImg}
              alt='vector'
            />
          )}
          {active === 'email' && (
            <img
              className='hidden md:block mr-8'
              src={SigninEmailImg}
              alt='vector'
            />
          )}
          {active === 'otp' && (
            <img className='hidden md:block mr-8' src={OTPImg} alt='vector' />
          )}
          {active === 'otpemail' && (
            <img
              className='hidden md:block ml-8 mr-8'
              src={OTPImg}
              alt='vector'
            />
          )}
          {active === 'changenumber' && (
            <img
              className='hidden md:block mr-8'
              src={ChangenumberImg}
              alt='vector'
            />
          )}
          {active === 'changeemail' && (
            <img
              className='hidden md:block mr-8'
              src={SigninEmailImg}
              alt='vector'
            />
          )}
        </div>

        <>
          {active === 'main' && (
            <SignInField
              handleNumber={handleMobileNumber}
              handleActive={handleActive}
            />
          )}
          {active === 'email' && (
            <SignInEmail
              handleEmail={handleEmail}
              handleActive={handleActive}
            />
          )}
          {active === 'otp' && (
            <OTP mobilenumber={mobilenumber} handleActive={handleActive} />
          )}
          {active === 'otpemail' && (
            <OTPEmail email={email} handleActive={handleActive} />
          )}
          {active === 'changenumber' && (
            <ChangeNumber
              handleNumber={handleMobileNumber}
              handleActive={handleActive}
            />
          )}
          {active === 'changeemail' && (
            <ChangeEmail
              handleEmail={handleEmail}
              handleActive={handleActive}
            />
          )}
        </>
      </Container>
      {/* <BottomNavabr /> */}
      <BottomBar />
    </>
  )
}
export default SignIn
