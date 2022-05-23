import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { host } from '../../util/constant/constant'

const instituteSlice = createSlice({
  name: 'institute',
  initialState: {
    loading: false,
    error: null,
    institutes: [],
    currentInstitute: {},
  },
  reducers: {
    getInstituteRequest: (state, { payload }) => {
      state.loading = true
    },
    getInstituteSuccess: (state, { payload }) => {
      state.loading = false
      state.institutes = payload
    },
    getInstituteFailed: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    setCurrentInstitute: (state, { payload }) => {
      state.currentInstitute = payload
    },
  },
})

export default instituteSlice.reducer

export const {
  getInstituteFailed,
  getInstituteRequest,
  getInstituteSuccess,
  setCurrentInstitute,
} = instituteSlice.actions

export const institutesSelector = (state) => state.institute

export const fetchInstitutes = () => {
  return async (dispatch) => {
    dispatch(getInstituteRequest())
    try {
      await axios.get(`${host}/institute`).then((res) => {
        dispatch(getInstituteSuccess(res.data.message))
      })
    } catch (error) {
      dispatch(getInstituteFailed(error))
    }
  }
}
