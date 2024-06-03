import React, { useState, useEffect } from 'react';
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { motion } from 'framer-motion';
import styled from 'styled-components';
import "../App.css"
import { Link } from 'react-router-dom';

const NavbarComp = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    isMobile ? (
      <MobileNavbar>
        {dropdownOpen ?
          <IoIosClose style={{ fontSize: "2.5rem", cursor: 'pointer' }} onClick={toggleDropdown} /> :
          <IoMenu style={{ fontSize: "2rem", cursor: 'pointer' }} onClick={toggleDropdown} />
        }
        {dropdownOpen && (
          <DropdownMenu>
            <ul>
              <li><Link onClick={toggleDropdown} to='/' className='links'>Home</Link></li>
              <li><Link onClick={toggleDropdown} to='/about' className='links'>About</Link></li>
              <li><Link onClick={toggleDropdown} to='features' className='links'>Features</Link></li>
              <li><Link onClick={toggleDropdown} to='/contact' className='links'>Contact</Link></li>
            </ul>
          </DropdownMenu>
        )}
      </MobileNavbar>
    ) : (
      <DesktopNavbar
        as={motion.nav}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}>
          <img src="/logo.svg" alt="" />
        <ul>
          <li><Link to='/' className='links'>Home</Link></li>
          <li><Link to='/about' className='links'>About</Link></li>
          <li><Link to='features' className='links'>Features</Link></li>
          <li><Link to='/contact' className='links'>Contact</Link></li>
        </ul>
      </DesktopNavbar>
    )
  );
};

const MobileNavbar = styled.nav`
  width: 100%;
  height: 7vh;
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  align-items: center;
  position: fixed;
  top: 0;
  background-color: transparent;
  z-index: 9999;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 7vh;
  right: 2rem;
  transform: translate(2.8vh, 0%);
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  width: 95%;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 1rem;
    cursor: pointer;
    border-bottom: 1px solid #ddd;
    padding: 1rem 2rem;
    text-align: center;

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      background-color: #f0f0f0;
    }
  }
`;

const DesktopNavbar = styled.nav`
  width: 100%;
  height: 10vh;
  position: fixed;
  top: 0;
  z-index: 999;
  padding: 2rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;

  
  img{
    height: 12vh;
    margin-top: 2rem;
  }


  ul {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
    cursor: pointer;
    font-weight: 500;
  }
`;

export default NavbarComp;
