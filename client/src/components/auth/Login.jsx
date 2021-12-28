import React from 'react';
import { NavLink } from 'react-router-dom';
const LoginComponent = () => {
    return (
        <div className='login-container'>
            <div className="login-form">
                <p className="login-title">
                    Войти в аккаунт
                </p>
                <div className="field">
                    <p className="control has-icons-left has-icons-right">
                    <input className="input" type="email" placeholder="Email"/>
                    <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                    </span>
                </p>
                </div>
                <div className="field">
                    <p className="control has-icons-left">
                    <input className="input" type="password" placeholder="Password"/>
                    <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                    </span>
                    </p>
                </div>
                <button className="button is-link is-light">Войти</button>
                <NavLink to="/registration" className="login-link-register">Зарегистрироваться</NavLink>
            </div>
        </div>
    );
};

export default LoginComponent;