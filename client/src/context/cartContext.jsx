import axios from 'axios';
import React, { createContext, useEffect, useReducer } from 'react';
import { API } from '../consts';

export const cartContext = createContext();

const INIT_STATE ={
    itemsInCart: [],
    isInCart: null,

}

const reducer = (state = INIT_STATE, action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_ITEM_IN_CART':
            return{
                ...state,
                itemsInCart: action.payload
            }
        case 'CHANGE_STATUS':
            return{
                ...state,
                isInCart: true
            }
        default:
            break;
    }
}

const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)


    function addInCart(product){

        let cart = JSON.parse(localStorage.getItem('cart'))

        if(!cart){
            cart = {
                products: [],
                totalPrice: 0
            }
        }

        let productToAddInCart = {
            currentProduct: product,
            count: 1, 
            subPrice: product.price
        }

        let checkProductInCart = cart.products.filter(
            (item) => item.currentProduct.id === product.id
        )

        if(checkProductInCart.length === 0) {
            cart.products.push(productToAddInCart)
            dispatch({
                type: 'CHANGE_STATUS',
                payload: true
            })
        }
        else {
            cart.products = cart.products.filter(
                (item) => item.currentProduct.id !== product.id
            )
            dispatch({
                type: 'CHANGE_STATUS',
                payload: false
            })
        }
        dispatch({
            type: 'ADD_ITEM_IN_CART',
            payload: cart
        })

        localStorage.setItem("cart", JSON.stringify(cart))

    }
    
    function getCart(){
        
    }

    return (
        <cartContext.Provider
            value={{
                itemsInCart: state.itemsInCart,
                isInCart: state.isInCart,
                addInCart

            }}
        >
            {children}
        </cartContext.Provider>
    );
};

export default CartContextProvider;