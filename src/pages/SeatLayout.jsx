import React from "react";
import SeatComponent from "../components/Seat";
import { useDispatch, useSelector } from "react-redux";
import selectTheatre from "../redux/actions/theatreAction";
import selectShowTime from "../redux/actions/showTimeAction";

const SeatLayout = () => {
  const LINES = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
  const SEATS = Array(9)
    .fill()
    .map((_, i) => i + 1);
  const selectedMovie = useSelector((state) => state.movie.selectedMovie.name);
  const selectedShowTime = useSelector(
    (state) => state.showTime.selectedShowTime
  );
  console.log(selectedShowTime);
  const selectedShowDate = useSelector(
    (state) => state.showDate.selectedShowDate
  );
  console.log(selectedShowDate);
  const selectedTheatre = useSelector((state) => state.theatre.selectedTheatre);
  console.log(selectedTheatre);

  return (
    <div className="flex flex-col dark:bg-slate-800 ">
      {/* <div className="flex flex-col "> */}
      <div className="bg-col-gray gap-2 flex py-4 justify-between">
        <div className="text-white flex gap-2 px-4">
          <div>
            <p>{selectedMovie}</p>
            <p>{selectedTheatre.name} | Wednesday, 12 Jul, 09:15 AM</p>
          </div>
        </div>
        <div className="text-white text-3xl justify-end"></div>
      </div>
      <div className="flex flex-col md:flex-row overflow-x-auto overflow-y-auto gap-2 w-full m-auto align-middle justify-center p-10 dark:bg-slate-800 ">
        <div className="flex flex-col gap-2 m-auto dark:bg-slate-800">
          {LINES.map((alfa) => (
            <div
              key={alfa}
              className="flex gap-3 m-auto w-full dark:bg-slate-800 dark:text-white"
            >
              <div className="flex mr-10  w-1/12">
                <p className="flex m-auto">{alfa}</p>
              </div>
              {SEATS.map((num) => (
                <SeatComponent
                  key={num}
                  row={alfa}
                  number={num}
                  onClick={(row, seat) => console.log("number:", seat, row)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default SeatLayout;
