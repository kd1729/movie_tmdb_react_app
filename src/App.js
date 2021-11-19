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
  const [completed, setCompleted] = useState([]);

  const [pageCount, setPageCount] = useState(1);
  // console.log(pageCount);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=df032f0bbf7881c7e18f93539c8a73ba&language=en-US&page="+pageCount
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
        value4: [completed, setCompleted]
      }} >
      <div className="App">
        <Header />
        <div className="grid grid-cols-5">
          <Movies />
        </div>
        <div className="btn" onClick={() => setPageCount(Math.min(10, pageCount+1))}>
          Next Page
        </div>
        <div className="btn" onClick={() => setPageCount(Math.max(1,pageCount-1))}>
          Previous Page
        </div>
        <Footer />
      </div>
    </GlobalState.Provider>
  );
}

export default App;
