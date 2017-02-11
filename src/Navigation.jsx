import React, { Component } from 'react';
import classNames from 'classnames';
import { Motion, spring } from 'react-motion';

import { Link } from 'react-router-dom';

import instagram from '../icons/instagram.png';
import linkedIn from '../icons/linkedin.png';
import gmail from '../icons/gmail.png';
import sepp from '../icons/sepp-white.png';


const PopOutWidget = () => (
     <div onClick={ () => this.toggleExpandedContact() }
        className={ contactClasses }>
        Contact
        <div className="contact-icon instagram" title="Instagram">
            <a href="https://www.instagram.com/seppsippycup/" target="_blank">
                <img src={instagram} width="100%"/>
            </a>
        </div>
        <div className="contact-icon linkedin" title="Linkedin">
            <a href="https://www.linkedin.com/in/sepp-dasbach-27274288" target="_blank">
                <img src={linkedIn} width="100%"/>
            </a>
        </div>
        <div className="contact-icon email" title="Email">
            <a href="mailto:seppdasbach14@gmail.com" target="_blank">
                <img src={gmail} width="100%"/>
            </a>
        </div>
    </div>
);

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expandedContact: false,
            opened: false
        };
    }

    toggleExpandedContact() {
        this.setState({expandedContact: !this.state.expandedContact});
    }

    toggleMenu(){
        this.setState({ opened: !this.state.opened });
    }
    componentDidUpdate(prevProps){
        const { match: prevMatch } = prevProps
        const { match } = this.props;
        if(match.url !== prevMatch.url){
            this.setState({ opened: false });
        }
    }

    getMenuIconStyles(){
        const { match } = this.props;
        // if(match.url == '/contact'){
        //     return { color: 'black' };
        // }
        return {};
    }

    render() {
        const brandClasses = classNames('main-navigation__brand');

        const contactClasses = classNames('main-navigation__item',{
            'main-navigation__item--clicked': this.state.expandedContact
        });
        const { match } = this.props;
        return (
            <nav className="main-navigation">
                <div className={ brandClasses }>
                    <div className="main-navigation__brand-title" onClick={ () => this.toggleMenu() }>
                        <i className="fa fa-bars" style={this.getMenuIconStyles()}/>
                    </div>
                </div>
                <Motion defaultStyle={{ y: 0, scale: 0 }}
                        style={{
                            y: spring(this.state.opened ? 0 : 0, { stiffness: 330 }),
                            scale: spring(this.state.opened ? 1: 0)
                        }}>
                    { ({ y, scale }) => (
                        <div className="navigation-slider"
                             style={{
                                 transform: `translateY(${y}px) scaleY(${scale})`,
                                 color: `rgba(0,0,0, ${scale})`
                             }}>
                                <div className="nav-items">
                                    <i className="fa fa-bars"
                                        onClick={ () => this.toggleMenu()}/>
                                    <Link to="/">home</Link>
                                    <Link to="/adventures">adventures</Link>
                                    <Link to="/lifestyle">life</Link>
                                    <Link to="/music">music</Link>
                                    <Link to="/people">people</Link>
                                    <Link to="/contact">contact</Link>
                                </div>
                        </div>
                    )}
                </Motion>
            </nav>
        );
    }
}

export default Navigation;
