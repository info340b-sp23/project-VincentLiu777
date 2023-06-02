import React, { Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Aboutus() {
  return (
    <Fragment>
      <Header />
      <main>
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-xl-3 d-flex">
              <div class="card mb-4">
                <div class="card-body">
                  <div class="row">
                    <div class="col col-sm-auto col-xl-12">
                      <img
                        class="img-fluid"
                        src="img/Vincent.png"
                        alt="Vincent Liu"
                      />
                    </div>
                    <div class="col-sm">
                      <h2 class="card-title">Vincent Liu</h2>
                      <p class="card-text">Junior at UW Informatics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-xl-3 d-flex">
              <div class="card mb-4">
                <div class="card-body">
                  <div class="row">
                    <div class="col col-sm-auto col-xl-12">
                      <img
                        class="img-fluid"
                        src="img/Zareen.png"
                        alt="Zareen Tasnim"
                      />
                    </div>
                    <div class="col-sm">
                      <h2 class="card-title">Zareen Tasnim</h2>
                      <p class="card-text">Sophomore at UW Informatics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-xl-3 d-flex">
              <div class="card mb-4">
                <div class="card-body">
                  <div class="row">
                    <div class="col col-sm-auto col-xl-12">
                      <img
                        class="img-fluid"
                        src="img/Nika.png"
                        alt="Nika Zhang"
                      />
                    </div>
                    <div class="col-sm">
                      <h2 class="card-title">Nika Zhang</h2>
                      <p class="card-text">Sophomore at UW Informatics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-xl-3 d-flex">
              <div class="card mb-4">
                <div class="card-body">
                  <div class="row">
                    <div class="col col-sm-auto col-xl-12">
                      <img class="img-fluid" src="img/Leo.png" alt="Leo Ren" />
                    </div>
                    <div class="col-sm">
                      <h2 class="card-title">Leo Ren</h2>
                      <p class="card-text">Senior at UW Informatics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="rectangle"></div>
      </main>
      <Footer />
    </Fragment>
  );
}
export default Aboutus;
