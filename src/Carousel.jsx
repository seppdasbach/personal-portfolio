import React, {Component} from 'react';
import Flickity from 'flickity/dist/flickity.pkgd';
import 'flickity/dist/flickity.css';

import imageMap from './img-loader';

const images = imageMap.featured;



class Carousel extends Component {

    componentDidMount() {
        const {carousel} = this.refs;
        new Flickity(carousel, {
            prevNextButtons: false,
            autoPlay: 5000,
            pauseAutoPlayOnHover: false,
            pageDots: false
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
