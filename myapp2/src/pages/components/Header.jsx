import React from "react";
function Header() {
  return (
    <nav class="navbar navbar-expand-lg py-5">
      <div class="container-fluid">
        <a class="navbar-brand" href="/home">
          Coffee Ground
        </a>
        <a class="navbar-brand" href="/home">
          <img src="img/Logo.png" alt="Bootstrap" width="30" height="30" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="/map">
                Map
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/detailedPage">
                Coffee
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="/aboutus"
                // onClick={() => navigate("/aboutus")}
              >
                About Us
              </a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Cafe on the Ave"
              aria-label="Search"
            />
            <button class="btn text-white" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
