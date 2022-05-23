import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import PhoneInput from 'react-phone-number-input'
import { AiFillCloseCircle } from 'react-icons/ai'
import LogoWithTitle from '../../assets/logo_title.svg'
import InputFieldPP from '../../components/SidePopup/InputFieldPP'
import DropdownPP from '../../components/SidePopup/DropdownPP'
import LoginVector from '../../assets/studentSignup/vector1.png'
import 'react-phone-number-input/style.css'

const StudentDetails = () => {
  const [otp, setOtp] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [, setMobileValue] = useState('')
  const [value, setValue] = useState('+91')
  const [category, setCategory] = useState('')
  const [otpError, setotpError] = useState('')
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [categoryError, setCategoryError] = useState('')

  const nameOfStates = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
  ]

  return (
    <>
      <main className='w-screen h-screen m-0 p-0 overflow-x-hidden overflow-y-hidden flex  font-dm-sans'>
        <section className='h-screen overflow-y-hidden gap-16 w-full flex justify-start items-center lg:py-6 lg:px-12'>
          <nav className='lg:hidden flex items-center justify-between w-full px-6 py-4'>
            <Link to='student-sign-in/student-details-form'>
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
            className='hidden lg:flex mx-auto h-auto justify-center pb-40 items-start'
          />

          <div className='flex flex-col w-1/3 py-12 px-6 mr-16 my-32 lg:shadow-2xl lg:shadow-light-white lg:rounded-2xl'>
            <div className='text-violet ml-auto hidden lg:flex text-3xl'>
              <Link to={'/'}>
                <AiFillCloseCircle />
              </Link>
            </div>
            <div className='lg:px-10 lg:py-2'>
              <h1 className='text-violet font-bold text-4xl '>Enter OTP</h1>
              <p className='mt-2'>
                We have sent an OTP on your registered mobile number
              </p>

              <div className='my-5 p-1 py-2 px-4 rounded-lg  w-11/12 flex bg-light-white'>
                <PhoneInput
                  className='w-10   '
                  placeholder='Enter your mobile number'
                  defaultCountry='IN'
                  value={value}
                  onChange={setValue}
                  international
                />
                <p className=''>{value}</p>
                <input
                  placeholder='Enter your mobile number'
                  type='text'
                  className='focus:outline-none  px-4 w-3/4 bg-gray bg-opacity-0 '
                  onChange={(e) => {
                    setMobileValue(e.target.value)
                  }}
                />
                <button className=''>Edit</button>
              </div>
              <div className='w-11/12'>
                <InputFieldPP
                  className='outline outline-light-white placeholderText-violet -mt-3  '
                  inputState={[otp, setOtp]}
                  placeholderText='One Time Password'
                  errorState={[otpError, setotpError]}
                />
                <InputFieldPP
                  className='outline outline-light-white placeholderText-violet -mt-1  '
                  inputState={[name, setName]}
                  placeholderText='Name'
                  errorState={[nameError, setNameError]}
                />
                <InputFieldPP
                  className='outline outline-light-white placeholderText-violet -mt-1  '
                  inputState={[email, setEmail]}
                  placeholderText='Email Address'
                  errorState={[emailError, setEmailError]}
                />
                <DropdownPP
                  selectValueState={[category, setCategory]}
                  placeholderText='State of Residence'
                  errorState={[categoryError, setCategoryError]}
                  className='outline outline-light-white rounded-lg'
                  options={[...nameOfStates]}
                />
              </div>
              <div className='flex mt-7'>
                <input type='checkbox' className='border w-5 h-5' />
                <p className='px-2'>
                  I agree to Ostello’s{' '}
                  <Link to='/terms'>
                    <span className='text-violet'> Terms</span>
                  </Link>
                  <span className='text-violet'> &</span>
                  <Link to='/privacy'>
                    <span className='text-violet'> Privacy policy </span>
                  </Link>
                </p>
              </div>
              <button className='bg-violet p-1 mt-10 w-32 h-10 rounded-lg text-white font-xl'>
                Verify OTP
              </button>
            </div>
            <p className=' mt-16 text-center'>
              Having trouble? please contact{' '}
              <span className='text-violet'>
                <span><a  href="mailto:support@ostello.co.in">support@ostello.co.in</a></span>
              </span>{' '}
              for further support
            </p>
          </div>
        </section>
      </main>
    </>
  )
}

export default StudentDetails
