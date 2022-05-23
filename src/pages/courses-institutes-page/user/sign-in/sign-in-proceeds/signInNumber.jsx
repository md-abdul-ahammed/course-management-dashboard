import React, { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PhoneInput from 'react-phone-number-input'
import axios from 'axios'
//sub components
import Panel from '../../sub-components/panel'
import {
  Heading,
  DottedParagraph,
  Paragraph,
  Flex,
} from '../../sub-components/layout'
import Button from '../../sub-components/Button'
import { host } from '../../../../../util/constant/constant'
import toast from 'react-hot-toast'
import { isEmpty } from '../../../../../components/utils'

const SignInField = ({ handleActive, handleNumber }) => {
  const mobileNumRef = useRef()
  const emailRef = useRef()
  const [value, setValue] = useState('+91')
  const navigate = useNavigate()

  return (
    <Panel className='shadow'>
      <Heading content='sign in' />

      <Paragraph>
        or{' '}
        <Link to='/student-sign-up'>
          <DottedParagraph content='create your account' />
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
          onKeyDown={(evt) =>
            ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()
          }
          type='number'
          ref={mobileNumRef}
          className='w-full outline-none '
          placeholder='Enter Your Number'
        />
      </div>
      <input ref={emailRef} type='email' className='hidden' />
      <Flex>
        <Button
          onClick={async () => {
            handleNumber(mobileNumRef.current.value)
            try {
              const { data } = await axios.get(
                `${host}/users?phonenumber=${mobileNumRef.current.value}`
              )
              if (!isEmpty(data)) {
                await axios({
                  method: 'get',
                  url: `${host}/auth/otp/generate`,
                  params: {
                    phonenumber: mobileNumRef.current.value,
                    email: emailRef.current.value,
                    otp:2514
                  },
                  headers: {
                    'Access-Control-Allow-Origin': '*',
                  },
                })
                console.log('sent the otp')

                handleActive(mobileNumRef.current.value ? 'otp' : 'main')
              }
              console.log(data)
            } catch (err) {
              toast.error('User not exists,Please sign up !')
              navigate('/signup')
            }
          }}
          content='Send OTP'
        />
      </Flex>
      <div className='flex justify-center items-end  mt-24 '>
        <Link
          to='/merchant/login'
          className='border border-violet text-violet py-2 px-6 rounded-lg font-dm-sans hover:opacity-80'
        >
          Are you an Institute?
        </Link>
      </div>
    </Panel>
  )
}

export default SignInField
