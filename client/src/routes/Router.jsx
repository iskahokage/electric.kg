import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from '../components/contactUs/ContactUs';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Home from '../pages/home/Home';

const Router = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<ContactUs/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
};

export default Router;