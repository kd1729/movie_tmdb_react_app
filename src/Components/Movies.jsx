import React, { useContext, useState } from "react";
import GlobalState from "../Context/globalState";

const Movies = () => {
  const { value } = useContext(GlobalState);
  const [movies, setMovies] = value;
  const [favourites, setFavourites] = useState([]);

  function checkBox(e, idx) {
    const checked = e.target.checked;
    if (checked) {
      setFavourites([...favourites, idx]);
    } else {
      setFavourites(favourites.filter(item => item !== idx));
    }
  }

  return (
    <>
      {movies.map((t, idx) => {
        return (
          <div
            className=" bg-purple-300 rounded-t-lg m-4 flex flex-col justify-center items-center"
            key={idx}
          >
            <div className="text-xl font-bold">{t.title}</div>
            <img
              className="h-80 w-60"
              src={"http://image.tmdb.org/t/p/w780/" + t.poster_path}
              alt={t.title}
            />
            <div className="font-medium">Rating = {t.vote_average}</div>
            <div className="flex my-2">
              <input id="favourite" type="checkbox" onChange={(e) => checkBox(e, t.id)} />
              <label htmlFor="favourite">Add to Favourites</label>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Movies;
