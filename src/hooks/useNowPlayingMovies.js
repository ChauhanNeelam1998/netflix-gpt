import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { APT_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const getNowPlayingMovies = async () => {
    //Geting all movies
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      APT_OPTIONS
    );
    const json = await data.json();
    // console.log(json?.results);
    dispatch(addNowPlayingMovies(json?.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
