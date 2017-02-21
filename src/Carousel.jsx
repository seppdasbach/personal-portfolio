import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Flickity from 'flickity/dist/flickity.pkgd';
import 'flickity/dist/flickity.css';

import { appear } from './ui';
import { sizes, media, container } from './media';
import imageMap from './img-loader';

const images = imageMap.featured;

const CarouselContainer = styled.div`
    margin: 0 0 1em 0;
    opacity: 0;
    animation: ${appear} 500ms ease-in-out forwards;
    animation-delay: 300ms;
    min-height: 780px;
    ${ media.giant`min-height: 660px;` }
    ${ media.desktop`min-height: 515px;` }
    ${ media.tablet`min-height: 250px;` }
`;


const CarouselImage = styled.div`
    width: ${sizes.giant}px;
    ${ container() }
`;


class Carousel extends Component {

    componentDidMount() {
        const { carousel } = this.refs;
        this.flickity = new Flickity(carousel, {
            prevNextButtons: false,
            autoPlay: 5000,
            pauseAutoPlayOnHover: false,
            pageDots: false,
            initialIndex: Math.floor(images.length / 2)
        });
        setTimeout(() => this.flickity.resize(), 250);
    }
    componentWillUpdate(){
        this.flickity.resize();
    }

    render() {
        return (
           <CarouselContainer>
                <div className="main-carousel" ref="carousel">
                    {images.map((i) => (
                        <CarouselImage key={i}>
                            <img src={i} width="100%"/>
                        </CarouselImage>
                    ))}
                </div>
            </CarouselContainer>
        );
    }
}
export default Carousel;
