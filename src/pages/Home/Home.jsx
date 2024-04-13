import React from 'react';
import './home.css';
import Intro from './Intro/Intro';
import About from './About/About';
import Skill from './Skill/Skill';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

const Home = () => {
  return (
    <>
      <section id="intro">
        <Intro />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skill />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
