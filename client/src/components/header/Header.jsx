import React from 'react';
import './Header.scss'
import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <div className="logo-container">
                <NavLink to='/'>
                    <img src={logo} alt="" />
                </NavLink>
            </div>
            <div className="nav-container">      
                <nav>
                    <NavLink to='/goods'>Товары</NavLink>
                    <NavLink to='/services'>Услуги</NavLink>
                    <NavLink to='/projects'>Портфолио</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;