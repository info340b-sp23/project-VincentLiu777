import React from 'react'; //import React library

// This is the navigation bar, we will use this for all the pages. 
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg py-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="index.html">Coffee Ground</a>
        <a className="navbar-brand" href="index.html">
          <img src="img/Logo.png" alt="Bootstrap" width="30" height="30" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="map.html">Map</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="detailed_page.html">Coffee</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="aboutus.html">About Us</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Cafe on the Ave" aria-label="Search" />
            <button className="btn text-white" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}