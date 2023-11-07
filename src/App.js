//  import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
// import Movie from "./Components/Movie";
// import { movies } from "./movieDummy";
// import Movie_styled from "./Components/Movie/Movie.style";


// function App() {
//   return (
//     <div className="App">
//       <div className="app-container">
//         {
//           movies.results.map((item) => {
//             return (
//               <Movie_styled 
//                 key={item.id}
//                 poster_path={item.poster_path}
//                 title={item.title}
//                 vote_average={item.vote_average}
//                 overview={item.overview}      
//               />
//             )
//           })
//         }
//       </div>
//     </div>
//   );
// }

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Celerbirity from "./Components/Pages/Celerbirity";
import Home from "./Components/Pages/Home";
// import NotFound from "./Components/Pages/NotFound";
import TV from "./Components/Pages/TV";
import Header from "./Components/Header";
import Movies from "./Components/Pages/Movies";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
				<Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Movies" element={<Movies/>} />
          <Route path="/Celerbirity" element={<Celerbirity/>} />
          <Route path="/TV" element={<TV/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
