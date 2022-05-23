import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import PhoneInput from 'react-phone-number-input'
import axios from 'axios'
//sub components
import { Times, Check } from '../../sub-components/icons'
import Panel from '../../sub-components/panel'
import {
  Heading,
  Paragraph,
  DottedParagraph,
} from '../../sub-components/layout'
import Button from '../../sub-components/Button'
import { host } from '../../../../../util/constant/constant'

import Popup from '../../../../../assets/courses_institutions/sign-up/popup.svg'
import { useDispatch } from 'react-redux'
import { addRegisterData } from '../../../../../redux/slices/signUpSlice'

const SignUpField = ({ handleActive, handleNumber }) => {
  const [code, setCode] = useState('')
  const [active, setActive] = useState(false)
  const mobileNumRef = useRef()
  const emailRef = useRef()
  const [value, setValue] = useState('+91')
  const [popup, setPopup] = useState('pop')
  const dispatch = useDispatch()

  const handlePopup = (val) => {
    setPopup(val)
  }

  return (
    <Panel className='shadow'>
      <Heading content='join ostello' />
      <Paragraph>
        or{' '}
        <Link to='/login'>
          <DottedParagraph content='login to your account' />
        </Link>
      </Paragraph>

      <div className='my-10 h-10 px-4 rounded-lg border border-gray lg:w-5/5 flex items-center text-lg'>
        <PhoneInput
          className='w-10'
          placeholder='Enter your mobile number'
          defaultCountry='IN'
          value={value}
          onChange={setValue}
          international
        />
        <p className='py-2'>{value}</p>
        <p className='px-2 text-3xl text-gray'>|</p>
        <input
          type='number'
          ref={mobileNumRef}
          className='w-full outline-none'
          placeholder='Enter Your Number'
        />
      </div>
      <input ref={emailRef} type='email' className='hidden' />

      <p
        onClick={() => setActive(!active)}
        className={
          active
            ? 'hidden'
            : 'block font-dm-sans text-violet font-medium text-base cursor-pointer'
        }
      >
        Have a Referral Code?
      </p>
      {active && (
        <div className='border border-gray px-4 h-10 w-full rounded-lg flex justify-between items-center'>
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            type='text'
            placeholder='Referral code'
            className='w-full outline-none '
          />
          <span className='text'>{code.length ? <Check /> : <Times />}</span>
        </div>
      )}

      <div className='flex md:justify-start justify-center mt-12'>
        <Button
          onClick={() => {
            if (mobileNumRef.current.value) {
              if (code.length > 1) {
                return handleActive('popup')
              }
              handleActive('otp')
            }

            handleNumber(mobileNumRef.current.value)
            dispatch(
              addRegisterData({
                phonenumber: mobileNumRef.current.value,
                email: emailRef.current.value,
              })
            )
            axios({
              method: 'get',
              url: `${host}/auth/otp/generate`,
              params: {
                phonenumber: mobileNumRef.current.value,
                email: emailRef.current.value,
              },
              headers: {
                'Access-Control-Allow-Origin': '*',
              },
            })
              .then((res) => {
                console.log(res)
              })
              .catch((err) => {
                console.log(err)
              })
          }}
          content='Continue'
        />
      </div>
    </Panel>
  )
}

export default SignUpField
