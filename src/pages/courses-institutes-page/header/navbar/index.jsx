import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../../../assets/courses_institutions/header/logo.svg'
import { authSelector, getUser } from '../../../../redux/slices/authSlice'
import './style.css'
import { capitalizeFirstLetter, isEmpty } from '../../../../components/utils'
import LoadingSpinner from '../../../../components/layout/LoadingSpinner'
const Navbar = () => {
  let { userData, instituteDetails, loading } = useSelector(authSelector)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  console.log(loading, 'loading')

  let userName = userData?.name

  console.log(userName, 'UserName')

  if (loading) return <LoadingSpinner />

  return (
    <nav className='w-full'>
      <div className='nav-container'>
        <Link to='/' style={{ zIndex: '15' }}>
          <img
            className='w-32 md:w-44'
            src={Logo}
            alt='logo'
            style={{ zIndex: '15' }}
          />
        </Link>
        <div
          style={{ zIndex: '15' }}
          className='btn-container md:flex items-center hidden'
        >
          <Link
            to='/merchant'
            className='mx-3 border-2 border-white border-solid py-2 px-7 rounded-lg text-lg text-white h-fit'
          >
            Add your institute
          </Link>
          {!isEmpty(window.localStorage.getItem('ACCESS_TOKEN')) ? (
            <div
              onClick={() =>
                navigate(
                  userData.usertype === 2
                    ? '/merchant/dashboard/profile'
                    : userData.usertype === 3 && '/profile'
                )
              }
              className='flex items-center space-x-2 hover:scale-110 duration-300 cursor-pointer'
            >
              <div className='bg-violet h-10 w-10 rounded-full flex items-center justify-center p-1 text-white cursor-pointer '>
                {userName?.slice(0, 1).toUpperCase()}
              </div>
              <p className='text-white text-lg'>
                {!isEmpty(userName) && capitalizeFirstLetter(userName)}
              </p>
            </div>
          ) : (
            <Link
              to='/login'
              className='mx-3 bg-violet py-2 px-6 rounded-lg text-lg text-white'
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
