const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-12 absolute bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-6xl font-bold text-white">{title}</h1>
      <p className="py-6 text-lg w-2/4 text-white">{overview}</p>
      <div className="">
        <button className="bg-white  py-2 px-10  text-lg font-semibold text-black rounded-md hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="bg-gray-600  py-2 px-10 mx-2 text-lg font-semibolde text-white rounded-md bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
