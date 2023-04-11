import React from 'react';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Awards from '../../components/Awards/Awards';
import Projects from '../../components/Projects/Projects';
import Experience from '../../components/Experience/Experience';
import Contact from '../../components/Contact/Contact';
import Background from '../../components/Background/Background';

const Home = () => {
    return (
      <div>
        <Hero />
        <Awards />
        <Background />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
    )
  }
  
  export default Home