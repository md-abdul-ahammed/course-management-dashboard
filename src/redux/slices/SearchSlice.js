import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  error: false,
  filters: {
    category: null,
    classType: null,
    duration: null,
    sortBy: null,
    rating: null,
    price: null,
    classes: null,
    subjects: null,
    board: null,
    exam: null,
    skill: null,
  },
  filteredCourses: [],
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setFilteredCourses: (state, { payload }) => {
      state.filteredCourses = payload
    },
    setCategory: (state, { payload }) => {
      state.filters.category = payload
    },
    setClassType: (state, { payload }) => {
      state.filters.classType = payload
    },
    setSkill: (state, { payload }) => {
      state.filters.skill = payload
    },
    setDuration: (state, { payload }) => {
      state.filters.duration = payload
    },
    setSortBy: (state, { payload }) => {
      state.filters.sortBy = payload
    },
    setRating: (state, { payload }) => {
      state.filters.rating = payload
    },
    setPrice: (state, { payload }) => {
      state.filters.price = payload
    },
    setClass: (state, { payload }) => {
      state.filters.classes = payload
    },
    setSubjects: (state, { payload }) => {
      state.filters.subjects = payload
    },
    setBoard: (state, { payload }) => {
      state.filters.board = payload
    },
    setExam: (state, { payload }) => {
      state.filters.exam = payload
    },

    clearFilters: (state, { payload }) => {
      state.filteredCourses = payload
      state.filters = {
        category: null,
        classType: null,
        duration: null,
        sortBy: null,
        rating: null,
        price: null,
        classes: null,
        subjects: null,
        board: null,
        exam: null,
        skill: null,
      }
    },
  },
})

export default searchSlice.reducer

export const {
  setCategory,
  setDuration,
  setClassType,
  setSkill,
  setPrice,
  setRating,
  setSortBy,
  setBoard,
  setClass,
  setSubjects,
  setExam,
  clearFilters,
  setFilteredCourses,
} = searchSlice.actions

export const selectSearch = (state) => state.search
