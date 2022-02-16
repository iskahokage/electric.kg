import React, { useContext, useEffect } from 'react';
import Card from '../../components/card/Card';
import { productsContext } from '../../context/productContext';
import './Products';

const Products = () => {

    const {products, getData} = useContext(productsContext);

    useEffect(()=>{
        getData()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className='container'>
            <p className="title">Товары:</p>
            <Card data={products}/>
        </div>
    );
};

export default Products;