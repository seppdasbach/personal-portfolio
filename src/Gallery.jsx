import React from 'react';
import ReactPhotoGallery from 'react-photo-gallery';

const makeImageConfig = (src) => ({
    src,
    width: 540,
    height: 360,
    aspectRatio: 1.5,
    lightboxImage: {
        src
    }
});
function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}


const Gallery = ({ title, photos }) => (
    <div className="gallery">
        <ReactPhotoGallery photos={photos.map(makeImageConfig)}/>
    </div>
);

export default Gallery;
