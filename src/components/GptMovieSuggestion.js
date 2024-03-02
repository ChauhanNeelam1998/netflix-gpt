import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieName, movieResult } = gpt;
  if (!movieName) return null;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-80">
      <div>
        {movieName.map((moviename, index) => (
          <MovieList
            key={moviename}
            title={moviename}
            movies={movieResult[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
