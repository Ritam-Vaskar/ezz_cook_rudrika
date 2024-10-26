
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './Layout/MainLayout/MainLayout';
import Home from './Pages/Home/Home';
import RecipeList from './Pages/RecipeBook/recipeList';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/RecipeBook" element={<RecipeList />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;

