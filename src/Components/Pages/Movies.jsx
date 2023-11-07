import React from 'react'
import Movie from "../Movie/Movie";
import { movies } from "../../movieDummy";

export default function Movies() {
  return (
    <div className="App">
      <div className="app-container">
        {
          movies.results.map((item) => {
            return (
              <Movie
                key={item.id}
                poster_path={item.poster_path}
                title={item.title}
                vote_average={item.vote_average}
                overview={item.overview}      
              />
            )
          })
        }
      </div>
    </div>
  );
}
