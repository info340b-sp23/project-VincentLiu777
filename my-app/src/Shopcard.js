import React from 'react'; //import React library

// This is the card for each cafes. Used for homepage main content. 
export default function ShopCard({ imgSrc, name, rating }) {
  return (
    <div className="col-md-6 col-xl-3 d-flex">
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col col-sm-auto col-xl-12">
              <img src={imgSrc} alt="coffee" width="200" />
            </div>
            <div className="col-sm">
              <h2 className="card-title">{name}</h2>
              <p className="card-text">{rating}</p>
              <a href="detailed_page.html" className="btn btn-dark">View more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}