import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import selectShowDate from "../redux/actions/dateAction";

const DatePickerCarousel = () => {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const today = new Date();

  const options = { year: "numeric", month: "short", day: "numeric" };

  const selectedFormattedDate = selectedDate.toLocaleDateString(
    "en-US",
    options
  );
  const todaysFormattedDate = today.toLocaleDateString("en-US", options);

  useEffect(() => {
    dispatch(selectShowDate(selectedDate));
  }, [selectedDate]);

  const goToDate = (daysToAdd) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + daysToAdd);
    setSelectedDate(newDate);
  };
  const weekdays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const getMonth = months[selectedDate.getMonth()];
  const getDay = weekdays[selectedDate.getDay()];

  return (
    <div className=" flex items-center date-picker-carousel w-1/2">
      <div
        onClick={() => goToDate(-1)}
        style={{
          pointerEvents:
            selectedFormattedDate === todaysFormattedDate ? "none" : "auto",
        }}
        className="btn bg-transparent hover:bg-transparent border-none text-gray-400 hover:text-gray-600"
      >
        ❮
      </div>
      <div className="flex flex-col my-2 items-center bg-col-pink rounded-md w-1/7 px-4 text-white uppercase py-1 ">
        <p className="selected-date leading-tight text-xs font-semibold">
          {getDay}
        </p>
        <p className="selected-date leading-tight text-lg font-semibold">
          {selectedDate.getDate()}
        </p>
        <p className="selected-date leading-tight text-xs font-semibold">
          {getMonth}
        </p>
      </div>

      <div
        onClick={() => goToDate(1)}
        className="btn bg-transparent hover:bg-transparent border-none text-gray-400 hover:text-gray-600"
      >
        ❯
      </div>
    </div>
  );
};

export default DatePickerCarousel;
