import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Admin from '../components/admin/Admin';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import AuthContextProvider from '../context/authContext';
import ProductsContextProvider from '../context/productContext';
import ProjectContextProvider from '../context/projectContext';
import ServiceContextProvider from '../context/serviceContext';
// import Goods from '../pages/goods/Goods';
import Home from '../pages/home/Home';
import Products from '../pages/products/Products';
import Projects from '../pages/projects/Projects';
import Services from '../pages/services/Services';

const Router = () => {

    return (
        <BrowserRouter>
        <AuthContextProvider>
        <ProjectContextProvider>
        <ProductsContextProvider>
        <ServiceContextProvider>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/goods' element={<Products/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/admin' element={<Admin/>}/>
            </Routes>
            <Footer/>
        </ServiceContextProvider>
        </ProductsContextProvider>
        </ProjectContextProvider>
        </AuthContextProvider>
        </BrowserRouter>
    );
};

export default Router;