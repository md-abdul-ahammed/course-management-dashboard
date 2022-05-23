import { Affix } from 'antd'
import React, { useState } from 'react'
import logo from '../../assets/logo_title.svg'
import SearchField from './SearchField'
import { Link } from 'react-router-dom'
import Container from '../../components/layout/Container'
import { useDispatch, useSelector } from 'react-redux'
import { authSelector, logout } from '../../redux/slices/authSlice'

export default function SearchNav() {
  const [affixed, setAffixed] = useState(false)
  const { isAuthenticated } = useSelector(authSelector)
  const dispatch = useDispatch()

  return (
    <>
      <Affix offsetTop={0} onChange={(value) => setAffixed(value)}>
        <div className='bg-white hidden sm:block '>
          <div className='flex items-center justify-between py-2 px-10  '>
            <Link to='/'>
              <img src={logo} className='w-40 cursor-pointer ' alt='' />
            </Link>

            <SearchField className={''} />

            {!isAuthenticated ? (
              <Link to={'/login'}>
                <button className=' bg-violet text-white px-10 py-2 rounded-lg'>
                  Login
                </button>
              </Link>
            ) : (
              <button
                onClick={() => {
                  dispatch(logout())
                }}
                className=' bg-violet text-white px-10 py-2 rounded-lg'
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </Affix>
    </>
  )
}
