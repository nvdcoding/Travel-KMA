import { lazy } from "react";
import { ROUTES } from "../constants/route";
// pages
const Home = lazy(() => import("../page/HomePage"));
const Tours = lazy(() => import("../page/Tours"));
const CreateTour = lazy(() => import("../page/CreateTour"));
const TourAll = lazy(() => import("../page/tourAll"));
const Pay = lazy(() => import("../page/pay"));
const HdvAll = lazy(() => import("../page/hdvAll"));
const Dulich = lazy(() => import("../page/provinceDetails"));
const Personal = lazy(() => import("../page/Personal"));

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
        path: ROUTES.TOUR,
        exact: true,
        component: Tours,
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
];
export default RoutePage;