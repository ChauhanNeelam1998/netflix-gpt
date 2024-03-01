import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[12%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black  w-1/2 grid grid-cols-12"
      >
        <input
          type="text"
          className="p-2 m-4 col-span-9 border-2 to-black "
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="py-1 px-6 mx-2 my-4 bg-red-700 text-white rounded-md col-span-3">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
