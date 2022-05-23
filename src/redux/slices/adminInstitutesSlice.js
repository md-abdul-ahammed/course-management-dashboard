import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AuthenticationHeaders, host } from "../../util/constant/constant";

const initialState = {
  loading: false,
  adminSingleInstitute: {},
  adminInstitutes: [],
  adminLocations: [],
  adminFaculty: [],
  adminAchievement: [],
  error: null,
  isUpdated: false,
};

const adminInstitutesSlice = createSlice({
  name: "adminInstitutes",
  initialState,
  reducers: {
    // -----------get all institutes------------ //
    getAdminInstitutesRequest: (state) => {
      state.loading = true;
    },
    getAdminInstitutesSuccess: (state, { payload }) => {
      state.adminInstitutes = payload;
      state.loading = false;
      state.error = null;
    },
    getAdminInstitutesFail: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // -----------get single institute------------ //
    getSingleInstituteRequest: (state) => {
      state.loading = true;
    },
    getSingleInstituteSuccess: (state, { payload }) => {
      state.adminSingleInstitute = payload;
      state.loading = false;
      state.error = null;
    },
    getSingleInstituteFail: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // -----------institute approve update------------ //
    instituteApproveRequest: (state) => {
      state.loading = true;
      state.isUpdated = false;
    },
    instituteApproveSuccess: (state) => {
      state.loading = false;
      state.isUpdated = true;
    },
    instituteApproveFail: (state) => {
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
  getAdminInstitutesFail,
  getAdminInstitutesRequest,
  getAdminInstitutesSuccess,
  getSingleInstituteRequest,
  getSingleInstituteSuccess,
  getSingleInstituteFail,
  instituteApproveRequest,
  instituteApproveSuccess,
  instituteApproveFail,
  addNewLocation,
  addNewFaculty,
  addNewAchievement,
} = adminInstitutesSlice.actions;

// get all institutes
export function fetchAdminInstitutes() {
  return async (dispatch) => {
    dispatch(getAdminInstitutesRequest());
    try {
      const { data } = await axios.get(`${host}/institute`);
      dispatch(getAdminInstitutesSuccess(data.message));
    } catch (err) {
      dispatch(getAdminInstitutesFail(err));
    }
  };
}

// get single institute
export function fetchAdminSingleInstitute(id) {
  return async (dispatch) => {
    dispatch(getSingleInstituteRequest());
    try {
      const { data } = await axios.get(`${host}/institute?id=${id}`);
      dispatch(getSingleInstituteSuccess(data.message));
    } catch (err) {
      dispatch(getSingleInstituteFail(err));
    }
  };
}

// approve institute
export function instituteApprove(instituteData) {
  return async (dispatch) => {
    dispatch(instituteApproveRequest());
    const config = {
      headers: AuthenticationHeaders,
    };
    const url = `${host}/institute/approve`;
    try {
      const { data } = await axios.patch(url, instituteData, config);
      dispatch(instituteApproveSuccess(data.message));
    } catch (err) {
      dispatch(instituteApproveFail(err));
    }
  };
}

export default adminInstitutesSlice.reducer;
