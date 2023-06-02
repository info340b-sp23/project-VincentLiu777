import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom"
// import aboutus from "./Home"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        {/* <Route path="/about" element={<aboutus />} /> */}
      </Routes>
    </BrowserRouter>
);

