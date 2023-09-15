import React from "react";
import { LiaCarSideSolid } from "react-icons/lia";
import { IoFastFoodOutline } from "react-icons/io5";
import { PiWheelchairBold } from "react-icons/pi";
import { theatres } from "../theatresData";
import { useSelector, useDispatch } from "react-redux";
import Chip from "../components/Chip";
import DatePickerCarousel from "../components/DatePickerCarousel";
import { Link } from "react-router-dom";
import selectTheatre from "../redux/actions/theatreAction";
import selectShowTime from "../redux/actions/showTimeAction";
const Theatres = () => {
  const selectedCity = useSelector((state) => state.city.selectedCity);
  const selectedMovie = useSelector((state) => state.movie.selectedMovie);

  console.log(selectedCity);
  console.log(selectedMovie);

  const dispatch = useDispatch();
  const chip = selectedMovie.genre
    .split(",")
    .map((genre, index) => (
      <Chip
        key={index}
        name={genre}
        classes="text-xs uppercase text-gray-500 border-gray-500"
      />
    ));
  const handleClick = (show, theatre) => {
    dispatch(selectShowTime(show));
    dispatch(selectTheatre(theatre));
  };
  return (
    <div className="flex flex-col bg-slate-100">
      <div className="flex flex-col bg-col-bgnav border-t-8 border-col-gray p-4">
        <p className="text-4xl text-white py-4">{selectedMovie.name}</p>
        <div className="flex gap-2">{chip}</div>
      </div>
      <div className="flex bg-white border-t-2 border-col-gray">
        <DatePickerCarousel />
      </div>
      <div className="m-2">
        {theatres.map((theatre, index) => {
          return (
            Array.from(theatre.currentMovies).includes(selectedMovie.name) &&
            selectedCity === theatre.city && (
              <div
                key={index}
                className="flex md:flex-row flex-col bg-white border-t-2 border-slate-100 p-4 justify-between"
              >
                <div className="">
                  <p className="text-black font-semibold">
                    {theatre.name} : {theatre.city}
                  </p>
                  <div className="flex flex-row gap-4 ">
                    {theatre.facilities.wheelchair && (
                      <div className="flex gap-2 items-center w-fit">
                        <PiWheelchairBold size={22} /> wheel chair
                      </div>
                    )}
                    {theatre.facilities.parking && (
                      <div className="flex gap-2 items-center w-fit">
                        <LiaCarSideSolid size={22} /> parking
                      </div>
                    )}
                    {theatre.facilities.foodBeverage && (
                      <div className="flex gap-2 items-center w-fit">
                        <IoFastFoodOutline size={22} /> food & Beverage
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  {theatre.showTime.map((show, index) => (
                    <Link key={index} to="/seat">
                      <button
                        onClick={() => handleClick(show, theatre)}
                        className="px-4 py-1 btn rounded-md border-gray-400 text-sm text-green-800 bg-white hover:bg-white hover:border-gray-400"
                      >
                        {show}
                      </button>
                    </Link>
                  ))}
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default Theatres;
