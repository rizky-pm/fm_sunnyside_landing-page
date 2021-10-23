// import React from 'react';
// import styled from 'styled-components/macro';

// import MilkBottles from '../../images/desktop/image-gallery-milkbottles.jpg';
// import Orange from '../../images/desktop/image-gallery-orange.jpg';
// import Cone from '../../images/desktop/image-gallery-cone.jpg';
// import SugarCubes from '../../images/desktop/image-gallery-sugarcubes.jpg';

// import MobileMilkBottles from '../../images/mobile/image-gallery-milkbottles.jpg';
// import MobileOrange from '../../images/mobile/image-gallery-orange.jpg';
// import MobileCone from '../../images/mobile/image-gallery-cone.jpg';
// import MobileSugarCubes from '../../images/mobile/image-gallery-sugar-cubes.jpg';

// const ImageGallery = styled.div`
//     display: flex;
//     height: 26.25rem;
//     overflow: hidden;

//     @media only screen and (${(props) => props.theme.breakpoints.xsDevices}) {
//         flex-direction: row;
//         overflow: auto;
//         flex-wrap: wrap;
//     }
// `;

// const DesktopImage = styled.img`
//     @media only screen and (${(props) => props.theme.breakpoints.xsDevices}) {
//         display: none;
//     }
// `;

// const MobileImage = styled.img`
//     display: none;

//     @media only screen and (${(props) => props.theme.breakpoints.xsDevices}) {
//         display: block;
//         width: 11.71875rem;
//     }
// `;

// const Gallery = () => {
//     return (
//         <ImageGallery>
//             <ImageGallery>
//                 <DesktopImage src={MilkBottles} alt='Milk Bottles' />
//                 <DesktopImage src={Orange} alt='Orange' />
//                 <DesktopImage src={Cone} alt='Cone' />
//                 <DesktopImage src={SugarCubes} alt='Sugar Cubes' />

//                 <MobileImage src={MobileMilkBottles} alt='Milk Bottles' />
//                 <MobileImage src={MobileOrange} alt='Orange' />
//                 <MobileImage src={MobileCone} alt='Cone' />
//                 <MobileImage src={MobileSugarCubes} alt='Sugar Cubes' />
//             </ImageGallery>
//         </ImageGallery>
//     );
// };

// export default Gallery;

import React from 'react';
import styled from 'styled-components/macro';

import MilkBottles from '../../images/desktop/image-gallery-milkbottles.jpg';
import Orange from '../../images/desktop/image-gallery-orange.jpg';
import Cone from '../../images/desktop/image-gallery-cone.jpg';
import Sugarcubes from '../../images/desktop/image-gallery-sugarcubes.jpg';

const Wrapper = styled.div`
    display: flex;

    @media only screen and (${(props) => props.theme.breakpoints.xsDevices}) {
        flex-wrap: wrap;
    }
`;

const ImageWrapper = styled.div`
    flex: 1;

    @media only screen and (${(props) => props.theme.breakpoints.xsDevices}) {
        flex: 0 0 50%;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media only screen and (${(props) => props.theme.breakpoints.xsDevices}) {
    }
`;

const Gallery = () => {
    return (
        <Wrapper>
            <ImageWrapper>
                <Image src={MilkBottles} alt='Milk Bottles' />
            </ImageWrapper>
            <ImageWrapper>
                <Image src={Orange} alt='Orange' />
            </ImageWrapper>
            <ImageWrapper>
                <Image src={Cone} alt='Cone' />
            </ImageWrapper>
            <ImageWrapper>
                <Image src={Sugarcubes} alt='Sugar cubes' />
            </ImageWrapper>
        </Wrapper>
    );
};

export default Gallery;
