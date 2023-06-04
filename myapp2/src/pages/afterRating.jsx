import React, { Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "../after_rating.css";
// this is the page that will shown after we submit a review. 
function AfterRating() {
  return (
    <Fragment>
      <Header />
      <main>
        <div class="rating-info" style={{ textAlign: "center" }}>
          <img
            src="img/finish.png"
            alt="finish"
            style={{ width: 200, height: 200 }}
          />
        </div>
        <h2 style={{ textAlign: "center", padding: 20, fontWeight: "bold" }}>
          Thank you, enjoy!
        </h2>
        <p style={{ textAlign: "center" }}>We appreciate your comments.</p>
        <div style={{ width: "100%", textAlign: "center", marginBottom: 100 }}>
          <a href="/home" class="back-btn">
            Back to home
          </a>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}

export default AfterRating;
