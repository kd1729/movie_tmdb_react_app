// https://www.themoviedb.org/documentation/api
import React, {useState, useEffect} from "react";

import Header from "./Components/Header";
function App() {

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies([]);
  }, [])

  return (
    <div className="App">
        <Header />
    </div>
  );
}

export default App;
