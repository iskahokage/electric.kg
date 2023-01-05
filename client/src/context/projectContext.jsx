import axios from 'axios';
import React, { createContext, useReducer } from 'react';
import { API } from '../consts';

export const projectContext = createContext();

const INIT_STATE = {
    projects: []
}



const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_DATA":
            return{
                ...state,
                projects: action.payload.data
            };
    
        default:
            break;
    }
}

const ProjectContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getData =  async() =>{
        const response = await axios.get(`${API}/projects`)
        dispatch({
            type: "GET_DATA",
            payload: response
        })
    }

    return (
        <projectContext.Provider
            value={{
                projects: state.projects,
                getData,

            }}
        >
            {children}
        </projectContext.Provider>
    );
};

export default ProjectContextProvider;