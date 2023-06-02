import React, { Fragment, useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {useSearchParams } from "react-router-dom";
import "../detailed_page.css";
import {cafes}from  "./mockData/index"
function DetailedPage(props) {
  const [searchParams] = useSearchParams();
  
  const [data,setData] =useState( {
    "name": "Cafe on the Ave",
    "address":['4201 University Way NE','Seattle','WA 98105'],
    "number of reviews": "1231",
    "image": "../img/coffee-shop-1.png",
    "image1": "../img/co1mp.png",
    "review score": "4/5 stars",
    "shop type": "Coffee & Tea, Bakeries",
    "price": "$$",
    "operations hours": "8:00am - 4:00pm"
  })
  useEffect(()=>{
  const newData=cafes?.find(item=>item?.name==searchParams.getAll('name')[0])
  console.log(newData);
  setData({
    ...newData,
    address:newData?.address?.split(",")
  })
  console.log({
    ...newData,
    address:newData?.address?.split(",")
  });
  },[])
  console.log(searchParams.getAll('name')[0]) 
  return (
    <Fragment>
      <Header />
      <main>
        <div class="container">
          <div class="row" style={{ width: "100%" }}>
            <div class="col-lg-8">
              <div class="coffee-shop-img mb-4">
                <div id="carouselExample" class="carousel slide">
                  <div class="carousel-inner" style={{ paddingLeft: 40 }}>
                    <div class="carousel-item active">
                      <img
                        src={data?.image1||"./img/co1mp.png"}
                        style={{ height: 550, width: 750 }}
                        class="d-block w-100 detail_img"
                        alt="co1mp.png"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src={data?.image2||"./img/Leo.png"}
                        style={{ height: 550, width: 750 }}
                        class="d-block w-100 detail_img"
                        alt="Leo.png"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src={data?.image3||"./img/Nika.png"}
                        style={{ height: 550, width: 750 }}
                        class="d-block w-100 detail_img"
                        alt="Nika.png"
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div class="coffee-shop-info">
                <div class="head_box">
                  <div class="m_b_20 head_txt1">
                    {data?.name||"Cafe on the Ave"}
                    <a href="/rating" class="reviews-btn">
                      Reviews
                    </a>
                  </div>
                  <div>{data?.["number of reviews"]||"2191"} reviews</div>
                  <div>
                    {" "}
                    <span class="bg_blue">Claimed</span> . {data?.price||'$$'} · {data?.['shop type']||"Coffee & Tea, Bakeries"}
                  </div>
                  <div>
                    <span class="bg_red">Closed</span>   {data?.['operations hours']|| '8:00 AM - 3:00 PM'} {" "}
                  </div>
                </div>
                <div class="head_box">
                  <div class="m_b_20 head_txt1">Location & Hours</div>
                  <div class="f_r">
                    <div>
                      <p class="m_b_20">
                        Located in:&emsp;
                        <span class="bg_blue">{data?.address?.[0]||'Pike Place Market'}</span>
                      </p>
                      <p></p>
                      <p>94 Pike St</p>
                      <p class="txt_blod">Ste 34</p>
                      <p class="txt_blod">Seattle, {data?.address?.[2]||"WA 98101"}</p>
                      <p class="txt_blod">Post Aly & 1st Ave</p>
                      <p class="txt_blod">Downtown</p>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                      <p>Mon: &emsp;&emsp;8:00 AM - 3:00 PM</p>
                      <p>Tue: &emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Closed</p>
                      <p>Wed: &emsp;&nbsp;&nbsp; 8:00 AM - 3:00 PM</p>
                      <p>
                        Thu: &emsp;&emsp; 8:00 AM - 3:00 PM&emsp;&emsp;Closed
                        now
                      </p>
                      <p>
                        Fri: &nbsp;&nbsp;&nbsp;&emsp;&emsp; 8:00 AM - 5:00 PM
                      </p>
                      <p>Sat: &emsp;&emsp;&nbsp; 8:00 AM - 5:00 PM</p>
                      <p>Sun: &emsp;&emsp; 8:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
                <div class="head_box">
                  <div class="m_b_20 head_txt1">Special Ratings</div>
                  <div class="f_r">
                    <div style={{ width: "30%" }}>
                      <p class="m_b_20">
                        <img
                          class="fea_iconimg"
                          style={{ width: 38, paddingRight: 16 }}
                          src="img/cof.png"
                          alt="fea"
                        />
                        Taste: 4.7/5
                      </p>
                    </div>
                    <div style={{ width: "30%" }}>
                      <p class="m_b_20">
                        <img
                          class="fea_img"
                          style={{ width: 38, paddingRight: 16 }}
                          alt="feat2"
                          src="img/yongju.png"
                        />
                        Environment: 4.5/5
                      </p>
                    </div>
                    <div style={{ width: "30%" }}>
                      <p class="m_b_20">
                        <img
                          class="fea_img"
                          style={{ width: 38, paddingRight: 16 }}
                          src="img/waiter.png"
                          alt="feat3"
                        />
                        Service: 4.3/5
                      </p>
                    </div>
                  </div>
                </div>
                <div class="head_box">
                  <div class="m_b_20 head_txt1">Unique Features</div>
                  <div class="f_r">
                    <div style={{ width: "30%" }}>
                      <p class="m_b_20">
                        <img
                          class="fea_img"
                          style={{ width: 38, paddingRight: 16 }}
                          src="img/wifi.png"
                          alt="feat4"
                        />
                        Free Wi-Fi
                      </p>
                    </div>
                    <div style={{ width: "30%" }}>
                      <p class="m_b_20">
                        <img
                          class="fea_img"
                          style={{ width: 38, paddingRight: 16 }}
                          src="img/level1.png"
                          alt="feat5"
                        />
                        Pet-friendly
                      </p>
                    </div>
                    <div style={{ width: "30%" }}>
                      <p class="m_b_20">
                        <img
                          class="fea_img"
                          style={{ width: 38, paddingRight: 16 }}
                          src="img/zhuozi.png"
                          alt="feat6"
                        />
                        Outdoor seating
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="recommendations">
                <h2>Recommendations</h2>
                <div class="coffee-item mb-3">
                  <img
                    src="img/Cappuccino.png"
                    alt="Coffee 1"
                    class="coffee-img"
                  />
                  <div class="coffee-details">
                    <strong class="coffee-details-strong">#1 Cappuccino</strong>
                    <p>Rating: 4.5/5</p>
                    <p>Price: $3.50</p>
                    <p>Likes: 120</p>
                  </div>
                </div>
                <div class="coffee-item mb-3">
                  <img src="img/Latte.jpg" alt="Coffee 2" class="coffee-img" />
                  <div class="coffee-details">
                    <strong class="coffee-details-strong">#2 Latte</strong>
                    <p>Rating: 4.3/5</p>
                    <p>Price: $3.00</p>
                    <p>Likes: 100</p>
                  </div>
                </div>
                <div class="coffee-item mb-3">
                  <img src="img/Mocha.png" alt="Coffee 3" class="coffee-img" />
                  <div class="coffee-details">
                    <strong class="coffee-details-strong">#3 Mocha</strong>
                    <p>Rating: 4.2/5</p>
                    <p>Price: $3.75</p>
                    <p>Likes: 85</p>
                  </div>
                </div>
                <div class="coffee-item mb-3">
                  <img
                    src="img/Espresso.jpg"
                    alt="Coffee 4"
                    class="coffee-img"
                  />
                  <div class="coffee-details">
                    <strong class="coffee-details-strong">#4 Espresso</strong>
                    <p>Rating: 4.1/5</p>
                    <p>Price: $2.50</p>
                    <p>Likes: 80</p>
                  </div>
                </div>
                <div class="coffee-item mb-3">
                  <img
                    src="img/Americano.png"
                    alt="Coffee 5"
                    class="coffee-img"
                  />
                  <div class="coffee-details">
                    <strong class="coffee-details-strong">#5 Americano</strong>
                    <p>Rating: 4.0/5</p>
                    <p>Price: $2.75</p>
                    <p>Likes: 70</p>
                  </div>
                </div>
                <div class="coffee-item mb-3">
                  <img
                    src="img/FlatWhite.png"
                    alt="Coffee 6"
                    class="coffee-img"
                  />
                  <div class="coffee-details">
                    <strong class="coffee-details-strong">#6 Flat White</strong>
                    <p>Rating: 3.9/5</p>
                    <p>Price: $3.25</p>
                    <p>Likes: 60</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}
export default DetailedPage;
