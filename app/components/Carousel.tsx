"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Carousel() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="h-82 w-full max-w-xl mx-auto">
      <div>
        <img src="/carousel_1.jpg" className="w-full" />
      </div>
      <div>
        <img src="/carousel_2.png" className="w-full" />
      </div>
      <div>
        <video
          className="max-w-full rounded-lg shadow-md"
          controls
          autoPlay={false}
          muted
        >
          <source src="/video.mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </Slider>
  );
}
