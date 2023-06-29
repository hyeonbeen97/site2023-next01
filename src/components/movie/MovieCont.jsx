import React from "react";
import MovieItem from "./MovieItem";

const movieCont = ({ movies }) => {
  return (
    <div className="movie__cont container">
      <ul>
        {movies.map((movie, index) => (
          <MovieItem key={index} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default movieCont;
