import React from "react";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-purple-600 flex">
      <SearchBar />

      <div className="container w-5/12  text-white flex items-center">
        <div
          className="bg-green-500 font-medium h-12 mx-4 w-36 leading-12 text-center rounded-lg"
          onClick={() => navigate("/")}
        >
          🏠 Home
        </div>
        <div
          className="bg-green-500 font-medium h-12 mx-4 w-36 leading-12 text-center rounded-lg"
          onClick={() => navigate("/Favourites")}
        >
          ❤️ Favorites
        </div>
        <div
          className="bg-green-500 font-medium h-12 mx-4 w-36 leading-12 text-center rounded-lg"
          onClick={() => navigate("/WatchLater")}
        >
          ⌚ Watch Later
        </div>
        <div
          className="bg-green-500 font-medium h-12 mx-4 w-36 leading-12 text-center rounded-lg"
          onClick={() => navigate("/Completed")}
        >
          ✔️ Completed
        </div>
      </div>
    </div>
  );
};

export default Header;
