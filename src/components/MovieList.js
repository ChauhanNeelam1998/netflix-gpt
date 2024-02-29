import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  if (movies === null) return;
  return (
    <div className="p-4 ">
      <h1 className="text-xl font-bold py-3 text-white">{title}</h1>

      <div className="flex overflow-x-scroll">
        <div className="flex ">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
