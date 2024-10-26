// src/pages/Home.jsx
import React from 'react';
import Gallery from '../../sections/Gallery/Gallery';
import HeroCarousel from '../../sections/HeroCarousel/HeroCarousel';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
        <HeroCarousel />
        <Gallery />
    </div>
  );
};

export default Home;
