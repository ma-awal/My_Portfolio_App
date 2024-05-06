import React from 'react';
import './home.css';
import Intro from './Intro/Intro';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Services from './Services/Services';
import Skill from './Skill/Skill';

const Home = () => {
  return (
    <>
      <Intro />
      <About />
      <Services />
      <Skill />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
