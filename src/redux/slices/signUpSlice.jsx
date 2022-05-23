import { createSlice } from '@reduxjs/toolkit'
const signUpSlice = createSlice({
  name: 'signUp',
  initialState: {
    loading: false,
    error: null,
    registerData: {
      name: '',
      email: '',
      password: '',
      phonenumber: '',
      usertypes: 0,
      city: '',
    },
  },
  reducers: {
    addRegisterData: (state, { payload }) => {
      state.registerData = { ...state.registerData, ...payload }
    },
    removeRegisterData: (state, { payload }) => {
      state.registerData = {
        name: '',
        email: '',
        password: '',
        phonenumber: '',
        usertypes: 0,
        city: '',
      }
    },
  },
})

export default signUpSlice.reducer

export const { addRegisterData, removeRegisterData } = signUpSlice.actions

export const selectSignUp = (state) => state.signUp
