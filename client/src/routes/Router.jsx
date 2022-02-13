import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import ProjectContextProvider from '../context/projectContext';
import Goods from '../pages/goods/Goods';
import Home from '../pages/home/Home';
import Projects from '../pages/projects/Projects';
import Services from '../pages/services/Services';

const Router = () => {
    return (
        <BrowserRouter>
        <ProjectContextProvider>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/goods' element={<Goods/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/services' element={<Services/>}/>
            </Routes>
            <Footer/>
        </ProjectContextProvider>
        </BrowserRouter>
    );
};

export default Router;