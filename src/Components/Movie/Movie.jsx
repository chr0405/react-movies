function Movie({poster_path, title, vote_average, overview}) {
    return (
      <div className="Movies">
        <div className="Movies-container">
          <img src={poster_path}/>
          <div className="title_and_vote_average">
            <h6 id="view_title">{title}</h6>
            <p id="view_vote_average">{vote_average}</p>
          </div>
          <div className="moreInformation">
            <h6 id="info_title">{title}</h6>
            <p id="info_overview">{overview}</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Movie