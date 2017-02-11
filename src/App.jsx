import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';;

import Carousel from './Carousel.jsx';
import Navigation from './Navigation.jsx';
import Gallery from './Gallery.jsx';
import Contact from './Contact.jsx';
import imageMap from './img-loader';

const { lifestyle, outdoors, music, people } = imageMap;

const App = () => (
    <Router>
        <div className="app-shell">
            <Route path="*" component={Navigation}/>
            <Route exact path="/" component={Featured}/>
            <Route path="/lifestyle" component={LifeStyle}/>
            <Route path="/adventures" component={Adventure}/>
            <Route path="/music" component={Music}/>
            <Route path="/people" component={People}/>
            <Route path="/contact" component={Contact}/>
        </div>
    </Router>
);


const Featured = () => <Carousel/>;
const LifeStyle = () => <Gallery title="Life" photos={lifestyle}/>;
const Adventure = () => <Gallery title="Adventures" photos={outdoors}/>;
const Music = () => <Gallery title="Music" photos={music}/>;
const People = () => <Gallery title="Music" photos={people}/>;

export default App;
