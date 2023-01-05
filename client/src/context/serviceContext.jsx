import axios from 'axios';
import React,  { createContext, useReducer } from 'react';
import { API } from '../consts';
export const serviceContext = createContext();

const INIT_STATE={
    services: []
}

const reducer = (state=INIT_STATE, action)=>{
    switch (action.type) {
        case "GET_DATA":
            return{
                ...state,
                services: action.payload.data
            }
            
    
        default:
            break;
    }
}

const ServiceContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getData =  async() =>{
        const response = await axios.get(`${API}/services`)
        dispatch({
            type: "GET_DATA",
            payload: response
        })
    }


    return (
        <serviceContext.Provider
        value={{
            services: state.services,
            getData
        }}
        >
            {children}
        </serviceContext.Provider>
    );
};

export default ServiceContextProvider;