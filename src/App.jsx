import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Hero from './Pages/Hero';
import NavbarComp from './Components/NavbarComp';
import About from './Pages/About';
import Features from './Pages/Features';
import Contact from './Pages/Contact';
import Footer from "./Components/Footer"
import SocialMedia from './Components/SocialMedia';

const App = () => {
  return (
    <Container>
      <Router>
        <NavbarComp />
        <SocialMedia />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/about' element={<About />} />
          <Route path='/features' element={<Features />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </Container>
  )
}


const Container = styled.div`
  height: 100vh;
  width: 100vw;
`

export default App