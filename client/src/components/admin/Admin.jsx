import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../context/authContext";
import "./Admin.scss";



const Admin = () => {

    const {login} = useContext(authContext)
    const [loginData, setLoginData] = useState('')
    const [passwordData, setPasswordData] = useState('')
    const handleClick = () => {
        let authData ={
            email: loginData,
            password: passwordData
        }
        login(authData)
    }
    return (
        <div className="container">
            <div className="admin-container">
                <form onClick={e => e.preventDefault()}>
                    <input
                        type="text"
                        name=""
                        id="form-inputs"
                        required={true}
                        placeholder="Логин"
                        onChange={e=>setLoginData(e.target.value)}
                    />
                    <input
                        type="text"
                        name=""
                        id="form-inputs"
                        required={true}
                        placeholder="Пароль"
                        onChange={e=>setPasswordData(e.target.value)}
                    />
                    <button onClick={()=>handleClick()}>Войти</button>
                </form>
            </div>
        </div>
    );
};

export default Admin;
