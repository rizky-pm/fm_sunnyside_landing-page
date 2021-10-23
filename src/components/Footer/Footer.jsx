import React from 'react';
import styled from 'styled-components/macro';

import { Logo } from './Logo';
import { FacebookIcon } from './FacebookIcon';
import { InstagramIcon } from './InstagramIcon';
import { TwitterIcon } from './TwitterIcon';
import { PinterestIcon } from './PinterestIcon';

const Container = styled.footer`
    background-color: hsl(167, 44%, 70%);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 12.5rem;
    padding: 0.625rem 0;

    @media only screen and (${(props) => props.theme.breakpoints.xsDevices}) {
        height: 17.1875rem;
    }
`;

const LogoRecolor = styled(Logo)`
    color: ${(props) => props.theme.colors.primary.darkDesaturatedCyan};
`;

const CustomTwitterIcon = styled(TwitterIcon)`
    color: ${(props) => props.theme.colors.primary.darkDesaturatedCyan};
    transition: all ease 0.2s;

    :hover {
        cursor: pointer;
        color: ${(props) => props.theme.colors.neutral.white};
    }
`;

const CustomFacebookIcon = styled(FacebookIcon)`
    color: ${(props) => props.theme.colors.primary.darkDesaturatedCyan};
    transition: all ease 0.2s;

    :hover {
        cursor: pointer;
        color: ${(props) => props.theme.colors.neutral.white};
    }
`;

const CustomInstagramIcon = styled(InstagramIcon)`
    color: ${(props) => props.theme.colors.primary.darkDesaturatedCyan};
    transition: all ease 0.2s;

    :hover {
        cursor: pointer;
        color: ${(props) => props.theme.colors.neutral.white};
    }
`;

const CustomPinterestIcon = styled(PinterestIcon)`
    color: ${(props) => props.theme.colors.primary.darkDesaturatedCyan};
    transition: all ease 0.2s;

    :hover {
        cursor: pointer;
        color: ${(props) => props.theme.colors.neutral.white};
    }
`;

const LinkWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 18.75rem;
    /* margin-bottom: 1.25rem; */
`;

const Link = styled.a`
    display: flex;
    justify-content: center;
    font-family: 'Barlow', sans-serif;
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary.darkModerateCyan};
    transition: all ease 0.2s;

    :hover {
        color: ${(props) => props.theme.colors.neutral.white};
    }
`;

const SocialMediaWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 10rem;
`;

const Attribution = styled.p`
    color: ${(props) => props.theme.colors.paleBlue};
    text-align: center;
    font-family: 'Barlow', sans-serif;
    font-size: 0.875rem;
    /* margin-top: 1.875rem; */
    padding: 0 5rem;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        padding: 0;
    }
`;

const AttributionLink = styled.a`
    color: inherit;
    transition: all ease 0.2s;

    :hover {
        color: ${(props) => props.theme.colors.primary.darkModerateCyan};
        text-decoration: none;
    }
`;

const Footer = () => {
    return (
        <Container>
            <LogoRecolor />
            <LinkWrapper>
                <Link href='#'>About</Link>
                <Link href='#'>Services</Link>
                <Link href='#'>Projects</Link>
            </LinkWrapper>
            <SocialMediaWrapper>
                <CustomFacebookIcon />
                <CustomInstagramIcon />
                <CustomTwitterIcon />
                <CustomPinterestIcon />
            </SocialMediaWrapper>
            <Attribution>
                Challenge by{' '}
                <AttributionLink
                    href='https://www.frontendmentor.io?ref=challenge'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Frontend Mentor
                </AttributionLink>
                . Coded by{' '}
                <AttributionLink href='https://github.com/rizky-pm'>
                    Rizky Putra Mahendra
                </AttributionLink>
                .
            </Attribution>
        </Container>
    );
};

export default Footer;
