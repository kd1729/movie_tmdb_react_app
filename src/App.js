// https://www.themoviedb.org/documentation/api
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Movies from "./Components/Movies";
import GlobalState from "./Context/globalState";

function App() {

  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=df032f0bbf7881c7e18f93539c8a73ba&language=en-US&page=1"
      );
      // console.log(res.data.results);
      setMovies(res.data.results);
    }
    fetchData();
  }, []);

  return (
    <GlobalState.Provider
      value={{
        value: [movies, setMovies],
        value2: [favourites, setFavourites],
        value3: [watchlist, setWatchlist]
      }} >
      <div className="App">
        <Header />
        <div className="grid grid-cols-5">
          <Movies />
        </div>
        <Footer />
      </div>
    </GlobalState.Provider>
  );
}

export default App;
