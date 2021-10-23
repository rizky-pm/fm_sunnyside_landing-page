import React from 'react';
import styled from 'styled-components/macro';

import Navbar from '../Navbar/Navbar';

import DesktopImage from '../../images/desktop/image-header.jpg';
import MobileImage from '../../images/mobile/image-header.jpg';
import ArrowDown from '../../images/other/icon-arrow-down.svg';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url(${DesktopImage});
    background-size: cover;
    background-position: center bottom;
    min-height: 28.125rem;
    height: 100vh;

    @media only screen and (${(props) => props.theme.breakpoints.xsDevices}) {
        background-image: url(${MobileImage});
        background-color: #3dbfff;
        background-size: contain;
        background-repeat: no-repeat;
    }
`;

const HeaderText = styled.p`
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, 0);
    color: ${(props) => props.theme.colors.neutral.white};
    font-family: 'Fraunces', serif;
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: 0.625rem;
    text-align: center;
    padding: 0 0.9375rem;

    @media only screen and (${(props) => props.theme.breakpoints.xsDevices}) {
        font-size: 2.375rem;
    }
`;

const IconArrowDown = styled.img`
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, 0);

    @media only screen and (${(props) => props.theme.breakpoints.xsDevices}) {
        top: 36%;
    }
`;

const Header = () => {
    return (
        <Container>
            <Navbar />
            <HeaderText>WE ARE CREATIVES</HeaderText>
            <IconArrowDown src={ArrowDown} alt='Arrow Down Icon' />
        </Container>
    );
};

export default Header;
