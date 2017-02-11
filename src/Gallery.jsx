import React from 'react';
import ReactPhotoGallery from 'react-photo-gallery';
import imageConfig from '../image.config.json';

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
        width: 540,
        height: 360,
        aspectRatio: 1.5,
    };

};


const makeImageConfig = (src) => ({
    src,
    lightboxImage: {
        src
    },
    ...getSizeConfig(src)
});

//
// function shuffle(a) {
//     for (let i = a.length; i; i--) {
//         let j = Math.floor(Math.random() * i);
//         [a[i - 1], a[j]] = [a[j], a[i - 1]];
//     }
// }


const Gallery = ({ title, photos }) => (
    <div className="gallery">
        <ReactPhotoGallery photos={photos.map(makeImageConfig)}/>
    </div>
);

export default Gallery;
