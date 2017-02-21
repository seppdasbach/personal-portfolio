import React, {Component} from 'react';
import { media, sizes, container } from './media';
import {Motion, spring} from 'react-motion';
import styled from 'styled-components';

import { Link as RouterLink } from 'react-router-dom';



const Link = styled(RouterLink)`
    font-size: 1.5em;
    text-decoration: none;
    text-transform: uppercase;
    border-right: 1px solid #7e796a;
    color: ${ props => props.active ? 'white' : '#7e796a'};
    &:last-child {
        border-right: none;
    }
    &:not(:last-child) {
        padding-right: 1em;
        margin-right: 1em;
    }
    &:hover {
        color: white;
    }
    ${ media.tablet`font-size: 1em;` }
`;

const Nav = styled.nav`
    margin-top: 50px;
    height: 50px;
    color: #7e796a
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const NavContainer = styled.div`  
    display: flex;
    justify-content: space-between;
    flex: 1 1 auto;
    ${ container() }
`;

const Sepp = styled.h1`
    margin: 0;
`;

const NavItems = styled.div`
    display: flex;
    align-items: center;
`;

const Row = styled.div`
    display: flex;
    align-item: flex-end;
`;

const HiddenPhone = styled.span`
    line-height: 2.0;
    padding-left: 10px;
    ${media.tablet`display: none;`}
`;

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expandedContact: false,
            opened: false
        };
    }

    render() {
        const { url } = this.props.match;
        return (
            <Nav>
                <NavContainer>
                    <Row>
                        <Sepp>
                            <RouterLink to="/">Sepp Dasbach</RouterLink>
                        </Sepp>
                        <HiddenPhone>Just looking at the world</HiddenPhone>
                    </Row>
                    <NavItems>
                        <Link active={url.endsWith('/work')} to="/work">work</Link>
                        <Link active={url.endsWith('/contact')} to="/contact">contact</Link>
                    </NavItems>
                </NavContainer>
            </Nav>
        );
    }
}

export default Navigation;
