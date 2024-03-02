const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] md:px-12 px-6 absolute bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className=" text-2xl md:text-6xl font-bold text-white">{title}</h1>
      <p className="hidden py-6 text-lg w-2/4 text-white md:inline-block">
        {overview}
      </p>
      <div className="">
        <button className="bg-white  md:py-2 md:px-10 md:my-0 px-6 py-1 my-4 text-lg font-semibold text-black rounded-md hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="hidden md:inline-block bg-gray-600  py-2 px-10 mx-2 text-lg font-semibolde text-white rounded-md bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
