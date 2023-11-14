import { BrowserRouter, Route, Routes } from "react-router-dom";
import Celerbirity from "./Components/Pages/Celerbirity";
import Home from "./Components/Pages/Home";
import NotFound from "./Components/Pages/NotFound";
import TV from "./Components/Pages/TV";
import Header from "./Components/Header";
import Movies from "./Components/Pages/Movies";
import MovieDetail from "./Components/Pages/MovieDetail"

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
				<Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Movies" element={<Movies/>} />
          <Route path="/Movies/:MovieExplain" element={<MovieDetail/>} />
          <Route path="/Celerbirity" element={<Celerbirity/>} />
          <Route path="/TV" element={<TV/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
