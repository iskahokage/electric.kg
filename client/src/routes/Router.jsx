import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/header/Header';
import Message from '../components/message/Message';
import PostContextProvider from '../context/PostContext';
import Products from './../components/products/Products'
const Router = () => {
    return (
        <BrowserRouter>
            <PostContextProvider>
            <Routes>
                {/* <Header/> */}
                <Route path="/" element={<Products/>}/>
                {/* <Message/> */}
            </Routes>
            </PostContextProvider>
        </BrowserRouter>
    );
};

export default Router;