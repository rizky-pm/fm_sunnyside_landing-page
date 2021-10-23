import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: center;
    text-align: center;
    width: 19.375rem;
    height: 18.125rem;
    font-family: 'Barlow', sans-serif;

    @media only screen and (${(props) => props.theme.breakpoints.xsDevices}) {
        height: auto;
        margin-top: 3.125rem;
    }
`;

const ImagePicture = styled.img`
    width: 4.375rem;
    height: 4.375rem;
    border-radius: 50%;
`;

const Review = styled.p`
    color: ${(props) => props.theme.colors.neutral.veryDarkGrayishBlue};
    line-height: 1.75;
    margin-top: 2.5rem;

    @media only screen and (${(props) => props.theme.breakpoints.xsDevices}) {
        font-size: 1.0625rem;
        margin-top: 2.1875rem;
    }
`;

const SignatureWrapper = styled.div`
    margin-top: 3.4375rem;

    @media only screen and (${(props) => props.theme.breakpoints.xsDevices}) {
        margin-top: 0.9375rem;
    }
`;

const Name = styled.p`
    color: ${(props) => props.theme.colors.neutral.veryDarkDesaturatedBlue};
    font-family: 'Fraunces', serif;
    font-weight: 900;
    margin-bottom: 0.625rem;
`;

const Position = styled.p`
    color: ${(props) => props.theme.colors.neutral.grayishBlue};
    margin-top: 0.625rem;
`;

const Card = (props) => {
    return (
        <Container>
            <ImagePicture src={props.image} alt='Profile Picture' />
            <Review>{props.review}</Review>
            <SignatureWrapper>
                <Name>{props.name}</Name>
                <Position>{props.job}</Position>
            </SignatureWrapper>
        </Container>
    );
};

export default Card;
