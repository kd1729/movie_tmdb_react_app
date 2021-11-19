import React from "react";
import SearchBar from "./SearchBar";
import { useContext } from "react";
import GlobalState from "../Context/globalState";

const Header = () => {
  const { value, value2, value3 } = useContext(GlobalState);
  const [movies, setMovies] = value;
  const [favourites, setFavourites] = value2;
  const [watchlist, setWatchlist] = value3;

  return (
    <div className="bg-purple-600 flex">
      <SearchBar />

      <div className="container w-5/12  text-white flex items-center">
        <div
          className="bg-green-500 font-medium h-12 mx-4 w-36 leading-12 text-center rounded-lg"
          onClick={() => setMovies(favourites)}
        >
          ❤️ Favorites
        </div>
        <div
          className="bg-green-500 font-medium h-12 mx-4 w-36 leading-12 text-center rounded-lg"
          onClick={() => setMovies(watchlist)}
        >
          ⌚ Watch Later
        </div>
        <div className="bg-green-500 font-medium h-12 mx-4 w-36 leading-12 text-center rounded-lg">
          ✔️ Completed
        </div>
      </div>
    </div>
  );
};

export default Header;
