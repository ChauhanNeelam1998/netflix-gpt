import { BG_URL } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          src={BG_URL}
          alt="bg_logo"
          className="h-screen object-cover md:w-screen "
        />
      </div>

      <div>
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};
export default GptSearch;
