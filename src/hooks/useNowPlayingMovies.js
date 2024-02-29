import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { APT_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

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
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
