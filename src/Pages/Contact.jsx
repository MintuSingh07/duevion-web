import React, { useState } from 'react';
import styled from 'styled-components';
import aboutImg from '../../public/about.svg';
import StaticMap from '../Components/StaticMap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can add your form submission logic here
  };

  const latitude = 22.667854;
  const longitude = 88.343117;
  const zoom = 12;

  return (
    <Container>
      <ImageTop src={aboutImg} />
      <AboutText>Contact</AboutText>
      <FeaturesHeader>
        <NameCapsule>Contact</NameCapsule>
        <h1>Contact Us</h1>
      </FeaturesHeader>
      <ContactContainer>
        <Form onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="name">Name:</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </FormField>
          <FormField>
            <Label htmlFor="email">Email:</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </FormField>
          <FormField>
            <Label htmlFor="phone">Phone:</Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </FormField>
          <FormField>
            <Label htmlFor="message">Message:</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </FormField>
          <Button type="submit">Submit</Button>
        </Form>
        <ContactRight>
          <ContactDetails>
            <img src="locationicon.svg" alt="" />
            <DetailsContent>
              <h1>Visit Us:</h1>
              <p>27 Division St, New York, NY 10002, USA</p>
            </DetailsContent>
          </ContactDetails>
          <ContactDetails>
            <img src="locationicon.svg" alt="" />
            <DetailsContent>
              <h1>Phone Number :</h1>
              <p>+91 876593644</p>
            </DetailsContent>
          </ContactDetails>
          <ContactDetails>
            <img src="locationicon.svg" alt="" />
            <DetailsContent>
              <h1>Email:</h1>
              <p>admin@admin.com</p>
            </DetailsContent>
          </ContactDetails>
          <MapContainer>
            <StaticMap
              latitude={latitude}
              longitude={longitude}
              zoom={zoom}
            />
          </MapContainer>
        </ContactRight>
      </ContactContainer>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
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

const AboutText = styled.h1`
  position: absolute;
  top: 15vh;
  font-weight: 500;
  right: 15vh;
  color: black;

  @media (max-width: 1024px) {
    top: 10vh;
    right: 10vh;
  }
  @media (max-width: 928px) {
    display: none;
  }

  @media (max-width: 480px) {
    display: none;
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

  @media (max-width: 1024px) {
    margin-top: 30vh;
  }

  @media (max-width: 480px) {
    margin-top: 15vh;
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

  @media (max-width: 1024px) {
    height: 4vh;
    width: 18vh;
  }
`;

const ContactContainer = styled.div`
  width: 80%;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;

  @media (max-width: 1024px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 80%;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    width: 90%;
    flex-direction: column;
  }
`;

const Form = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    order: 2;
  }

  @media (max-width: 480px) {
    width: 100%;
    order: 2;
  }
`;

const FormField = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
`;

const Button = styled.button`
  padding: 0.8rem 2rem;
  background-color: #000;
  color: #fff;
  width: 30%;
  border: 0;
  outline: 0;
  border-radius: 2rem;
  cursor: pointer;
  position: relative;
  z-index: 99;

  @media (max-width: 1024px) {
    width: 50%;
  }

  @media (max-width: 480px) {
    width: 70%;
  }
`;

const ContactRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 25vw;
  height: 80vh;
  gap: 3vh;
  padding: 1rem 1rem;
  border-left: 2px solid #00adb6;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    order: 1;
    border-left: none;
    border-bottom: 2px solid #00adb6;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
    order: 1;
    border-left: none;
    border-bottom: 2px solid #00adb6;
  }

  img {
    height: 2rem;
  }
`;

const ContactDetails = styled.div`
  height: 15vh;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  border-bottom: 1px solid gray;
`;

const DetailsContent = styled.div`
  height: 100%;
  width: 100%;

  h1 {
    font-size: 1rem;
    font-weight: 500;
  }
  p {
    width: 70%;
    color: #595959;
    font-size: 0.8rem;
  }
`;

const MapContainer = styled.div`
  height: 100%;
  width: 100%;

  @media (max-width: 768px) {
    height: 15vh;
  }

  @media (max-width: 480px) {
    height: 15vh;
  }
`;

export default Contact;
