import React from 'react';
import Carousel from './Carousel.jsx';
import Navigation from './Navigation.jsx';
import Gallery from './Gallery.jsx';
import imageMap from './img-loader';

const { lifestyle, outdoors } = imageMap;

const App = () => (
    <div>
        <Navigation/>
        <Carousel/>
        <Gallery title="Life" photos={lifestyle}/>
        <Gallery title="Adventures" photos={outdoors}/>
    </div>
);

export default App;
