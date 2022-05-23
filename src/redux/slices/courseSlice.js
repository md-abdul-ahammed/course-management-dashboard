import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { host } from '../../util/constant/constant'

const courseSlice = createSlice({
  name: 'course',
  initialState: {
    loading: false,
    error: null,
    courses: [],
    currentCourse: {},
    totalPrice: 0
  },
  reducers: {
    getCourseRequest: (state, { payload }) => {
      state.loading = true
    },
    getCourseSuccess: (state, { payload }) => {
      state.loading = false
      state.courses = payload
    },
    getCourseFailed: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    setCurrentCourse: (state, { payload }) => {
      state.currentCourse = payload
    },
    getTotalPrice : (state, {payload}) => {
      state.totalPrice = payload
    }
  },
})

export default courseSlice.reducer

export const {
  getCourseFailed,
  getCourseRequest,
  getCourseSuccess,
  setCurrentCourse,
  getTotalPrice
} = courseSlice.actions

export const selectCourse = (state) => state.course

export const fetchCourses = () => {
  return async (dispatch) => {
    dispatch(getCourseRequest())
    try {
      await axios.get(`${host}/course`).then((res) => {
        dispatch(getCourseSuccess(res.data.message))
      })
    } catch (error) {
      dispatch(getCourseFailed(error))
    }
  }
}
