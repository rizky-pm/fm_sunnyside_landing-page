import React from 'react';
import styled from 'styled-components/macro';

import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Testimonials from './components/Testimonials/Testimonials';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';

const Container = styled.main``;

function App() {
    return (
        <Container>
            <Header />
            <Content />
            <Testimonials />
            <Gallery />
            <Footer />
        </Container>
    );
}

export default App;
