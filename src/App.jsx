import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Component01 from './components/Image';
import Component02 from './components/Image2';
import Navigation from "./components/Navigation";

function App() {

  return (
    <>
    <p>Rutas</p>
    <Router>
    <Navigation />
      <Routes>|
        <Route path="/Image" element={<Component01/>}/>|
        <Route path="/Image2" element={<Component02/>}/>|
      </Routes>
    </Router>
    </>
  )
}

export default App

