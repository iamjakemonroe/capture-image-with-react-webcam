import { createSlice } from "@reduxjs/toolkit";
// import { fetchCount } from "./counterAPI";

const initialState = {
  cameraImage: null,
  status: "idle",
};

export const cameraSlice = createSlice({
  name: "camera",
  initialState,

  reducers: {
    setCameraImage: (state, action) => {
      state.cameraImage = action.payload;
    },
    resetCameraImage: (state) => {
      state.cameraImage = null;
    },
  },
});

export const { setCameraImage, resetCameraImage } = cameraSlice.actions;

export const selectCamera = (state) => state.camera.cameraImage;

export default cameraSlice.reducer;
