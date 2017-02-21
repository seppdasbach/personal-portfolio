import React from 'react';
import styled from 'styled-components';

import { container, media } from './media';
import CategoryOption from './CategoryOption.jsx';
import { CenteredContainer } from './ui';

const FlexGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    ${ container() }
    ${ media.giant`
        justify-content: space-around;
    `}
    & > * {
        margin-bottom: 1em;
    }
`;

const CategoryGrid = ({ categories }) => (
    <CenteredContainer>
        <FlexGrid>
            { categories.map((category) => (
                <CategoryOption {...category} key={category.image}/>
            ))}
        </FlexGrid>
    </CenteredContainer>
);

export default CategoryGrid;
