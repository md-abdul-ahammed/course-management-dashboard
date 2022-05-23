import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  basicDetails: {},
  additionalDescription: {},
  syllabusDescription: {},
  coursePrice: {},
  selectedImages: [],
  selectedVideos: [],
};

const addCourseSlice = createSlice({
  name: "addCourse",
  initialState,
  reducers: {
    addBasicDetails: (state, { payload }) => {
      const basicDetails = payload;
      state.basicDetails = basicDetails;
    },
    addAdditionalDescription: (state, { payload }) => {
      const additionalDescription = payload;
      state.additionalDescription = additionalDescription;
    },
    addSelectedImage: (state, { payload }) => {
      const image = payload;
      state.selectedImages = image;
    },
    removeAllSelectedImages: (state) => {
      state.selectedImages = [];
    },
    addSelectedVideo: (state, { payload }) => {
      const video = payload;
      state.selectedVideos = video;
    },
    removeAllSelectedVideos: (state) => {
      state.selectedVideos = [];
    },
    addSyllabusDescription: (state, { payload }) => {
      state.syllabusDescription = payload;
    },
    addCoursePrice: (state, { payload }) => {
      state.coursePrice = payload;
    },
  },
});

export default addCourseSlice.reducer;

export const {
  addBasicDetails,
  addAdditionalDescription,
  addSelectedImage,
  addSelectedVideo,
  removeAllSelectedImages,
  removeAllSelectedVideos,
  addSyllabusDescription,
  addCoursePrice,
  addProductionSupport,
} = addCourseSlice.actions;

export const addCourseSelector = (state) => state.addCourse;
