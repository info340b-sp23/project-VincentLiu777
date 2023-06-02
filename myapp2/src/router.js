import React from "react";
import { Navigate } from "react-router-dom";
import Home from "./pages/home";
import HistoryTest from "../src/pages/HistoryTest";
import Aboutus from "./pages/aboutus";
import AfterRating from "./pages/afterRating";
import DetailedPage from "./pages/detailedPage";
import Map from "./pages/index";
import Rating from "./pages/rating";
const routes = [
  //  嵌套路由 开始-------------------
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  // 嵌套路由 结束-------------------
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
  // 访问其余路径的时候直接跳到首页
  // {
  //   path: "*",
  //   element: <Navigate to="/home" />,
  // },
];
export default routes;
