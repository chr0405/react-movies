import React from 'react'
import TVTool from "../TVfolder/TVTool";
import { tvs } from "../../tvDummy";
// import { useNavigate } from 'react-router-dom'

export default function TV() {
  return (
    <div className="App">
      <div className="app-container">
        {
          tvs.results.map((item) => {
            return (
              // <span key={item.id} onClick={() => moveToExplain(item)}>
              <TVTool
                key={item.id} 
                poster_path={item.poster_path}
                name={item.name}
                vote_average={item.vote_average}
                overview={item.overview}      
              />
              // </span>
            )
          })
        }
      </div>
    </div>
  )
}
