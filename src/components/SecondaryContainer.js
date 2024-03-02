import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  //const popularMovies = useSelector((store) => store.movies);

  return (
    <div className=" bg-black ">
      <div className="relative z-20 mt-0 md:-mt-52 pl-4 md:pl-6 ">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
        <MovieList
          title={"Upcomming Movies"}
          movies={movies?.nowPlayingMovies}
        />
        <MovieList title={"Horror"} movies={movies?.nowPlayingMovies} />
      </div>

      {/* {
           MovieList - Popular MovieCards * n;
           MovieList - Now Playing
           MovieList - Trending
           MovieList - Horror
    } */}
    </div>
  );
};

export default SecondaryContainer;
