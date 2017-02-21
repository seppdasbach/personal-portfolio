import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Carousel from './Carousel.jsx';
import Navigation from './Navigation.jsx';
import Gallery from './Gallery.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import imageMap from './img-loader';

import CategoryGrid from './CategoryGrid.jsx';

const {lifestyle, outdoors, music, people} = imageMap;

const App = () => (
    <Router>
        <div className="app-shell">
            <Route path="*" component={Navigation}/>
            <Route exact path="/" component={Featured}/>
            <Route exact path="/work" component={CategoryTiles}/>
            <Route path="/work/lifestyle" component={LifeStyle}/>
            <Route path="/work/adventures" component={Adventure}/>
            <Route path="/work/music" component={Music}/>
            <Route path="/work/people" component={People}/>
            <Route path="/contact" component={Contact}/>
            <Route exact path="/" component={CategoryTiles}/>
            <Footer/>
        </div>
    </Router>
);


const Featured = () => <Carousel/>;
const LifeStyle = () => <Gallery title="Life" photos={lifestyle}/>;
const Adventure = () => <Gallery title="Adventures" photos={outdoors}/>;
const Music = () => <Gallery title="Music" photos={music}/>;
const People = () => <Gallery title="Music" photos={people}/>;


const categories = [
    {
        image: lifestyle[0],
        path: '/work/lifestyle',
        categoryName: 'Lifestyle'
    },
    {
        image: outdoors[3],
        path: '/work/adventures',
        categoryName: 'Adventures'
    },
    {
        image: music[0],
        path: '/work/music',
        categoryName: 'Live Events'
    },
    {
        image: people[0],
        path: '/work/people',
        categoryName: 'People'
    }
];

const CategoryTiles = () => <CategoryGrid categories={categories}/>;

export default App;
