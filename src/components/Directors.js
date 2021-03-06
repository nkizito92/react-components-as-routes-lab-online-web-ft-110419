import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <div className="director" key={index}>
          <h1>{director.name}</h1>
          <h3>Movies:</h3>
          <p> {director.movies.join(", ")}</p>
        </div>
      ))}
    </div>
  );
}

export default Directors
