import React, { useState, useContext } from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import GlobalState from "../Context/globalState";
import axios from "axios";
function SideBar() {
  const [sidebar, setSidebar] = useState(false);
  const { value, value5, value6 } = useContext(GlobalState);
  const [movies, setMovies] = value;
  const [url, setUrl] = value6;
  const [pageCount, setPageCount] = value5;
  const showSidebar = () => setSidebar(!sidebar);

  async function setGenre(url) {
    const response = await axios.get(url);
    setPageCount(1);
    setUrl(url);
    const data = response.data;
    setMovies(data.results);
  }


  return (
    <>
      <div className="navbar">
        <Link to="#">
          <div className="header-btn flex" onClick={showSidebar}>
          <FaIcons.FaBars className="mx-4 mt-4"/> 
          <div> Genres </div>
          </div>
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="ml-8">
              <AiIcons.AiOutlineClose/>
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className="nav-text">
                  {index+1}
                  <span onClick={() => setGenre(item.url)}>{item.title}</span>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default SideBar;
