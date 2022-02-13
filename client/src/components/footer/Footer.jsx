import React from 'react';
import './Footer.scss';
import ig from '../../assets/ig-logo.svg'


const Footer = () => {
    return (
        <div className='footer'>
            <div className="container footer-container">
                <a href="https://www.instagram.com/electromontaj_312/">
                    <img src={ig} alt="" />
                </a>
                <p className='copyright'>Electric312. All rights reserved &copy;</p>
            </div>
        </div>
    );
};

export default Footer;