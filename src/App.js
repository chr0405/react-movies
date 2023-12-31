import { BrowserRouter, Route, Routes } from "react-router-dom";
import Celerbirity from "./Components/Pages/Celerbirity";
import Home from "./Components/Pages/Home";
import NotFound from "./Components/Pages/NotFound";
import TV from "./Components/Pages/TV";
import Header from "./Components/Header";
import Movies from "./Components/Pages/Movies";
import MovieDetail from "./Components/Pages/MovieDetail"
import CheckLogin from "./Components/Pages/CheckLogin"
import { useState } from "react";

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <div className="root-wrap">
      <BrowserRouter>
				<Header isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Movies" element={<Movies/>} />
          <Route path="/Movies/:MovieExplain" element={<MovieDetail/>} />
          <Route path="/Celerbirity" element={<Celerbirity/>} />
          <Route path="/TV" element={<TV/>} />
          <Route path="*" element={<NotFound/>} />
          <Route path="/CheckLogin" element={<CheckLogin isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
