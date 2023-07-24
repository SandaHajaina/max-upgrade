import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Navigation = () => {
    return (
        <div className='nav-bg'>
            <nav>
                <div className="navigation">
                    <div>
                        <Logo />
                    </div>
                    <div className="main-menu">
                        <ul>
                            <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                                <li>Home</li>
                            </NavLink>
                            <a href="#services"><li>Services</li></a>

                            <a href="#about-us"><li>About us</li></a>

                            <a href="#blog"><li>Blog</li></a>

                            <a href="#contact"><li>Contact</li></a>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;