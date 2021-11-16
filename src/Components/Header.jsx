import React from "react";

const Header = () => {
  return (
    <div className="bg-gray-200 flex">
      <div className="container h-20 pl-10 pt-5">
        <input
          type="text"
          className="h-10 w-72 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none"
          placeholder="Search movie..."
        />
        <div className="absolute top-4 right-3">
          <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>{" "}
        </div>
      </div>

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
