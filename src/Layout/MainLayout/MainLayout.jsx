// src/layout/MainLayout/MainLayout.js
import React from 'react';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer';
import Headroom from 'react-headroom';

const MainLayout = ({ children }) => {
  return (
    <>
    <Headroom>
      <Navbar />
      </Headroom>
      <main>{children}</main>
      <Footer/>
    </>
  );
};

export default MainLayout;
