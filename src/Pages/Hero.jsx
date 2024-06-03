import React, { useRef } from 'react'
import styled from 'styled-components'
import AppWorkDetails from '../Components/AppWorkDetails';
import { delay, motion } from 'framer-motion'
import FAQs from './FAQs';

const Hero = () => {

  return (
    <Container>
      {/* //! HERO SECTION */}
      <HeroSection>
        <HeroBgImage src="Group104.svg" alt="" />
        <LeftPanel>
          <HeroHeader
            as={motion.h1}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: .6 }}
          >
            Duevion
          </HeroHeader>
          <HeroDesc
            as={motion.p}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Aenean dictum odio dapibus turpis dapibus vestibulum. Mauris quis massa nisi. Nullam porta lorem at volutpat euismod. Proin in ex nunc.
          </HeroDesc>
          <Button
            as={motion.button}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}>Read More</Button>
        </LeftPanel>
        <RightPanel>
          <AppDemoImg1
            as={motion.img}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, delay: 1.2 }}
            src="Customer_Home_Page.png" alt="" />
          <AppDemoImg2
            as={motion.img}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, delay: 1.2 }}
            src="onboard3.png" alt="" />
        </RightPanel>
      </HeroSection>

      {/* //! DETAILS SECTION */}
      <DetailsSection>
        <DetailsBGImage src='bg2.svg' />
        <DetailsHeader>Engaging & Spacious <br />School Campus</DetailsHeader>
        <img src="dsd-2.svg" alt="" />
        <DetailsDesc>Hise sed augue vitae felis pellentesque varius nec quis nunc. Morbi mauris augue, pulvinar quis luctus eget. Phasellus gravida lacus quis eros lobortis, nec dapibus quam gravida.</DetailsDesc>
        <DetailsImageContainer>
          <DetailsImage
            as={motion.img}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .5 }}
            src='details_1.svg' />
          <DetailsImage
            as={motion.img}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, delay: .2 }}
            src='details_2.svg' />
          <DetailsImage
            as={motion.img}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, delay: .3 }}
            src='details_1.svg' />
        </DetailsImageContainer>
      </DetailsSection>

      <Devider src='devider.svg' />

      {/* //! APP DETAILS SECTION */}
      <AppDetails>
        <AppDetailsRight>
          <AppDetailsImg src='manwithphone.svg' />
        </AppDetailsRight>
        <AppDetailsLeft>
          <AppDetailsHeader
            as={motion.h1}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >Easy And Perfect Solution For <br />Your Business App</AppDetailsHeader>
          {/* <img style={{ height: ".5vh" }} src="Vector13.svg" alt="" /> */}
          <AppDetailsDesc
            as={motion.p}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: .2 }}
          >Aliquam aliquet purus a est consequat lobortis. Etiam vehicula suscipit purus, eget ullamcorper augue blandit vitae. Ut eu euismod felis. Etiam at varius quam. Vivamus lacinia pulvinar turpis in suscipit. Aenean mattis enim ut pretium gravida. Sed fermentum a lacus bibendum convallis.</AppDetailsDesc>
          <Button
            as={motion.button}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: .4 }}
          >Read More</Button>
        </AppDetailsLeft>
      </AppDetails>

      {/* //!App Work */}
      <AppWork>
        <RightPanel>
          <AppWorkHeader>How does This App Work?</AppWorkHeader>
          <img src="dsd.svg" alt="" />
          <AppWorkDetails />
          <AppWorkDetails />
          <AppWorkDetails />
        </RightPanel>
        <LeftPanel>
          <AppHeroImage src="appwork.svg" />
        </LeftPanel>
      </AppWork>
      <FAQs />
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const HeroBgImage = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    height: 90vh;
    @media (max-width: 480px) {
      height: 80vh;
    }
`
const HeroSection = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;

  @media (max-width: 480px) {
    flex-direction: column-reverse;
  }
`
const LeftPanel = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 5rem;
    gap: 1rem;
    position: relative;
    z-index: 9;

    @media (max-width: 480px) {
      width: 90%;
      padding-left: 1rem;
    }
`;
const RightPanel = styled.div`
    height: 100%;
    width: 50%;
    position: relative;
    z-index: 9;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media (max-width: 480px) {
      width: 100%;
    }
