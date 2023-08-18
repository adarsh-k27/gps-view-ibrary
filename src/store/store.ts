import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import layoutReducer from "./reducers/layoutReducer";
import UploadFileReducer from "./reducers/fileReducers";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    layout: layoutReducer,
    uploadfile: UploadFileReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof configureStore>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
