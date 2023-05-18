import React from 'react'; //import React library
import ShopCard from './Shopcard';
import 'bootstrap/dist/css/bootstrap.css';

export default function Main() {
  return (
    <main>
      <div className="reviews">
        <Review quote="The best website to find your new fave coffee shop!" name="Sarah" />
        <Review quote="I enjoy comparing the different features between each shop." name="Michael" />
        <Review quote="The details are accurate every time!" name="Lee" />
        <Review quote="There’s even a map that shows me what’s good near me, I found some hidden gems!" name="Zara" />
      </div>

      <div className="container">
        <div className="row">
          <ShopCard
            imgSrc="img/coffee1.png"
            name="Cafe on the Ave"
            rating="4/5 stars"
          />
          <ShopCard
            imgSrc="img/coffee2.png"
            name="Bulldog News Cafe"
            rating="4.5/5 stars"
          />
          <ShopCard
            imgSrc="img/coffee3.png"
            name="Leon Coffee House"
            rating="4.5/5 stars"
          />
          <ShopCard
            imgSrc="img/coffee4.png"
            name="Ugly Mug"
            rating="3.5/5 stars"
          />
          {/* Repeat the above ShopCard component for additional shops */}
        </div>
      </div>
    </main>
  );
}

export function Review({ quote, name }) {
  return (
    <div className="review">
      <p className="quote">“{quote}”</p>
      <p className="name">- {name}</p>
    </div>
  );
}