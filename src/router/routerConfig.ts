import { lazy } from "react";
import { ROUTES_PATH } from "../utils/constant";
import GoogleMap from "pages/Map";


const Login = lazy(() => import("pages/Login"));

const Home = lazy(() => import("pages/Dashboard"));

const UploadActivity= lazy(() => import("pages/UploadActivity"));
export const publicRoutes = [
  {
    key: "login",
    path: ROUTES_PATH.LOGIN,
    component: Login,
    // layout: PublicLayout,
  },
];

export const privateRoutes = [
  {
    key: "home",
    path: ROUTES_PATH.DASHBOARD,
    component: Home,
    // layout: PrivateLayout,
  },
  {
    key:"upload",
    path:ROUTES_PATH.UPLOADACTIVITY,
    component:UploadActivity,
  },
  {
    key:"home",
    path:ROUTES_PATH.HOME,
    component:GoogleMap,
  }
];
