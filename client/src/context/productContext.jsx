import axios from 'axios';
import React, { createContext, useReducer } from 'react';
import { API } from '../consts';

export const productsContext = createContext();

const INIT_STATE={
    products: [],
    oneProduct: [],
    productToEdit: {},
}
const reducer = (state = INIT_STATE, action) => {

    console.log(action)
    switch (action.type) {
        case "GET_DATA":
            return{
                ...state,
                products: action.payload.data
            };
        case "GET_ONE_PRODUCT":
            return{
                ...state,
                oneProduct: action.payload
            }
        case "EDIT_PRODUCT":
            return{
                ...state,
                productToEdit: action.payload
            }
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

    const uploadProduct = async (formData) => {
        await axios.post(`${API}/products`, formData).then(
            res => console.log(res)
        )
        getData()
    }

    const getOneProduct = async (id, type) => {
        const {data} = await axios.get(`${API}/products/${id}`)
        if(type === 'detail')
            dispatch({
                type: "GET_ONE_PRODUCT",
                payload: data
            })
        if(type === 'edit')
            dispatch({
                type: "EDIT_PRODUCT",
                payload: data
            })
    }


    const deleteProduct = async (id) => {
        await axios.delete(`${API}/products/${id}`)
        getData()
    }   

    const editProduct = async (id, data) => {
        await axios.patch(`${API}/products/${id}`, data)
    }


    return (
        <productsContext.Provider
            value={{
                products: state.products,
                oneProduct: state.oneProduct,
                productToEdit: state.productToEdit,
                getData,
                getOneProduct,
                editProduct,
                uploadProduct,
                deleteProduct,
            }}
        >
            {children}
        </productsContext.Provider>
    );
};

export default ProductsContextProvider;