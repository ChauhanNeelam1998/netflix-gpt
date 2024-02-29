import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const Mainconatainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  // Early return if(movies===null)
  if (!movies) return;

  const mainMovie = movies[0];
  // console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      MainConatainer
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};
export default Mainconatainer;
