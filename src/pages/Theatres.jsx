import React from "react";
import { LiaCarSideSolid } from "react-icons/lia";
import { IoFastFoodOutline } from "react-icons/io5";
import { PiWheelchairBold } from "react-icons/pi";
import { theatres } from "../theatresData";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const Theatres = () => {
  const location = useLocation();
  const movieName = location.state;
  console.log(movieName);
  const selectedCity = useSelector((state) => state.city.selectedCity);
  console.log(selectedCity);
  return (
    <div className="flex flex-col gap-10">
      <p className="text-2xl text-black">Theatres</p>
      {theatres.map((theatre) => {
        return (
          Array.from(theatre.currentMovies).includes(movieName) &&
          selectedCity === theatre.city && (
            <div>
              <p> {theatre.name}</p>
              <p> {theatre.address}</p>
              <p> {theatre.city}</p>
              <p>
                {" "}
                {theatre.facilities.wheelchair && (
                  <div className="flex gap-2 items-center w-fit">
                    <PiWheelchairBold /> wheel chair
                  </div>
                )}
              </p>
              <p>
                {" "}
                {theatre.facilities.parking && (
                  <div className="flex gap-2 items-center w-fit">
                    <LiaCarSideSolid /> parking
                  </div>
                )}
              </p>
              <p>
                {" "}
                {theatre.facilities.foodBeverage && (
                  <div className="flex gap-2 items-center w-fit">
                    <IoFastFoodOutline /> food & Beverage
                  </div>
                )}
              </p>
              {/* <p> {theatre.currentMovies}</p> */}
            </div>
          )
        );
      })}
    </div>
  );
};

export default Theatres;
