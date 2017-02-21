import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
    display: flex;
    justify-content: center;
    width: 100%;
    color: white;
    padding: 1em 0;
`;
const Icon = styled.div`
    &:not(:last-child){
        margin-right: 1em;
    }
`;


const AppFooter = () => (
    <Footer>
        <Icon className="instagram icon">
            <i className="fa fa-instagram"/>
        </Icon>

        <Icon className="linkedin icon">
            <i className="fa fa-linkedin"/>
        </Icon>

         <Icon className="email icon">
            <i className="fa fa-envelope"/>
        </Icon>
    </Footer>
);

export default AppFooter;
