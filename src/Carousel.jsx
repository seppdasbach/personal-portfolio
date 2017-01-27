import React, {Component} from 'react';
import Flickity from 'flickity/dist/flickity.pkgd';
import 'flickity/dist/flickity.css';
import jCole from '../Images/JCole-Final-1-2.jpg';
import bridge from '../Images/bridge.jpg';
import otherBridge from '../Images/bridge_2.jpg';
import skyline from '../Images/skyline.jpg';
import boat from '../Images/boat.jpg';
import beach from '../Images/beach.jpg';
import highway from '../Images/highway.jpg';

const images = [
    bridge,
    highway,
    otherBridge,
    skyline,
    boat,
    jCole,
    beach
];

class Carousel extends Component {

    componentDidMount() {
        const {carousel} = this.refs;
        new Flickity(carousel, {
            prevNextButtons: false,
            autoPlay: 5000,
            pauseAutoPlayOnHover: false
        });
    }

    render() {
        return (
            <div className="carousel-container">
                <div className="main-carousel" ref="carousel">
                    {images.map((i) => (
                        <div key={i} className="carousel-cell carousel-image">
                            <img src={i} width="100%"/>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
export default Carousel;
