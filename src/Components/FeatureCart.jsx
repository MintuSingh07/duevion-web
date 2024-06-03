import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const FeatureCart = ({ imageSrc, title, description }) => {
  return (
    <CartContainer
      as={motion.div}
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: .5 }}
    >
      <FeatureImage src={imageSrc} alt="" />
      <FeatureTitle>{title}</FeatureTitle>
      <FeatureLine />
      <FeatureDescription>{description}</FeatureDescription>
    </CartContainer>
  );
};

const CartContainer = styled.div`
  height: 40vh;
  width: 50vh;
  background-color: white;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1.5vh;
  align-items: center;
  -webkit-box-shadow: -1px 1px 10px 1px rgba(0, 0, 0, 0.338);
  -moz-box-shadow: -1px 1px 10px 1px rgba(0, 0, 0, 0.338);
  box-shadow: -1px 1px 10px 1px rgba(0, 0, 0, 0.338);

  @media (max-width: 1024px) {
    width: 40vh;
    height: 35vh;
  }

  @media (max-width: 768px) {
    width: 30vh;
    height: 30vh;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`;

const FeatureImage = styled.img`
  height: 12vh;

  @media (max-width: 768px) {
    height: 10vh;
  }

  @media (max-width: 480px) {
    height: 8vh;
  }
`;

const FeatureTitle = styled.h1`
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const FeatureLine = styled.div`
  height: 1vh;
  background-color: #00C6D1;
  border-radius: 2rem;
  width: 30%;
`;

const FeatureDescription = styled.p`
  text-align: center;
  font-size: 0.9rem;
  color: #4e4e4e;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

export default FeatureCart;
