import React from 'react';
import { NavLink } from 'react-router-dom';

const RegistrationComponent = () => {
    return (
        <div className='login-container'>
            <div className="login-form">
                <p className="login-title">
                    Создать аккаунт
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
                <button className="button is-primary is-light">Зарегистрироваться</button>
                <NavLink to="/login" className="login-link-register">Вход</NavLink>
            </div>
        </div>
    );
};

export default RegistrationComponent;