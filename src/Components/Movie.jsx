function Movie({poster_path, title, vote_average}) {
    return (
      <div className="Movies">
        <div className="Movies-container">
            <img src={poster_path}/>
            <div className="title_and_vote_average">
              <h6>{title}</h6>
            <p>{vote_average}</p>
            </div>
            
        </div>
      </div>
    )
  }
  
  export default Movie