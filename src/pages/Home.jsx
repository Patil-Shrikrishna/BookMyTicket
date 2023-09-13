import React from "react";
import Carousel from "../components/Carousel";
import { moviesData } from "../moviesData";
import { useSelector } from "react-redux";
const Home = () => {
  const selectedCity = useSelector((state) => state.city.selectedCity);
  return (
    <div className="flex flex-col gap-10 p-10 dark:text-gray-300">
      {selectedCity && <Carousel moviesArray={moviesData} />}
    </div>
  );
};

export default Home;
