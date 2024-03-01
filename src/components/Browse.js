import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Mainconatainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        // <></> - React Fragment
        <>
          <Mainconatainer />
          <SecondaryContainer />
        </>
      )}

      {/**
       * Mainconatainer
       *  - VideoBackground
       *  - VideoTitle
       * SecondaryContainer
       *  - MovieList * n
       *  - cards * n
       */}
    </div>
  );
};

export default Browse;
