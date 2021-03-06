import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => (
        <div className="movie" key={index}>
          <h1>{movie.title}</h1>
          <h2>RunTime: {movie.time}</h2>
          <h3>{movie.genres.join(', ')}</h3>
        </div>
      ))}
    </div>
  );
};

export default Movies;
