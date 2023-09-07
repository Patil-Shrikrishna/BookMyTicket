import React from "react";
import Carousel from "../components/Carousel";
import { moviesData } from "../moviesData";

const Home = () => {
  return (
    <div className="flex flex-col gap-10 p-10 dark:text-gray-300">
      <Carousel moviesArray={moviesData} />
    </div>
  );
};

export default Home;
