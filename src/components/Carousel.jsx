import React, { useState } from "react";
import MoviePoster from "./MoviePoster";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { theatres } from "../theatresData";

const Carousel = ({ moviesArray }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const selectedCity = useSelector((state) => state.city.selectedCity);
  const theatresInCity = theatres.filter(
    (theatre) => theatre.city === selectedCity
  );
  const moviesInCity = Array.from([
    ...new Set(
      [].concat(
        ...theatresInCity.map((theatre) => Array.from(theatre.currentMovies))
      )
    ),
  ]);

  const availableMovies = moviesArray.filter((movie) => {
    if (moviesInCity.includes(movie.name)) return movie;
  });

  function chunkArray(arr, chunkSize) {
    const newArr = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      newArr.push(arr.slice(i, i + chunkSize));
    }
    return newArr;
  }
  const chunkSize = 5;
  const slides = chunkArray(availableMovies, chunkSize);
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
            {slide.map((movie, index) => (
              <div key={index} className={`carousel-card `}>
                <Link to="/theatre">
                  {" "}
                  <MoviePoster movie={movie} />
                </Link>
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
