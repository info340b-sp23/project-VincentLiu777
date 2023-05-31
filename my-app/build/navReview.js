import React, { useEffect, useState } from 'react';
import Swiper from 'swiper';
import 'swiper/css/swiper.css';

function Carousel() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        // Fetch the reviews data from an API or a data source
        // For example, you can use the fetch() function
        fetch('https://api.example.com/reviews')
            .then(response => response.json())
            .then(data => setReviews(data))
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        const mySwiper = new Swiper('.mySwiper', {
            // Customize the Swiper options
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
            },
        });
    }, []);

    return (
        <div className="containerReviews">
            <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                    {reviews.map(review => (
                        <div className="swiper-slide" key={review.id}>
                            <div className="card">
                                <p>{review.content}</p>
                                <h3>{review.author}</h3>
                                <h4>{review.date}</h4>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-pagination"></div>
            </div>
        </div>
    );
}


var swiper = new Swiper(".mySwiper", {
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

export default Carousel;
