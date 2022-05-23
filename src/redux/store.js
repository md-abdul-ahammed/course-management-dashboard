import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import addCourseReducer from './slices/AddCourseSlice'
import merchantReducer from './slices/merchantSlice'
import sidePopupReducer from './slices/sidePopupSlice'
import searchReducer from './slices/SearchSlice'
import signUpReducer from './slices/signUpSlice'
import courseReducer from './slices/courseSlice'
import adminInstitutesReducer from './slices/adminInstitutesSlice'
import adminBlogsReducer from './slices/adminBlogSlice'
import adminEventsReducer from './slices/adminEventSlice'
import adminCouponsReducer from './slices/adminCouponSlice'
import adminCoursesReducer from './slices/adminCourseSlice'
import userProfileSideBarReducer from './slices/UserProfileSidePopUp'

import authReducer from './slices/authSlice'
import instituteReducer from './slices/instituteSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    course: courseReducer,
    institute: instituteReducer,
    merchant: merchantReducer,
    sidePopup: sidePopupReducer,
    addCourse: addCourseReducer,
    search: searchReducer,
    signUp: signUpReducer,
    adminInstitutes: adminInstitutesReducer,
    adminBlogs: adminBlogsReducer,
    adminEvents: adminEventsReducer,
    adminCoupons: adminCouponsReducer,
    adminCourses: adminCoursesReducer,
    userProfileSideBar: userProfileSideBarReducer,
  },
  devTools: true,
  middleware: [thunk],
})

export default store
