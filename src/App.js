// https://www.themoviedb.org/documentation/api
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Movies from "./Components/Movies";

function App() {

  // const movieDetails = await fetch('https://api.themoviedb.org/3/movie/' + movie.tmdbid + '?api_key=' + TMDB_API_KEY + '&language=en-US&append_to_response=credits');

  // const movieTmdb = await movieDetails.json();



  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=df032f0bbf7881c7e18f93539c8a73ba&language=en-US&page=1"
      );
      console.log(res.data.results);
      setMovies(res.data.results);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="grid grid-cols-5">
        <Movies movies={movies} />
      </div>
      <Footer />



    </div>
  );
}

export default App;
