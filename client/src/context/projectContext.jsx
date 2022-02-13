import axios from 'axios';
import React, { createContext, useReducer } from 'react';
import { API } from '../consts';

export const projectContext = createContext();

const INIT_STATE = {
    projects: []
}



const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_PROJECTS":
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

    const getProjects =  async() =>{
        const response = await axios.get(`${API}/projects`)
        dispatch({
            type: "GET_PROJECTS",
            payload: response
        })
    }

    return (
        <projectContext.Provider
            value={{
                projects: state.projects,
                getProjects,

            }}
        >
            {children}
        </projectContext.Provider>
    );
};

export default ProjectContextProvider;