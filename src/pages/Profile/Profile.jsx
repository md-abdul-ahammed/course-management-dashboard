import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import ProfileNavbar from '../../components/Profile/ProfileNavbar'
import logo from '../../assets/merchantDashboard/Accountancy/logo.png'
import { Container } from '@mui/material'

import './Profile.css'
import ProfileToggleNavbar from '../../components/Profile/ProfileToggleNavbar'
import { useDispatch, useSelector } from 'react-redux'
import { setShowSideBar } from '../../redux/slices/UserProfileSidePopUp'
import Protect from '../../components/Auth/Protect'

const Profile = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.auth.isAuthenticated)

  const navigate = useNavigate()
  useEffect(() => {
    if (!userLogin) {
      navigate('/login')
    }
  },[userLogin])

  return (
    <>
      <ProfileToggleNavbar></ProfileToggleNavbar>

      <div className='logo flex items-center ml-4 mt-5 mb-12 hidden lg:block'>
        <img src={logo} alt='' />
      </div>
      <div className=' grid grid-cols-8 gap-0 bg-white '>
        <div className=' hidden  lg:block col-span-2 '>
          <div>
            <ProfileNavbar></ProfileNavbar>
          </div>
        </div>

        <div
          style={{
            height: '100%',
          }}
          className=' col-span-8 lg:col-span-6 mb-5 '
          onClick={() => dispatch(setShowSideBar(false))}
        >
          <div className=' lg:border border-2 border-ghost/60 border-0 rounded-2xl lg:w-[95%] w-full '>
            <div className=''>
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
