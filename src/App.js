import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footing';
import Pizza1 from './assets/pizza-slideshow1.jpg';
import Pizza2 from './assets/pizza-slideshow2.jpg';
import Pizza3 from './assets/pizza-slideshow3.jpg';
import Pizza4 from './assets/pizza-slideshow4.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const slides = [
    { image: Pizza1, title: 'image1' },
    { image: Pizza2, title: 'image2' },
    { image: Pizza3, title: 'image3' },
    { image: Pizza4, title: 'image4' }
  ]
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home slides={slides} />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
