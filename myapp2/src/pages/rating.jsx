import React, { Fragment,useEffect} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {  Rate  } from 'antd'
import "../rating.css";
function Rating() {
  useEffect(()=>{
    const starRows = Array.from(document.querySelectorAll(".stars"));
    // Loop through the "starRows" array
    starRows.forEach(row => {
      // Select all the stars in the current row and store them in a NodeList called "stars"
      const stars = row.querySelectorAll("i");
    
      // Loop through the "stars" NodeList for the current row
      stars.forEach((star, index1) => {
        // Add an event listener that runs a function when the "click" event is triggered
        star.addEventListener("click", () => {
          // Loop through the "stars" NodeList for the current row
          stars.forEach((star, index2) => {
            // Add the "active" class to the clicked star and any stars with a lower index
            // and remove the "active" class from any stars with a higher index
            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
          });
        });
      });
    });
  },[])
 
  return (
    <Fragment>
      <Header />
      <main>
        <div class="rating-info">
          <section>
            <h2>Overall Rating</h2>
            <p id="overallRating"></p>
            <div class="rating-box">
              <p>What is your overall impression of this coffee shop?</p>
              <img class="cof_img" src="img/coffeeShop.png" alt="coff1" />
              
              <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
            </div>
          </section>
          <section>
            <h2>Taste</h2>
            <p id="tasteRating"></p>
            <div class="rating-box">
              <p>Did you enjoy the taste of the coffee at this coffee shop?</p>
              <img class="cof_img" src="img/coffeeTaste.jpg" alt="coff2" />
              <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
            </div>
          </section>
          <section>
            <h2>Environment</h2>
            <p id="environmentRating"></p>
            <div class="rating-box">
              <p>How would you rate the ambiance of the coffee shop?</p>
              <img class="cof_img" src="img/coffeeLevel.png" alt="coff2" />
              <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
            </div>
          </section>
          <section>
            <h2>Service</h2>
            <p id="serviceRating"></p>
            <div class="rating-box">
              <p>How would you rate the service at this coffee shop?</p>
              <img class="cof_img" src="img/services.jpg" alt="coff2" />
              <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
            </div>
          </section>
          <section style={{ paddingLeft: "5%", paddingRight: "5%" }}>
            <h2>Comment</h2>
            <form action="/afterRating">
              <div class="form-group">
                <label for="comment">Your Comment</label>
                <textarea class="form-control" id="comment" rows="3"></textarea>
              </div>
              <div style={{ width: "100%", textAlign: "center" }}>
                <a href="/afterRating">
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </a>
              </div>
            </form>
          </section>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}

export default Rating;
