import React, { useContext } from "react";
import GlobalState from "../Context/globalState";


const Movies = () => {

  const { value, value2, value3, value4 } = useContext(GlobalState);
  const movies = value[0];
  const [favourites, setFavourites] = value2;
  const [watchlist, setWatchlist] = value3;
  const [completed, setCompleted] = value4;

  function checkBox1(e, movie) {
    const checked = e.target.checked;
    checked ? (movie.fav = true) : (movie.fav = false);
    checked
      ? setFavourites([...favourites, movie])
      : setFavourites(favourites.filter((fav) => fav.id !== movie.id));
  }

  function checkBox2(e, movie) {
    const checked = e.target.checked;
    checked ? (movie.watchLater = true) : (movie.watchLater = false);
    checked
      ? setWatchlist([...watchlist, movie])
      : setWatchlist(watchlist.filter((watch) => watch.id !== movie.id));
  }

  function checkBox3(e, movie) {
    const checked = e.target.checked;
    checked ? (movie.completed = true) : (movie.completed = false);
    checked
      ? setCompleted([...completed, movie])
      : setCompleted(completed.filter((complete) => complete.id !== movie.id));
  }

  return (
    <>
      {movies.map((t, idx) => {
        return (
          <div
            className=" bg-purple-400 rounded-lg m-4 flex flex-col justify-center items-center"
            key={idx}
          >
            <div className="title">{t.title}</div>
            <img
              className="h-80 w-60"
              src={"http://image.tmdb.org/t/p/w780/" + t.poster_path}
              alt={t.title}
            />

            <div className="rating">Rating = {t.vote_average} ⭐️</div>

            <div className="flex flex-col py-4">
              <div className="flex my-1">
                <input
                  type="checkbox"
                  checked={t.fav ? true : false}
                  onChange={(e) => checkBox1(e, t)}
                />
                <label>Add to Favourites</label>
              </div>

              <div className="flex my-1">
                <input
                  type="checkbox"
                  checked={t.watchLater ? true : false}
                  onChange={(e) => checkBox2(e, t)}
                />
                <label>Add to Watch Later</label>
              </div>

              <div className="flex my-1">
                <input
                  type="checkbox"
                  checked={t.completed ? true : false}
                  onChange={(e) => checkBox3(e, t)}
                />
                <label>Completed</label>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Movies;
