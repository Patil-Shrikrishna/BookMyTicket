import React, { useState } from "react";
import MoviePoster from "./MoviePoster";
import Dummy_Poster1 from "../assets/avengers.avif";
import Dummy_Poster3 from "../assets/theflash.webp";
import Dummy_Poster4 from "../assets/Guardians_vol_1.png";
import Dummy_Poster5 from "../assets/smhcoming.png";
import Dummy_Poster6 from "../assets/theway.png";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const moviesArray = [
    Dummy_Poster1,
    Dummy_Poster3,
    Dummy_Poster4,
    Dummy_Poster5,
    Dummy_Poster6,
    Dummy_Poster6,
    Dummy_Poster5,
    Dummy_Poster4,
    Dummy_Poster3,
    Dummy_Poster1,
    Dummy_Poster1,
    Dummy_Poster3,
    Dummy_Poster4,
    Dummy_Poster5,
    Dummy_Poster6,
    Dummy_Poster6,
    Dummy_Poster5,
    Dummy_Poster4,
    Dummy_Poster3,
    Dummy_Poster1,
    Dummy_Poster1,
    Dummy_Poster3,
    Dummy_Poster4,
    Dummy_Poster5,
    Dummy_Poster6,
    Dummy_Poster6,
    Dummy_Poster5,
    Dummy_Poster4,
    Dummy_Poster3,
    Dummy_Poster1,
    Dummy_Poster1,
    Dummy_Poster3,
    Dummy_Poster4,
    Dummy_Poster5,
    Dummy_Poster6,
    Dummy_Poster6,
    Dummy_Poster5,
    Dummy_Poster4,
    Dummy_Poster3,
    Dummy_Poster1,
  ];
  function chunkArray(arr, chunkSize) {
    const newArr = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      newArr.push(arr.slice(i, i + chunkSize));
    }
    return newArr;
  }
  const chunkSize = 5;

  const slides = chunkArray(moviesArray, chunkSize);
  const totalSlides = slides.length;

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="carousel items-center justify-center">
      <div className="carousel-container ">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide gap-4 ${
              index === currentSlide ? "flex" : "hidden"
            }`}
          >
            {slide.map((card, index) => (
              <div key={index} className={`carousel-card `}>
                <MoviePoster poster={card} />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="carousel-controls flex justify-center items-center ">
        {/* absolute  transform -translate-y-1/2 left-0 right-0 top-1/2"> */}
        <button
          disabled={currentSlide === 0 ? true : false}
          onClick={goToPrevSlide}
          className={`btn btn-circle carousel-control bg-slate-600 hover:bg-slate-600 text-white absolute left-10  `}
        >
          ❮
        </button>
        <button
          disabled={currentSlide === slides.length - 1 ? true : false}
          onClick={goToNextSlide}
          className={`btn btn-circle carousel-control bg-slate-600 hover:bg-slate-600 text-white absolute right-10`}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Carousel;
