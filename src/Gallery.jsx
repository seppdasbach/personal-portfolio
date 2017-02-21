import React from 'react';
import ReactPhotoGallery from 'react-photo-gallery';
import styled from 'styled-components';
import imageConfig from '../image.config.json';
import { container } from './media';
import { CenteredContainer } from './ui';

const getSizeConfig = (src) => {
    if(imageConfig.portrait.includes(src)){
        return {
            width: 360,
            height: 540,
            aspectRatio: .66
        }
    }
    if(imageConfig.panoramic.includes(src)){
        return {
            width: 540,
            height: 169,
            aspectRatio: 3.2
        }
    }
    if(imageConfig.square.includes(src)){
        return {
            width: 540,
            height: 540,
            aspectRatio: 1
        }
    }
    return {
        width: 340,
        height: 360,
        aspectRatio: 1.5,
    };

};


const makeImageConfig = (src) => ({
    src: `/${src}`,
    lightboxImage: {
        src: `/${src}`
    },
    ...getSizeConfig(src)
});

const GalleryContainer = styled.div`
    ${ container() }
`;

const Gallery = ({ title, photos }) => (
    <CenteredContainer>
        <GalleryContainer>
            <ReactPhotoGallery photos={photos.map(makeImageConfig)}/>
        </GalleryContainer>
    </CenteredContainer>
);

export default Gallery;
