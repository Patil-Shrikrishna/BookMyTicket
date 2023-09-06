import React, { useState } from "react";
import MoviePoster from "./MoviePoster";
import Dummy_Poster1 from "../assets/avengers.avif";
import Dummy_Poster3 from "../assets/theflash.webp";
import Dummy_Poster4 from "../assets/Guardians_vol_1.webp";
import Dummy_Poster5 from "../assets/smhcoming.webp";
import Dummy_Poster6 from "../assets/theway.png";

const Carousel = () => {
  const [count, setCount] = useState(1);
  // const handleCount = () => {
  //   if(count !== 0)
  //   setCount(count - 1)
  // }
  // function chunkArray(arr) {
  //   const newArr = [];
  //   newArr.push(arr);
  //   return newArr;
  // }

  // const moviesArray = [
  //   Dummy_Poster1,
  //   Dummy_Poster3,
  //   Dummy_Poster4,
  //   Dummy_Poster5,
  //   Dummy_Poster6,
  // ];
  // const slide = chunkArray(moviesArray.splice(0, 1));
  // console.log(slide);

  function chunkArray(arr, chunkSize) {
    const newArr = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      newArr.push(arr.slice(i, i + chunkSize));
    }
    return newArr;
  }

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
  ];
  const chunkSize = 5;

  const slide = chunkArray(moviesArray, chunkSize);
  console.log(slide);

  return (
    <div className="carousel w-full">
      {slide.map((movies, index) => {
        return (
          <div
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full"
          >
            {movies.map((movie) => {
              return (
                <div>
                  <MoviePoster poster={movie} />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a
                      href={`#slide${count}`}
                      onClick={() => {
                        if (count !== 1) setCount(count - 1);
                      }}
                      className="btn btn-circle"
                    >
                      ❮
                    </a>
                    <a
                      href={`#slide${count}`}
                      onClick={() => {
                        if (count !== movies.length) setCount(count + 1);
                      }}
                      className="btn btn-circle"
                    >
                      ❯
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
