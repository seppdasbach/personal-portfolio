import React, {Component} from 'react';
import classNames from 'classnames';
import instagram from '../icons/instagram.png';
import linkedIn from '../icons/linkedin.png';
import gmail from '../icons/gmail.png';
import sepp from '../icons/sepp-white.png';

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expandedContact: false
        };
    }

    toggleExpandedContact() {
        this.setState({expandedContact: !this.state.expandedContact});
    }

    render() {
        const brandClasses = classNames('main-navigation__brand');

        const contactClasses = classNames('main-navigation__item',{
            'main-navigation__item--clicked': this.state.expandedContact
        });
        return (
            <nav className="main-navigation">
                <div className={ brandClasses }>
                    <h1 className="main-navigation__brand-title">
                        <img className="sepp-logo" src={sepp}/>
                    </h1>
                </div>
                <div className="main-navigation__items">
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
                </div>
            </nav>
        );
    }
}

export default Navigation;
