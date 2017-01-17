import React, {Component} from 'react';
import Flickity from 'flickity/dist/flickity.pkgd';
import 'flickity/dist/flickity.css';
import jCole from '../Images/JCole-Final-1-2.jpg';
class Carousel extends Component {

    componentDidMount() {
        const {carousel} = this.refs;
        new Flickity(carousel, {
            // cellAlign: 'left',
            //contain: true
        });

    }

    render() {
        return (
            <div className="carousel-container">
                <div className="main-carousel" ref="carousel">
                    <div className="carousel-cell carousel-image">
                        <div className="image-container">
                            <div className="image-item" style={{backgroundImage: `url(${jCole})`}}/>
                        </div>
                    </div>
                    <div className="carousel-cell carousel-image">...</div>
                    <div className="carousel-cell carousel-image">...</div>
                </div>
            </div>
        );
    }
}
export default Carousel;
