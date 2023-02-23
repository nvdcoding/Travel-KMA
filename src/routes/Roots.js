import { lazy } from "react";
import { ROUTES } from "../constants/route";
// pages
const Home = lazy(() => import("../page/HomePage"));
const Tours = lazy(() => import("../page/Diem-den/Tours"));
const CreateTour = lazy(() => import("../page/Tour/CreateTour"));
const TourAll = lazy(() => import("../page/Tour/tourAll"));
const Pay = lazy(() => import("../page/Thanh-toan/pay"));
const HdvAll = lazy(() => import("../page/HDV/hdvAll"));
const Dulich = lazy(() => import("../page/Diem-den/provinceDetails"));
const Personal = lazy(() => import("../page/PersonalPage/Personal"));
const News = lazy(() => import("../page/Tin-Tuc/News"));
const NewsDetail = lazy(() => import("../page/Tin-Tuc/NewsDetail"));
const TourDetail = lazy(() => import("../page/Tour/TourDetail"));
const Introduce = lazy(() => import("../page/introduce"));
const MyTrip = lazy(() => import("../page/PersonalPage/MyTrip"));
const Signin = lazy(() => import("../page/Auth/SignIn"));
const Signup = lazy(() => import("../page/Auth/SignUp"));
const Onboarding = lazy(() => import("../page/Onboarding"));
const Chat = lazy(() => import("../page/Chat/index.js"));
/**
 * define main pages routes
 */
const RoutePage = [
  {
    path: ROUTES.HOME,
    exact: true,
    component: Home,
  },
  {
    path: ROUTES.INTRODUCE,
    exact: true,
    component: Introduce,
  },
  {
    path: ROUTES.SIGNIN,
    exact: true,
    component: Signin,
  },
  {
    path: ROUTES.SIGNUP,
    exact: true,
    component: Signup,
  },
  {
    path: ROUTES.TOUR,
    exact: true,
    component: Tours,
  },
  {
    path: ROUTES.CHAT,
    exact: true,
    component: Chat,
  },
  {
    path: ROUTES.CREATETOUR,
    exact: true,
    component: CreateTour,
  },
  {
    path: ROUTES.PAY,
    exact: true,
    component: Pay,
  },
  {
    path: ROUTES.TOURALL,
    exact: true,
    component: TourAll,
  },
  {
    path: ROUTES.HDVALL,
    exact: true,
    component: HdvAll,
  },
  {
    path: ROUTES.DULICH,
    exact: true,
    component: Dulich,
  },
  {
    path: ROUTES.PERSONAL,
    exact: true,
    component: Personal,
  },
  {
    path: ROUTES.NEWS,
    exact: true,
    component: News,
  },
  {
    path: ROUTES.TOURDETAIL,
    exact: true,
    component: TourDetail,
  },
  {
    path: ROUTES.NEWSDETAIL,
    exact: true,
    component: NewsDetail,
  },
  {
    path: ROUTES.MYTRIP,
    exact: true,
    component: MyTrip,
  },
  {
    path: ROUTES.ONBOARDING,
    exact: true,
    component: Onboarding,
  },
];
export default RoutePage;
