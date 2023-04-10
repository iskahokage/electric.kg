import React, { useContext, useEffect } from 'react';
import BasketCard from '../../components/basketCard/BasketCard';
import { cartContext } from '../../context/cartContext';

const Cart = () => {

    const {getCart} = useContext(cartContext);

    useEffect(()=> {
        getCart()
    }, [])

    return (
        <div className='container'>
            <BasketCard/>
        </div>
    );
};

export default Cart;