import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { APT_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMoviesgMovies = useSelector(
    (store) => store.movies.popularMovies
  );

  const getPopularMovies = async () => {
    //Geting all movies
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=2",
      APT_OPTIONS
    );
    const json = await data.json();
    //console.log(json?.results);
    dispatch(addPopularMovies(json?.results));
  };

  useEffect(() => {
    !popularMoviesgMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
