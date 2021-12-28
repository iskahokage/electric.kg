import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'> 
            <div className='header-container'>
                <div className="logo-container">
                    <p>Electric.kg</p>
                </div>
                <nav className='navbar'> 
                    <NavLink to="#">Портфолио</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;