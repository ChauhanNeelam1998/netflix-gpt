import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { APT_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  // API Of Peticular movie Video - conatain clips, trailer,shorts

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      APT_OPTIONS
    );
    const json = await data.json();
    // console.log(json?.results);
    const filterData = json?.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : json?.results[0];
    // console.log(filterData);
    // setTrailerId(trailer.key);

    if (trailer === null) return;

    dispatch(addTrailerVideo(trailer));

    // console.log(trailer);
  };

  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
};
export default useMovieTrailer;
