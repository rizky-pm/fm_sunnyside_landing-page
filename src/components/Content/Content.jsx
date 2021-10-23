import React from 'react';
import styled from 'styled-components/macro';

import ImageEgg from '../../images/desktop/image-transform.jpg';
import ImageGlass from '../../images/desktop/image-stand-out.jpg';
import ImageCherry from '../../images/desktop/image-graphic-design.jpg';
import ImageOrange from '../../images/desktop/image-photography.jpg';

import ImageMobileEgg from '../../images/mobile/image-transform.jpg';
import ImageMobileGlass from '../../images/mobile/image-stand-out.jpg';
import ImageMobileCherry from '../../images/mobile/image-graphic-design.jpg';
import ImageMobileOrange from '../../images/mobile/image-photography.jpg';

const Row = styled.div`
    display: flex;
    height: 31.25rem;

    @media only screen and (${(props) => props.theme.breakpoints.xsDevices}) {
        flex-direction: ${(props) =>
            props.reverse ? 'column' : 'column-reverse'};
        height: auto;
    }
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;

    &.inside-image {
        position: absolute;
        text-align: center;
        width: 50%;
        bottom: 5%;
        left: 50%;
        transform: translateX(-50%);

        @media only screen and (max-width: 35.99875rem) {
            width: 90%;
        }
    }

    @media only screen and (${(props) => props.theme.breakpoints.xsDevices}) {
        text-align: center;
    }
`;

const DescriptionContainer = styled.div`
    width: 60%;

    @media only screen and (${(props) => props.theme.breakpoints.xsDevices}) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 26.5625rem;
        width: 90%;
    }
`;

const DescriptionTitle = styled.p`
    font-family: 'Fraunces', serif;
    font-weight: 900;
    font-size: ${(props) => props.fontSize || '2.25rem'};
    margin-bottom: 1.5625rem;
    color: ${(props) => props.color};

    @media only screen and (${(props) => props.theme.breakpoints.xsDevices}) {
        font-size: ${(props) => props.fontSize || '2.125rem'};
    }
`;

const DescriptionMain = styled.p`
    font-family: 'Barlow', sans-serif;
    color: ${(props) => props.theme.colors.neutral.darkGrayishBlue};
    font-size: ${(props) => props.fontSize || '1.125rem'};
    margin-bottom: 1.5625rem;
    line-height: 1.5;
    color: ${(props) => props.color};

    @media only screen and (${(props) => props.theme.breakpoints.xsDevices}) {
        padding: 0;
        align-items: center;
        text-align: center;
        font-size: ${(props) => props.fontSize || '1.1875rem'};
    }
`;

const BottomBorder = styled.div`
    background-color: ${(props) =>
        props.softRed
            ? `${props.theme.colors.primary.softRed}`
            : `${props.theme.colors.primary.yellow}`};
    margin-left: -0.3125rem;
    margin-top: -0.5rem;
    width: 8.125rem;
    height: 0.625rem;
    border-radius: 0.3125rem;
    opacity: 0.3;
`;

const DescriptionLinkWrapper = styled.div`
    display: inline-block;
    :hover ${BottomBorder} {
        opacity: 1;
    }
`;

const DescriptionLink = styled.a`
    font-family: 'Fraunces', serif;
    font-weight: 900;
    font-size: 0.9375rem;
    margin-left: 0.3125rem;
    text-decoration: none;
    color: black;

    @media only screen and (${(props) => props.theme.breakpoints.xsDevices}) {
        font-size: 1.125rem;
    }
`;

const ImageWrapper = styled.div`
    position: relative;
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media only screen and (${(props) => props.theme.breakpoints.xsDevices}) {
        display: none;
    }
`;

const ImageMobile = styled(Image)`
    display: none;

    @media only screen and (${(props) => props.theme.breakpoints.xsDevices}) {
        display: block;
    }
`;

const Content = () => {
    return (
        <>
            <Row>
                <Description>
                    <DescriptionContainer>
                        <DescriptionTitle>
                            Transform your brand
                        </DescriptionTitle>
                        <DescriptionMain>
                            We are a full-service creative agency specializing
                            in helping brands grow fast. Engage your clients
                            through compelling visuals that do most of the
                            marketing for you.
                        </DescriptionMain>
                        <DescriptionLinkWrapper>
                            <DescriptionLink href='#'>
                                LEARN MORE
                            </DescriptionLink>
                            <BottomBorder />
                        </DescriptionLinkWrapper>
                    </DescriptionContainer>
                </Description>
                <ImageWrapper>
                    <Image src={ImageEgg} alt='Egg' />
                    <ImageMobile src={ImageMobileEgg} alt='Egg' />
                </ImageWrapper>
            </Row>
            <Row reverse>
                <ImageWrapper>
                    <Image src={ImageGlass} alt='Glass' />
                    <ImageMobile src={ImageMobileGlass} alt='Glass' />
                </ImageWrapper>
                <Description>
                    <DescriptionContainer>
                        <DescriptionTitle>
                            Stand out to the right audience
                        </DescriptionTitle>
                        <DescriptionMain>
                            Using a collaborative formula of designers,
                            researchers, photographers, videographers, and
                            copywriters, we’ll build and extend your brand in
                            digital places.
                        </DescriptionMain>
                        <DescriptionLinkWrapper>
                            <DescriptionLink href='#'>
                                LEARN MORE
                            </DescriptionLink>
                            <BottomBorder softRed />
                        </DescriptionLinkWrapper>
                    </DescriptionContainer>
                </Description>
            </Row>
            <Row reverse>
                <ImageWrapper>
                    <Image src={ImageCherry} alt='Cherry' />
                    <ImageMobile src={ImageMobileCherry} alt='Cherry' />
                    <Description className='inside-image'>
                        <DescriptionTitle
                            color='hsl(167, 40%, 24%)'
                            fontSize='1.75rem'
                        >
                            Graphic design
                        </DescriptionTitle>
                        <DescriptionMain
                            color='hsl(167, 40%, 24%)'
                            fontSize='1rem'
                        >
                            Great design makes you memorable. We deliver artwork
                            that underscores your brand message and captures
                            potential clients’ attention.
                        </DescriptionMain>
                    </Description>
                </ImageWrapper>
                <ImageWrapper>
                    <Image src={ImageOrange} alt='Orange' />
                    <ImageMobile src={ImageMobileOrange} alt='Orange' />
                    <Description className='inside-image'>
                        <DescriptionTitle
                            color='hsl(198, 62%, 26%)'
                            fontSize='1.75rem'
                        >
                            Photography
                        </DescriptionTitle>
                        <DescriptionMain
                            color='hsl(198, 62%, 26%)'
                            fontSize='1rem'
                        >
                            Increase your credibility by getting the most
                            stunning, high-quality photos that improve your
                            business image.
                        </DescriptionMain>
                    </Description>
                </ImageWrapper>
            </Row>
        </>
    );
};

export default Content;
