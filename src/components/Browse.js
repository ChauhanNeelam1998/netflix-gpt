import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Mainconatainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <Mainconatainer />
      <SecondaryContainer />
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
