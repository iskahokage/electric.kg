import axios from 'axios';
import React, { createContext, useReducer } from 'react';
import { API } from '../consts';

export const productsContext = createContext();

const INIT_STATE={
    products: []
}
const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_DATA":
            return{
                ...state,
                products: action.payload.data
            };
    
        default:
            break;
    }
}


const ProductsContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getData =  async() =>{
        const response = await axios.get(`${API}/products`)
        dispatch({
            type: "GET_DATA",
            payload: response
        })
    }


    return (
        <productsContext.Provider
            value={{
                products: state.products,
                getData
            }}
        >
            {children}
        </productsContext.Provider>
    );
};

export default ProductsContextProvider;