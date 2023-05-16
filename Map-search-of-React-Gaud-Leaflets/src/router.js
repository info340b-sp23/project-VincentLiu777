import React from "react";
import { Navigate } from "react-router-dom";
import Index from "../src/pages";
import HistoryTest from "../src/pages/HistoryTest";

const routes = [
// Nested Routes - Start -------------------
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
// Nested Routes - End -------------------
  {
    path: "/test",
    element: <HistoryTest />,
  },
  {
    path: "/home",
    element: <Index />,
  },
// Redirect to the homepage when accessing any other path
  {
    path: "*",
    element: <Navigate to="/home" />,
  },
];
export default routes;
