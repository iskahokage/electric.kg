import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/header/Header';
import Message from '../components/message/Message';
import Products from './../components/products/Products'
const Router = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Products/>
            <Routes>
            </Routes>
            <Message/>
        </BrowserRouter>
    );
};

export default Router;