`;
const AppDemoImg1 = styled.img`
      position: absolute;
      rotate: -10deg;
      left: 0%;
      top: -25%;
      scale: .7;
      border-radius: 1rem;
      z-index: 4;
      scale: .4;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

      @media (min-width: 360px ) and (max-width: 412px) {
        left: -19%;
        top: -58%;
        scale: .38;
  }
    @media (min-width: 412px) and (max-width: 480px) {
      left: 1%;
      top: -38%;
      scale: .45;
  }
`;
const AppDemoImg2 = styled.img`
      position: absolute;
      z-index: 3;
      rotate: -10deg;
      left: 30%;
      top: -25%;
      scale: .7;
      border-radius: 1rem;
      scale: .4;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

      @media (min-width: 360px ) and (max-width: 412px) {
      rotate: 10deg;
        left: -10%;
        top: -58%;
        scale: .38;
  }
    @media (min-width: 412px) and (max-width: 480px) {
      rotate: 10deg;
      left: 1%;
      top: -38%;
      scale: .45;
  }
`;
const HeroHeader = styled.h1`
    color: black;
    font-size: 3rem;
`
const HeroDesc = styled.p`
    color: #4e4e4e;
    font-size: 1rem;
    font-weight: 400;

    @media (max-width: 480px) {
    font-size: .8rem;
    }
`
const Button = styled.button`
    padding: .8rem 2rem;
    background-color: #000;
    color: #fff;
    width: 30%;
    border: 0;
    outline:0;
    border-radius: 2rem;
    cursor: pointer;
    position: relative;
    z-index: 99;

    @media (max-width: 480px) {
      width: 70%;
    }
`;
const DetailsSection = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const DetailsBGImage = styled.img`
  position: absolute;
  height: 230vh;
  z-index: 9;
  right: 0;
  top: 25%;

  @media (max-width: 480px) {
    height: 91vh;
    top: 33%;
  }
`
const DetailsHeader = styled.h1`
  text-align: center;
  color: black;
  font-size: 2rem;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;
const DetailsDesc = styled.p`
  color: #4e4e4e;
  text-align: center;
  width: 50%;
  font-size: .9rem;
  margin-top: 1rem;

  @media (max-width: 480px) {
    width: 90%;
    font-size: .7rem;
  }
`;
const DetailsImageContainer = styled.div`
  position: relative;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50vh;
  width: 100%;
  margin-top: 15vh;
  @media (max-width: 480px) {
    margin-top: 35vh;
    flex-direction: column;
    gap: 3vh;
  }
`;
const DetailsImage = styled.img`
  height: 65vh;

  @media (max-width: 480px) {
    height: 35vh;
  }
`;
const Devider = styled.img`
  margin-top: 20vh;
  text-align: center;

  @media (max-width: 480px) {
    margin-top: 40vh;
    width: 90%;
  }
`;
const AppDetails = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20vh;

  @media (max-width: 480px) {
    margin-top: 5vh;
    flex-direction: column;
  }
`;
const AppDetailsRight = styled.div`
  display: flex;
  padding-left: 15vh;
  height: 100%;
  width: 50%;

  @media (max-width: 480px) {
    height: 30vh;
    padding-left: 0;
    margin-bottom: 1vh;
  }
`;
const AppDetailsImg = styled.img`
  position: relative;
  z-index: 9;
  height: 70vh;

  @media (max-width: 480px) {
    height: 20vh;
  }
`;
const AppDetailsLeft = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  @media (max-width: 480px) {
    width: 100%;
    align-items: center;
  }
`;
const AppDetailsHeader = styled.h1`
  font-size: 2rem;
  color: black;

  @media (max-width: 480px) {
    /* text-align: center; */
    font-size: 1.2rem;
  }
`;
const AppDetailsDesc = styled.p`
  color: #4e4e4e;
  width: 80%;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;
const AppWork = styled.div`
  display: flex;
  padding: 1vh 20vh;

  @media (max-width: 480px) {
    margin-top: -20vh;
    align-items: center;
    flex-direction: column-reverse;
    padding: 1vh 5vh;
    width: 100%;
  }
`;

const AppHeroImage = styled.img`
  height: 60vh;

  @media (max-width: 480px) {
    height: 25vh;
  }
`;

const AppWorkHeader = styled.h1`
  font-size: 1.5rem;
  color: black;

  @media (max-width: 480px) {
    text-align: center;
  }
`;

export default Hero;