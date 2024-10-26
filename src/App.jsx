// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './layouts/Navbar/Navbar';
import Home from './pages/Home/Home';
import RecipeBook from './pages/RecipieList/RecipieList';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Footer from './layouts/Footer/Footer';
const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipebook" element={<RecipeBook />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
