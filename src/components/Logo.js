import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {
    return (
        <div>
            <div className="logo">
                <NavLink to="/">
                    <img src="./Logo_Max_Upgrade_BLANC_500px.png" alt="Logo max upgrade" />
                </NavLink>
            </div>
        </div >
    );
};

export default Logo;