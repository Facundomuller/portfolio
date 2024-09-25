import React from 'react';
import Welcome from './Components/Welcome';
import "./Home.css";
import Why from './Components/Why';
import About from './Components/About';
import Contact from './Components/Contact';
import Presentation from './Components/Presentation';

const Home = () => {
  return (
    <>
      <Welcome />
      <Presentation />
      <Why />
      <About />
      <Contact />
    </>
  )
}

export default Home;
