import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled component for the container
const ProfileCard = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  padding: 2rem;
  width: 90%;
  border-radius: 0.5rem;
  background-color: #f9f9f9; /* Background color */
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    height: 20vh;
    width: 90%;
    width: 60vh;
    scale: .7;
  }
`;

// Styled component for the text
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.125rem;
  color: #333;
`;

const Description = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: #666;
`;

const IconImage = styled.img`
  height: 13vh;
  margin-right: 5vh;
`;

const AppWorkDetails = () => {
  return (
    <ProfileCard
      as={motion.div}
      initial={{y: 20, opacity: 0}}
      whileInView={{y:0, opacity: 1}}
      transition={{duration: .5}}
    >
      <IconImage src="appworkdivlogo.svg" />
      <TextWrapper>
        <Title>Make A Profile</Title>
        <Description>
          Aliquam varius ligula nec leo tempus porta. Vestibulum suscipit leo at nunc imperdiet, quis lacinia nisi euismod.
        </Description>
      </TextWrapper>
    </ProfileCard>
  );
};

export default AppWorkDetails;
