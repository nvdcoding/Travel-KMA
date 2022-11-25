import { lazy } from "react";
import { ROUTES } from "../constants/route";
// pages
const Home = lazy(() => import("../page/HomePage"));
const Tours = lazy(() => import("../page/Tours"));
const CreateTour = lazy(() => import("../page/CreateTour"));

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
];
export default RoutePage;