import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AuthenticationHeaders, host } from "../../util/constant/constant";

const initialState = {
  loading: false,
  adminSingleCourse: {},
  adminCourses: [],
  adminLocations: [],
  adminFaculty: [],
  adminAchievement: [],
  error: null,
  isUpdated: false,
};

const adminCourseSlice = createSlice({
  name: "adminCourses",
  initialState,
  reducers: {
    // -----------get all Courses------------ //
    getAdminCoursesRequest: (state) => {
      state.loading = true;
    },
    getAdminCoursesSuccess: (state, { payload }) => {
      state.adminCourses = payload;
      state.loading = false;
      state.error = null;
    },
    getAdminCoursesFail: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // -----------get single Course------------ //
    getSingleCourseRequest: (state) => {
      state.loading = true;
    },
    getSingleCourseSuccess: (state, { payload }) => {
      state.adminSingleCourse = payload;
      state.loading = false;
      state.error = null;
    },
    getSingleCourseFail: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // -----------Course approve update------------ //
    CourseApproveRequest: (state) => {
      state.loading = true;
      state.isUpdated = false;
    },
    CourseApproveSuccess: (state) => {
      state.loading = false;
      state.isUpdated = true;
    },
    CourseApproveFail: (state) => {
      state.loading = false;
    },
    // -----------add new location------------ //
    addNewLocation: (state, { payload }) => {
      const newLocation = payload;
      state.adminLocations.push(newLocation);
    },
    // -----------add new faculty------------ //
    addNewFaculty: (state, { payload }) => {
      const newFaculty = payload;
      state.adminFaculty.push(newFaculty);
    },
    // -----------add new faculty------------ //
    addNewAchievement: (state, { payload }) => {
      const newFaculty = payload;
      state.adminAchievement.push(newFaculty);
    },
  },
});

export const {
  getAdminCoursesFail,
  getAdminCoursesRequest,
  getAdminCoursesSuccess,
  getSingleCourseRequest,
  getSingleCourseSuccess,
  getSingleCourseFail,
  CourseApproveRequest,
  CourseApproveSuccess,
  CourseApproveFail,
  addNewLocation,
  addNewFaculty,
  addNewAchievement,
} = adminCourseSlice.actions;

// get all Courses
export function fetchAdminCourses() {
  return async (dispatch) => {
    dispatch(getAdminCoursesRequest());
    try {
      const { data } = await axios.get(`${host}/Course`);
      dispatch(getAdminCoursesSuccess(data.message));
    } catch (err) {
      dispatch(getAdminCoursesFail(err));
    }
  };
}

// get single Course
export function fetchAdminSingleCourse(id) {
  return async (dispatch) => {
    dispatch(getSingleCourseRequest());
    try {
      const { data } = await axios.get(`${host}/Course?id=${id}`);
      dispatch(getSingleCourseSuccess(data.message));
    } catch (err) {
      dispatch(getSingleCourseFail(err));
    }
  };
}

// approve Course
export function CourseApprove(CourseData) {
  return async (dispatch) => {
    dispatch(CourseApproveRequest());
    const config = {
      headers: AuthenticationHeaders,
    };
    const url = `${host}/course/approve`;
    try {
      const { data } = await axios.patch(url, CourseData, config);
      dispatch(CourseApproveSuccess(data.message));
    } catch (err) {
      dispatch(CourseApproveFail(err));
    }
  };
}

export default adminCourseSlice.reducer;
