import React from 'react';
import './home.css';
import Intro from '../../sections/Intro/Intro';
import About from '../../sections/About/About';
import Projects from '../../sections/Projects/Projects';
import Contact from '../../sections/Contact/Contact';
import Skill from '../../sections/Skill/Skill';

const Home = () => {
  return (
    <>
      <Intro />
      <About />
      <Skill />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
