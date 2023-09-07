import { AiFillPlayCircle, AiOutlineClockCircle } from "react-icons/ai";

import { AiFillStar } from "react-icons/ai";
const MoviePoster = ({ poster }) => {
  return (
    <div className="card w-full shadow-xl relative group overflow-hidden text-white">
      {/* <figure> */}
      <div className="w-56 h-72">
        <img src={poster} alt="movie poster" className="object-cover" />
      </div>
      {/* </figure> */}
      <div
        className="card-body px-4 transition absolute opacity-0 group-hover:opacity-100
        bg-gradient-to-b from-transparent  to-gray-950 backdrop-blur-sm duration-500 ease-linear inset-0"
      >
        <div>
          <h2 className="card-title">The Flash</h2>
          <p className="text-xs">Action , Adventure , Fantasy</p>
          <ul className="flex flex-row justify-between my-5">
            <li className="flex flex-col">
              <span className="text-sm text-gray-400">Popularity:</span>
              <span className="popularity">440.052</span>
            </li>
            <li className="flex flex-col">
              <span className="text-sm text-gray-400">Release date:</span>
              <span className="release">2021-09-15</span>
            </li>
            <li className="flex flex-col">
              <span className="text-sm text-gray-400">Runtime:</span>
              <span className="release">155 min</span>
            </li>
          </ul>
        </div>

        <figure className="flex flex-col gap-2 text-xs">
          <figcaption className="text-left self-start text-gray-300">
            Overview:
          </figcaption>
          <p>
            Paul Atreides, a brilliant and gifted young man born into a great
            destiny beyond his understanding, must travel to the most dangerous
            planet in the universe to ensure the future of his family and his
            people. As malevolent forces explode into conflict over the
            exclusive supply of the most precious resource in existence-a
            commodity capable of unlocking greatest potential-only those who can
            conquer their fear will survive.
          </p>
        </figure>
      </div>

      <div className="text-center bg-black border-t-2 border-gray-600/25 w-full">
        <p className="text-md font-thin my-1">The Flash</p>
        <p className="text-md flex gap-2 justify-center items-center font-thin my-1 border-t-2 border-gray-600/25">
          <AiFillStar className="text-col-pink text-center" />
          9.4/10 12.7K Votes
        </p>
      </div>
    </div>
  );
};

export default MoviePoster;
