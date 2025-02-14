import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"; // Create and style this file

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500, // Adjusted speed for smoother transition
        slidesToShow: 3, // Show 3 slides at a time (adjust as needed)
        slidesToScroll: 1, // Scroll 1 slide at a time
        autoplay: true,
        autoplaySpeed: 2000, // 2 seconds per slide
      };
      

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src="/images/hero-image.png" alt="Slide 1" />
        </div>
        <div>
          <img src="/images/hero-image.png" alt="Slide 2" />
        </div>
        <div>
          <img src="/images/hero-image.png" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
