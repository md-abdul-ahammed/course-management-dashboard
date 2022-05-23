import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//images
import Logo from '../../../../assets/logo_title.svg'
import SignLogo from '../../../../assets/courses_institutions/sign-in/signIn.svg'
import Otp from '../../../../assets/courses_institutions/sign-up/OTP.svg'
import Changenum from '../../../../assets/courses_institutions/sign-up/change-number.svg'
import Completedetails from '../../../../assets/courses_institutions/sign-up/complete-details.svg'
//components
import SignUpField from './sign-up-proceeds/SignUpField'
import BottomNavbar from '../../mobile-bottom-navbar/index'
import PopUp from './sign-up-proceeds/popup'
import OtpLogin from './sign-up-proceeds/Otp'
import ChangeNumber from './sign-up-proceeds/changeNumber'
import CompleteDetails from './sign-up-proceeds/completeDetails'
//styled components
import { Container } from './index.styled'
import BottomBar from '../../../../components/layout/BottomBar'
import Residence from './sign-up-proceeds/residenceDropDown'

const SignUp = () => {
  const [active, setActive] = useState('main')
  const [mobilenumber, setmobilenumber] = useState()

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
            <img className='hidden md:block mr-8' src={SignLogo} alt='vector' />
          )}
          {active === 'otp' && (
            <img className='hidden md:block mr-8' src={Otp} alt='vector' />
          )}
          {active === 'changenumber' && (
            <img
              className='hidden md:block mr-8'
              src={Changenum}
              alt='vector'
            />
          )}
          {active === 'completedetails' && (
            <img
              className='hidden md:block mr-8'
              src={Completedetails}
              alt='vector'
            />
          )}
        </div>

        <>
          {active === 'main' && (
            <SignUpField
              handleNumber={handleMobileNumber}
              handleActive={handleActive}
            />
          )}
          {active === 'popup' && <PopUp handleActive={handleActive} />}
          {active === 'otp' && (
            <OtpLogin mobilenumber={mobilenumber} handleActive={handleActive} />
          )}
          {active === 'changenumber' && (
            <ChangeNumber
              handleNumber={handleMobileNumber}
              handleActive={handleActive}
            />
          )}
          {active === 'completedetails' && (
            <CompleteDetails handleActive={handleActive} />
          )}
        </>
      </Container>
      {/* <BottomNavbar /> */}
      <BottomBar />
    </>
  )
}

export default SignUp
