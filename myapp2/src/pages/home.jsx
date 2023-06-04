import React, { useEffect, Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useNavigate } from "react-router-dom";
import {cafes}from  "./mockData/index"

// home page for our website 
function Home(props) {
  // console.log(props.history.push('/index'));
  const navigate = useNavigate()
  useEffect(() => {
    new window.Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <Fragment>
      <Header />
      <section class="reviews">
        <div class="containerReviews">
          <div class="swiper mySwiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="card">
                  <p>“The best website to find your new fave coffee shop!”</p>
                  <h3>Sarah Mendez</h3>
                  <h4>2 months ago</h4>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="card">
                  <p>
                    “I enjoy comparing the different features between each
                    shop.”
                  </p>
                  <h3>Safra Catz</h3>
                  <h4>One week ago</h4>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="card">
                  <p>I love the look of this website!</p>
                  <h3>Layla Locks</h3>
                  <h4>8 months ago</h4>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="card">
                  <p>“The details are accurate everytime!”</p>
                  <h3>Mark Johnson</h3>
                  <h4>1 year ago</h4>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="card">
                  <p>
                    “There’s even a map that shows me what’s good near me, I
                    found some hidden gems!”
                  </p>
                  <h3>Zara Ahmed</h3>
                  <h4>4 months ago</h4>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="card">
                  <p>
                    “This is my favorite webstie to refer to when making coffee
                    plans!”
                  </p>
                  <h3>Anjali Singh</h3>
                  <h4>6 months ago</h4>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="card">
                  <p>“Phenomenal!”</p>
                  <h3>David Kim</h3>
                  <h4>2 weeks ago</h4>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="card">
                  <p>
                    “I shared this website with all my friends! They now use it
                    daily!”
                  </p>
                  <h3>Sid Kammath</h3>
                  <h4>4 weeks ago</h4>
                </div>
              </div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </section>
      <main>
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-xl-3 d-flex">
              <div class="card mb-4">
                <div class="card-body">
                  <div class="row">
                    <div class="col col-sm-auto col-xl-12">
                      <img src="img/coffee1.png" alt="coffee" width="200" />
                    </div>
                    <div class="col-sm">
                      <h2 class="card-title">Cafe on the Ave</h2>
                      <p class="card-text">4/5 stars</p>
                      <a href="/detailedPage?name=Cafe on the Ave" class="btn btn-dark" onClick={()=>{
                         navigate('/detailedPage?name=Cafe on the Ave')
                      }}>
                        View more
                      </a>
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
                      <img src="img/coffee2.png" alt="coffee" width="200" />
                    </div>
                    <div class="col-sm">
                      <h2 class="card-title">Bulldog News Cafe</h2>
                      <p class="card-text">4.5/5 stars</p>
                      <a href="/detailedPage?name=Bulldog News Cafe" class="btn btn-dark" onClick={()=>{
                         navigate('/detailedPage?name=Bulldog News Cafe')
                      }}>
                        View more
                      </a>
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
                        src="img/coffee3.png"
                        alt="coffee shop"
                        width="200"
                      />
                    </div>
                    <div class="col-sm">
                      <h2 class="card-title">Leon Coffee House</h2>
                      <p class="card-text">4.5/5 stars</p>
                      <a href="/detailedPage?name=Leon Coffee House" class="btn btn-dark" onClick={()=>{
                         navigate('/detailedPage?name=Leon Coffee House')
                      }}>
                        View more
                      </a>
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
                      <img src="img/coffee4.png" alt="coffee" width="200" />
                    </div>
                    <div class="col-sm">
                      <h2 class="card-title">Ugly Mug</h2>
                      <p class="card-text">3.5/5 stars</p>
                      <a href="/detailedPage?name=Ugly Mug" class="btn btn-dark" onClick={()=>{
                         navigate('/detailedPage?name=Ugly Mug')
                      }}>
                        View more
                      </a>
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
                        src="img/cafetalcoffeetempemug.jpg"
                        alt="coffee"
                        width="200"
                      />
                    </div>
                    <div class="col-sm">
                      <h2 class="card-title">Coffee Lovers</h2>
                      <p class="card-text">3.75/5 stars</p>
                      <a href="/detailedPage?name=Coffee Lovers" class="btn btn-dark" onClick={()=>{
                         navigate('/detailedPage?name=Coffee Lovers')
                      }}>
                        View more
                      </a>
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
                        src="img/Photo-4-Coffee-in-Budapest-Credit-Caroline-Claassen-via-Tremento.jpg"
                        alt="coffee"
                        width="200"
                      />
                    </div>
                    <div class="col-sm">
                      <h2 class="card-title">Beans</h2>
                      <p class="card-text">4.2/5 stars</p>
                      <a href="/detailedPage?name=Beans" class="btn btn-dark" onClick={()=>{
                         navigate('/detailedPage?name=Beans')
                      }}>
                        View more
                      </a>
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
                        src="img/kaldis-social-house.jpeg"
                        alt="coffee"
                        width="200"
                      />
                    </div>
                    <div class="col-sm">
                      <h2 class="card-title">Cafe de Noche</h2>
                      <p class="card-text">4.5/5 stars</p>
                      <a href="/detailedPage?name=Cafe de Noche" class="btn btn-dark" onClick={()=>{
                         navigate('/detailedPage?name=Cafe de Noche')
                      }}>
                        View more
                      </a>
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
                        src="img/Coffee-in-Kos-Kaffe-Park-Slope-Brooklyn.jpg"
                        alt="coffee"
                        width="200"
                      />
                    </div>
                    <div class="col-sm">
                      <h2 class="card-title">Cafe Bonita</h2>
                      <p class="card-text">3.8/5 stars</p>
                      <a href="/detailedPage?name=Cafe Bonita" class="btn btn-dark" onClick={()=>{
                         navigate('/detailedPage?name=Cafe Bonita')
                      }}>
                        View more
                      </a>
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
                        src="img/types-of-coffee-1610657404.jpg"
                        alt="coffee"
                        width="200"
                      />
                    </div>
                    <div class="col-sm">
                      <h2 class="card-title">Cafe Jasmine</h2>
                      <p class="card-text">4/5 stars</p>
                      <a href="/detailedPage?name=>Cafe Jasmine" class="btn btn-dark"onClick={()=>{
                         navigate('/detailedPage?name=>Cafe Jasmine')
                      }}>
                        View more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {cafes?.map(item=>{
              return  <div class="col-md-6 col-xl-3 d-flex">
              <div class="card mb-4">
                <div class="card-body">
                  <div class="row">
                    <div class="col col-sm-auto col-xl-12">
                      <img
                        src={item?.image||"img/types-of-coffee-1610657404.jpg"}
                        alt="coffee"
                        width="200"
                       style={{height:250}}
                      />
                    </div>
                    <div class="col-sm">
                      <h2 class="card-title">{item?.name}</h2>
                      <p class="card-text">{item?.['review score']||'4/5 stars'}</p>
                      <a href={`/detailedPage?name=${item?.name}`} class="btn btn-dark"onClick={()=>{
                         navigate(`/detailedPage?name=${item?.name}`)
                      }}>
                        View more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            })}
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}
export default Home;
