import React, { Component } from 'react';
import classNames from 'classnames';
import instagram from '../icons/instagram.png';
import linkedIn from '../icons/linkedin.png';

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expandedContact: false
        };
    }

    toggleExpandedContact(){
        this.setState({ expandedContact: !this.state.expandedContact });
    }

    render() {
        const brandClasses = classNames('main-navigation__brand', {
           'main-navigation__brand--clicked': this.state.expandedContact
        });
        return (
            <nav className="main-navigation">
                <div className={ brandClasses }>
                    <h1 onClick={ () => this.toggleExpandedContact() }
                        className="main-navigation__brand-title">
                        Sepp Dasbach
                    </h1>
                    <div className="contact-icon instagram" title="Instagram">
                        <a href="https://www.instagram.com/seppsippycup/" target="_blank">
                            <img src={instagram} width="20px"/>
                        </a>
                    </div>
                    <div className="contact-icon linkedin" title="Linkedin">
                        <a href="https://www.linkedin.com/in/sepp-dasbach-27274288" target="_blank">
                            <img src={linkedIn} width="25px"/>
                        </a>
                    </div>
                </div>
                <div className="main-navigation__items">
                    <div className="main-navigation__item">Work</div>
                    <div className="main-navigation__item">Contact</div>
                </div>
            </nav>
        );
    }
}

export default Navigation;
