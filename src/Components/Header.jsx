import React from "react";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-purple-600 flex">

      <SideBar />
      <SearchBar />

      <div className="container w-5/12  text-white flex items-center">
        <div
          className="header-btn"
          onClick={() => navigate("/")}
        >
          🏠 Home
        </div>
        <div
          className="header-btn"
          onClick={() => navigate("/Favourites")}
        >
          ❤️ Favorites
        </div>
        <div
          className="header-btn"
          onClick={() => navigate("/WatchLater")}
        >
          ⌚ Watch Later
        </div>
        <div
          className="header-btn"
          onClick={() => navigate("/Completed")}
        >
          ✔️ Completed
        </div>
      </div>
    </div>
  );
};

export default Header;
