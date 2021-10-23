import React from 'react';
import styled from 'styled-components/macro';

import Card from './Card';

import { testimonialsData } from '../../testimonials';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    @media only screen and (${(props) => props.theme.breakpoints.xsDevices}) {
        height: 100%;
        padding: 3.125rem 0 6.25rem 0;
    }
`;

const Title = styled.h4`
    color: ${(props) => props.theme.colors.neutral.grayishBlue};
    font-family: 'Fraunces', serif;
    letter-spacing: 0.3125rem;
    margin-bottom: 3.75rem;

    @media only screen and (${(props) => props.theme.breakpoints.xsDevices}) {
        margin-bottom: 1.875rem;
    }
`;

const Cards = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;

    @media only screen and (${(props) => props.theme.breakpoints.xsDevices}) {
        height: 56.25rem;
        flex-direction: column;
    }
`;

const Testimonials = () => {
    return (
        <Container>
            <Title>CLIENT TESTIMONIALS</Title>
            <Cards>
                {testimonialsData.map((data) => {
                    return (
                        <Card
                            key={data.name}
                            image={data.image}
                            review={data.review}
                            name={data.name}
                            job={data.job}
                        />
                    );
                })}
            </Cards>
        </Container>
    );
};

export default Testimonials;
