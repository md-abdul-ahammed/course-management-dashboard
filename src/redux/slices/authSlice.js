import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { isEmpty } from '../../components/utils'
import { host } from '../../util/constant/constant'
const initialState = {
  loading: false,
  error: null,
  accessToken: window.localStorage.getItem('ACCESS_TOKEN'),
  refreshToken: window.localStorage.getItem('REFRESH_TOKEN'),
  isAuthenticated: !isEmpty(window.localStorage.getItem('REFRESH_TOKEN')),
  userData: { name: '', id: '', phonenumber: '', email: '' },
  userLocation: {},
  instituteDetails: {},
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addAccessToken: (state, { payload }) => {
      state.accessToken = payload
      localStorage.setItem('ACCESS_TOKEN', payload)
    },
    removeAccessToken: (state, { payload }) => {
      state.accessToken = ''
      localStorage.setItem('ACCESS_TOKEN', '')
    },
    addRefreshToken: (state, { payload }) => {
      state.refreshToken = payload
      localStorage.setItem('REFRESH_TOKEN', payload)
    },
    removeRefreshToken: (state, { payload }) => {
      state.accessToken = ''
      localStorage.setItem('REFRESH_TOKEN', '')
    },
    clearAuth: (state) => {
      state.isAuthenticated = false
      state.userData = { name: '', id: '', phonenumber: '', email: '' }
      window.localStorage.clear()
      window.location.reload()
    },
    logout: (state) => {
      state.isAuthenticated = false
      ;(state.userData = { name: '', id: '', phonenumber: '', email: '' }),
        window.localStorage.clear()
      window.location.reload()
    },
    addUserData: (state, { payload }) => {
      state.userData = payload
      state.isAuthenticated = true
    },
    getUserRequest: (state, { payload }) => {
      state.loading = true
    },
    getUserRequestSuccess: (state, { payload }) => {
      state.loading = false
      state.userData = payload
    },
    getUserRequestFailed: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    addUserLocation: (state, { payload }) => {
      state.userLocation = { ...state.userLocation, ...payload }
    },
    getInstituteRequest: (state, { payload }) => {
      state.loading = true
    },
    getInstituteRequestSuccess: (state, { payload }) => {
      state.loading = false
      state.instituteDetails = payload
    },
    getInstituteRequestFailed: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})

export default authSlice.reducer

export const {
  addUserLocation,
  addUserData,
  getUserRequest,
  getUserRequestFailed,
  getUserRequestSuccess,
  addAccessToken,
  getInstituteRequest,
  getInstituteRequestSuccess,
  getInstituteRequestFailed,
  removeAccessToken,
  addRefreshToken,
  removeRefreshToken,
  clearAuth,
  logout,
} = authSlice.actions

export const authSelector = (state) => state.auth

export const getUser = () => {
  return async (dispatch) => {
    dispatch(getUserRequest())
    try {
      const { data } = await axios.get(
        `${host}/users/id?id=${window.localStorage.getItem('OWNER_ID')}`,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${window.localStorage.getItem(
              'ACCESS_TOKEN'
            )}`,
          },
        }
      )

      console.log(data)
      dispatch(getUserRequestSuccess(data.message))
    } catch (err) {
      dispatch(getUserRequestFailed(err))
      console.log(err)
    }
  }
}
export const getInstituteDetails = () => {
  return async (dispatch) => {
    dispatch(getInstituteRequest())
    try {
      const { data } = await axios.get(
        `${host}/institute?id=${window.localStorage.getItem('INSTITUTE_ID')}`,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${window.localStorage.getItem(
              'ACCESS_TOKEN'
            )}`,
          },
        }
      )
      console.log(data)
      dispatch(getInstituteRequestSuccess(data.message))
    } catch (err) {
      dispatch(getInstituteRequestFailed(err))
      console.log(err)
    }
  }
}
