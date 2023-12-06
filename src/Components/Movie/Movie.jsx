function Movie({poster_path, title, vote_average, overview}) {
    return (
      <div className="Movies">
        <div className="Movies-container">
          <img width = {"140px"} height={"230px"} src={poster_path} alt='poster'/>
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