// https://www.themoviedb.org/documentation/api
import React, { useState, useEffect } from "react";
import axios from "axios";
import GlobalState from "./Context/globalState";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
import Favourites from './Components/Favourites';
import WatchLater from './Components/WatchLater';
import Completed from './Components/Completed';

function App() {

  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [completed, setCompleted] = useState([]);

  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=df032f0bbf7881c7e18f93539c8a73ba&language=en-US&page=" + pageCount
      );
      setMovies(res.data.results);
    }
    fetchData();
  }, [pageCount]);



  return (
    <GlobalState.Provider
      value={{
        value: [movies, setMovies],
        value2: [favourites, setFavourites],
        value3: [watchlist, setWatchlist],
        value4: [completed, setCompleted],
        value5: [pageCount, setPageCount]
      }} >


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Favourites" element={<Favourites />} />
          <Route path="/WatchLater" element={<WatchLater />} />
          <Route path="/Completed" element={<Completed />} />
        </Routes>
      </BrowserRouter>

    </GlobalState.Provider>
  );
}

export default App;
