//  import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Movie from "./Components/Movie";
import { movies } from "./movieDummy";


function App() {
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
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
