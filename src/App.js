import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Components/Nav';
import Home from './Components/Home';
import Login from "./Components/Login";
import About from "./Components/About";
import { Element } from "react-scroll";
function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        
        <Route >
          <Element>

          
          <Route path="/" element={<Home/>} />
          </Element>
          <Element>
            <Route path="About" element={<About/>} />
          </Element>
          
          <Route path="Events" element={<h1>Events</h1>} />
          <Route path="Artist" element={<h1>Artist</h1>} />
          <Route path="ED" element={<h1>Event Detail Page</h1>} />
          <Route path="AD" element={<h1>Artist Detail</h1>} />
          <Route path="Login" element={<Login/>} />
          
          
        </Route>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
