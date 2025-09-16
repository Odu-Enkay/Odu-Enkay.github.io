// src/App.js

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ bgcolor: 'black', color: 'white', fontFamily: 'sans-serif' }}>
      <Navbar />
      <Box component="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
