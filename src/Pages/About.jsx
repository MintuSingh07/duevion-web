import React from 'react';
import styled from 'styled-components';
import aboutImg from '../../public/about.svg';
import aboutImg1 from '../../public/about(1).svg';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Container style={{ position: 'relative' }}>
      <img style={{ position: 'absolute', top: '50vh' }} src="fn_shape_01.svg" alt="" />
      <ImageTop src={aboutImg} />
      <AboutText>ABOUT</AboutText>
      <AboutDesc>
        <LeftPanel>
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Find Out More About Our <br />Business Consulting
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum arcu sed erat fringilla placerat. Proin fringilla lacinia risus sed porttitor. Quisque tincidunt lectus vitae massa vulputate pellentesque et vitae ligula. Sed eu leo odio. Aliquam erat volutpat. Praesent cursus quam purus, sed scelerisque orci tincidunt in. Donec a neque facilisis, lobortis tellus vitae, dictum nisl. Morbi sed lacus dui. Sed eu leo imperdiet, pulvinar massa ut, ullamcorper magna.
          </motion.p>
        </LeftPanel>
        <AboutImage src={aboutImg1} alt="" />
      </AboutDesc>
    </Container>
  );
};

const Container = styled.div`
  overflow-x: hidden;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  position: relative;
`;

const ImageTop = styled.img`
  width: 100%;
  position: absolute;
  top: -2vh;

  @media (max-width: 1024px) {
    height: auto;
    top: 0;
    width: 100%;
  }

  @media (max-width: 480px) {
    height: auto;
    top: 0;
    width: 100%;
  }
`;

const LeftPanel = styled.div`
  height: 100%;
  width: 100%;
`;

const AboutDesc = styled.div`
  height: 100vh;
  width: 100%;
  padding-left: 5rem;
  display: flex;
  margin-top: 50vh;

  h1 {
    font-weight: 600;
  }

  p {
    color: #4e4e4e;
    font-weight: 400;
    font-size: 1rem;
    width: 70%;
    margin-top: 2rem;
  }

  @media (max-width: 1024px) {
    padding: 2rem;
    margin-top: 30vh;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;

    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    padding: 3rem;
    margin-top: 20vh;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;

    h1 {
      font-size: 1.3rem;
    }

    p {
      font-size: 1rem;
      width: 100%;
    }
  }
`;

const AboutImage = styled.img`
  height: 60vh;
  padding-right: 10vh;

  @media (max-width: 1024px) {
    height: 40vh;
    padding-right: 0vh;
  }

  @media (max-width: 480px) {
    height: 30vh;
    padding-right: 0vh;
  }
`;

const AboutText = styled.h1`
  position: absolute;
  top: 15vh;
  font-weight: 500;
  right: 15vh;
  color: black;

  @media (max-width: 1024px) {
    right: 10vh;
  }

  @media (max-width: 480px) {
    right: 2vh;
    text-align: center;
    width: 100%;
  }
`;

export default About;
