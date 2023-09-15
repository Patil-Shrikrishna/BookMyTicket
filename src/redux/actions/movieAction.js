const selectMovie = (movieName) => ({
  type: "SELECT_MOVIE",
  payload: movieName,
});
export default selectMovie;
