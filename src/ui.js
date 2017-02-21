import React from 'react';
import styled, { keyframes } from 'styled-components';

export const CenteredContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;


export const appear = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
