import React from 'react';
import Logo from './Logo';

const Footer = () => {
    return (
        <div>
            <footer>
                <div className='footer'>
                    <div className='footer-logo'>
                        <Logo />
                    </div>
                    <div className="footer-contact">
                        <h4>Contact</h4>
                        welcome@maxupgrade.com
                        <hr />
                        © 2023
                    </div>
                    <div className="footer-social-media">
                        <h4>Socials networks</h4>
                        <ul>
                            <a href="#"><li><img className='social-media-logo' src="./social-media/square-facebook.svg" alt="Logo facebook" /></li></a>
                            <a href="#"><li><img className='social-media-logo' src="./social-media/square-instagram.svg" alt="Logo facebook" /></li></a>
                            <a href="#"><li><img className='social-media-logo' src="./social-media/linkedin.svg" alt="Logo facebook" /></li></a>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;