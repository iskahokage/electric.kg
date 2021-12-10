import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import {API} from '../consts.js'
export const postContext = createContext();

const INIT_STATE = {
    posts: []
}

const reducer = (state=INIT_STATE, action)=>{
    switch (action.type) {
        case "GET_POST":
            return{
                ...state,
                posts: action.payload.data
            }    
        default:
            break;
    }
}
const PostContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getPost = async()=>{
        let post = await axios(`${API}/posts`)
        dispatch({
            type: "GET_POST",
            payload: post
        })
    }


    return (
        <postContext.Provider
            value={{
                posts: state.posts,
                getPost
            }}
        >
            {children}
        </postContext.Provider>
    );
};

export default PostContextProvider;