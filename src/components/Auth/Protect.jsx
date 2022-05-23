import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { authSelector, getUser } from '../../redux/slices/authSlice'
import LoadingSpinner from '../layout/LoadingSpinner'

export default function Protect({
  userType,
  children,
  redirect,
  use404,
  disableRedirect,
}) {
  const [allowed, setAllowed] = useState(null)
  const { isAuthenticated, userData, loading } = useSelector(authSelector)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getUser())
    if (!isAuthenticated && !loading) navigate('/login')
  }, [dispatch, isAuthenticated, navigate])

  console.log(userData.usertype, userType, 'here')

  useEffect(() => {
    if (!loading) {
      let typeOfProps = typeof userType
      let condition = Array.isArray(userType)
        ? userType.includes(userData.usertype)
        : typeOfProps === 'number'
        ? userType === userData.usertype
        : false
      if (!condition) {
        setAllowed(false)
        return
      }
      setAllowed(true)
    }
  }, [loading, userType, userData])

  if (loading) return <LoadingSpinner />
  if (!loading && !allowed && !disableRedirect)
    navigate(use404 ? '' : redirect?.length ? redirect : -1)

  return <>{!loading && allowed && children}</>
}
