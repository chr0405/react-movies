import React from 'react'
import Movie from "../Movie/Movie";
import { movies } from "../../movieDummy";
import { useNavigate } from 'react-router-dom'

export default function Movies() {

  const navigate = useNavigate();
  const moveToExplain = (item) =>{
    navigate((`/Movies/${item.title}`),{
      state: item
    })
  } 

  return (
    <div className="App">
      <div className="app-container">
        {
          movies.results.map((item) => {
            return (
              <span key={item.id} onClick={() => moveToExplain(item)}>
              <Movie
                key={item.id} 
                poster_path={item.poster_path}
                title={item.title}
                vote_average={item.vote_average}
                overview={item.overview}      
              />
              </span>
            )
          })
        }
      </div>
    </div>
  );
}
