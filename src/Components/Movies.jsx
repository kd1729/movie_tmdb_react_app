import React from "react";

const Movies = ({ movies }) => {
  return (
    <>
      {movies.map((t, idx) => {
        return (
          <div className=" bg-green-300 m-4" key={idx}>
            <h1 className="font-bold">{t.title}</h1>
            <img src={"http://image.tmdb.org/t/p/w185//"+t.poster_path} alt={t.title} />
            <h3 className="font-medium">Rating = {t.vote_average}</h3>
          </div>
        );
      })}
    </>
  );
};

export default Movies;
