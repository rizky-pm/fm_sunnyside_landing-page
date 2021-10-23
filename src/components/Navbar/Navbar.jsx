import React, { useState } from 'react';
import styled from 'styled-components/macro';

import BrandLogo from '../../images/desktop/logo.svg';
import HamburgerIcon from '../../images/other/icon-hamburger.svg';

const Container = styled.nav`
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 2.5rem;
    width: 100%;

    @media only screen and (${(props) => props.theme.breakpoints.xsDevices}) {
        padding: 1.25rem 0.9375rem;
        position: static;
    }
`;

const Logo = styled.img`
    width: 10.625rem;
    height: auto;

    @media only screen and (${(props) => props.theme.breakpoints.xsDevices}) {
        width: 6.25rem;
    }
`;

const LinkWrapper = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 28.125rem;

    @media only screen and (max-width: 35.99875rem) {
        position: absolute;
        align-items: center;
        top: ${(props) => (props.active ? '12%' : '-100%')};
        left: 50%;
        transform: translateX(-50%);
        flex-direction: column;
        background-color: #fff;
        width: 90%;
        min-height: 40%;
        /* height: 19.6875rem; */
        text-align: center;
        transition: 0.3s;
        box-shadow: 0 0.625rem 1.6875rem rgba(0, 0, 0, 0.05);
        z-index: 10;
        padding: 2.1875rem 0;
        transition: all 2 ease;

        ::after {
            border: solid;
            border-color: white transparent;
            border-width: 0 0 1.875rem 1.875rem;
            content: '';
            right: 0;
            top: -1.8125rem;
            position: absolute;
        }
    }
`;

const NavItem = styled.li`
    list-style: none;
`;

const Link = styled.a`
    display: flex;
    justify-content: center;
    font-family: ${(props) =>
        props.active ? "'Fraunces', serif" : "'Barlow', sans-serif"};
    text-decoration: none;
    background-color: ${(props) => (props.active ? 'white' : '')};
    color: ${(props) => (props.active ? 'black' : 'white')};
    padding: 0.625rem 0;
    border-radius: 1.25rem;
    width: 6.25rem;
    transition: all ease 0.2s;

    @media only screen and (${(props) => props.theme.breakpoints.xsDevices}) {
        color: black;
        background-color: ${(props) => (props.active ? 'yellow' : '')};
    }

    :hover {
        background-color: ${(props) =>
            props.active ? '' : 'hsl(200, 100%, 72%)'};
        font-family: 'Fraunces', serif;
        font-size: 1rem;
    }
`;

const Hamburger = styled.img`
    display: none;

    @media only screen and (${(props) => props.theme.breakpoints.xsDevices}) {
        display: block;
        position: absolute;
        right: 0.9375rem;
    }
`;

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleHamburger = () => {
        setIsActive(!isActive);
    };

    return (
        <Container>
            <Logo src={BrandLogo} alt='Sunnyside Logo' />
            <LinkWrapper active={isActive}>
                <NavItem>
                    <Link onClick={toggleHamburger} href='#'>
                        About
                    </Link>
                </NavItem>
                <NavItem>
                    <Link onClick={toggleHamburger} href='#'>
                        Services
                    </Link>
                </NavItem>
                <NavItem>
                    <Link onClick={toggleHamburger} href='#'>
                        Projects
                    </Link>
                </NavItem>
                <NavItem>
                    <Link onClick={toggleHamburger} href='#' active>
                        Contact
                    </Link>
                </NavItem>
            </LinkWrapper>
            <Hamburger src={HamburgerIcon} onClick={toggleHamburger} />
        </Container>
    );
};

export default Navbar;
