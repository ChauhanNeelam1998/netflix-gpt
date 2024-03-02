import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { APT_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);

  const searchText = useRef(null);

  // getting Search movie from TMDB
  const sarchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      APT_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSeaerchClick = async () => {
    // console.log(searchText.current.value);
    // Make an API call to GPT API and Get movie Result

    const gptQuery =
      "Act as Movie  Recommendation System and Suggest some movies for the query :" +
      searchText.current.value +
      ". only give name of 5 movies, comma seperated like a example result given ahead. Example Result: Gadar, Don, Pattan, Koe mil gaya?, Doom.";
    const getResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    // console.log(getResult.choices?.[0]?.message?.content);
    //result = Andaz Apna Apna, Chupke Chupke, Gol Maal, Hera Pheri, Chhoti Si Baat.

    const gptMovies = getResult.choices?.[0]?.message?.content.split(",");
    // result = ['Andaz Apna Apna', ' Chupke Chupke', ' Hera Pheri', ' Gol Maal', ' Padosan.']
    // console.log(gptMovies);

    // For each movie I will search TMDB  API
    const promisArray = gptMovies.map((movie) => sarchMovieTMDB(movie));
    console.log(promisArray);
    //result - [Promise, Promise, Promise, Promise, Promise]
    const tmdbResult = await Promise.all(promisArray);
    console.log(tmdbResult);
    dispatch(
      addGptMovieResult({ movieName: gptMovies, movieResult: tmdbResult })
    );
  };

  return (
    <div className=" pt-[40%] md:pt-[12%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[80%] md:w-1/2 bg-black grid grid-cols-12 "
      >
        <input
          ref={searchText}
          type="text"
          className="p-2 m-4 col-span-9 border-2 to-black "
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-1 px-6 mx-2 my-4 bg-red-700 text-white rounded-md col-span-3"
          onClick={handleGptSeaerchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
