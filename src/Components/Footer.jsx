import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterText>
                    Vero, Tempor Morbi, Adipiscing Aliqua Nummy Proident Perferendis? Laboris Lacus Quidem Repellendus Quasi.
                </FooterText>
                <FooterLinks>
                    <LinkColumn>
                        <ColumnHeader>Quick Links</ColumnHeader>
                        <img src="footerdevider.svg" alt="" />
                        <LinkItem href="#">Home</LinkItem>
                        <LinkItem href="#">About Us</LinkItem>
                        <LinkItem href="#">Careers</LinkItem>
                        <LinkItem href="#">News & Articles</LinkItem>
                    </LinkColumn>
                    <LinkColumn>
                        <ColumnHeader>Useful Links</ColumnHeader>
                        <img src="footerdevider.svg" alt="" />
                        <LinkItem href="#">Help Center</LinkItem>
                        <LinkItem href="#">Contact Us</LinkItem>
                        <LinkItem href="#">FAQ</LinkItem>
                        <LinkItem href="#">Parent Community</LinkItem>
                    </LinkColumn>
                    <LinkColumn>
                        <ColumnHeader>School Hours</ColumnHeader>
                        <img src="footerdevider.svg" alt="" />
                        <LinkItem>8 AM - 5 PM, Monday - Saturday</LinkItem>
                        <LinkItem>Aut, Quae Convallis Minim Cum Ornare! Pede Ut Rem, Totam Dictum Convallis.</LinkItem>
                        <SocialIcons>
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram"></i>
                        </SocialIcons>
                    </LinkColumn>
                </FooterLinks>
            </FooterContent>
            <FooterBottom>
                <Copyright>Copyright © 2022 Educator. All rights reserved.</Copyright>
                <FooterNav>
                    <FooterNavItem href="#">PRIVACY POLICY</FooterNavItem>
                    <FooterNavItem href="#">SUPPORT</FooterNavItem>
                    <FooterNavItem href="#">TERMS & CONDITION</FooterNavItem>
                </FooterNav>
            </FooterBottom>
        </FooterContainer>
    );
};

const FooterContainer = styled.footer`
    background-color: #282727;
    color: #fff;
`;

const FooterContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 2rem;
    border-bottom: 1px solid #282727;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const FooterText = styled.p`
    flex: 1;
    margin-right: 2rem;
`;

const FooterLinks = styled.div`
    display: flex;
    flex: 2;
    justify-content: space-between;

    @media (max-width: 768px) {
        padding-top: 2rem;
        flex-wrap: wrap;
    }
`;

const LinkColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 2rem;
    width: 50%;
    position: relative;

    img {
        position: absolute;
        left: 0;
        top: 2rem;
        height: 0.3rem;
    }

    @media (max-width: 768px) {
        width: 100%;
        margin-right: 0;
        margin-bottom: 2rem;

        img {
            position: unset;
            display: block;
            margin-bottom: 1rem;
        }
    }
`;

const ColumnHeader = styled.h3`
    margin-bottom: 1rem;
    color: #fff;
    font-size: 1.2rem;
`;

const LinkItem = styled.a`
    color: #a0a0a0;
    margin-bottom: 0.5rem;
    text-decoration: none;

    &:hover {
        color: #fff;
    }
`;

const SocialIcons = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;

    i {
        font-size: 1.2rem;
    }
`;

const FooterBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
    background-color: #000;
    padding: 1.5rem;

    @media (max-width: 768px) {
        font-size: .5rem;
    }
`;

const Copyright = styled.div`
    flex: 1;
`;

const FooterNav = styled.div`
    display: flex;
    gap: 1rem;
`;

const FooterNavItem = styled.a`
    color: #ffffff;
    text-decoration: none;

    &:hover {
        color: #fff;
    }
`;

export default Footer;
