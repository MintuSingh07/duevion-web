import React from 'react';
import styled from 'styled-components';
import aboutImg from '/about.svg';
import FeatureCart from '../Components/FeatureCart';

const Features = () => {
  return (
    <Container>
      <ImageTop src={aboutImg} />
      <AboutText>Features</AboutText>
      <FeaturesHeader>
        <NameCapsule>Features</NameCapsule>
        <h1>The Features To Create Your </h1>
      </FeaturesHeader>
      <FeaturesBody>
        <FeatureCart
          imageSrc="featurecartlogo.svg"
          title="Easy Copy And Paste"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <FeatureCart
          imageSrc="featurecartlogo.svg"
          title="Quick Setup"
          description="Set up your environment quickly with just a few clicks."
        />
        <FeatureCart
          imageSrc="featurecartlogo.svg"
          title="Customizable"
          description="Easily customize according to your needs."
        />
        <FeatureCart
          imageSrc="featurecartlogo.svg"
          title="Responsive Design"
          description="Enjoy a fully responsive experience on any device."
        />
        <FeatureCart
          imageSrc="featurecartlogo.svg"
          title="High Performance"
          description="Experience high performance and reliability."
        />
        <FeatureCart
          imageSrc="featurecartlogo.svg"
          title="Secure"
          description="Your data is secure with our top-notch security features."
        />
      </FeaturesBody>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  position: relative;
  flex-direction: column;
`;

const ImageTop = styled.img`
  width: 100%;
  position: absolute;
  top: -2vh;

  @media (max-width: 768px) {
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

const AboutText = styled.h1`
  position: absolute;
  top: 15vh;
  font-weight: 500;
  right: 15vh;
  color: black;

  @media (max-width: 768px) {
    right: 5vh;
  }

  @media (max-width: 480px) {
    right: 2vh;
    text-align: center;
    width: 100%;
  }
`;

const FeaturesHeader = styled.div`
  margin-top: 45vh;
  height: 15vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    margin-top: 0.5rem;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    margin-top: 35vh;
    text-align: center;
  }

  @media (max-width: 480px) {
    text-align: center;
  }
`;

const NameCapsule = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5vh;
  width: 20vh;
  background-color: #f0fddc;
  border-radius: 10rem;

  @media (max-width: 768px) {
    height: 4vh;
    width: 18vh;
  }
`;

const FeaturesBody = styled.div`
  margin-top: 2rem;
  min-height: 100vh;
  width: 100%;
  padding: 5vh 0 5vh 10vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    padding: 5vh 5vh 5vh 5vh;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    padding: 5vh 5vh 5vh 5vh;
    grid-template-columns: 1fr;
  }
`;

export default Features;
