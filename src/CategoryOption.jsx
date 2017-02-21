import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { appear } from './ui';
import { media, sizes } from './media';


const CategoryCard = styled.div`
    opacity: 0;
    width: calc((${sizes.giant}px - 1em)/2);
    animation: ${appear} 500ms forwards ease-in;
    animation-delay: 250ms;
    position: relative;
    ${media.giant`
        width: calc((${sizes.desktop}px - 1em)/2);
    `}
    ${media.desktop`
        width: calc((${sizes.tablet}px - 1em)/2);
    `}
    ${media.tablet`
        width: calc((${sizes.phone}px - 1em)/2);
    `}
    ${media.phone`
        width: 100vw;
    `}
`;

const CategoryPreview = styled.img`
    width: 100%;
    height: 100%;
`;

const TitleOverlay = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 5px;
    opacity: 0;
    background-color: white;
    color: black;
    transition: all 200ms ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &:hover {
        opacity: .7;
    }
    ${ media.phone`opacity: .4;`}
`;

const GoIcon = styled.i`
    font-size: 2.5em
`;

const CategoryOption = ({ path, image, categoryName }) => (
    <Link to={path}>
        <CategoryCard image={image}>
            <CategoryPreview src={image} alt=""/>
            <TitleOverlay>
                <h2>
                    {categoryName}
                </h2>
                <GoIcon className="fa fa-arrow-circle-o-right" aria-hidden="true"/>
            </TitleOverlay>
        </CategoryCard>
    </Link>
);


export default CategoryOption;


