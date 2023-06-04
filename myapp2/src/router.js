import React from "react";
import { Navigate } from "react-router-dom";
import Home from "./pages/home";
import HistoryTest from "../src/pages/HistoryTest";
import Aboutus from "./pages/aboutus";
import AfterRating from "./pages/afterRating";
import DetailedPage from "./pages/detailedPage";
import Map from "./pages/index";
import Rating from "./pages/rating";
import NotFound from "./pages/NotFound";

const routes = [
  //  routes begin
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  // routes ends 
  {
    path: "/test",
    element: <HistoryTest />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/aboutus",
    element: <Aboutus />,
  },
  {
    path: "/afterRating",
    element: <AfterRating />,
  },
  {
    path: "/detailedPage",
    element: <DetailedPage />,
  },
  {
    path: "/map",
    element: <Map />,
  },
  {
    path: "/rating",
    element: <Rating />,
  },
  {
    path: "/notFound",
    element: <NotFound />,
  },
  // page jump back to homepage when failed 
  {
    path: "*",
    element: <Navigate to="/notFound" />,
  },
];
export default routes;
