import React from "react";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="bg-gray-200 flex">
      
      <SearchBar />

      <div className="container w-5/12  text-white flex items-center">
        <div className="bg-green-500 font-medium h-12 mx-4 w-36 leading-12 text-center rounded-lg">
          ❤️ Favorites
        </div>
        <div className="bg-green-500 font-medium h-12 mx-4 w-36 leading-12 text-center rounded-lg">
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
