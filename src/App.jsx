import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Component01 from './components/Image';
import Component02 from './components/Image2';
import Component03 from './components/Image3';
import Component04 from './components/Image4';
import Component05 from './components/Image5';
import Navigation from "./components/Navigation";

function App() {

  return (
    <div class="container">
    <h3>Rutas - React</h3>
    <hr />
    <Router>
    <Navigation />
      <Routes>
        <Route path="/Image" element={<Component01/>}/>
        <Route path="/Image2" element={<Component02/>}/>
        <Route path="/Image3" element={<Component03/>}/>
        <Route path="/Image4" element={<Component04/>}/>
        <Route path="/Image5" element={<Component05/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App

