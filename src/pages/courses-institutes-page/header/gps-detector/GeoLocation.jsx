import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import useGeoLocation from '../../../../components/hooks/useGeoLocation'
import { isEmptyObj } from '../../../../components/utils'
import { addUserLocation } from '../../../../redux/slices/authSlice'

export default function GeoLocation() {
  const location = useGeoLocation()

  const dispatch = useDispatch()
  useEffect(() => {
    if (!isEmptyObj(location)) {
      dispatch(addUserLocation(location))
    }
    if (location?.error?.message?.length) {
      toast.error(location.error.message)
    }
  }, [location, dispatch])

  return null
}
