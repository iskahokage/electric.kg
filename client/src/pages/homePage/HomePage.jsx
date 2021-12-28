import React from 'react';
import Header from '../../components/header/Header';
import Message from '../../components/message/Message';
import Products from '../../components/products/Products';

const HomePage = () => {
    return (
        <div>
            <Header/>
            <Products/>
            <Message/>
        </div>
    );
};

export default HomePage;