//  import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
// import Movie from "./Components/Movie";
import { movies } from "./movieDummy";
import Movie_styled from "./Components/Movie/Movie.style";


function App() {
  return (
    <div className="App">
      <div className="app-container">
        {
          movies.results.map((item) => {
            return (
              <Movie_styled 
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

export default App;
