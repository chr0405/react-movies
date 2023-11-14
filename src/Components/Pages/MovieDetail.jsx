import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function MovieDetail() {

  // url로 넘겨받은 title
  const { title } = useParams(); 
  const { state } = useLocation();
  console.log(title);
  console.log(state.title);
  
  return (
    <div id='MovieDetail_div0'>
      <img id='MovieDetail_img' src={state.poster_path} alt='poster'></img>
      <h2 id='MovieDetail_h2'>{state.title}</h2>
    </div>
  )
}
