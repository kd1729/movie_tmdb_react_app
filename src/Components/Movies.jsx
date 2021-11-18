import React from "react";

const Movies = ({ movies }) => {
  return (
    <>
      {movies.map((t, idx) => {
        return (
          <div className=" bg-purple-300 rounded-t-lg m-4 flex flex-col justify-center items-center" key={idx}>
            <div className="text-xl font-bold">{t.title}</div>
            <img className="h-80 w-60" src={"http://image.tmdb.org/t/p/w780/"+t.poster_path} alt={t.title} />
            <div className="font-medium">Rating = {t.vote_average}</div>
          </div>
        );
      })}
    </>
  );
};

export default Movies;
