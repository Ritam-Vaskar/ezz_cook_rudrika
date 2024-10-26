// src/pages/Home.jsx
import React from 'react';
import Gallery from '../../sections/Gallery/Gallery';
import HeroCarousel from '../../sections/HeroCarousel/HeroCarousel';


const Home = () => {
  return (
    <div>
        <HeroCarousel />
        <Gallery />
    </div>
  );
};

export default Home;
