import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import selectMovie from "../redux/actions/movieAction";
const MoviePoster = ({ movie }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="card w-full shadow-xl relative group overflow-hidden text-white"
      onClick={() => dispatch(selectMovie(movie))}
    >
      <div className="w-56 h-72">
        <img src={movie.poster} alt="movie poster" className="object-cover" />
      </div>
      <div
        className="card-body px-4 transition absolute opacity-0 group-hover:opacity-100
        bg-gradient-to-b from-transparent  to-gray-950 backdrop-blur-sm duration-500 ease-linear inset-0"
      >
        <div>
          <h2 className="card-title">{movie.name}</h2>
          <p className="text-xs">{movie.genre}</p>
          <ul className="flex flex-row justify-between my-5">
            <li className="flex flex-col">
              <span className="text-sm text-gray-400">Release date:</span>
              <span className="release">{movie.releaseDate}</span>
            </li>
            <li className="flex flex-col">
              <span className="text-sm text-gray-400">Runtime:</span>
              <span className="release">{movie.runtime}</span>
            </li>
          </ul>
        </div>

        <figure className="flex flex-col gap-2 text-xs">
          <figcaption className="text-left self-start text-gray-300">
            Overview:
          </figcaption>
          <p>{movie.overview}</p>
        </figure>
      </div>

      <div className="text-center bg-black border-t-2 border-gray-600/25 w-full">
        <p className="text-md font-thin my-1">{movie.name}</p>
        <p className="text-md flex gap-2 justify-center items-center font-thin my-1 border-t-2 border-gray-600/25">
          <AiFillStar className="text-col-pink text-center" />
          {movie.votes}
        </p>
      </div>
    </div>
  );
};

export default MoviePoster;
