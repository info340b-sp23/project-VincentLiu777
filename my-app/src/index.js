import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AboutUs from './AboutUs';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
// this is the main navigation of the whole website, if you have a page, put it in here. 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <AboutUs />
  </React.StrictMode>
);