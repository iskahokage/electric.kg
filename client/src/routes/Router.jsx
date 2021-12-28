import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginComponent from '../components/auth/Login';
import RegistrationComponent from '../components/auth/Registration';
import Header from '../components/header/Header';
import Message from '../components/message/Message';
import MessageContextProvider from '../context/MessageContext';
import PostContextProvider from '../context/PostContext';
import HomePage from '../pages/homePage/HomePage';


const Router = () => {
    return (
        <BrowserRouter>
            <MessageContextProvider>
            <PostContextProvider>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/login" element={<LoginComponent/>}/>
                    <Route path="/registration" element={<RegistrationComponent/>}/>

                    {/* <Message/> */}
                </Routes>
            </PostContextProvider>
            </MessageContextProvider>
        </BrowserRouter>
    );
};

export default Router;