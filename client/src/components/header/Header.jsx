import React, { useContext, useEffect } from 'react';
import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom';
import { authContext } from '../../context/authContext';

const Header = () => {

    const {users, isAuth, logout} = useContext(authContext);
    console.log(users)
    return (
        <div className='header'>
            <div className="logo-container">
                <NavLink to='/'>
                    <img src={logo} alt="" />
                </NavLink>
            </div>
            <div className="nav-container">      
                <nav style={isAuth ? {maxWidth: 350+'px'} : {}}>
                    <NavLink to='/goods'>Товары</NavLink>
                    <NavLink to='/services'>Услуги</NavLink>
                    <NavLink to='/projects'>Портфолио</NavLink>  
                    {isAuth ? <p onClick={()=>logout()}>Выйти</p> : <></>}                            
                </nav>                
            </div>
        </div>
    );
};

export default Header;