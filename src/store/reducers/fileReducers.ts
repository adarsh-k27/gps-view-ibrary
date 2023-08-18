import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import Cookies from "js-cookie";
import { AuthState, LoginRes, SignupRes } from "../types/authType";

// const token = Cookies.get("token");
// const refresh_token = Cookies.get("refresh_token");
// const user = Cookies.get("user");

const initialState: any = {
  uploadedGPXFiles: [],
  selectedFile: {},
};

export const UploadFileSlice = createSlice({
  name: "uploadfile",
  initialState,
  reducers: {
    addToUploadFiles: (state, action: PayloadAction<any>) => {
      state.uploadedGPXFiles = [...state.uploadedGPXFiles, action.payload];
    },
    addSelectedFile: (state, action: PayloadAction<any>) => {
      state.selectedFile = action.payload;
    },
  },
});
export const { addSelectedFile,addToUploadFiles } = UploadFileSlice.actions;

export default UploadFileSlice.reducer;
