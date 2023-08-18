import { AppDispatch } from "../store";
import * as AuthAction from "../reducers/authReducer";
// import * as API from "../apiAction/authApi"
import { auth } from "firebase-setup/setup";
import {
  // LoginForm,
  Signupfield,
  Setnewpassword,
  Setuppassword,
  Forgotpasswordfield,
  Confirmcodefield,
} from "../types/authType";
import { signInWithEmailAndPassword } from "firebase/auth";
import { forErrorToast } from "utils/CommonService";
// export const login = (form: LoginForm) => async (dispatch: AppDispatch) => {
export const login = (formData: any) => async (dispatch: AppDispatch) => {
  try {
    //here we are geting the formData

    // check the user have access to login
    try {
      const credentials = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      if (credentials) {
       
        const user = credentials.user;
        const { accessToken, email, displayName, emailVerified } = user;
        const tokenResponse = credentials._tokenResponse;
        const { refreshToken } = tokenResponse;
        localStorage.setItem("token", accessToken);
        dispatch(
          AuthAction.login({
            access_token: accessToken,
            refresh_token: refreshToken,
          })
        );
        return true;
      }
    } catch (error: any) {
      console.log(error);
      if (error) {
        if (error.message.includes("auth/wrong-password")) {
          return forErrorToast("Password Is Wrong");
        } else if (error.message.includes("auth/user-not-found")) {
          return forErrorToast("User Not Registered Yet");
        } else {
          return forErrorToast("Something went wrong");
        }
      }
      return false
    }

    return true;
  } catch (err) {}
};

export const signup = (form: Signupfield) => async (dispatch: AppDispatch) => {
  try {
    // const res: LoginRes = await API.login(form)
    // if(res.access_token) {
    // Cookies.set("token", "asdadasd", { expires: 1 });
    // Cookies.set('refresh_token', res.refresh_token, { expires: 1 })
    // }
    // dispatch(
    //   auth.signup({ access_token: "asdadasd", refresh_token: "asdasdasd" })
    // );
    return true;
  } catch (err) {}
};
export const confirmcode =
  (form: Confirmcodefield) => async (dispatch: AppDispatch) => {
    try {
      // const res: LoginRes = await API.login(form)
      // if(res.access_token) {

      // Cookies.set('refresh_token', res.refresh_token, { expires: 1 })
      // }
      //   dispatch(
      //     auth.signup({ access_token: "asdadasd", refresh_token: "asdasdasd" })
      //   );
      return true;
    } catch (err) {}
  };
export const forgotpassword =
  (form: Forgotpasswordfield) => async (dispatch: AppDispatch) => {
    try {
      // const res: LoginRes = await API.login(form)
      // if(res.access_token) {

      // Cookies.set('refresh_token', res.refresh_token, { expires: 1 })
      // }
      //   dispatch(
      //     auth.signup({ access_token: "asdadasd", refresh_token: "asdasdasd" })
      //   );
      return true;
    } catch (err) {}
  };
export const setnewpassword =
  (form: Setnewpassword) => async (dispatch: AppDispatch) => {
    try {
      // const res: LoginRes = await API.login(form)
      // if(res.access_token) {

      // Cookies.set('refresh_token', res.refresh_token, { expires: 1 })
      // }
      //   dispatch(
      //     auth.signup({ access_token: "asdadasd", refresh_token: "asdasdasd" })
      //   );
      return true;
    } catch (err) {}
  };
export const setuppassword =
  (form: Setuppassword) => async (dispatch: AppDispatch) => {
    try {
      // const res: LoginRes = await API.login(form)
      // if(res.access_token) {

      // Cookies.set('refresh_token', res.refresh_token, { expires: 1 })
      // }
      //   dispatch(
      //     auth.signup({ access_token: "asdadasd", refresh_token: "asdasdasd" })
      //   );
      return true;
    } catch (err) {}
  };

export const logout = (dispatch: AppDispatch) => {
  dispatch(AuthAction.logout());
};

export const refreshToken = (dispatch: AppDispatch) => {
  // const res: any = await API.refreshToken()
  // if(res && res.access_token) {
  //     Cookies.set('token', res.access_token, { expires: 1 })
  //     dispatch(auth.refreshToken(res))
  // }
  // return res
  return {
    access_token: "asdasdd",
  };
};
