
import React from 'react';
import './contact.scss';

const Contact = () => (
    <div className="contact-container">
        <div className="contact">
            <h1 className="contact__name">Sepp Dasbach</h1>
            <p className="contact__about-me">This is where I think it would make sense to put some text to talk a little about yourself</p>
            <div className="contact__methods">
                <div className="instagram icon">
                    <i className="fa fa-instagram"/>
                </div>

                <div className="linkedin icon">
                    <i className="fa fa-linkedin"/>
                </div>

                 <div className="email icon">
                    <i className="fa fa-envelope"/>
                </div>

            </div>
        </div>
    </div>
);

export default Contact;
