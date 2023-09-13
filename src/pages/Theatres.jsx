import React from "react";
import { LiaCarSideSolid } from "react-icons/lia";
import { IoFastFoodOutline } from "react-icons/io5";
import { PiWheelchairBold } from "react-icons/pi";
import { theatres } from "../theatresData";
import { useSelector } from "react-redux";
const Theatres = () => {
  const selectedCity = useSelector((state) => state.city.selectedCity);
  const selectedMovie = useSelector((state) => state.movie.selectedMovie);
  console.log(selectedCity);
  console.log(selectedMovie);
  return (
    <div className="flex flex-col gap-10">
      <p className="text-2xl text-black">Theatres</p>
      {theatres.map((theatre, index) => {
        return (
          Array.from(theatre.currentMovies).includes(selectedMovie.name) &&
          selectedCity === theatre.city && (
            <div key={index}>
              <p> {theatre.name}</p>
              <p> {theatre.address}</p>
              <p> {theatre.city}</p>{" "}
              {theatre.facilities.wheelchair && (
                <div className="flex gap-2 items-center w-fit">
                  <PiWheelchairBold /> wheel chair
                </div>
              )}{" "}
              {theatre.facilities.parking && (
                <div className="flex gap-2 items-center w-fit">
                  <LiaCarSideSolid /> parking
                </div>
              )}{" "}
              {theatre.facilities.foodBeverage && (
                <div className="flex gap-2 items-center w-fit">
                  <IoFastFoodOutline /> food & Beverage
                </div>
              )}
            </div>
          )
        );
      })}
    </div>
  );
};

export default Theatres;
