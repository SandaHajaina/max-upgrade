import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Navigation = () => {
    return (
        <div>
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
                            <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                                <li>Services</li>
                            </NavLink>
                            <NavLink to="/about-us" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                                <li>About us</li>
                            </NavLink>
                            <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                                <li>Blog</li>
                            </NavLink>
                            <a href="#agency__section"><li>Contact</li></a>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;