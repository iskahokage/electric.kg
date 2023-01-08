import React, { useContext, useEffect } from 'react';
import AddForm from '../../components/addForm/AddForm';
import Card from '../../components/card/Card';
import { authContext } from '../../context/authContext';
import { productsContext } from '../../context/productContext';
import './Products';

const Products = () => {

    const {products, getData} = useContext(productsContext);
    const {isAuth} = useContext(authContext);

    useEffect(()=>{
        getData()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className='container'>
           {isAuth ? <AddForm page={'товар'} type={'product'}/> : null}
            <p className="title">Товары:</p>
            <Card data={products}/>
        </div>
    );
};

export default Products;