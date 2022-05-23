import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
//sub components
import DetectAge from './age'
import Residence from './residenceDropDown'
import Panel from '../../sub-components/panel'
import { Heading } from '../../sub-components/layout'
import Button from '../../sub-components/Button'
import axios from 'axios'
import { host } from '../../../../../util/constant/constant'
import { useDispatch, useSelector } from 'react-redux'
import {
  addRegisterData,
  selectSignUp,
} from '../../../../../redux/slices/signUpSlice'
import { getUser } from '../../../../../redux/slices/authSlice'

const CompleteDetails = () => {
  const { registerData } = useSelector(selectSignUp)
  console.log(registerData)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleRegister = async () => {
    const { name, email, phonenumber, usertype, password } = registerData

    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    }
    try {
      console.log(config)
      const registerReq = await axios.post(
        `${host}/users/register`,
        registerData,
        config
      )
      const { data } = await axios.post(
        `${host}/users/login`,
        { email, password: email },
        config
      )
      const { access_token, refresh_token } = data.message
      localStorage.setItem('ACCESS_TOKEN', access_token)
      localStorage.setItem('REFRESH_TOKEN', refresh_token)

      const res = await axios.get(`${host}/users?email=${email}`, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem(
            'ACCESS_TOKEN'
          )}`,
        },
      })
      window.localStorage.setItem('OWNER_ID', res.data.message.id)
      dispatch(getUser())
      navigate('/courses_institutes')
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <Panel className='detail shadow'>
        <Heading content='Complete your details' />

        <form className='flex flex-col'>
          <input
            onChange={(e) =>
              dispatch(addRegisterData({ name: e.target.value }))
            }
            type='text'
            className='rounded-lg p-4 h-10 mt-4 border border-gray'
            placeholder='name'
          />
          <input
            type='email'
            onChange={(e) =>
              dispatch(
                addRegisterData({
                  email: e.target.value,
                  password: e.target.value,
                  usertype: 3,
                })
              )
            }
            className='rounded-lg p-4 h-10  mt-4 mb-2 border border-gray'
            placeholder='email'
          />
        </form>

        <Residence />

        <DetectAge />

        <div
          // to={'/courses_institutes'}
          className='flex  md:justify-start justify-center mt-12 '
          onClick={handleRegister}
        >
          <Button content='Continue' />
        </div>

        <p className=' bottom-0 md:mb-5 font-dm-sans text-light-black text-sm  w-11/12 mx-auto '>
          By continuing, you agree to Ostello’s
          <Link className='text-violet' to='/'>
            {' '}
            Terms & Conditions
          </Link>{' '}
          and{' '}
          <Link className='text-violet' to='/'>
            Privacy Policy
          </Link>
        </p>
      </Panel>
      <p className='md:hidden absolute bottom-0 px-2 md:mb-5 font-dm-sans text-light-black text-sm w-full'>
        By continuing, you agree to Ostello’s
        <Link className='text-violet' to='/'>
          {' '}
          Terms & Conditions
        </Link>{' '}
        and{' '}
        <Link className='text-violet' to='/'>
          Privacy Policy
        </Link>
      </p>
    </>
  )
}

export default CompleteDetails
