import React from "react";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";
const Header = () => {
  const { logout } = useAuth0();
  const navigate = useNavigate();

  return (
    <div className="bg-purple-600 flex">
      <SideBar />
      <SearchBar />

      <div className="container w-1/2  text-white flex items-center">
        <div className="header-btn" onClick={() => navigate("/")}>
          🏠 Home
        </div>
        <div className="header-btn" onClick={() => navigate("/Favourites")}>
          ❤️ Favorites
        </div>
        <div className="header-btn" onClick={() => navigate("/WatchLater")}>
          ⌚ Watch Later
        </div>
        <div className="header-btn" onClick={() => navigate("/Completed")}>
          ✔️ Completed
        </div>

        

        <div className="logout-btn" onClick={logout}>
          Logout
        </div>
      </div>
    </div>
  );
};

export default Header;
